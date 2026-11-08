import { mathContext, planEdit, planMathCleanup } from './rules.js';

export function blockUUID(element) {
  const uuid = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}';
  return element.id?.match(new RegExp(`^edit-block-(?:[0-9]+-)?(${uuid})$`, 'i'))?.[1] ?? null;
}

export function isNativeMath(block) {
  // DB SDK preserves logseq.property keys, including the leading colon.
  const type = block?.[':logseq.property.node/display-type'];
  return type === 'math' || type === ':math';
}

function isEditor(element) {
  return element?.nodeName === 'TEXTAREA' && element.closest('.block-editor') && blockUUID(element);
}

export function attachEditor(document, logseq, getConfig, report) {
  const snapshots = new WeakMap();
  let applying = false, disposed = false, generation = 0;
  const timers = document.defaultView ?? globalThis;
  let pendingMath = null;
  const cancelMathCleanup = () => {
    if (pendingMath) {
      timers.clearTimeout(pendingMath.timer);
      pendingMath.observer?.disconnect();
    }
    pendingMath = null;
  };
  const apply = (element, change, cursor) => {
    applying = true;
    try {
      element.setSelectionRange(change.start, change.end);
      // Keep native input events and undo history; avoid whole-block database writes.
      if (typeof document.execCommand !== 'function' || !document.execCommand('insertText', false, change.text)) {
        throw new Error('This editor does not support native text replacement.');
      }
      element.setSelectionRange(change.cursor, change.cursor);
    } catch (error) {
      element.setSelectionRange(cursor, cursor);
      throw error;
    } finally { applying = false; }
  };
  const cleanMath = () => {
    const element = document.activeElement;
    if (!pendingMath || disposed || !isEditor(element) || !element.isConnected ||
        blockUUID(element) !== pendingMath.uuid || element.selectionStart !== element.selectionEnd ||
        element.closest('.block-content-or-editor-wrap')?.getAttribute('data-node-type') !== 'math') return;
    const change = planMathCleanup({ value: element.value, cursor: element.selectionStart, before: pendingMath.before });
    if (!change) return;
    cancelMathCleanup();
    generation++;
    snapshots.delete(element);
    try { apply(element, change, element.selectionStart); }
    catch (error) { report(error); }
  };
  const watchMathConversion = (element, before) => {
    cancelMathCleanup();
    const pending = { uuid: blockUUID(element), before, timer: null, observer: null };
    pendingMath = pending;
    // The host can convert on keydown without beforeinput/input, and may replace
    // the textarea. React as soon as its Math marker is rendered, rather than
    // adding an increasingly long polling delay after the conversion is ready.
    const root = document.documentElement;
    if (root && typeof timers.MutationObserver === 'function') {
      pending.observer = new timers.MutationObserver(() => {
        if (pendingMath === pending) cleanMath();
      });
      pending.observer.observe(root, {
        subtree: true, childList: true, attributes: true, attributeFilter: ['data-node-type'],
      });
    }
    // Textarea value/focus changes need not mutate DOM attributes. Keep a short,
    // bounded fallback for those cases and hosts without MutationObserver.
    let remaining = 50;
    const check = () => {
      if (pendingMath !== pending) return;
      cleanMath();
      if (pendingMath !== pending) return;
      if (!remaining--) cancelMathCleanup();
      else pending.timer = timers.setTimeout(check, 16);
    };
    pending.timer = timers.setTimeout(check, 0);
  };
  const keydown = (event) => {
    if (applying || disposed) return;
    // Finish a confirmed conversion before the next keystroke, then discard
    // stale work (especially before undo, navigation or composition).
    if (!['Shift', 'Control', 'Meta', 'Alt'].includes(event.key)) {
      if (document.activeElement === event.target && !event.defaultPrevented &&
          !event.isComposing && event.keyCode !== 229 && !event.ctrlKey && !event.metaKey) cleanMath();
      cancelMathCleanup();
    }
    if (applying || disposed || event.defaultPrevented || !['$', '('].includes(event.key) || event.isComposing ||
        event.keyCode === 229 || event.ctrlKey || event.metaKey || !isEditor(event.target)) return;
    const element = event.target;
    if (document.activeElement !== element) return;
    // Handle pairing synchronously before Logseq's bubbling keydown handler.
    // The wrapper exposes block type without an asynchronous API round trip.
    const wrapper = element.closest('.block-content-or-editor-wrap');
    if (!wrapper) return;
    const type = wrapper.getAttribute('data-node-type');
    if (type === 'code') return;
    const before = { value: element.value, start: element.selectionStart, end: element.selectionEnd };
    if (event.key === '(') {
      const left = before.value.slice(0, before.start);
      // Logseq already pairs at the start, after newline/space/]/(, or around
      // selections. Only fill the remaining cases; never reuse an outer closer.
      if (event.altKey || before.start !== before.end || !left || /[\n \](]$/.test(left) ||
          /(?:^|[^\\])(?:\\\\)*\\$/.test(left) || mathContext(left, type === 'math').code) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      generation++;
      snapshots.delete(element);
      try {
        apply(element, { start: before.start, end: before.end, text: '()', cursor: before.start + 1 }, before.start);
      } catch (error) { report(error); }
      return;
    }
    if (type === 'math') return;
    const left = before.value.slice(0, before.start);
    if (before.start === before.end && left.endsWith('$') &&
        mathContext(left).mode === 'inline' && mathContext(left.slice(0, -1)).mode === null) {
      watchMathConversion(element, before);
      return;
    }
    const value = before.value.slice(0, before.start) + '$' + before.value.slice(before.end);
    const change = planEdit({ value, cursor: before.start + 1, char: '$', before, ...getConfig() });
    if (!change) return;
    // planEdit works after insertion. Combine the key and its expansion into one
    // native edit of the original textarea, preserving all unaffected suffix text.
    const result = value.slice(0, change.start) + change.text + value.slice(change.end);
    let start = 0, end = before.value.length, resultEnd = result.length;
    while (start < end && start < resultEnd && before.value[start] === result[start]) start++;
    while (end > start && resultEnd > start && before.value[end - 1] === result[resultEnd - 1]) { end--; resultEnd--; }
    event.preventDefault();
    event.stopImmediatePropagation();
    generation++;
    snapshots.delete(element);
    try {
      if (result === before.value) element.setSelectionRange(change.cursor, change.cursor);
      else apply(element, { start, end, text: result.slice(start, resultEnd), cursor: change.cursor }, before.start);
    } catch (error) { report(error); }
  };
  const beforeInput = (event) => {
    if (applying || !isEditor(event.target)) return;
    if (!event.isComposing && event.inputType === 'insertText') cleanMath();
    if (event.isComposing || event.inputType !== 'insertText' || !/^\$+$/.test(event.data ?? '')) cancelMathCleanup();
    generation++;
    snapshots.delete(event.target);
    if (event.isComposing || event.inputType !== 'insertText' || event.data?.length !== 1) return;
    snapshots.set(event.target, {
      value: event.target.value, start: event.target.selectionStart,
      end: event.target.selectionEnd, char: event.data,
    });
  };
  const input = async (event) => {
    if (applying || !isEditor(event.target)) return;
    const ticket = ++generation;
    const element = event.target;
    const before = snapshots.get(element);
    snapshots.delete(element);
    if (!before || event.isComposing || event.inputType !== 'insertText' || event.data !== before.char) return;
    // Parentheses are handled synchronously on keydown, never after input.
    if (![' ', '$', '|'].includes(event.data)) return;
    const value = element.value, cursor = element.selectionStart, uuid = blockUUID(element);
    const unchanged = () => !disposed && ticket === generation && element.isConnected &&
      document.activeElement === element && element.value === value &&
      element.selectionStart === cursor && element.selectionEnd === cursor;
    try {
      const active = await logseq.Editor.checkEditing();
      if (active !== uuid || !unchanged()) return;
      const block = await logseq.Editor.getBlock(uuid);
      if (!block || !unchanged()) return;
      if (['code', ':code'].includes(block[':logseq.property.node/display-type'])) return;
      const change = planEdit({ value, cursor, char: event.data, before, nativeMath: isNativeMath(block), ...getConfig() });
      if (!change || !unchanged()) return;
      apply(element, change, cursor);
    } catch (error) { if (!disposed) report(error); }
  };
  const invalidate = () => { generation++; cancelMathCleanup(); };
  // A host remount may briefly blur the old textarea; the cleanup checks the
  // active block UUID on every attempt instead of retaining the old DOM node.
  const blur = () => { generation++; };
  document.addEventListener('keydown', keydown, true);
  document.addEventListener('beforeinput', beforeInput, true);
  document.addEventListener('input', input, true);
  document.addEventListener('focusout', blur, true);
  document.addEventListener('compositionstart', invalidate, true);
  return () => {
    disposed = true; generation++;
    cancelMathCleanup();
    document.removeEventListener('keydown', keydown, true);
    document.removeEventListener('beforeinput', beforeInput, true);
    document.removeEventListener('input', input, true);
    document.removeEventListener('focusout', blur, true);
    document.removeEventListener('compositionstart', invalidate, true);
  };
}
