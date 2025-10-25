# B-Tree

A B-Tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It is a generalization of a binary search tree in that a node can have more than two children. Unlike self-balancing binary search trees, the B-tree is well suited for storage systems that read and write relatively large blocks of data, such as databases and file systems.

## Usage

### Insertion

```typescript
import { BTree } from './bTree';

const tree = new BTree<number>(3);
tree.insert(10);
tree.insert(20);
tree.insert(5);
```

### Searching

```typescript
const node = tree.search(20);
console.log(node); // BTreeNode { keys: [ 20 ], children: [], isLeaf: true }
```

### Deletion

```typescript
tree.delete(5);
console.log(tree.toArray()); // [ 10, 20 ]
```

## Complexity

| Operation     | Average Case | Worst Case   |
| ------------- | ------------ | ------------ |
| Space         | O(n)         | O(n)         |
| Search        | O(log n)     | O(log n)     |
| Insert        | O(log n)     | O(log n)     |
| Delete        | O(log n)     | O(log n)     |
