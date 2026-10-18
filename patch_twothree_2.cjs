const fs = require('fs');
let code = fs.readFileSync('src/data-structures/two-three-tree/twoThreeTree.ts', 'utf8');

// In a proper 2-3 tree split, a node with 2 keys is considered full, but after adding the new key it becomes 3 keys and splits.
// The current implementation splits *proactively* when a child has 2 keys.
// But the splitChild method has bugs. When a child y has 2 keys, it creates z and distributes.
// y initially has keys: [k0, k1]. It becomes y: [k0], z: [k1]. And the parent gets k0 as well? Wait.
// "p.keys.splice(i, 0, z.keys[0] as T);" - it copies z.keys[0] to parent. That's k1! But wait, in a 2-3 tree we should push the MEDIAN up.
// Let's rewrite `splitChild` and `insertNonFull`.
