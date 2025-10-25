## Implementation Plan: Binary Tree

## 1. Objective & Scope
This implementation will create a basic binary tree data structure where each node has at most two children (left and right). The tree will not enforce any ordering properties, making it suitable for representing hierarchical data structures like file systems or expression trees. Primary public methods to be created include: `insert`, `delete`, `search`, `traversalInOrder`, `traversalPreOrder`, `traversalPostOrder`, and `isEmpty`.

## 2. Theoretical Foundation
A binary tree is a hierarchical data structure where each node has at most two children, referred to as the left child and the right child. Unlike binary search trees, binary trees do not enforce any ordering property between parent and child nodes. The height of a binary tree with n nodes can range from O(log n) for a balanced tree to O(n) for a completely unbalanced tree.

Key properties:
- Each node has at most two children
- The maximum number of nodes at level l is 2^l
- The maximum number of nodes in a binary tree of height h is 2^(h+1) - 1

Time complexities:
- Insert: O(1) if position is known, O(n) if searching for position
- Delete: O(1) if position is known, O(n) if searching for position
- Search: O(n) in worst case
- Traversal: O(n)

Common applications:
- Representing hierarchical data (file systems, organization charts)
- Expression trees in compilers
- Huffman coding trees
- Binary space partitioning

Resources:
- Visualizer: https://www.cs.usfca.edu/~galles/visualization/BinaryTree.html
- Academic: https://en.wikipedia.org/wiki/Binary_tree

## 3. Directory Structure & File Organization
The implementation must reside in: `src/data-structures/binary-tree/`

Required files with precise naming:
- Main implementation file: `binaryTree.ts`
- Test file: `binaryTree.test.ts`
- Documentation file: `README.md`
- Interfaces file: `interfaces.ts`
- Index file: `index.ts`
- Iterator file: `iterator.ts`

## 4. Class and Method Design

### Node Interface
```typescript
interface BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
  parent: BinaryTreeNode<T> | null;
}
```

### Main Class Skeleton
```typescript
class BinaryTree<T> {
  root: BinaryTreeNode<T> | null;
  size: number;
  
  constructor();
  
  // Core operations
  insert(value: T, parent?: BinaryTreeNode<T>): BinaryTreeNode<T>;
  delete(node: BinaryTreeNode<T>): boolean;
  search(value: T): BinaryTreeNode<T> | null;
  
  // Traversal methods
  traversalInOrder(): T[];
  traversalPreOrder(): T[];
  traversalPostOrder(): T[];
  traversalLevelOrder(): T[];
  
  // Utility methods
  isEmpty(): boolean;
  getSize(): number;
  getHeight(): number;
  clear(): void;
}
```

### Method Algorithms

#### insert(value, parent)
1. Create a new node with the given value
2. If parent is not provided and tree is empty, set as root
3. If parent is not provided and tree is not empty, throw error
4. If parent's left child is null, insert as left child
5. Else if parent's right child is null, insert as right child
6. Else throw error (parent already has two children)
7. Set the parent reference of the new node
8. Increment size
9. Return the new node

#### delete(node)
1. If node is null, return false
2. If node has both children, throw error (cannot delete nodes with two children in simple binary tree)
3. If node has no children (leaf):
   - If node is root, set root to null
   - Else, remove parent's reference to this node
4. If node has one child:
   - If node is root, set root to the child
   - Else, replace parent's reference to this node with the child
5. Decrement size
6. Return true

#### search(value)
1. If root is null, return null
2. Use breadth-first search to find the node with the given value
3. Return the found node or null if not found

#### traversalInOrder()
1. Create an empty result array
2. Perform recursive in-order traversal starting from root
3. Return the result array

#### traversalPreOrder()
1. Create an empty result array
2. Perform recursive pre-order traversal starting from root
3. Return the result array

#### traversalPostOrder()
1. Create an empty result array
2. Perform recursive post-order traversal starting from root
3. Return the result array

#### traversalLevelOrder()
1. Create an empty result array
2. Use a queue to perform level-order traversal starting from root
3. Return the result array

## 5. Repository Integration & Conflict Prevention

### Git Workflow
- Create a new feature branch from `main` using the naming convention: `feature/implement-binary-tree`
- Do not merge into `main` or any other branch
- Submit a Pull Request for final code review upon completion

### Coding Standards
- Adherence to the project's ESLint configuration is mandatory
- Follow the TypeScript coding style already established in the codebase
- Ensure all code passes the linting checks (`npm run lint`)
- Follow the contribution guidelines in `CONTRIBUTING.md`
- Use the same documentation style (JSDoc comments) as existing code

## 6. Comprehensive Testing Strategy

### Test Framework
Use Vitest as specified in the project's package.json.

### Test Cases

#### Core Functionality
- Test insertion of nodes at various positions
- Test deletion of leaf nodes, nodes with one child
- Test search for existing and non-existing values
- Test tree size updates after insertions and deletions

#### Edge Cases
- Operations on an empty tree
- Operations on a single-node tree
- Inserting into a parent with two children (should throw error)
- Deleting a node with two children (should throw error)
- Deleting the root node

#### Traversal Methods
- Verify in-order traversal produces expected sequence
- Verify pre-order traversal produces expected sequence
- Verify post-order traversal produces expected sequence
- Verify level-order traversal produces expected sequence
- Test traversals on empty and single-node trees

#### Utility Methods
- Test `isEmpty()` on empty and non-empty trees
- Test `getSize()` after various operations
- Test `getHeight()` for balanced and unbalanced trees
- Test `clear()` empties the tree and resets size

## 7. Definition of Done
- [ ] All code resides in the specified directory and files
- [ ] All methods from the design section are implemented
- [ ] The code passes all linting and formatting checks (`npm run lint`)
- [ ] The entire test suite passes with 100% coverage (`npm run test:prod`)
- [ ] A Pull Request has been opened from the correct feature branch
- [ ] The `README.md` for the data structure has been created with a brief explanation and usage examples
- [ ] The implementation is exported from `src/data-structures/index.ts`
- [ ] The implementation follows the same patterns as existing data structures in the codebase
