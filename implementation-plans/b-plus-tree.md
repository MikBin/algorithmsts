## Implementation Plan: B+ Tree

## 1. Objective & Scope
This implementation will create a B+ Tree, which is a variant of B-Tree where all data is stored in leaf nodes, and internal nodes only contain keys for navigation. This structure is optimized for range queries and sequential access, making it ideal for database indexing and file systems. Primary public methods to be created include: `insert`, `delete`, `search`, `rangeQuery`, `sequentialAccess`, `traversalInOrder`, and `isEmpty`.

## 2. Theoretical Foundation
A B+ Tree of order m is a self-balancing tree with the following properties:
1. All data is stored in leaf nodes
2. Internal nodes contain only keys for navigation
3. All leaves are at the same level
4. Each leaf node contains between ⌈m/2⌉ and m keys (except root)
5. Each internal node contains between ⌈m/2⌉ and m children (except root)
6. Keys in internal nodes are separators between subtrees
7. Leaf nodes are linked together for efficient sequential access

Key properties:
- Height of a B+ Tree with n keys is O(log_m n)
- All records are stored at the same depth, providing consistent access time
- Leaf nodes are linked, enabling efficient range queries and sequential access
- Higher fanout than B-Trees, reducing height and I/O operations

Time complexities:
- Search: O(log_m n)
- Insert: O(log_m n)
- Delete: O(log_m n)
- Range Query: O(log_m n + k), where k is the number of results
- Sequential Access: O(k), where k is the number of records

Common applications:
- Database indexing (most common index structure in relational databases)
- File systems (e.g., NTFS, ext4)
- NoSQL databases (e.g., MongoDB's B+ tree indexes)
- Operating system virtual memory management

Resources:
- Visualizer: https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html
- Academic: https://en.wikipedia.org/wiki/B%2B_tree

## 3. Directory Structure & File Organization
The implementation must reside in: `src/data-structures/b-plus-tree/`

Required files with precise naming:
- Main implementation file: `bPlusTree.ts`
- Test file: `bPlusTree.test.ts`
- Documentation file: `README.md`
- Interfaces file: `interfaces.ts`
- Index file: `index.ts`
- Iterator file: `iterator.ts`

## 4. Class and Method Design

### Node Interfaces
```typescript
interface BPlusInternalNode<T> {
  keys: T[];
  children: BPlusNode<T>[];
}

interface BPlusLeafNode<T> {
  keys: T[];
  values: T[]; // In a real implementation, this would store pointers to records
  next: BPlusLeafNode<T> | null; // Link to next leaf node
  prev: BPlusLeafNode<T> | null; // Link to previous leaf node
}

type BPlusNode<T> = BPlusInternalNode<T> | BPlusLeafNode<T>;
```

### Main Class Skeleton
```typescript
class BPlusTree<T> {
  root: BPlusNode<T>;
  order: number; // Maximum number of children per node
  size: number;
  compare: (a: T, b: T) => number;
  firstLeaf: BPlusLeafNode<T> | null; // Reference to first leaf for sequential access
  
  constructor(order: number, compareFunction?: (a: T, b: T) => number);
  
  // Core operations
  insert(key: T, value: T): void;
  delete(key: T): boolean;
  search(key: T): T | null;
  
  // Query operations
  rangeQuery(start: T, end: T): Array<{key: T, value: T}>;
  sequentialAccess(): Array<{key: T, value: T}>;
  findMin(): {key: T, value: T} | null;
  findMax(): {key: T, value: T} | null;
  
  // Traversal methods
  traversalInOrder(): Array<{key: T, value: T}>;
  traversalLevelOrder(): BPlusNode<T>[];
  
  // Utility methods
  isEmpty(): boolean;
  getSize(): number;
  getHeight(): number;
  clear(): void;
  
  // B+ Tree specific operations
  splitInternalNode(node: BPlusInternalNode<T>): {left: BPlusInternalNode<T>, right: BPlusInternalNode<T>, middleKey: T};
  splitLeafNode(node: BPlusLeafNode<T>): {left: BPlusLeafNode<T>, right: BPlusLeafNode<T>, middleKey: T};
  redistributeNodes(parent: BPlusInternalNode<T>, index: number): void;
  mergeNodes(parent: BPlusInternalNode<T>, index: number): void;
}
```

### Method Algorithms

#### insert(key, value)
1. If the tree is empty:
   - Create a new leaf node and insert the key-value pair
   - Set it as both root and firstLeaf
2. Find the appropriate leaf node for insertion
3. If the leaf node has space:
   - Insert the key-value pair in the correct position
4. If the leaf node is full:
   - Split the leaf node into two
   - Distribute keys and values between the two nodes
   - Update the linked list connections
   - Insert the middle key into the parent node
   - If the parent is full, recursively split it

#### delete(key)
1. Find the leaf node containing the key
2. If the key is not found, return false
3. Remove the key-value pair from the leaf node
4. If the leaf node now has fewer than ⌈order/2⌉ keys:
   - Try to borrow from a sibling
   - If borrowing is not possible, merge with a sibling
   - Update the parent node accordingly
   - If the parent now has too few children, recursively handle it
5. If the root becomes empty and has only one child, make that child the new root
6. Return true

#### search(key)
1. Start at the root
2. For each internal node:
   - Find the first key greater than the search key
   - Follow the corresponding child pointer
   - If all keys are less than the search key, follow the rightmost child
3. When a leaf node is reached:
   - Search for the key in the leaf node
   - Return the associated value if found, null otherwise

#### rangeQuery(start, end)
1. Find the leaf node containing the start key
2. Create an empty result array
3. Traverse the linked list of leaf nodes:
   - For each key-value pair in the current leaf:
     - If the key is within the range, add it to the result
     - If the key exceeds the end of the range, stop
   - Move to the next leaf node
4. Return the result array

#### sequentialAccess()
1. Start at the first leaf node
2. Create an empty result array
3. Traverse the linked list of leaf nodes:
   - Add all key-value pairs to the result
   - Move to the next leaf node
4. Return the result array

#### splitLeafNode(node)
1. Create a new leaf node
2. Find the middle position (⌈order/2⌉)
3. Move keys and values from the middle position to the new node
4. Update the linked list connections
5. Return the split nodes and the middle key

#### splitInternalNode(node)
1. Create a new internal node
2. Find the middle position (⌈order/2⌉)
3. Move keys and children from the middle position to the new node
4. Return the split nodes and the middle key

#### redistributeNodes(parent, index)
1. Try to borrow from the left sibling if possible
2. Try to borrow from the right sibling if possible
3. Update the separator key in the parent

#### mergeNodes(parent, index)
1. Merge the node at index with its sibling
2. Remove the separator key from the parent
3. Update the linked list connections if merging leaf nodes

#### traversalInOrder()
1. Start at the first leaf node
2. Create an empty result array
3. Traverse the linked list of leaf nodes:
   - Add all key-value pairs to the result
   - Move to the next leaf node
4. Return the result array

#### traversalLevelOrder()
1. Create an empty result array
2. Use a queue to perform level-order traversal starting from root
3. Return the result array

## 5. Repository Integration & Conflict Prevention

### Git Workflow
- Create a new feature branch from `main` using the naming convention: `feature/implement-b-plus-tree`
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
- Test insertion of key-value pairs in various orders
- Test deletion of keys from leaf nodes
- Test search for existing and non-existing keys
- Test tree size updates after insertions and deletions

#### B+ Tree Properties
- Verify that all data is stored in leaf nodes
- Verify that internal nodes only contain keys for navigation
- Verify that all leaves are at the same level
- Verify that leaf nodes are properly linked
- Verify that each node has between ⌈order/2⌉ and order keys/children (except root)

#### Edge Cases
- Operations on an empty tree
- Operations on a single-node tree
- Inserting duplicate keys (should be rejected or handled according to policy)
- Deleting non-existent keys
- Deleting keys that cause node underflows and merges

#### Split and Merge Operations
- Test leaf node splitting when a node becomes full
- Test internal node splitting when a node becomes full
- Test node merging when a node has too few keys
- Test borrowing from siblings during deletion
- Verify tree structure after complex sequences of insertions and deletions

#### Query Operations
- Test `rangeQuery()` with various ranges
- Test `sequentialAccess()` to verify linked list integrity
- Test `findMin()` and `findMax()` on empty and non-empty trees
- Verify correctness after various insertions and deletions

#### Traversal Methods
- Verify in-order traversal produces sorted sequence of key-value pairs
- Verify level-order traversal produces expected structure
- Test traversals on empty and single-node trees

#### Utility Methods
- Test `isEmpty()` on empty and non-empty trees
- Test `getSize()` after various operations
- Test `getHeight()` for trees of various sizes
- Test `clear()` empties the tree and resets size

#### Performance Tests
- Insert large number of elements and verify tree properties
- Measure height of tree with n elements (should be O(log_m n))
- Test range queries with large result sets
- Test sequential access performance

#### Custom Comparator
- Test with custom comparison function for complex objects
- Verify ordering and B+ Tree properties are maintained with custom comparator

## 7. Definition of Done
- [ ] All code resides in the specified directory and files
- [ ] All methods from the design section are implemented
- [ ] The code passes all linting and formatting checks (`npm run lint`)
- [ ] The entire test suite passes with 100% coverage (`npm run test:prod`)
- [ ] A Pull Request has been opened from the correct feature branch
- [ ] The `README.md` for the data structure has been created with a brief explanation and usage examples
- [ ] The implementation is exported from `src/data-structures/index.ts`
- [ ] The implementation follows the same patterns as existing data structures in the codebase
- [ ] All B+ Tree properties are thoroughly tested and verified to be maintained
- [ ] Leaf node linking is properly tested for sequential access
