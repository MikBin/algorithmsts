import { IIterator } from "../../core/interfaces/IIterator";
import { ArrayIterator } from "../../core/iterators/ArrayIterator";

/**
 * @title Circular Buffer
 * @notice A fixed-size array-based queue where the end connects back to the beginning.
 * @dev Often used for buffering streams of data where old data is overwritten or explicit capacity limits are needed.
 * @template T The type of elements stored in the buffer.
 */
export class CircularBuffer<T> {
  private buf: (T | undefined)[];
  private _size = 0;
  private head = 0;
  private tail = 0;

  /**
   * @notice Constructs a new Circular Buffer.
   * @param capacity The maximum number of elements the buffer can hold.
   * @complexity Time: O(n) | Space: O(n) where n is the capacity.
   */
  constructor(private capacity: number) {
    if (capacity <= 0) throw new Error("capacity must be > 0");
    this.buf = new Array(capacity);
  }

  /**
   * @notice Gets the number of elements in the buffer.
   * @returns The number of elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number {
    return this._size;
  }

  /**
   * @notice Checks if the buffer is full.
   * @returns `true` if the buffer has reached capacity, `false` otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isFull(): boolean {
    return this._size === this.capacity;
  }

  /**
   * @notice Checks if the buffer is empty.
   * @returns `true` if the buffer contains no elements, `false` otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean {
    return this._size === 0;
  }

  /**
   * @notice Pushes an element to the back of the buffer.
   * @param value The element to add.
   * @throws Error if the buffer is full.
   * @complexity Time: O(1) | Space: O(1)
   */
  pushBack(value: T): void {
    if (this.isFull()) throw new Error("Buffer full");
    this.buf[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity;
    this._size++;
  }
  /**
   * @notice Pushes an element to the front of the buffer.
   * @param value The element to add.
   * @throws Error if the buffer is full.
   * @complexity Time: O(1) | Space: O(1)
   */
  pushFront(value: T): void {
    if (this.isFull()) throw new Error("Buffer full");
    this.head = (this.head - 1 + this.capacity) % this.capacity;
    this.buf[this.head] = value;
    this._size++;
  }
  /**
   * @notice Removes and returns the element at the front of the buffer.
   * @returns The front element, or `null` if empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  popFront(): T | null {
    if (this.isEmpty()) return null;
    const v = this.buf[this.head];
    this.buf[this.head] = undefined;
    this.head = (this.head + 1) % this.capacity;
    this._size--;
    return v ?? null;
  }
  /**
   * @notice Removes and returns the element at the back of the buffer.
   * @returns The back element, or `null` if empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  popBack(): T | null {
    if (this.isEmpty()) return null;
    this.tail = (this.tail - 1 + this.capacity) % this.capacity;
    const v = this.buf[this.tail];
    this.buf[this.tail] = undefined;
    this._size--;
    return v ?? null;
  }

  /**
   * @notice Returns the element at the front of the buffer without removing it.
   * @returns The front element, or `null` if empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peekFront(): T | null {
    return this.isEmpty() ? null : (this.buf[this.head] as T);
  }

  /**
   * @notice Returns the element at the back of the buffer without removing it.
   * @returns The back element, or `null` if empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peekBack(): T | null {
    return this.isEmpty() ? null : (this.buf[(this.tail - 1 + this.capacity) % this.capacity] as T);
  }

  /**
   * @notice Clears all elements from the buffer.
   * @complexity Time: O(n) | Space: O(n) where n is the capacity (due to reallocation).
   */
  clear(): void {
    this.buf = new Array(this.capacity);
    this.head = this.tail = 0;
    this._size = 0;
  }
  /**
   * @notice Converts the buffer to an array.
   * @returns An array containing all elements in the buffer.
   * @complexity Time: O(n) | Space: O(n) where n is the current size.
   */
  toArray(): T[] {
    const out: T[] = [];
    for (let i = 0; i < this._size; i++) out.push(this.buf[(this.head + i) % this.capacity] as T);
    return out;
  }

  /**
   * @notice Returns an iterator over the elements in the buffer.
   * @returns An IIterator instance.
   * @complexity Time: O(n) | Space: O(n) where n is the current size.
   */
  iterator(): IIterator<T> {
    return new ArrayIterator(this.toArray());
  }

  /**
   * @notice Serializes the buffer into a JSON string.
   * @returns A string representing the JSON array of elements.
   * @complexity Time: O(n) | Space: O(n) where n is the current size.
   */
  toJson(): string {
    return JSON.stringify(this.toArray());
  }
}
