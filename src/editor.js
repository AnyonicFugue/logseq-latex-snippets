import { planEdit } from './rules.js';

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
  const beforeInput = (event) => {
    if (applying || !isEditor(event.target)) return;
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
    if (![' ', '$', '|', '('].includes(event.data)) return;
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
      applying = true;
      try {
        element.setSelectionRange(change.start, change.end);
        // Native Chromium editing updates the host input listener and its undo history.
        // Never fall back to a delayed whole-block DB write over newer user input.
        if (typeof document.execCommand !== 'function' || !document.execCommand('insertText', false, change.text)) {
          element.setSelectionRange(cursor, cursor);
          throw new Error('This editor does not support native text replacement.');
        }
        element.setSelectionRange(change.cursor, change.cursor);
      } finally { applying = false; }
    } catch (error) { if (!disposed) report(error); }
  };
  const invalidate = () => { generation++; };
  document.addEventListener('beforeinput', beforeInput, true);
  document.addEventListener('input', input, true);
  document.addEventListener('focusout', invalidate, true);
  document.addEventListener('compositionstart', invalidate, true);
  return () => {
    disposed = true; generation++;
    document.removeEventListener('beforeinput', beforeInput, true);
    document.removeEventListener('input', input, true);
    document.removeEventListener('focusout', invalidate, true);
    document.removeEventListener('compositionstart', invalidate, true);
  };
}
