# Binary Heap

A Binary Heap is a complete binary tree that satisfies the heap property. In a max-heap, for any given node C, the value of C is less than or equal to the value of its parent. In a min-heap, the value of C is greater than or equal to the value of its parent. This implementation can be used as either a min-heap or a max-heap by providing a custom comparator function.

## Usage

### Creating a Heap

You can create a new heap from an array or as an empty heap. You must provide a comparator function to specify whether it should be a min-heap or a max-heap.

#### Max-Heap
```typescript
import { BinaryHeap } from './binaryHeap';

const maxComparator = (a: number, b: number) => a - b;
const heap = new BinaryHeap([3, 1, 4, 1, 5, 9, 2, 6], maxComparator);
```

#### Min-Heap
```typescript
import { BinaryHeap } from './binaryHeap';

const minComparator = (a: number, b: number) => b - a;
const heap = new BinaryHeap([3, 1, 4, 1, 5, 9, 2, 6], minComparator);
```

### Methods

- `add(value: T)`: Adds a new value to the heap.
- `poll(): T | null`: Removes and returns the root element of the heap.
- `peek(): T | null`: Returns the root element of the heap without removing it.
- `isEmpty(): boolean`: Returns `true` if the heap is empty, `false` otherwise.
- `size`: Returns the number of elements in the heap.
- `clear()`: Removes all elements from the heap.
- `clone(): BinaryHeap<T>`: Creates a new heap with the same elements.
- `merge(other: BinaryHeap<T>): BinaryHeap<T>`: Merges two heaps into a new heap.
- `replace(value: T): T | null`: Replaces the root element with a new value and returns the old root.
