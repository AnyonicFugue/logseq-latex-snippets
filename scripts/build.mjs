import { build } from 'esbuild';
import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await build({ entryPoints: ['src/index.js'], bundle: true, minify: true, outfile: 'dist/index.js', platform: 'browser', target: 'chrome120' });
await Promise.all(['index.html', 'snippets.json'].map(file => copyFile(`src/${file}`, `dist/${file}`)));
