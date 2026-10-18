import { type Comparator } from './interfaces';

/**
 * @title Binary Heap
 * @notice A complete binary tree which satisfies the heap property.
 * @dev Depending on the comparator, this can act as a min-heap or a max-heap. By default, it follows min-heap behavior when using `(a, b) => a - b`.
 * @template T The type of elements stored in the heap.
 */
export class BinaryHeap<T> {
  private _heap: T[];
  private readonly _comparator: Comparator<T>;

  /**
   * @notice Creates a new Binary Heap.
   * @param array An initial array of elements to populate the heap.
   * @param comparator The comparison function used to order the elements.
   * @complexity Time: O(n) | Space: O(n) where n is the number of initial elements.
   */
  constructor(array: T[] = [], comparator: Comparator<T>) {
    this._heap = [...array];
    this._comparator = comparator;
    this.heapify();
  }

  /**
   * @notice Rearranges the internal array to satisfy the heap property.
   * @complexity Time: O(n) | Space: O(log n) (recursion depth via _bubbleDown)
   */
  heapify() {
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this._bubbleDown(i);
    }
  }

  _bubbleDown(index: number) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftIndex < this.size &&
      this._comparator(this._heap[leftIndex], this._heap[smallest]) < 0
    ) {
      smallest = leftIndex;
    }

    if (
      rightIndex < this.size &&
      this._comparator(this._heap[rightIndex], this._heap[smallest]) < 0
    ) {
      smallest = rightIndex;
    }

    if (smallest !== index) {
      this._swap(index, smallest);
      this._bubbleDown(smallest);
    }
  }

  _swap(i: number, j: number) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  /**
   * @notice Returns the number of elements in the heap.
   * @returns The number of elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number {
    return this._heap.length;
  }

  /**
   * @notice Checks if the heap is empty.
   * @returns `true` if the heap contains no elements, `false` otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * @notice Returns the root element of the heap without removing it.
   * @returns The root element, or `null` if the heap is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peek(): T | null {
    return this.isEmpty() ? null : this._heap[0];
  }

  /**
   * @notice Adds a new element to the heap.
   * @param value The element to add.
   * @complexity Time: O(log n) | Space: O(1)
   */
  add(value: T) {
    this._heap.push(value);
    this._bubbleUp(this.size - 1);
  }

  _bubbleUp(index: number) {
    let currentIndex = index;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 &&
      this._comparator(this._heap[currentIndex], this._heap[parentIndex]) < 0
    ) {
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  /**
   * @notice Removes and returns the root element from the heap.
   * @returns The root element, or `null` if the heap is empty.
   * @complexity Time: O(log n) | Space: O(log n) (recursion depth via _bubbleDown)
   */
  poll(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    if (this.size === 1) {
      return this._heap.pop()!;
    }

    const root = this._heap[0];
    this._heap[0] = this._heap.pop()!;
    this._bubbleDown(0);

    return root;
  }

  /**
   * @notice Removes all elements from the heap.
   * @complexity Time: O(1) | Space: O(1)
   */
  clear() {
    this._heap = [];
  }

  /**
   * @notice Creates a shallow copy of the heap.
   * @returns A new `BinaryHeap` instance containing the same elements.
   * @complexity Time: O(n) | Space: O(n)
   */
  clone(): BinaryHeap<T> {
    return new BinaryHeap([...this._heap], this._comparator);
  }

  /**
   * @notice Merges another heap into this heap, consuming the other heap.
   * @dev This is a destructive operation on `other`.
   * @param other The other heap to merge.
   * @complexity Time: O(k log(n + k)) | Space: O(1) where n is this heap's size and k is the size of the other heap.
   */
  merge(other: BinaryHeap<T>): void {
    if (other === this) return;
    other._heap.forEach((value) => this.add(value));
    other.clear();
  }

  /**
   * @notice Replaces the root element with a new element and rebalances the heap.
   * @dev This is more efficient than calling `poll()` followed by `add()`.
   * @param value The new element to replace the root.
   * @returns The old root element, or `null` if the heap was empty (in which case the value is simply added).
   * @complexity Time: O(log n) | Space: O(log n) (recursion depth via _bubbleDown)
   */
  replace(value: T): T | null {
    if (this.isEmpty()) {
      this.add(value);
      return null;
    }

    const root = this._heap[0];
    this._heap[0] = value;
    this._bubbleDown(0);

    return root;
  }

  [Symbol.iterator]() {
    let currentIndex = 0;
    return {
      next: () => {
        if (currentIndex < this.size) {
          return {
            value: this._heap[currentIndex++],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  }

  /**
   * @notice Serializes the heap into a JSON string.
   * @returns A string representing the internal array.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify(this._heap);
  }
}
