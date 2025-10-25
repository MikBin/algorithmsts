## Implementation Plan: Red-Black Tree

## 1. Objective & Scope
This implementation will create a Red-Black Tree, which is a self-balancing binary search tree that uses color properties (red or black) and specific rules to maintain balance. The Red-Black Tree ensures O(log n) time complexity for search, insertion, and deletion operations while requiring fewer rotations than AVL trees. Primary public methods to be created include: `insert`, `delete`, `search`, `findMin`, `findMax`, `traversalInOrder`, `traversalPreOrder`, `traversalPostOrder`, and `isEmpty`.

## 2. Theoretical Foundation
A Red-Black Tree is a self-balancing binary search tree with the following properties:
1. Every node is either red or black
2. The root is always black
3. All leaves (NIL nodes) are black
4. If a node is red, then both its children are black
5. Every path from a given node to any of its descendant NIL nodes contains the same number of black nodes (black-height)

These properties ensure that the tree remains approximately balanced, with the longest path being no more than twice as long as the shortest path.

Key properties:
- Height of a Red-Black Tree with n nodes is O(log n)
- Requires at most 2 rotations for insertion and 3 for deletion
- More efficient for insertion-heavy workloads compared to AVL trees

Time complexities:
- Search: O(log n) guaranteed
- Insert: O(log n) guaranteed (including rebalancing)
- Delete: O(log n) guaranteed (including rebalancing)
- Traversal: O(n)

Common applications:
- Implementations of maps and sets in standard libraries (Java TreeMap, C++ std::map)
- CPU scheduling algorithms
- Database indexing
- Completely Fair Scheduler in Linux kernel

Resources:
- Visualizer: https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
- Academic: https://en.wikipedia.org/wiki/Red%E2%80%93black_tree

## 3. Directory Structure & File Organization
The implementation must reside in: `src/data-structures/red-black-tree/`

Required files with precise naming:
- Main implementation file: `redBlackTree.ts`
- Test file: `redBlackTree.test.ts`
- Documentation file: `README.md`
- Interfaces file: `interfaces.ts`
- Index file: `index.ts`
- Iterator file: `iterator.ts`

## 4. Class and Method Design

### Node Interface
```typescript
interface RBNode<T> {
  value: T;
  left: RBNode<T> | null;
  right: RBNode<T> | null;
  parent: RBNode<T> | null;
  color: 'red' | 'black';
}
```

### Main Class Skeleton
```typescript
class RedBlackTree<T> {
  root: RBNode<T> | null;
  size: number;
  compare: (a: T, b: T) => number;
  NIL: RBNode<T>; // Sentinel node for all leaf references
  
  constructor(compareFunction?: (a: T, b: T) => number);
  
  // Core operations
  insert(value: T): RBNode<T>;
  delete(value: T): boolean;
  search(value: T): RBNode<T> | null;
  
  // Find operations
  findMin(): RBNode<T> | null;
  findMax(): RBNode<T> | null;
  
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
  
  // Balance checking
  isRedBlackTree(): boolean;
  getBlackHeight(): number;
}
```

### Method Algorithms

#### insert(value)
1. Create a new node with the given value and color red
2. Perform standard BST insertion, using NIL nodes for leaf references
3. Set the new node's left and right children to NIL
4. Fix the Red-Black Tree properties:
   - While the parent of the new node is red:
     - If parent is the left child of grandparent:
       - If uncle is red, recolor parent and uncle to black, grandparent to red
       - Else if new node is right child, left rotate parent
       - Recolor parent to black, grandparent to red, right rotate grandparent
     - If parent is the right child of grandparent (mirror case):
       - If uncle is red, recolor parent and uncle to black, grandparent to red
       - Else if new node is left child, right rotate parent
       - Recolor parent to black, grandparent to red, left rotate grandparent
5. Ensure the root is black
6. Increment size
7. Return the new node

#### delete(value)
1. Find the node to delete using search
2. If node not found, return false
3. Store the original color of the node to be deleted
4. If node has two children:
   - Find the successor (minimum in right subtree)
   - Copy successor's value to the node
   - Set node to successor
5. If node's child is NIL, replace node with NIL
6. If original color was black, fix the Red-Black Tree properties:
   - While node is not root and node is black:
     - If node is the left child:
       - If sibling is red, recolor sibling to black, parent to red, left rotate parent
       - If both of sibling's children are black, recolor sibling to red, move to parent
       - Else if sibling's right child is black, recolor sibling's left child to black, sibling to red, right rotate sibling
       - Recolor sibling to parent's color, parent to black, sibling's right child to black, left rotate parent
     - If node is the right child (mirror case):
       - If sibling is red, recolor sibling to black, parent to red, right rotate parent
       - If both of sibling's children are black, recolor sibling to red, move to parent
       - Else if sibling's left child is black, recolor sibling's right child to black, sibling to red, left rotate sibling
       - Recolor sibling to parent's color, parent to black, sibling's left child to black, right rotate parent
7. Decrement size
8. Return true

#### search(value)
1. Start at the root
2. While current node is not NIL:
   - If value equals current node's value, return the node
   - If value < current node's value, move to left child
   - If value > current node's value, move to right child
3. Return null if not found

#### leftRotate(x)
1. Let y be the right child of x
2. Set x's right child to y's left child
3. If y's left child is not NIL, set its parent to x
4. Set y's parent to x's parent
5. If x's parent is NIL, set root to y
6. Else if x is the left child of its parent, set parent's left child to y
7. Else, set parent's right child to y
8. Set y's left child to x
9. Set x's parent to y

#### rightRotate(y)
1. Let x be the left child of y
2. Set y's left child to x's right child
3. If x's right child is not NIL, set its parent to y
4. Set x's parent to y's parent
5. If y's parent is NIL, set root to x
6. Else if y is the right child of its parent, set parent's right child to x
7. Else, set parent's left child to x
8. Set x's right child to y
9. Set y's parent to x

#### traversalInOrder()
1. Create an empty result array
2. Perform recursive in-order traversal starting from root, ignoring NIL nodes
3. Return the result array (should be sorted)

#### traversalPreOrder()
1. Create an empty result array
2. Perform recursive pre-order traversal starting from root, ignoring NIL nodes
3. Return the result array

#### traversalPostOrder()
1. Create an empty result array
2. Perform recursive post-order traversal starting from root, ignoring NIL nodes
3. Return the result array

#### traversalLevelOrder()
1. Create an empty result array
2. Use a queue to perform level-order traversal starting from root, ignoring NIL nodes
3. Return the result array

#### isRedBlackTree()
1. Check if root is black
2. Verify that no red node has a red child
3. Verify that all paths from root to NIL nodes have the same black-height
4. Return true if all properties are satisfied, false otherwise

#### getBlackHeight()
1. Calculate the black-height of the tree (number of black nodes on any path from root to NIL)
2. Return the black-height

## 5. Repository Integration & Conflict Prevention

### Git Workflow
- Create a new feature branch from `main` using the naming convention: `feature/implement-red-black-tree`
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

#### Red-Black Properties
- Verify root is always black after insertions and deletions
- Verify no red node has a red child
- Verify all paths from root to NIL have the same black-height
- Test all insertion cases (uncle red, uncle black with various configurations)
- Test all deletion cases and fix-up procedures

#### Edge Cases
- Operations on an empty tree
- Operations on a single-node tree
- Inserting duplicate values (should be rejected)
- Deleting non-existent values
- Deleting the root node in various scenarios

#### Find Operations
- Test `findMin()` and `findMax()` on empty and non-empty trees
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
- Test `getHeight()` for balanced trees
- Test `clear()` empties the tree and resets size
- Test `isRedBlackTree()` returns true for valid trees and false for invalid ones
- Test `getBlackHeight()` returns correct black-height

#### Performance Tests
- Insert large number of elements and verify tree remains balanced
- Measure height of tree with n elements (should be O(log n))
- Compare performance with regular BST for worst-case scenarios

#### Custom Comparator
- Test with custom comparison function for complex objects
- Verify ordering and Red-Black properties are maintained with custom comparator

## 7. Definition of Done
- [ ] All code resides in the specified directory and files
- [ ] All methods from the design section are implemented
- [ ] The code passes all linting and formatting checks (`npm run lint`)
- [ ] The entire test suite passes with 100% coverage (`npm run test:prod`)
- [ ] A Pull Request has been opened from the correct feature branch
- [ ] The `README.md` for the data structure has been created with a brief explanation and usage examples
- [ ] The implementation is exported from `src/data-structures/index.ts`
- [ ] The implementation follows the same patterns as existing data structures in the codebase
- [ ] All Red-Black Tree properties are thoroughly tested and verified to be maintained
