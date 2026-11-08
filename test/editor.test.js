import test from 'node:test';
import assert from 'node:assert/strict';
import { attachEditor, blockUUID, isNativeMath } from '../src/editor.js';
import { compileRules, DEFAULT_SETTINGS } from '../src/rules.js';
const uuid='550e8400-e29b-41d4-a716-446655440000';
const tick=()=>new Promise(resolve=>setImmediate(resolve));
function fixture({deferred=false, native=false, active=uuid, supports=true, code=false, observe=true}={}) {
  const listeners=new Map(), errors=[], edits=[], timers=new Map(), observers=new Set();
  let nextTimer=0, now=0;
  let resolveBlock;
  const block={uuid, ...(native?{':logseq.property.node/display-type':':math'}:{})};
  if(code) block[':logseq.property.node/display-type']=':code';
  const pending=deferred?new Promise(resolve=>{resolveBlock=()=>resolve(block);}):Promise.resolve(block);
  const element={id:`edit-block-${uuid}`,nodeName:'TEXTAREA',value:native?'fr':'$fr$',selectionStart:native?2:3,selectionEnd:native?2:3,isConnected:true,
    closest:()=>true,setSelectionRange(start,end){this.selectionStart=start;this.selectionEnd=end;}};
  class MutationObserver {
    constructor(callback){this.callback=callback;}
    observe(target,options){this.target=target;this.options=options;observers.add(this);}
    disconnect(){observers.delete(this);}
  }
  const document={activeElement:element,documentElement:{},addEventListener:(name,fn)=>listeners.set(name,fn),removeEventListener:name=>listeners.delete(name),
    defaultView:{setTimeout(fn,delay){const id=++nextTimer;timers.set(id,{fn,due:now+delay});return id;},clearTimeout(id){timers.delete(id);},
      ...(observe?{MutationObserver}:{})},
    execCommand(command,ui,text){
      if(!supports) return false;
      const element=document.activeElement;
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
  const next=()=>[...timers.entries()].sort((a,b)=>a[1].due-b[1].due)[0];
  const runTimer=()=>{const [id,task]=next()??[];if(task){timers.delete(id);now=task.due;task.fn();}};
  const advance=ms=>{const end=now+ms;while(timers.size&&next()[1].due<=end) runTimer();now=end;};
  const flushTimers=()=>{for(let i=0;timers.size&&i<100;i++) runTimer();assert.equal(timers.size,0);};
  const mutate=()=>{for(const observer of [...observers]) observer.callback([],observer);};
  return {element,document,listeners,errors,edits,type,stop,resolveBlock,timers,observers,runTimer,flushTimers,advance,mutate};
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
test('parenthesis input events never trigger asynchronous pairing',async()=>{
  for (const native of [false,true]) {
    for (const [value,cursor] of [['',0],['()',1],['(x)',2]]) {
      const f=fixture({native,deferred:true});
      f.element.value=value;f.element.setSelectionRange(cursor,cursor);
      await f.type('(');
      assert.equal(f.element.value,value.slice(0,cursor)+'('+value.slice(cursor));
      assert.equal(f.element.selectionStart,cursor+1);
      assert.deepEqual(f.edits,[]);assert.deepEqual(f.errors,[]);f.stop();
    }
  }
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
test('two rapidly typed dollars are left to Logseq when the first pairing is still pending',async()=>{
  const f=fixture({deferred:true});f.element.value='';f.element.setSelectionRange(0,0);
  const first=f.type('$');await tick();const second=f.type('$');await tick();
  f.resolveBlock();await Promise.all([first,second]);
  assert.equal(f.element.value,'$$');assert.equal(f.element.selectionStart,2);
  assert.equal(f.edits.length,0);
});
function pressDollar(f, extra={}) {
  const event={target:f.element,key:'$',preventDefault(){this.defaultPrevented=true;},stopImmediatePropagation(){this.stopped=true;},...extra};
  f.listeners.get('keydown')(event);
  return event;
}
function keyFixture(options={}) {
  const f=fixture(options);
  let nodeType=options.native?'math':options.code?'code':null;
  f.setNodeType=type=>{nodeType=type;};
  f.element.closest=selector=>selector==='.block-editor'?{}:{getAttribute:()=>nodeType};
  f.element.value='';f.element.setSelectionRange(0,0);
  return f;
}
test('first dollar pairs synchronously and second opening dollar reaches the host',()=>{
  const f=keyFixture({deferred:true});
  const first=pressDollar(f);
  assert.equal(first.defaultPrevented,true);assert.equal(first.stopped,true);
  assert.equal(f.element.value,'$$');assert.equal(f.element.selectionStart,1);
  const second=pressDollar(f);
  assert.equal(second.defaultPrevented,undefined);assert.equal(second.stopped,undefined);
  assert.equal(f.element.value,'$$');assert.equal(f.element.selectionStart,1);
  assert.equal(f.edits.length,1);assert.deepEqual(f.errors,[]);
  f.stop();
});

function beginMathConversion(f) {
  pressDollar(f);
  const second=pressDollar(f);
  assert.equal(second.defaultPrevented,undefined);
  assert.equal(second.stopped,undefined);
}
test('DOM conversion is cleaned immediately between polling ticks, even with a pending SDK lookup',()=>{
  const f=keyFixture({deferred:true});beginMathConversion(f);
  f.element.value='$$$$';f.element.setSelectionRange(2,2);
  f.advance(180);assert.equal(f.element.value,'$$$$');
  const [observer]=f.observers;
  assert.equal(observer.target,f.document.documentElement);
  assert.deepEqual(observer.options.attributeFilter,['data-node-type']);
  f.setNodeType('math');f.mutate(); // no timer or SDK response is needed
  assert.equal(f.element.value,'');assert.equal(f.element.selectionStart,0);
  assert.equal(f.timers.size,0);assert.equal(f.observers.size,0);
  assert.deepEqual(f.errors,[]);f.stop();
});
test('DOM observer follows a remount and waits for the matching Math editor',()=>{
  const f=keyFixture();beginMathConversion(f);
  f.element.value='$$$$';f.element.setSelectionRange(2,2);
  f.mutate();assert.equal(f.element.value,'$$$$'); // unrelated DOM change
  f.element.isConnected=false;f.document.activeElement=null;f.setNodeType('math');f.mutate();
  const replacement={...f.element,isConnected:true};f.document.activeElement=replacement;
  f.mutate();assert.equal(replacement.value,'');assert.equal(f.element.value,'$$$$');
  assert.equal(f.observers.size,0);assert.equal(f.timers.size,0);f.stop();
});
test('value-only updates and hosts without observers use a fallback within 16ms',()=>{
  for(const observe of [true,false]) {
    const f=keyFixture({observe});beginMathConversion(f);f.advance(180);
    f.element.value='$$$$';f.element.setSelectionRange(2,2);f.setNodeType('math');
    f.advance(16);assert.equal(f.element.value,'');assert.equal(f.observers.size,0);
    assert.equal(f.timers.size,0);assert.deepEqual(f.errors,[]);f.stop();
  }
});
test('expired or canceled observers disconnect and cannot resume stale cleanup',()=>{
  for(const cancel of [f=>f.advance(800),f=>f.listeners.get('compositionstart')(),f=>f.stop()]) {
    const f=keyFixture();beginMathConversion(f);const [observer]=f.observers;
    cancel(f);assert.equal(f.observers.size,0);assert.equal(f.timers.size,0);
    f.element.value='$$$$';f.element.setSelectionRange(2,2);f.setNodeType('math');
    observer.callback([]);assert.equal(f.element.value,'$$$$');f.stop();
  }
});
test('host conversion without input events removes only the four leftover dollars',()=>{
  const f=keyFixture({deferred:true});
  beginMathConversion(f);
  f.element.value='$$$$';f.element.setSelectionRange(2,2);
  f.runTimer();assert.equal(f.element.value,'$$$$'); // not native Math yet
  f.setNodeType('math');f.flushTimers();
  assert.equal(f.element.value,'');assert.equal(f.element.selectionStart,0);
  assert.deepEqual(f.edits,['$$','']);assert.deepEqual(f.errors,[]);f.stop();
});
test('host multi-character input events do not compete with conversion cleanup',async()=>{
  const f=keyFixture();beginMathConversion(f);
  await f.type('$$'); // host pairing may emit one event with both added dollars
  assert.equal(f.element.value,'$$$$');
  f.setNodeType('math');f.flushTimers();
  assert.equal(f.element.value,'');assert.equal(f.element.selectionStart,0);
  assert.deepEqual(f.edits,['$$','']);assert.deepEqual(f.errors,[]);f.stop();
});
test('math cleanup follows a replacement textarea with the same block UUID',()=>{
  const f=keyFixture();beginMathConversion(f);
  f.element.isConnected=false;
  const replacement={...f.element,isConnected:true,value:'$$$$',selectionStart:2,selectionEnd:2};
  f.listeners.get('focusout')();
  f.document.activeElement=replacement;f.setNodeType('math');f.flushTimers();
  assert.equal(replacement.value,'');assert.equal(replacement.selectionStart,0);
  assert.equal(f.element.value,'$$');assert.deepEqual(f.errors,[]);f.stop();
});
test('math conversion cleanup preserves surrounding text and restores the insertion point',()=>{
  const f=keyFixture();f.element.value='prefix  suffix';f.element.setSelectionRange(7,7);
  beginMathConversion(f);
  f.element.value='prefix $$$$ suffix';f.element.setSelectionRange(9,9);
  f.setNodeType('math');f.flushTimers();
  assert.equal(f.element.value,'prefix  suffix');assert.equal(f.element.selectionStart,7);f.stop();
});
test('typing immediately after conversion cleans before taking the next input snapshot',async()=>{
  const f=keyFixture();beginMathConversion(f);
  f.element.value='$$$$';f.element.setSelectionRange(2,2);f.setNodeType('math');
  await f.type('x');f.flushTimers();
  assert.equal(f.element.value,'x');assert.equal(f.element.selectionStart,1);f.stop();
});
test('math cleanup expires and leaves ordinary dollars, existing math, changed content and other editors alone',()=>{
  for(const scenario of ['text','code','already-clean','changed','other-block','disconnected','selected','blurred','expired']) {
    const f=keyFixture();beginMathConversion(f);
    f.element.value='$$$$';f.element.setSelectionRange(2,2);f.setNodeType('math');
    if(scenario==='text'||scenario==='expired') f.setNodeType(null);
    if(scenario==='code') f.setNodeType('code');
    if(scenario==='already-clean') {f.element.value='';f.element.setSelectionRange(0,0);}
    if(scenario==='changed') {f.element.value='$$x$$';f.element.setSelectionRange(3,3);}
    if(scenario==='other-block') f.element.id='edit-block-650e8400-e29b-41d4-a716-446655440000';
    if(scenario==='disconnected') f.element.isConnected=false;
    if(scenario==='selected') f.element.setSelectionRange(1,3);
    if(scenario==='blurred') f.document.activeElement=null;
    const value=f.element.value;f.flushTimers();
    if(scenario==='expired') {f.setNodeType('math');f.flushTimers();}
    assert.equal(f.element.value,value,scenario);assert.deepEqual(f.edits,['$$'],scenario);f.stop();
  }
  const native=keyFixture({native:true});native.element.value='$$$$';native.element.setSelectionRange(2,2);
  pressDollar(native);native.flushTimers();assert.deepEqual(native.edits,[]);native.stop();
});
test('undo, composition, paste and unload cancel pending cleanup',()=>{
  for(const cancel of [
    f=>pressDollar(f,{key:'z',ctrlKey:true}),
    f=>f.listeners.get('compositionstart')(),
    f=>f.listeners.get('beforeinput')({target:f.element,inputType:'insertFromPaste',data:'x'}),
    f=>f.stop(),
  ]) {
    const f=keyFixture();beginMathConversion(f);
    f.element.value='$$$$';f.element.setSelectionRange(2,2);f.setNodeType('math');
    cancel(f);f.flushTimers();assert.equal(f.element.value,'$$$$');assert.deepEqual(f.edits,['$$']);f.stop();
  }
});
test('unsupported cleanup reports once and never retries the edit',()=>{
  const f=keyFixture({supports:false});
  f.element.value='$$';f.element.setSelectionRange(1,1);pressDollar(f);
  f.element.value='$$$$';f.element.setSelectionRange(2,2);f.setNodeType('math');f.flushTimers();
  assert.equal(f.element.value,'$$$$');assert.equal(f.element.selectionStart,2);assert.equal(f.errors.length,1);f.stop();
});
test('keydown wraps selection and skips closing dollar without duplicating it',()=>{
  const f=keyFixture();f.element.value='abc tail';f.element.setSelectionRange(0,3);pressDollar(f);
  assert.equal(f.element.value,'$abc$ tail');assert.equal(f.element.selectionStart,5);
  f.element.setSelectionRange(4,4);pressDollar(f);
  assert.equal(f.element.value,'$abc$ tail');assert.equal(f.element.selectionStart,5);
});
test('dollar keydown leaves math/code blocks, IME and shortcuts to host',()=>{
  for(const options of [{native:true},{code:true}]) assert.equal(pressDollar(keyFixture(options)).defaultPrevented,undefined);
  for(const extra of [{isComposing:true},{keyCode:229},{ctrlKey:true},{metaKey:true}]) assert.equal(pressDollar(keyFixture(),extra).defaultPrevented,undefined);
});
test('parentheses pair after text synchronously and preserve outer closers',()=>{
  for (const native of [false,true]) {
    for (const [value,cursor,expected] of [['a',1,'a()'],['f(x)',3,'f(x())'],['$f$',2,'$f()$'],['中文',2,'中文()']]) {
      const f=keyFixture({native,deferred:true});
      f.element.value=value;f.element.setSelectionRange(cursor,cursor);
      const event=pressDollar(f,{key:'('});
      assert.equal(event.defaultPrevented,true);assert.equal(event.stopped,true);
      assert.equal(f.element.value,expected);assert.equal(f.element.selectionStart,cursor+1);
      assert.deepEqual(f.edits,['()']);assert.deepEqual(f.errors,[]);f.stop();
    }
  }
});
test('parentheses leave host pairing, selections, code, escapes and IME alone',()=>{
  for (const value of ['', ' ', '\n', ']', '(', 'a ', 'a(', '\\', '`code', '```\ncode']) {
    const f=keyFixture();f.element.value=value;f.element.setSelectionRange(value.length,value.length);
    assert.equal(pressDollar(f,{key:'('}).defaultPrevented,undefined);
    assert.deepEqual(f.edits,[]);
  }
  for (const extra of [{isComposing:true},{keyCode:229},{ctrlKey:true},{metaKey:true},{altKey:true},{defaultPrevented:true}]) {
    const f=keyFixture();f.element.value='f';f.element.setSelectionRange(1,1);
    pressDollar(f,{key:'(',...extra});assert.deepEqual(f.edits,[]);
  }
  const selected=keyFixture();selected.element.value='abc';selected.element.setSelectionRange(1,3);
  assert.equal(pressDollar(selected,{key:'('}).defaultPrevented,undefined);
  const code=keyFixture({code:true});code.element.value='f';code.element.setSelectionRange(1,1);
  assert.equal(pressDollar(code,{key:'('}).defaultPrevented,undefined);
});
