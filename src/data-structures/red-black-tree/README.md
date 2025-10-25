# Red-Black Tree

A Red-Black Tree is a self-balancing binary search tree. It maintains a balance between the left and right subtrees by coloring each node either red or black and enforcing a set of rules. This ensures that the tree remains balanced, providing O(log n) time complexity for search, insert, and delete operations.

## Usage

```typescript
import { RedBlackTree } from './redBlackTree';

const tree = new RedBlackTree<number>();

tree.insert(10);
tree.insert(20);
tree.insert(30);

console.log(tree.search(20)); // { value: 20, ... }

for (const value of tree) {
  console.log(value); // 10, 20, 30
}
```
