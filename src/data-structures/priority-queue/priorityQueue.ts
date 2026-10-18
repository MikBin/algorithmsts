import { BinaryHeap } from "../binary-heap";

/**
 * A Priority Queue implementation based on a Binary Heap.
 * Elements are dequeued based on their priority defined by the comparator.
 */
export class PriorityQueue<T> {
  private heap: BinaryHeap<T>;

  /**
   * Creates a new Priority Queue.
   *
   * @param comparator - Comparator function to define priority order.
   * @param items - Optional initial array of items to build the queue.
   * @complexity Time: O(n) | Space: O(n) (where n is the number of initial items, due to heapify)
   */
  constructor(comparator: (a: T, b: T) => number, items: T[] = []) {
    this.heap = new BinaryHeap(items, comparator);
  }

  /**
   * Returns the current number of elements in the priority queue.
   *
   * @returns The size of the queue.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number {
    return this.heap.size;
  }

  /**
   * Checks if the priority queue is empty.
   *
   * @returns True if the queue is empty, false otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean {
    return this.heap.isEmpty();
  }

  /**
   * Enqueues a new element into the priority queue.
   *
   * @param v - The element to enqueue.
   * @complexity Time: O(log n) | Space: O(1) (array capacity growth)
   */
  enqueue(v: T): void {
    this.heap.add(v);
  }

  /**
   * Dequeues and returns the highest priority element from the queue.
   *
   * @returns The highest priority element, or null if the queue is empty.
   * @complexity Time: O(log n) | Space: O(1)
   */
  dequeue(): T | null {
    return this.heap.poll();
  }

  /**
   * Retrieves the highest priority element without removing it.
   *
   * @returns The highest priority element, or null if the queue is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peek(): T | null {
    return this.heap.peek();
  }

  /**
   * Clears all elements from the priority queue.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.heap.clear();
  }

  /**
   * Serializes the priority queue to a JSON string.
   *
   * @returns A JSON string representation of the priority queue.
   * @complexity Time: O(n) | Space: O(n) (JSON string allocation)
   */
  toJson(): string {
    return this.heap.toJson();
  }
}
