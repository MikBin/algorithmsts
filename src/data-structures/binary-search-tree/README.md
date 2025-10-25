# Binary Search Tree (BST)

A **Binary Search Tree (BST)** is a sorted binary tree data structure where each node has a value, and every node's left child has a value less than the parent's, while the right child has a value greater. This property allows for efficient searching, insertion, and deletion operations, with an average time complexity of O(log n).

## Usage

You can import the `BinarySearchTree` class from the data structures module:

```typescript
import { BinarySearchTree } from './binarySearchTree';

// Create a new BST for numbers
const bst = new BinarySearchTree<number>();

// Insert values
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// Search for a value
const foundNode = bst.search(7);
console.log(foundNode?.value); // Output: 7

// In-order traversal (yields a sorted array)
console.log(bst.traversalInOrder()); // Output: [3, 5, 7, 10, 15]

// Use the iterator
for (const value of bst) {
  console.log(value);
}
```
