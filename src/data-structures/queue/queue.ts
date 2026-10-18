import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { ArrayIterator } from "../../core/iterators/ArrayIterator";

/**
 * A standard FIFO Queue data structure.
 * Uses a dynamic array with a head pointer to achieve O(1) dequeues without unshifting,
 * periodically slicing the array to reclaim memory.
 */
export class Queue<T> extends BaseDataStructure<T> {
  private data: T[] = [];
  private head = 0;

  /**
   * Returns the current number of elements in the queue.
   *
   * @returns The size of the queue.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number {
    return this.data.length - this.head;
  }

  /**
   * Enqueues a new element to the back of the queue.
   *
   * @param value - The element to enqueue.
   * @complexity Time: O(1) amortized | Space: O(1) (array capacity growth)
   */
  enqueue(value: T): void {
    this.data.push(value);
    this._size = this.size;
  }

  /**
   * Dequeues and returns the element at the front of the queue.
   * Reclaims array space occasionally to prevent unbounded memory growth.
   *
   * @returns The front element, or null if the queue is empty.
   * @complexity Time: O(1) amortized | Space: O(1)
   */
  dequeue(): T | null {
    if (this.size === 0) return null;
    const v = this.data[this.head++];
    if (this.head > 50 && this.head * 2 > this.data.length) {
      this.data = this.data.slice(this.head);
      this.head = 0;
    }
    this._size = this.size;
    return v ?? null;
  }

  /**
   * Retrieves the element at the front of the queue without removing it.
   *
   * @returns The front element, or null if the queue is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peek(): T | null {
    return this.size ? this.data[this.head] : null;
  }

  /**
   * Clears all elements from the queue.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.data = [];
    this.head = 0;
    this._size = 0;
  }

  /**
   * Returns an iterator over the elements in the queue.
   *
   * @returns An iterator over the queue elements.
   * @complexity Time: O(n) (toArray copy) | Space: O(n) (iterator array allocation)
   */
  iterator(): IIterator<T> {
    return new ArrayIterator(this.toArray());
  }

  /**
   * Checks if the queue contains the specified element.
   *
   * @param element - The element to search for.
   * @returns True if the element is found, false otherwise.
   * @complexity Time: O(n) | Space: O(n) (toArray copy)
   */
  contains(element: T): boolean {
    return this.toArray().includes(element as any);
  }

  /**
   * Returns a copy of the elements currently in the queue as an array.
   *
   * @returns A new array containing the queue elements.
   * @complexity Time: O(n) | Space: O(n) (copy allocation)
   */
  toArray(): T[] {
    return this.data.slice(this.head);
  }

  /**
   * Serializes the queue to a JSON string.
   *
   * @returns A JSON string representation of the queue.
   * @complexity Time: O(n) | Space: O(n) (JSON string allocation)
   */
  toJson(): string {
    return JSON.stringify(this.toArray());
  }
}
