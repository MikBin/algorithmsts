## Implementation Plan: Binary Search Tree (BST)

## 1. Objective & Scope
This implementation will create a binary search tree data structure that maintains ordered data for efficient searching, insertion, and deletion operations. The BST will enforce the property that for any given node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater than the node's value. Primary public methods to be created include: `insert`, `delete`, `search`, `findMin`, `findMax`, `traversalInOrder`, `traversalPreOrder`, `traversalPostOrder`, and `isEmpty`.

## 2. Theoretical Foundation
A binary search tree (BST) is a node-based binary tree data structure which has the following properties:
- The left subtree of a node contains only nodes with keys lesser than the node's key
- The right subtree of a node contains only nodes with keys greater than the node's key
- The left and right subtree each must also be a binary search tree
- There must be no duplicate keys (in our implementation)

Key properties:
- In-order traversal of a BST yields a sorted sequence of values
- The height of a balanced BST with n nodes is O(log n)
- In the worst case (completely unbalanced), the height is O(n)

Time complexities:
- Search: O(log n) average, O(n) worst case
- Insert: O(log n) average, O(n) worst case
- Delete: O(log n) average, O(n) worst case
- Traversal: O(n)

Common applications:
- Database indexing
- Dictionary implementations
- Set implementations
- Priority queues (when augmented)

Resources:
- Visualizer: https://www.cs.usfca.edu/~galles/visualization/BST.html
- Academic: https://en.wikipedia.org/wiki/Binary_search_tree

## 3. Directory Structure & File Organization
The implementation must reside in: `src/data-structures/binary-search-tree/`

Required files with precise naming:
- Main implementation file: `binarySearchTree.ts`
- Test file: `binarySearchTree.test.ts`
- Documentation file: `README.md`
- Interfaces file: `interfaces.ts`
- Index file: `index.ts`
- Iterator file: `iterator.ts`

## 4. Class and Method Design

### Node Interface
```typescript
interface BSTNode<T> {
  value: T;
  left: BSTNode<T> | null;
  right: BSTNode<T> | null;
  parent: BSTNode<T> | null;
}
```

### Main Class Skeleton
```typescript
class BinarySearchTree<T> {
  root: BSTNode<T> | null;
  size: number;
  compare: (a: T, b: T) => number;
  
  constructor(compareFunction?: (a: T, b: T) => number);
  
  // Core operations
  insert(value: T): BSTNode<T>;
  delete(value: T): boolean;
  search(value: T): BSTNode<T> | null;
  
  // Find operations
  findMin(): BSTNode<T> | null;
  findMax(): BSTNode<T> | null;
  findMinNode(node: BSTNode<T>): BSTNode<T>;
  findMaxNode(node: BSTNode<T>): BSTNode<T>;
  
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

#### insert(value)
1. Create a new node with the given value
2. If tree is empty, set root to the new node and return it
3. Start at the root and traverse the tree:
   - If value < current node's value:
     - If left child is null, insert new node as left child
     - Else, move to left child
   - If value > current node's value:
     - If right child is null, insert new node as right child
     - Else, move to right child
   - If value equals current node's value, handle according to policy (we'll reject duplicates)
4. Set the parent reference of the new node
5. Increment size
6. Return the new node

#### delete(value)
1. Find the node to delete using search
2. If node not found, return false
3. Handle three cases:
   - Case 1: Node has no children (leaf)
     - If node is root, set root to null
     - Else, remove parent's reference to this node
   - Case 2: Node has one child
     - If node is root, set root to the child
     - Else, replace parent's reference to this node with the child
   - Case 3: Node has two children
     - Find the in-order successor (minimum in right subtree)
     - Replace node's value with successor's value
     - Recursively delete the successor node
4. Decrement size
5. Return true

#### search(value)
1. Start at the root
2. While current node is not null:
   - If value equals current node's value, return the node
   - If value < current node's value, move to left child
   - If value > current node's value, move to right child
3. Return null if not found

#### findMin()
1. If tree is empty, return null
2. Start at the root
3. While left child is not null, move to left child
4. Return the leftmost node

#### findMax()
1. If tree is empty, return null
2. Start at the root
3. While right child is not null, move to right child
4. Return the rightmost node

#### traversalInOrder()
1. Create an empty result array
2. Perform recursive in-order traversal starting from root
3. Return the result array (should be sorted)

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
- Create a new feature branch from `main` using the naming convention: `feature/implement-binary-search-tree`
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
- Test insertion of values in various orders (ascending, descending, random)
- Test deletion of nodes with zero, one, and two children
- Test search for existing and non-existing values
- Test tree size updates after insertions and deletions

#### Edge Cases
- Operations on an empty tree
- Operations on a single-node tree
- Inserting duplicate values (should be rejected)
- Deleting non-existent values
- Deleting the root node in various scenarios

#### Find Operations
- Test `findMin()` and `findMax()` on empty and non-empty trees
- Test `findMinNode()` and `findMaxNode()` with subtrees
- Verify correctness after various insertions and deletions

#### Traversal Methods
- Verify in-order traversal produces sorted sequence
- Verify pre-order traversal produces expected sequence
- Verify post-order traversal produces expected sequence
- Verify level-order traversal produces expected sequence
- Test traversals on empty and single-node trees

#### Utility Methods
- Test `isEmpty()` on empty and non-empty trees
- Test `getSize()` after various operations
- Test `getHeight()` for balanced and unbalanced trees
- Test `clear()` empties the tree and resets size

#### Custom Comparator
- Test with custom comparison function for complex objects
- Verify ordering is maintained with custom comparator

## 7. Definition of Done
- [ ] All code resides in the specified directory and files
- [ ] All methods from the design section are implemented
- [ ] The code passes all linting and formatting checks (`npm run lint`)
- [ ] The entire test suite passes with 100% coverage (`npm run test:prod`)
- [ ] A Pull Request has been opened from the correct feature branch
- [ ] The `README.md` for the data structure has been created with a brief explanation and usage examples
- [ ] The implementation is exported from `src/data-structures/index.ts`
- [ ] The implementation follows the same patterns as existing data structures in the codebase
