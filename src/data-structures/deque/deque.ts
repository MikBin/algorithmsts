import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { ArrayIterator } from "../../core/iterators/ArrayIterator";
import { CircularBuffer } from "../circular-buffer";

/**
 * @title Double-Ended Queue (Deque)
 * @notice A linear data structure that supports adding and removing elements from both ends.
 * @dev Implemented using a CircularBuffer for O(1) operations.
 * @template T The type of elements stored in the deque.
 */
export class Deque<T> extends BaseDataStructure<T> {
  private buf: CircularBuffer<T>;

  /**
   * @notice Constructs a new Deque.
   * @param capacity The maximum capacity.
   * @complexity Time: O(n) | Space: O(n) where n is the capacity.
   */
  constructor(capacity = 1024) {
    super();
    this.buf = new CircularBuffer<T>(capacity);
  }
  /**
   * @notice Gets the number of elements in the deque.
   * @returns The number of elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number {
    return this.buf.size;
  }

  /**
   * @notice Adds an element to the front of the deque.
   * @param v The element to add.
   * @complexity Time: O(1) | Space: O(1)
   */
  addFirst(v: T): void {
    this.buf.pushFront(v);
    this._size = this.buf.size;
  }
  /**
   * @notice Adds an element to the back of the deque.
   * @param v The element to add.
   * @complexity Time: O(1) | Space: O(1)
   */
  addLast(v: T): void {
    this.buf.pushBack(v);
    this._size = this.buf.size;
  }

  /**
   * @notice Removes and returns the element at the front of the deque.
   * @returns The front element, or `null` if empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  removeFirst(): T | null {
    const v = this.buf.popFront();
    this._size = this.buf.size;
    return v;
  }
  /**
   * @notice Removes and returns the element at the back of the deque.
   * @returns The back element, or `null` if empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  removeLast(): T | null {
    const v = this.buf.popBack();
    this._size = this.buf.size;
    return v;
  }

  /**
   * @notice Returns the element at the front of the deque without removing it.
   * @returns The front element, or `null` if empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peekFirst(): T | null {
    return this.buf.peekFront();
  }
  /**
   * @notice Returns the element at the back of the deque without removing it.
   * @returns The back element, or `null` if empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peekLast(): T | null {
    return this.buf.peekBack();
  }

  /**
   * @notice Clears all elements from the deque.
   * @complexity Time: O(n) | Space: O(n) where n is the capacity (due to reallocation in CircularBuffer).
   */
  clear(): void {
    this.buf.clear();
    this._size = 0;
  }
  /**
   * @notice Returns an iterator over the elements in the deque.
   * @returns An IIterator instance.
   * @complexity Time: O(n) | Space: O(n) where n is the current size.
   */
  iterator(): IIterator<T> {
    return new ArrayIterator(this.buf.toArray());
  }

  /**
   * @notice Checks if the deque contains a specific element.
   * @param e The element to search for.
   * @returns `true` if the element is found, `false` otherwise.
   * @complexity Time: O(n) | Space: O(n) where n is the current size.
   */
  contains(e: T): boolean {
    return this.buf.toArray().includes(e as any);
  }

  /**
   * @notice Converts the deque to an array.
   * @returns An array containing all elements in the deque.
   * @complexity Time: O(n) | Space: O(n) where n is the current size.
   */
  toArray(): T[] {
    return this.buf.toArray();
  }

  /**
   * @notice Serializes the deque into a JSON string.
   * @returns A string representing the JSON array of elements.
   * @complexity Time: O(n) | Space: O(n) where n is the current size.
   */
  toJson(): string {
    return this.buf.toJson();
  }
}
