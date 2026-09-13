import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));

if (Number(process.versions.node.split('.')[0]) < 20) {
  console.error('Node.js 20 or newer is required. Install it from https://nodejs.org/');
  process.exit(1);
}

// Commands are fixed literals. Windows needs cmd.exe to run npm.cmd.
function runNpm(args) {
  const windows = process.platform === 'win32';
  const result = spawnSync(
    windows ? (process.env.ComSpec || 'cmd.exe') : 'npm',
    windows ? ['/d', '/s', '/c', `npm ${args.join(' ')}`] : args,
    { cwd: root, stdio: 'inherit' },
  );
  if (result.error || result.status !== 0) {
    console.error(`\nBootstrap stopped: npm ${args.join(' ')} failed.`);
    if (result.error) console.error(result.error.message);
    if (result.error) {
      console.error('Check that npm is installed with Node.js, then run bootstrap again.');
    } else if (args[0] === 'ci') {
      console.error('Check the installation error above (including npm registry access), then run bootstrap again.');
    } else {
      console.error('Check the test or build failure above, fix it, then run bootstrap again.');
    }
    process.exit(result.status || 1);
  }
}

console.log(`Preparing plugin in: ${root}`);
console.log('\n[1/2] Installing locked dependencies (internet access required)...');
runNpm(['ci', '--include=dev']);
console.log('\n[2/2] Running tests and building plugin...');
runNpm(['run', 'check']);
console.log('\nReady. In Logseq, choose "Load unpacked plugin" and select:');
console.log(root);
console.log('Select this folder containing package.json, not the dist subfolder.');
console.log('If the plugin is already loaded, restart Logseq to use the new build.');
