## Implementation Plan: Binary Heap

## 1. Objective & Scope
This implementation will create a Binary Heap, which is a complete binary tree that satisfies the heap property (min-heap or max-heap). The Binary Heap will be implemented as an array-based data structure for efficient priority queue operations. Primary public methods to be created include: `insert`, `extract`, `peek`, `heapify`, `isEmpty`, and `size`.

## 2. Theoretical Foundation
A Binary Heap is a complete binary tree that satisfies the heap property:
- Max-Heap: The value of each node is greater than or equal to the values of its children
- Min-Heap: The value of each node is less than or equal to the values of its children

Key properties:
- Complete binary tree: All levels are fully filled except possibly the last level, which is filled from left to right
- Typically implemented as an array for efficiency
- Parent of node at index i is at index floor((i-1)/2)
- Left child of node at index i is at index 2i+1
- Right child of node at index i is at index 2i+2

Time complexities:
- Insert: O(log n)
- Extract (remove root): O(log n)
- Peek (view root): O(1)
- Heapify (build heap from array): O(n)
- Search: O(n) (not optimized for search)

Common applications:
- Priority queues
- Heap sort algorithm
- Graph algorithms (Dijkstra's, Prim's)
- Finding k-th largest/smallest elements
- Median maintenance

Resources:
- Visualizer: https://visualgo.net/en/heap
- Academic: https://en.wikipedia.org/wiki/Binary_heap

## 3. Directory Structure & File Organization
The implementation must reside in: `src/data-structures/binary-heap/`

Required files with precise naming:
- Main implementation file: `binaryHeap.ts`
- Test file: `binaryHeap.test.ts`
- Documentation file: `README.md`
- Interfaces file: `interfaces.ts`
- Index file: `index.ts`
- Iterator file: `iterator.ts`

## 4. Class and Method Design

### Main Class Skeleton
```typescript
class BinaryHeap<T> {
  heap: T[];
  compare: (a: T, b: T) => number;
  heapType: 'min' | 'max';
  
  constructor(heapType: 'min' | 'max', compareFunction?: (a: T, b: T) => number);
  constructor(array: T[], heapType: 'min' | 'max', compareFunction?: (a: T, b: T) => number);
  
  // Core operations
  insert(value: T): void;
  extract(): T | null;
  peek(): T | null;
  
  // Construction operations
  heapify(array: T[]): void;
  
  // Utility methods
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  clone(): BinaryHeap<T>;
  
  // Advanced operations
  merge(other: BinaryHeap<T>): BinaryHeap<T>;
  replace(value: T): T | null;
  
  // Internal helper methods
  private bubbleUp(index: number): void;
  private bubbleDown(index: number): void;
  private swap(i: number, j: number): void;
  private parent(index: number): number;
  private leftChild(index: number): number;
  private rightChild(index: number): number;
}
```

### Method Algorithms

#### constructor(heapType, compareFunction)
1. Initialize empty heap array
2. Set heap type ('min' or 'max')
3. Set comparison function based on heap type or use custom function
4. For min-heap: compare returns negative if a < b
5. For max-heap: compare returns positive if a > b

#### constructor(array, heapType, compareFunction)
1. Initialize heap with the provided array
2. Set heap type and comparison function
3. Call heapify to convert array to a valid heap

#### insert(value)
1. Add value to the end of the heap array
2. Call bubbleUp with the index of the newly added element
3. Bubble up:
   - While the element is not at the root and violates heap property with its parent:
     - Swap the element with its parent
     - Update index to parent's index

#### extract()
1. If heap is empty, return null
2. If heap has only one element, remove and return it
3. Store the root value to return
4. Replace the root with the last element in the heap
5. Remove the last element from the heap
6. Call bubbleDown with index 0 (root)
7. Bubble down:
   - While the element has at least one child and violates heap property:
     - Find the child that should be swapped with (based on heap type)
     - If the child violates heap property with the current element:
       - Swap the element with the appropriate child
       - Update index to the child's index
     - Else, break
8. Return the stored root value

#### peek()
1. If heap is empty, return null
2. Return the root element (heap[0])

#### heapify(array)
1. Replace the current heap with the provided array
2. Start from the last non-leaf node (index floor(n/2) - 1)
3. For each node from last non-leaf to root:
   - Call bubbleDown with the current index

#### bubbleUp(index)
1. While index > 0:
   - Calculate parent index
   - If heap[index] violates heap property with heap[parent]:
     - Swap elements at index and parent
     - Set index to parent index
   - Else, break

#### bubbleDown(index)
1. While left child exists:
   - Find the index of the child to potentially swap with
   - If right child exists and should be swapped over left child:
     - Set child index to right child
   - Else:
     - Set child index to left child
   - If heap[index] violates heap property with heap[child]:
     - Swap elements at index and child
     - Set index to child index
   - Else, break

#### merge(other)
1. Create a new heap with the same type and comparison function
2. Add all elements from current heap to new heap
3. Add all elements from other heap to new heap
4. Return the new heap

#### replace(value)
1. If heap is empty, insert the value and return null
2. Store the old root value
3. Replace the root with the new value
4. Call bubbleDown with index 0
5. Return the stored old root value

#### parent(index)
1. Return floor((index - 1) / 2)

#### leftChild(index)
1. Return 2 * index + 1

#### rightChild(index)
1. Return 2 * index + 2

## 5. Repository Integration & Conflict Prevention

### Git Workflow
- Create a new feature branch from `main` using the naming convention: `feature/implement-binary-heap`
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
- Test insertion of values in various orders
- Test extraction of values (should follow heap property)
- Test peek operation to view root without removal
- Test heapify operation to convert array to heap

#### Heap Types
- Test min-heap implementation
- Test max-heap implementation
- Verify heap property is maintained for both types

#### Edge Cases
- Operations on an empty heap
- Operations on a single-element heap
- Inserting duplicate values
- Extracting from a heap with one element

#### Constructor Overloads
- Test constructor with heap type only
- Test constructor with array and heap type
- Verify both constructors produce equivalent results

#### Advanced Operations
- Test merge operation with two heaps
- Test replace operation
- Verify heap property is maintained after advanced operations

#### Utility Methods
- Test `isEmpty()` on empty and non-empty heaps
- Test `size()` returns correct size
- Test `clear()` empties the heap
- Test `clone()` creates an independent copy

#### Performance Tests
- Insert large number of elements
- Extract all elements
- Measure time complexity for operations
- Test heapify with large arrays

#### Correctness Verification
- Verify that extract always returns the min/max element
- Verify that heap property is maintained after each operation
- Verify that heapify produces a valid heap from any array
- Verify that merge produces a valid heap containing all elements

#### Stress Tests
- Random sequence of insertions and extractions
- Verify results against naive array implementation
- Test with large heaps (10^5+ elements)

#### Custom Comparator
- Test with custom comparison function for complex objects
- Verify heap property is maintained with custom comparator

## 7. Definition of Done
- [ ] All code resides in the specified directory and files
- [ ] All methods from the design section are implemented
- [ ] The code passes all linting and formatting checks (`npm run lint`)
- [ ] The entire test suite passes with 100% coverage (`npm run test:prod`)
- [ ] A Pull Request has been opened from the correct feature branch
- [ ] The `README.md` for the data structure has been created with a brief explanation and usage examples
- [ ] The implementation is exported from `src/data-structures/index.ts`
- [ ] The implementation follows the same patterns as existing data structures in the codebase
- [ ] All operations are verified to maintain the heap property
