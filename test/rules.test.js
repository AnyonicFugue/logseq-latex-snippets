import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { compileRules, mathContext, planEdit, DEFAULT_SETTINGS } from '../src/rules.js';
const rules = compileRules(JSON.parse(readFileSync(new URL('../src/snippets.json', import.meta.url))));
function type(value, start, char, options = {}, end = start) {
  const before = { value, start, end };
  value = value.slice(0, start) + char + value.slice(end);
  const cursor = start + char.length;
  const result = planEdit({value, cursor, char, before, rules, ...options});
  return result ? { value: value.slice(0, result.start) + result.text + value.slice(result.end), cursor: result.cursor } : {value, cursor};
}
test('all 60 bundled rules compile; empty groups clear rules; invalid config is rejected', () => {
  assert.equal(rules.length, 60);
  assert.deepEqual(compileRules({}), []);
  assert.deepEqual(compileRules({empty:[]}), []);
  for (const config of [null, [], {bad:{}}, {bad:[{}]}, {bad:[{match:'[', replacement:''}]}]) assert.throws(() => compileRules(config));
});
test('inline fraction replaces only the trigger, with cursor in numerator and suffix intact', () => {
  assert.deepEqual(type('text $fr$ tail',8,' '), {value:'text $\\frac{}{}$ tail',cursor:12});
});
test('native DB math expands without dollars and keeps suffix', () => {
  assert.deepEqual(type('fr+x',2,' ',{nativeMath:true}),{value:'\\frac{}{}+x',cursor:6});
});
test('display math preserves space at end, inline removes it', () => {
  const options = {rules:compileRules({operators:[{match:'sin',replacement:'\\sin@'}]})};
  assert.deepEqual(type('$$sin$$',5,' ',options),{value:'$$\\sin $$',cursor:7});
  assert.deepEqual(type('$sin$',4,' ',options),{value:'$\\sin$',cursor:5});
  // A literal space in the user's replacement must remain intact.
  assert.equal(type('$sin$',4,' ').value,'$\\sin $');
});
test('capture groups and case-sensitive configuration', () => {
  assert.equal(type('$bbR$',4,' ').value,'$\\mathbb{R}$');
  assert.equal(type('$FR$',3,' ',{rules:compileRules({test:[{match:'fr',replacement:'X@'}]},false)}).value,'$FR $');
});
test('marker at beginning, absent marker, and anchored alternations', () => {
  for (const [replacement,expected] of [['@abc',{value:'$abc$',cursor:1}],['abc',{value:'$abc$',cursor:4}]]) {
    assert.deepEqual(type('$fr$',3,' ',{rules:compileRules({x:[{match:'fr',replacement}]})}),expected);
  }
  assert.equal(type('$abc$',4,' ',{rules:compileRules({x:[{match:'a|z',replacement:'X'}]})}).value,'$abc $');
});
test('plain text, escaped dollars and code do not trigger snippets', () => {
  for (const value of ['fr','\\$fr','`$fr','```\n$fr']) assert.equal(type(value,value.length,' ').value,value+' ');
  assert.equal(mathContext('$x$ text').mode,null);
});
test('dollar pairing, closing skip and selected text wrapping', () => {
  assert.deepEqual(type('',0,'$'),{value:'$$',cursor:1});
  assert.deepEqual(type('$x$',2,'$'),{value:'$x$',cursor:3});
  assert.deepEqual(type('hello world',0,'$',{},5),{value:'$hello$ world',cursor:7});
  assert.deepEqual(type(' x ',0,'$',{},3),{value:' $x$ ',cursor:5});
});
test('second dollar creates multiline display; native math never auto-pairs dollars', () => {
  assert.deepEqual(type('$$',1,'$'),{value:'$$\n\n$$',cursor:3});
  assert.deepEqual(type('a $$',3,'$'),{value:'a \n$$\n\n$$',cursor:6});
  assert.deepEqual(type('$$',1,'$',{settings:{...DEFAULT_SETTINGS,newLineForDisplayMath:false}}),{value:'$$$$',cursor:2});
  assert.deepEqual(type('x',1,'$',{nativeMath:true}),{value:'x$',cursor:2});
});
test('parentheses do not duplicate host pairing; escaped parentheses stay literal', () => {
  assert.equal(type('',0,'(').value,'()');
  assert.equal(type(')',0,'(').value,'()');
  assert.equal(type('\\',1,'(').value,'\\(');
});
test('vertical bar selection and skip in math', () => {
  const settings={...DEFAULT_SETTINGS,VerticalLineBracket:true};
  assert.equal(type('$abc$',1,'|',{settings},4).value,'$|abc|$');
  assert.deepEqual(type('$|x|$',3,'|',{settings}),{value:'$|x|$',cursor:4});
});
