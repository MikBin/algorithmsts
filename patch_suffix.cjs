const fs = require('fs');
let code = fs.readFileSync('src/data-structures/suffix-array/suffixArray.ts', 'utf8');

code = code.replace(
  `const cmp = this.s.substring(this.sa[mid], Math.min(n, this.sa[mid] + m)).localeCompare(pat);`,
  `const sub = this.s.substring(this.sa[mid], Math.min(n, this.sa[mid] + m)); const cmp = sub < pat ? -1 : sub > pat ? 1 : 0;`
);

code = code.replace(
  `const cmp = this.s.substring(this.sa[mid], Math.min(n, this.sa[mid] + m)).localeCompare(pat);`,
  `const sub = this.s.substring(this.sa[mid], Math.min(n, this.sa[mid] + m)); const cmp = sub < pat ? -1 : sub > pat ? 1 : 0;`
);

fs.writeFileSync('src/data-structures/suffix-array/suffixArray.ts', code);
