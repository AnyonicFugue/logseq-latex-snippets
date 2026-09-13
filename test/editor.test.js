import test from 'node:test';
import assert from 'node:assert/strict';
import { attachEditor, blockUUID, isNativeMath } from '../src/editor.js';
import { compileRules, DEFAULT_SETTINGS } from '../src/rules.js';
const uuid='550e8400-e29b-41d4-a716-446655440000';
const tick=()=>new Promise(resolve=>setImmediate(resolve));
function fixture({deferred=false, native=false, active=uuid, supports=true, code=false}={}) {
  const listeners=new Map(), errors=[], edits=[];
  let resolveBlock;
  const block={uuid, ...(native?{':logseq.property.node/display-type':':math'}:{})};
  if(code) block[':logseq.property.node/display-type']=':code';
  const pending=deferred?new Promise(resolve=>{resolveBlock=()=>resolve(block);}):Promise.resolve(block);
  const element={id:`edit-block-${uuid}`,nodeName:'TEXTAREA',value:native?'fr':'$fr$',selectionStart:native?2:3,selectionEnd:native?2:3,isConnected:true,
    closest:()=>true,setSelectionRange(start,end){this.selectionStart=start;this.selectionEnd=end;}};
  const document={activeElement:element,addEventListener:(name,fn)=>listeners.set(name,fn),removeEventListener:name=>listeners.delete(name),
    execCommand(command,ui,text){
      if(!supports) return false;
      edits.push(text);
      element.value=element.value.slice(0,element.selectionStart)+text+element.value.slice(element.selectionEnd);
      element.selectionStart+=text.length;element.selectionEnd=element.selectionStart;
      listeners.get('input')?.({target:element,inputType:'insertText',data:text});
      return true;
    }};
  const stop=attachEditor(document,{Editor:{checkEditing:async()=>active,getBlock:()=>pending}},()=>({settings:DEFAULT_SETTINGS,rules:compileRules({x:[{match:'fr',replacement:'\\frac{@}{}'}]})}),error=>errors.push(error));
  const type=(data=' ',extra={})=>{
    const event={target:element,data,inputType:'insertText',...extra};
    listeners.get('beforeinput')?.(event);
    const start=element.selectionStart;
    element.value=element.value.slice(0,start)+data+element.value.slice(element.selectionEnd);
    element.setSelectionRange(start+data.length,start+data.length);
    return listeners.get('input')?.(event);
  };
  return {element,document,listeners,errors,edits,type,stop,resolveBlock};
}
test('both editor id formats, without accepting malformed ids',()=>{
  assert.equal(blockUUID({id:`edit-block-${uuid}`}),uuid);
  assert.equal(blockUUID({id:`edit-block-42-${uuid}`}),uuid);
  assert.equal(blockUUID({id:'edit-block-invalid'}),null);
  assert.equal(isNativeMath({':logseq.property.node/display-type':':math'}),true);
  assert.equal(isNativeMath({}),false);
});
test('native math and inline expansion use local edits; nested input is ignored',async()=>{
  for(const native of [false,true]) {
    const f=fixture({native});await f.type();
    assert.equal(f.element.value,native?'\\frac{}{}':'$\\frac{}{}$');
    assert.equal(f.element.selectionStart,native?6:7);
    assert.equal(f.edits.length,1);assert.deepEqual(f.errors,[]);f.stop();
  }
});
test('typing during a pending DB lookup does not overwrite newer text',async()=>{
  const f=fixture({deferred:true});const first=f.type();await tick();
  const second=f.type('x');f.resolveBlock();await Promise.all([first,second]);
  assert.equal(f.element.value,'$fr x$');assert.equal(f.edits.length,0);
});
test('focus change, selection movement, composition and unload invalidate pending work',async()=>{
  for(const action of [f=>{f.document.activeElement=null;},f=>f.element.setSelectionRange(0,0),f=>f.listeners.get('compositionstart')(),f=>f.stop()]) {
    const f=fixture({deferred:true});const work=f.type();await tick();action(f);f.resolveBlock();await work;
    assert.equal(f.element.value,'$fr $');assert.equal(f.edits.length,0);
  }
});
test('paste and IME are not expansion triggers; editing identity must match',async()=>{
  for(const options of [{inputType:'insertFromPaste'},{isComposing:true}]) {
    const f=fixture();await f.type(' ',options);assert.equal(f.edits.length,0);
  }
  const f=fixture({active:false});await f.type();assert.equal(f.edits.length,0);
});
test('failed native command restores cursor and reports failure without database writes',async()=>{
  const f=fixture({supports:false});await f.type();assert.equal(f.element.value,'$fr $');
  assert.equal(f.element.selectionStart,4);assert.equal(f.errors.length,1);
});
test('unload removes all event listeners',()=>{const f=fixture();f.stop();assert.equal(f.listeners.size,0);});
test('DB code blocks in raw editing mode are left untouched',async()=>{const f=fixture({code:true});await f.type();assert.equal(f.element.value,'$fr $');assert.equal(f.edits.length,0);});
