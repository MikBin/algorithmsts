import { type Comparator } from './interfaces';

export class BinaryHeap<T> {
  private _heap: T[];
  private readonly _comparator: Comparator<T>;

  constructor(array: T[] = [], comparator: Comparator<T>) {
    this._heap = [...array];
    this._comparator = comparator;
    this.heapify();
  }

  heapify() {
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this._bubbleDown(i);
    }
  }

  _bubbleDown(index: number) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let largest = index;

    if (
      leftIndex < this.size &&
      this._comparator(this._heap[leftIndex], this._heap[largest]) > 0
    ) {
      largest = leftIndex;
    }

    if (
      rightIndex < this.size &&
      this._comparator(this._heap[rightIndex], this._heap[largest]) > 0
    ) {
      largest = rightIndex;
    }

    if (largest !== index) {
      this._swap(index, largest);
      this._bubbleDown(largest);
    }
  }

  _swap(i: number, j: number) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  get size(): number {
    return this._heap.length;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  peek(): T | null {
    return this.isEmpty() ? null : this._heap[0];
  }

  add(value: T) {
    this._heap.push(value);
    this._bubbleUp(this.size - 1);
  }

  _bubbleUp(index: number) {
    let currentIndex = index;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 &&
      this._comparator(this._heap[currentIndex], this._heap[parentIndex]) > 0
    ) {
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

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

  clear() {
    this._heap = [];
  }

  clone(): BinaryHeap<T> {
    return new BinaryHeap([...this._heap], this._comparator);
  }

  merge(other: BinaryHeap<T>): BinaryHeap<T> {
    const newHeap = this.clone();
    other._heap.forEach((value) => newHeap.add(value));
    return newHeap;
  }

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
}
