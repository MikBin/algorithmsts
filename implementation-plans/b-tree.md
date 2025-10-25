## Implementation Plan: B-Tree

## 1. Objective & Scope
This implementation will create a B-Tree, which is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. Unlike binary trees, B-Trees can have more than two children per node, making them particularly efficient for systems that read and write large blocks of data, such as databases and file systems. Primary public methods to be created include: `insert`, `delete`, `search`, `rangeQuery`, `traversalInOrder`, and `isEmpty`.

## 2. Theoretical Foundation
A B-Tree of order m is a self-balancing tree with the following properties:
1. Every node has at most m children
2. Every non-leaf node (except root) has at least ⌈m/2⌉ children
3. The root has at least 2 children if it is not a leaf node
4. All leaves appear at the same level
5. A non-leaf node with k children contains k-1 keys
6. All keys in a node are sorted in ascending order

Key properties:
- Height of a B-Tree with n keys is O(log_m n)
- Designed for systems that read and write large blocks of data
- Minimizes disk I/O operations by maximizing the number of keys per node

Time complexities:
- Search: O(log_m n)
- Insert: O(log_m n)
- Delete: O(log_m n)
- Range Query: O(log_m n + k), where k is the number of results

Common applications:
- Database indexing (e.g., MySQL, PostgreSQL)
- File systems (e.g., NTFS, HFS+)
- NoSQL databases (e.g., MongoDB's B-tree indexes)
- Operating system virtual memory management

Resources:
- Visualizer: https://www.cs.usfca.edu/~galles/visualization/BTree.html
- Academic: https://en.wikipedia.org/wiki/B-tree

## 3. Directory Structure & File Organization
The implementation must reside in: `src/data-structures/b-tree/`

Required files with precise naming:
- Main implementation file: `bTree.ts`
- Test file: `bTree.test.ts`
- Documentation file: `README.md`
- Interfaces file: `interfaces.ts`
- Index file: `index.ts`
- Iterator file: `iterator.ts`

## 4. Class and Method Design

### Node Interface
```typescript
interface BTreeNode<T> {
  keys: T[];
  children: BTreeNode<T>[];
  isLeaf: boolean;
}
```

### Main Class Skeleton
```typescript
class BTree<T> {
  root: BTreeNode<T>;
  order: number; // Minimum degree (t), where maximum children = 2t
  size: number;
  compare: (a: T, b: T) => number;
  
  constructor(order: number, compareFunction?: (a: T, b: T) => number);
  
  // Core operations
  insert(key: T): void;
  delete(key: T): boolean;
  search(key: T): BTreeNode<T> | null;
  
  // Query operations
  rangeQuery(start: T, end: T): T[];
  findMin(): T | null;
  findMax(): T | null;
  
  // Traversal methods
  traversalInOrder(): T[];
  traversalLevelOrder(): T[];
  
  // Utility methods
  isEmpty(): boolean;
  getSize(): number;
  getHeight(): number;
  clear(): void;
  
  // B-Tree specific operations
  splitChild(parent: BTreeNode<T>, index: number, child: BTreeNode<T>): void;
  merge(children: BTreeNode<T>[], index: number): void;
  borrowFromPrev(children: BTreeNode<T>[], index: number): void;
  borrowFromNext(children: BTreeNode<T>[], index: number): void;
}
```

### Method Algorithms

#### insert(key)
1. If the root is full (has 2*order-1 keys):
   - Create a new node as root
   - Make the old root a child of the new root
   - Split the old root
   - Insert the key into the appropriate child
2. If the root is not full:
   - Call insertNonFull on the root with the key

#### insertNonFull(node, key)
1. Initialize i as the index of the rightmost key in node
2. If node is a leaf:
   - Find the correct position for the key
   - Insert the key at that position
   - Shift other keys to the right if necessary
3. If node is not a leaf:
   - Find the child that should have the key
   - If the child is full, split it
   - Adjust i if the key should go to the new child created by the split
   - Recursively call insertNonFull on the appropriate child

#### delete(key)
1. Find the node containing the key
2. If the key is in a leaf node:
   - Simply remove the key from the node
3. If the key is in an internal node:
   - If the child before the key has at least order keys:
     - Find the predecessor (max in left subtree)
     - Replace the key with the predecessor
     - Recursively delete the predecessor from the left child
   - Else if the child after the key has at least order keys:
     - Find the successor (min in right subtree)
     - Replace the key with the successor
     - Recursively delete the successor from the right child
   - Else if both children have order-1 keys:
     - Merge the key with the right child
     - Recursively delete the key from the merged child
4. If the key is not in the current node:
   - Find the appropriate child to continue the search
   - If the child has order-1 keys:
     - If a sibling has at least order keys, borrow from the sibling
     - Else, merge with a sibling
   - Recursively delete from the appropriate child

#### search(key)
1. Start at the root
2. For each node:
   - Find the first key greater than or equal to the search key
   - If the key matches, return the current node
   - If the current node is a leaf, the key is not in the tree
   - If the current node is not a leaf, continue search in the appropriate child
3. Return null if the key is not found

#### splitChild(parent, index, child)
1. Create a new node with order-1 keys
2. Copy the last order-1 keys of child to the new node
3. If child is not a leaf, copy the last order children of child to the new node
4. Reduce the number of keys in child to order-1
5. Insert a new child to parent at index+1
6. Move the middle key of child up to the parent
7. Insert the new node as a child of the parent

#### merge(children, index)
1. Merge children[index] with a key from their parent and children[index+1]
2. Move the key from the parent down to children[index]
3. Append all keys and children from children[index+1] to children[index]
4. Remove children[index+1] from the parent's children array

#### rangeQuery(start, end)
1. Create an empty result array
2. Perform an in-order traversal, adding keys that are within the range
3. Return the result array

#### traversalInOrder()
1. Create an empty result array
2. Perform recursive in-order traversal starting from root
3. Return the result array (should be sorted)

#### traversalLevelOrder()
1. Create an empty result array
2. Use a queue to perform level-order traversal starting from root
3. Return the result array

## 5. Repository Integration & Conflict Prevention

### Git Workflow
- Create a new feature branch from `main` using the naming convention: `feature/implement-b-tree`
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
- Test deletion of keys from leaf and internal nodes
- Test search for existing and non-existing keys
- Test tree size updates after insertions and deletions

#### B-Tree Properties
- Verify that all nodes have between order-1 and 2*order-1 keys (except root)
- Verify that all leaves are at the same level
- Verify that keys within each node are sorted
- Verify that the tree maintains B-Tree properties after insertions and deletions

#### Edge Cases
- Operations on an empty tree
- Operations on a single-node tree
- Inserting duplicate keys (should be rejected)
- Deleting non-existent keys
- Deleting keys that cause node underflows and merges

#### Split and Merge Operations
- Test node splitting when a node becomes full
- Test node merging when a node has too few keys
- Test borrowing from siblings during deletion
- Verify tree structure after complex sequences of insertions and deletions

#### Query Operations
- Test `rangeQuery()` with various ranges
- Test `findMin()` and `findMax()` on empty and non-empty trees
- Verify correctness after various insertions and deletions

#### Traversal Methods
- Verify in-order traversal produces sorted sequence
- Verify level-order traversal produces expected sequence
- Test traversals on empty and single-node trees

#### Utility Methods
- Test `isEmpty()` on empty and non-empty trees
- Test `getSize()` after various operations
- Test `getHeight()` for trees of various sizes
- Test `clear()` empties the tree and resets size

#### Performance Tests
- Insert large number of elements and verify tree properties
- Measure height of tree with n elements (should be O(log_m n))
- Test with different orders to verify performance characteristics

#### Custom Comparator
- Test with custom comparison function for complex objects
- Verify ordering and B-Tree properties are maintained with custom comparator

## 7. Definition of Done
- [ ] All code resides in the specified directory and files
- [ ] All methods from the design section are implemented
- [ ] The code passes all linting and formatting checks (`npm run lint`)
- [ ] The entire test suite passes with 100% coverage (`npm run test:prod`)
- [ ] A Pull Request has been opened from the correct feature branch
- [ ] The `README.md` for the data structure has been created with a brief explanation and usage examples
- [ ] The implementation is exported from `src/data-structures/index.ts`
- [ ] The implementation follows the same patterns as existing data structures in the codebase
- [ ] All B-Tree properties are thoroughly tested and verified to be maintained
