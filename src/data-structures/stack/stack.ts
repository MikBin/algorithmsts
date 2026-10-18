import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { ArrayIterator } from "../../core/iterators/ArrayIterator";

/**
 * A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
 * Elements can be inserted and deleted only from one end, called the top of the stack.
 *
 * @complexity Time: O(1) amortized for push/pop | Space: O(n) memory allocation
 */
export class Stack<T> extends BaseDataStructure<T> {
  private data: T[] = [];

  /**
   * Returns the number of elements in the stack.
   *
   * @returns The size of the stack.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number {
    return this.data.length;
  }

  /**
   * Pushes an element onto the top of the stack.
   *
   * @param value The element to add.
   * @complexity Time: O(1) amortized | Space: O(1) expected
   */
  push(value: T): void {
    this.data.push(value);
    this._size = this.data.length;
  }

  /**
   * Removes and returns the element at the top of the stack.
   *
   * @returns The element at the top of the stack, or `null` if the stack is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  pop(): T | null {
    const v = this.data.pop();
    this._size = this.data.length;
    return v ?? null;
  }

  /**
   * Retrieves, but does not remove, the element at the top of the stack.
   *
   * @returns The element at the top of the stack, or `null` if the stack is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peek(): T | null {
    return this.data.length ? this.data[this.data.length - 1] : null;
  }

  /**
   * Clears all elements from the stack.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.data = [];
    this._size = 0;
  }

  /**
   * Returns an iterator over the elements in the stack in LIFO order (top to bottom).
   *
   * @returns An iterator.
   * @complexity Time: O(n) to create a reversed copy of the array | Space: O(n) for the array copy
   */
  iterator(): IIterator<T> {
    return new ArrayIterator(this.data.slice().reverse());
  }

  /**
   * Checks if the stack contains the specified element.
   *
   * @param element The element to check for.
   * @returns `true` if the element is found, `false` otherwise.
   * @complexity Time: O(n) linear scan | Space: O(1)
   */
  contains(element: T): boolean {
    return this.data.includes(element as any);
  }

  /**
   * Converts the stack to an array. The resulting array is in bottom-to-top order.
   *
   * @returns An array containing all elements in the stack.
   * @complexity Time: O(n) where n is the number of elements | Space: O(n) for the output array
   */
  toArray(): T[] {
    return [...this.data];
  }
}
