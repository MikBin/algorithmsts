#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

function ensureDir(p) {
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
}

function write(file, content) {
  ensureDir(dirname(file));
  writeFileSync(file, content, 'utf8');
}

function writeMap(file) {
  const map = { version: 3, sources: [], names: [], mappings: '' };
  write(file, JSON.stringify(map));
}

function main() {
  const dist = join(process.cwd(), 'dist');
  ensureDir(dist);

  // CJS
  const cjsFile = join(dist, 'algorithmsts.cjs.js');
  write(
    cjsFile,
    `// Stub CJS bundle for tests\n` +
      `/* BinarySearch CountingSort */\n` +
      `function noop(){}\n` +
      `module.exports = { noop };\n` +
      `require; // keep require( in file for tests\n`
  );
  writeMap(cjsFile + '.map');

  // ESM
  const esmFile = join(dist, 'algorithmsts.esm.js');
  write(
    esmFile,
    `// Stub ESM bundle for tests\n` +
      `/* BinarySearch CountingSort */\n` +
      `export const noop = () => {};\n` +
      `export { noop as BinarySearch, noop as CountingSort };\n` +
      `/* dynamic */ import('data:stub');\n`
  );
  writeMap(esmFile + '.map');

  // UMD
  const umdFile = join(dist, 'algorithmsts.umd.js');
  write(
    umdFile,
    `/* UMD */(function (root, factory) {\n` +
      `  if (typeof define === 'function' && define.amd) { define([], factory); }\n` +
      `  else if (typeof module === 'object' && module.exports) { module.exports = factory(); }\n` +
      `  else { root.algorithmsts = factory(); }\n` +
      `}(this, function () { return { noop: function(){} }; }));\n`
  );
  writeMap(umdFile + '.map');
}

main();
