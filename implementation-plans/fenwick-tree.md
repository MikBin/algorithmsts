## Implementation Plan: Fenwick Tree (Binary Indexed Tree)

## 1. Objective & Scope
This implementation will create a Fenwick Tree, also known as a Binary Indexed Tree (BIT), which is a data structure that provides efficient methods for calculation and manipulation of prefix sums in an array of numbers. It is particularly useful for solving problems involving frequency counting, range sum queries, and cumulative frequency tables. Primary public methods to be created include: `build`, `update`, `query`, `rangeQuery`, and `findKth`.

## 2. Theoretical Foundation
A Fenwick Tree is a data structure that can efficiently update elements and calculate prefix sums in a table of numbers. It was proposed by Peter Fenwick in 1994 as a more space-efficient alternative to segment trees for certain types of problems.

Key properties:
- Uses a binary indexed tree structure to store cumulative information
- Supports point updates and prefix sum queries in O(log n) time
- Uses O(n) space, which is more efficient than segment trees for some applications
- Based on the binary representation of indices
- Each node stores the sum of a specific range of elements

Time complexities:
- Build: O(n log n) or O(n) with optimized construction
- Point Update: O(log n)
- Prefix Sum Query: O(log n)
- Range Sum Query: O(log n) (two prefix sum queries)
- Find Kth Smallest: O(log n) (with additional frequency array)

Common applications:
- Dynamic prefix sum calculations
- Frequency counting in competitive programming
- Inversion counting
- Range sum queries with point updates
- Implementing efficient priority queues

Resources:
- Visualizer: https://visualgo.net/en/fenwicktree
- Academic: https://en.wikipedia.org/wiki/Fenwick_tree

## 3. Directory Structure & File Organization
The implementation must reside in: `src/data-structures/fenwick-tree/`

Required files with precise naming:
- Main implementation file: `fenwickTree.ts`
- Test file: `fenwickTree.test.ts`
- Documentation file: `README.md`
- Interfaces file: `interfaces.ts`
- Index file: `index.ts`
- Iterator file: `iterator.ts`

## 4. Class and Method Design

### Main Class Skeleton
```typescript
class FenwickTree {
  tree: number[];
  size: number;
  
  constructor(size: number);
  constructor(array: number[]);
  
  // Core operations
  build(array: number[]): void;
  update(index: number, delta: number): void;
  set(index: number, value: number): void;
  
  // Query operations
  query(index: number): number;
  rangeQuery(left: number, right: number): number;
  
  // Advanced operations
  findKth(k: number): number;
  findPrefixSum(target: number): number;
  
  // Utility methods
  isEmpty(): boolean;
  getSize(): number;
  clear(): void;
  clone(): FenwickTree;
  
  // Internal helper methods
  private lsb(index: number): number;
  private parent(index: number): number;
  private next(index: number): number;
}
```

### Method Algorithms

#### constructor(size)
1. Initialize the tree array with size+1 elements (1-based indexing)
2. Set all elements to 0
3. Store the size

#### constructor(array)
1. Initialize the tree array with array.length+1 elements
2. Copy the array to the tree (starting from index 1)
3. Build the Fenwick tree using the build method

#### build(array)
1. Initialize the tree array with array.length+1 elements
2. Copy the array to the tree (starting from index 1)
3. For each index i from 1 to size:
   - Calculate parent = i + lsb(i)
   - If parent <= size, update tree[parent] += tree[i]

#### update(index, delta)
1. Convert to 1-based indexing if necessary
2. While index <= size:
   - Add delta to tree[index]
   - Calculate index = index + lsb(index)

#### set(index, value)
1. Get the current value at index using query(index) - query(index-1)
2. Calculate the difference: delta = value - currentValue
3. Call update(index, delta)

#### query(index)
1. Convert to 1-based indexing if necessary
2. Initialize result = 0
3. While index > 0:
   - Add tree[index] to result
   - Calculate index = index - lsb(index)
4. Return result

#### rangeQuery(left, right)
1. Return query(right) - query(left-1)

#### findKth(k)
1. Initialize index = 0, bitMask = highest power of 2 <= size
2. While bitMask > 0:
   - Calculate nextIndex = index + bitMask
   - If nextIndex <= size && tree[nextIndex] < k:
     - Subtract tree[nextIndex] from k
     - Set index = nextIndex
   - Right shift bitMask (bitMask >>= 1)
3. Return index + 1

#### findPrefixSum(target)
1. Use binary search with the Fenwick tree structure
2. Initialize index = 0, bitMask = highest power of 2 <= size
3. While bitMask > 0:
   - Calculate nextIndex = index + bitMask
   - If nextIndex <= size && tree[nextIndex] <= target:
     - Subtract tree[nextIndex] from target
     - Set index = nextIndex
   - Right shift bitMask (bitMask >>= 1)
4. Return index

#### lsb(index)
1. Return index & -index (isolates the least significant bit)

#### parent(index)
1. Return index - lsb(index)

#### next(index)
1. Return index + lsb(index)

## 5. Repository Integration & Conflict Prevention

### Git Workflow
- Create a new feature branch from `main` using the naming convention: `feature/implement-fenwick-tree`
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
- Test building from an array of various sizes
- Test point updates with different delta values
- Test setting values at different positions
- Test prefix sum queries for various indices
- Test range sum queries for various ranges

#### Edge Cases
- Operations on an empty tree
- Operations on a single-element tree
- Updates at the first and last positions
- Queries at boundary indices (0, size)
- Large values that might cause overflow

#### Advanced Operations
- Test `findKth()` for various k values
- Test `findPrefixSum()` for various target values
- Verify correctness of binary search operations

#### Constructor Overloads
- Test constructor with size parameter
- Test constructor with array parameter
- Verify both constructors produce equivalent results

#### Utility Methods
- Test `isEmpty()` on empty and non-empty trees
- Test `getSize()` returns correct size
- Test `clear()` resets the tree
- Test `clone()` creates an independent copy

#### Performance Tests
- Build tree with large number of elements
- Perform many updates and queries
- Measure time complexity for operations

#### Correctness Verification
- Verify that query(i) equals the sum of array[0..i-1]
- Verify that rangeQuery(l, r) equals the sum of array[l..r]
- Verify that updates correctly affect subsequent queries
- Verify that set operations correctly replace values

#### Stress Tests
- Random sequence of updates and queries
- Verify results against naive array implementation
- Test with large arrays (10^5+ elements)

## 7. Definition of Done
- [ ] All code resides in the specified directory and files
- [ ] All methods from the design section are implemented
- [ ] The code passes all linting and formatting checks (`npm run lint`)
- [ ] The entire test suite passes with 100% coverage (`npm run test:prod`)
- [ ] A Pull Request has been opened from the correct feature branch
- [ ] The `README.md` for the data structure has been created with a brief explanation and usage examples
- [ ] The implementation is exported from `src/data-structures/index.ts`
- [ ] The implementation follows the same patterns as existing data structures in the codebase
- [ ] All operations are verified to maintain the correct prefix sum properties
