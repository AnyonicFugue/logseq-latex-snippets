import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {compileRules,DEFAULT_SETTINGS} from '../src/rules.js';
const source=readFileSync(new URL('../src/index.js',import.meta.url),'utf8').replace(/^import .*;\n/gm,'');
async function start() {
  let ready, changed, unload, config;
  const errors=[], messages=[];
  const logseq={settings:{},useSettingsSchema(){},onSettingsChanged(fn){changed=fn;return ()=>{};},beforeunload(fn){unload=fn;},
    App:{registerCommandPalette(){}},Editor:{registerSlashCommand(){}},UI:{showMsg:async(msg,type)=>messages.push({msg,type})},ready(fn){ready=fn();return ready;}};
  const sandbox={logseq,compileRules,DEFAULT_SETTINGS,attachEditor(doc,api,getConfig){config=getConfig;return ()=>{};},parent:{document:{}},window:{},
    console:{error:(...args)=>errors.push(args)},fetch:async()=>({ok:true,json:async()=>({test:[{match:'fr',replacement:'X@'}]})})};
  vm.runInNewContext(source,sandbox);await ready;
  return {logseq,changed,unload,config,errors,messages};
}
test('startup loads rules without a reload command',async()=>{const f=await start();assert.equal(f.config().rules.length,1);});
test('settings reload updates options and allows clearing all rules',async()=>{
  const f=await start();f.logseq.settings={snippetsJson:'{}',caseInsensitive:false};await f.changed();
  assert.equal(f.config().rules.length,0);assert.equal(f.config().settings.caseInsensitive,false);
});
test('invalid user JSON and regex preserve working rules and report an error',async()=>{
  const f=await start();
  for(const snippetsJson of ['{bad','{"test":[{"match":"[","replacement":"X"}]}']) {
    f.logseq.settings={snippetsJson};await f.changed();assert.equal(f.config().rules.length,1);
  }
  assert.equal(f.messages.filter(x=>x.type==='error').length,2);
});
test('unloaded plugin ignores reload results',async()=>{const f=await start();f.unload();f.logseq.settings={snippetsJson:'{}'};await f.changed();assert.equal(f.config().rules.length,1);});
