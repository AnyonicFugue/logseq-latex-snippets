export const DEFAULT_SETTINGS = {
  wrapwithDollarBracket: true, caseInsensitive: true, VerticalLineBracket: false,
  DeleteBlankAfterMatchInline: true, DeleteBlankAfterMatchDisplay: false,
  newLineForDisplayMath: true, snippetsJson: '',
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
    if (left.endsWith('$') && next === '$' && !selected && mathContext(left.slice(0, -1)).mode === null) {
      const start = cursor - 2;
      if (!settings.newLineForDisplayMath) return edit(start, cursor + 1, '$$$$', start + 2);
      const lead = start > 0 && value[start - 1] !== '\n' ? '\n' : '';
      return edit(start, cursor + 1, `${lead}$$\n\n$$`, start + lead.length + 3);
    }
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
  if (char === '(' && !escaped && !previousContext.code && next !== ')') return edit(cursor, cursor, ')', cursor);
  return null;
}
