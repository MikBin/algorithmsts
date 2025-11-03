import { BinaryHeap } from '../binary-heap';

export class PriorityQueue<T> {
  private heap: BinaryHeap<T>;
  constructor(comparator: (a: T, b: T) => number, items: T[] = []) { this.heap = new BinaryHeap(items, comparator); }
  size(): number { return this.heap.size; }
  isEmpty(): boolean { return this.heap.isEmpty(); }
  enqueue(v: T): void { this.heap.add(v); }
  dequeue(): T | null { return this.heap.poll(); }
  peek(): T | null { return this.heap.peek(); }
  clear(): void { this.heap.clear(); }

  toJson(): string {
    return this.heap.toJson();
  }
}
