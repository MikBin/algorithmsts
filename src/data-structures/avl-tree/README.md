# AVL Tree

An AVL tree is a self-balancing binary search tree. It was the first such data structure to be invented. In an AVL tree, the heights of the two child subtrees of any node differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property.

## Usage

```typescript
import { AVLTree } from '@mikbin80/algorithmsts';

const tree = new AVLTree<number>();

tree.insert(10);
tree.insert(20);
tree.insert(5);

console.log(tree.traversalInOrder()); // [5, 10, 20]

tree.delete(10);

console.log(tree.traversalInOrder()); // [5, 20]
```
