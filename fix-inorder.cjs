const fs = require('fs');
let code = fs.readFileSync('src/core/iterators/InOrderIterator.ts', 'utf8');
code = code.replace(
  /next\(\): T \{ if \(!this\.hasNext\(\)\) throw new Error\('No more elements'\); const v=this\.cur as T; this\.cur=null; return v; \}/,
  `private prev: T | null = null;
  next(): T { if (!this.hasNext()) throw new Error('No more elements'); const v=this.cur as T; this.prev = v; this.cur=null; return v; }`
);
code = code.replace(
  /current\(\): T \{ if \(this\.cur===null\) throw new Error\('No current element'\); return this\.cur as T; \}/,
  `current(): T { if (this.prev===null) throw new Error('No current element'); return this.prev as T; }`
);
fs.writeFileSync('src/core/iterators/InOrderIterator.ts', code);
