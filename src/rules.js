export const DEFAULT_SETTINGS = {
  wrapwithDollarBracket: true, caseInsensitive: true, VerticalLineBracket: false,
  DeleteBlankAfterMatchInline: true, DeleteBlankAfterMatchDisplay: false,
  snippetsJson: '',
};

export function compileRules(config, insensitive = true) {
  if (!config || Array.isArray(config) || typeof config !== 'object') {
    throw new Error('Snippets must be a JSON object containing named groups.');
  }
  return Object.entries(config).flatMap(([group, entries]) => {
    if (!Array.isArray(entries)) throw new Error(`Group "${group}" must be an array.`);
    return entries.map((rule, index) => {
      const label = `${group}[${index + 1}]`;
      if (!rule || typeof rule.match !== 'string' || typeof rule.replacement !== 'string') {
        throw new Error(`${label}: match and replacement must be strings.`);
      }
      try {
        return { trigger: new RegExp(`(?:${rule.match})$`, insensitive ? 'i' : ''), replacement: rule.replacement };
      } catch (error) { throw new Error(`${label}: ${error.message}`); }
    });
  });
}

export function mathContext(prefix, nativeMath = false) {
  if (nativeMath) return { mode: 'display', start: 0 };
  let mode = null, start = 0, codeTicks = 0;
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] === '\\') { i++; continue; }
    if (prefix[i] === '`' && !mode) {
      let count = 1;
      while (prefix[i + count] === '`') count++;
      if (!codeTicks) codeTicks = count;
      else if (codeTicks === count) codeTicks = 0;
      i += count - 1;
      continue;
    }
    if (codeTicks || prefix[i] !== '$') continue;
    const double = prefix[i + 1] === '$';
    if (mode === 'display') {
      if (double) { mode = null; i++; }
    } else if (mode === 'inline') mode = null;
    else if (double) { mode = 'display'; start = i + 2; i++; }
    else if (!/\s/.test(prefix[i + 1] ?? '')) { mode = 'inline'; start = i + 1; }
  }
  return { mode, start, code: !!codeTicks };
}

function edit(start, end, text, cursor = start + text.length) {
  return { start, end, text, cursor };
}

// Only the four dollars left at a just-converted opener may be removed. The
// caller must first confirm that the active block now has native Math type.
export function planMathCleanup({ value, cursor, before }) {
  const start = before.start - 1;
  const left = before.value.slice(0, before.start);
  if (before.start !== before.end || !left.endsWith('$') ||
      mathContext(left).mode !== 'inline' || mathContext(left.slice(0, -1)).mode !== null) return null;
  let end = before.end;
  while (before.value[end] === '$') end++;
  if (end - before.end > 2) return null;
  const prefix = before.value.slice(0, start), suffix = before.value.slice(end);
  if (value !== prefix + '$$$$' + suffix || cursor < start || cursor > start + 4) return null;
  return edit(start, start + 4, '', start);
}

// Plan a local edit after native insertion, using the matching beforeinput snapshot.
export function planEdit({ value, cursor, char, before, nativeMath = false, rules = [], settings = DEFAULT_SETTINGS }) {
  if (!before || char.length !== 1) return null;
  const context = mathContext(value.slice(0, cursor), nativeMath);
  if (char === ' ' && context.mode) {
    const text = value.slice(context.start, cursor - 1);
    for (const { trigger, replacement } of rules) {
      const match = text.match(trigger);
      if (!match || !match[0].length) continue;
      const expanded = match[0].replace(trigger, replacement);
      const marker = expanded.indexOf('@');
      let result = marker < 0 ? expanded : expanded.slice(0, marker) + expanded.slice(marker + 1);
      let offset = marker < 0 ? result.length : marker;
      const removeSpace = context.mode === 'inline' ? settings.DeleteBlankAfterMatchInline : settings.DeleteBlankAfterMatchDisplay;
      if (!removeSpace && offset === result.length && !result.endsWith(' ')) { result += ' '; offset++; }
      const start = context.start + match.index;
      return edit(start, cursor, result, start + offset);
    }
  }
  const left = before.value.slice(0, before.start);
  const selected = before.value.slice(before.start, before.end);
  const next = value[cursor];
  const previousContext = mathContext(left, nativeMath);
  const escaped = /(?:^|[^\\])(?:\\\\)*\\$/.test(left);
  if (char === '$' && !nativeMath && !escaped && !previousContext.code) {
    // Let Logseq handle the second opening dollar and native Math conversion.
    if (left.endsWith('$') && !selected && previousContext.mode === 'inline' && mathContext(left.slice(0, -1)).mode === null) return null;
    if (next === '$' && previousContext.mode) return edit(cursor - 1, cursor, '', cursor);
    if (previousContext.mode) return null;
    if (selected && settings.wrapwithDollarBracket) {
      const leading = /^\s/.test(selected) ? ' ' : '';
      const trailing = /\s$/.test(selected) ? ' ' : '';
      return edit(cursor - 1, cursor, `${leading}$${selected.trim()}$${trailing}`);
    }
    if (next === '$') return null;
    return edit(cursor, cursor, '$', cursor);
  }
  if (char === '|' && settings.VerticalLineBracket && previousContext.mode && !escaped) {
    if (next === '|') return edit(cursor - 1, cursor, '', cursor);
    if (selected) return edit(cursor - 1, cursor, `|${selected.trim()}|`);
  }
  return null;
}
