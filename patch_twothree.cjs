const fs = require('fs');
let code = fs.readFileSync('src/data-structures/two-three-tree/twoThreeTree.ts', 'utf8');

code = code.replace(
  `      if (n.keys.length > 2) {
        // split 3-key leaf into 2 nodes under parent assumption
        // handled by caller for root; for internal leaves, will be handled by parent splitChild path
      }`,
  `      if (n.keys.length > 2) {
        // handled by proactive splitting in parent
      }`
);

// We need to proactively split *any* child that is full (has 2 keys) before descending into it.
// Replace: `if (n.children[i]!.keys.length === 2 && !n.children[i]!.leaf)`
// With: `if (n.children[i]!.keys.length === 2)`

code = code.replace(
  `if (n.children[i]!.keys.length === 2 && !n.children[i]!.leaf) {`,
  `if (n.children[i]!.keys.length === 2) {`
);

fs.writeFileSync('src/data-structures/two-three-tree/twoThreeTree.ts', code);
