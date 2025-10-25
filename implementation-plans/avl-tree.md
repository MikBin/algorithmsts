## Implementation Plan: AVL Tree

## 1. Objective & Scope
This implementation will create an AVL (Adelson-Velsky and Landis) tree, which is a self-balancing binary search tree. The AVL tree maintains a balance factor for each node to ensure the tree remains approximately balanced, guaranteeing O(log n) time complexity for search, insertion, and deletion operations. Primary public methods to be created include: `insert`, `delete`, `search`, `findMin`, `findMax`, `traversalInOrder`, `traversalPreOrder`, `traversalPostOrder`, and `isEmpty`.

## 2. Theoretical Foundation
An AVL tree is a self-balancing binary search tree where the height difference (balance factor) between the left and right subtrees of any node is at most 1. This property ensures that the tree remains approximately balanced, preventing the worst-case O(n) scenarios of regular BSTs.

Key properties:
- Balance factor of a node = height(left subtree) - height(right subtree)
- Balance factor must be -1, 0, or 1 for all nodes
- After insertions and deletions, rotations are performed to maintain balance
- Height of an AVL tree with n nodes is O(log n)

Time complexities:
- Search: O(log n) guaranteed
- Insert: O(log n) guaranteed (including rebalancing)
- Delete: O(log n) guaranteed (including rebalancing)
- Traversal: O(n)

Rotation types:
1. Left rotation (LL case)
2. Right rotation (RR case)
3. Left-Right rotation (LR case)
4. Right-Left rotation (RL case)

Common applications:
- Database indexing where guaranteed performance is required
- Memory management systems
- Implementations of sets and maps with performance guarantees

Resources:
- Visualizer: https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
- Academic: https://en.wikipedia.org/wiki/AVL_tree

## 3. Directory Structure & File Organization
The implementation must reside in: `src/data-structures/avl-tree/`

Required files with precise naming:
- Main implementation file: `avlTree.ts`
- Test file: `avlTree.test.ts`
- Documentation file: `README.md`
- Interfaces file: `interfaces.ts`
- Index file: `index.ts`
- Iterator file: `iterator.ts`

## 4. Class and Method Design

### Node Interface
```typescript
interface AVLNode<T> {
  value: T;
  left: AVLNode<T> | null;
  right: AVLNode<T> | null;
  parent: AVLNode<T> | null;
  height: number;
}
```

### Main Class Skeleton
```typescript
class AVLTree<T> {
  root: AVLNode<T> | null;
  size: number;
  compare: (a: T, b: T) => number;
  
  constructor(compareFunction?: (a: T, b: T) => number);
  
  // Core operations
  insert(value: T): AVLNode<T>;
  delete(value: T): boolean;
  search(value: T): AVLNode<T> | null;
  
  // Find operations
  findMin(): AVLNode<T> | null;
  findMax(): AVLNode<T> | null;
  
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
  isBalanced(): boolean;
  getBalanceFactor(node: AVLNode<T>): number;
}
```

### Method Algorithms

#### insert(value)
1. Create a new node with the given value and height 1
2. Perform standard BST insertion
3. Update the height of the current node
4. Get the balance factor of the current node
5. If the node becomes unbalanced, perform appropriate rotation:
   - Left Left Case: Right rotate
   - Right Right Case: Left rotate
   - Left Right Case: Left rotate left child, then right rotate node
   - Right Left Case: Right rotate right child, then left rotate node
6. Return the new root of the subtree

#### delete(value)
1. Perform standard BST deletion
2. Update the height of the current node
3. Get the balance factor of the current node
4. If the node becomes unbalanced, perform appropriate rotation:
   - Left Left Case: Right rotate
   - Right Right Case: Left rotate
   - Left Right Case: Left rotate left child, then right rotate node
   - Right Left Case: Right rotate right child, then left rotate node
5. Return the new root of the subtree

#### search(value)
1. Start at the root
2. While current node is not null:
   - If value equals current node's value, return the node
   - If value < current node's value, move to left child
   - If value > current node's value, move to right child
3. Return null if not found

#### getHeight(node)
1. If node is null, return 0
2. Return node.height

#### getBalanceFactor(node)
1. If node is null, return 0
2. Return getHeight(node.left) - getHeight(node.right)

#### leftRotate(z)
1. Let y be the right child of z
2. Let T2 be the left child of y
3. Perform rotation:
   - Set y.left = z
   - Set z.right = T2
4. Update heights:
   - Update z.height = max(getHeight(z.left), getHeight(z.right)) + 1
   - Update y.height = max(getHeight(y.left), getHeight(y.right)) + 1
5. Return y as the new root

#### rightRotate(z)
1. Let y be the left child of z
2. Let T3 be the right child of y
3. Perform rotation:
   - Set y.right = z
   - Set z.left = T3
4. Update heights:
   - Update z.height = max(getHeight(z.left), getHeight(z.right)) + 1
   - Update y.height = max(getHeight(y.left), getHeight(y.right)) + 1
5. Return y as the new root

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

#### isBalanced()
1. Check if every node in the tree has a balance factor of -1, 0, or 1
2. Return true if all nodes are balanced, false otherwise

## 5. Repository Integration & Conflict Prevention

### Git Workflow
- Create a new feature branch from `main` using the naming convention: `feature/implement-avl-tree`
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

#### Balance Maintenance
- Verify tree remains balanced after each insertion
- Verify tree remains balanced after each deletion
- Test all four rotation cases (LL, RR, LR, RL)
- Verify height is correctly maintained for all nodes

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
- Test `getHeight()` for balanced and unbalanced trees
- Test `clear()` empties the tree and resets size
- Test `isBalanced()` returns true for balanced trees and false for unbalanced ones

#### Performance Tests
- Insert large number of elements and verify tree remains balanced
- Measure height of tree with n elements (should be O(log n))

#### Custom Comparator
- Test with custom comparison function for complex objects
- Verify ordering and balance are maintained with custom comparator

## 7. Definition of Done
- [ ] All code resides in the specified directory and files
- [ ] All methods from the design section are implemented
- [ ] The code passes all linting and formatting checks (`npm run lint`)
- [ ] The entire test suite passes with 100% coverage (`npm run test:prod`)
- [ ] A Pull Request has been opened from the correct feature branch
- [ ] The `README.md` for the data structure has been created with a brief explanation and usage examples
- [ ] The implementation is exported from `src/data-structures/index.ts`
- [ ] The implementation follows the same patterns as existing data structures in the codebase
- [ ] All rotation cases are thoroughly tested and verified to maintain balance
