import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { ArrayIterator } from "../../core/iterators/ArrayIterator";

/**
 * Represents an Array List (dynamic array) data structure.
 */
export class ArrayList<T> extends BaseDataStructure<T> {
  private data: (T | undefined)[] = new Array(4);
  private len = 0;

  /**
   * Gets the number of elements in the array list.
   *
   * @returns The number of elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number {
    return this.len;
  }
  private ensure(cap: number) {
    if (cap <= this.data.length) return;
    let n = this.data.length;
    while (n < cap) n <<= 1;
    const nd = new Array<T | undefined>(n);
    for (let i = 0; i < this.len; i++) nd[i] = this.data[i];
    this.data = nd;
  }

  /**
   * Adds an element to the end of the array list.
   *
   * @param v The element to add.
   * @complexity Time: O(1) amortized | Space: O(1)
   */
  add(v: T): void {
    this.ensure(this.len + 1);
    this.data[this.len++] = v;
    this._size = this.len;
  }

  /**
   * Inserts an element at the specified index.
   *
   * @param idx The index at which to insert.
   * @param v The element to insert.
   * @returns True if inserted successfully, false if index is out of bounds.
   * @complexity Time: O(n) | Space: O(1)
   */
  insertAt(idx: number, v: T): boolean {
    if (idx < 0 || idx > this.len) return false;
    this.ensure(this.len + 1);
    for (let i = this.len; i > idx; i--) this.data[i] = this.data[i - 1];
    this.data[idx] = v;
    this.len++;
    this._size = this.len;
    return true;
  }

  /**
   * Gets the element at the specified index.
   *
   * @param idx The index to access.
   * @returns The element at the given index, or null if out of bounds.
   * @complexity Time: O(1) | Space: O(1)
   */
  getAt(idx: number): T | null {
    if (idx < 0 || idx >= this.len) return null;
    return this.data[idx] as T;
  }

  /**
   * Sets the element at the specified index.
   *
   * @param idx The index to modify.
   * @param v The new value.
   * @returns True if successful, false if index is out of bounds.
   * @complexity Time: O(1) | Space: O(1)
   */
  setAt(idx: number, v: T): boolean {
    if (idx < 0 || idx >= this.len) return false;
    this.data[idx] = v;
    return true;
  }

  /**
   * Removes and returns the element at the specified index.
   *
   * @param idx The index of the element to remove.
   * @returns The removed element, or null if index is out of bounds.
   * @complexity Time: O(n) | Space: O(1)
   */
  removeAt(idx: number): T | null {
    if (idx < 0 || idx >= this.len) return null;
    const v = this.data[idx] as T;
    for (let i = idx; i < this.len - 1; i++) this.data[i] = this.data[i + 1];
    this.data[--this.len] = undefined;
    this._size = this.len;
    return v;
  }

  /**
   * Clears the array list.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.data = new Array(4);
    this.len = 0;
    this._size = 0;
  }

  /**
   * Returns an iterator over the elements in this list.
   *
   * @returns The iterator.
   * @complexity Time: O(n) | Space: O(n)
   */
  iterator(): IIterator<T> {
    return new ArrayIterator(this.toArray());
  }

  /**
   * Checks whether the given element is in the list.
   *
   * @param e The element to find.
   * @returns True if present, false otherwise.
   * @complexity Time: O(n) | Space: O(n)
   */
  contains(e: T): boolean {
    return this.toArray().includes(e);
  }

  /**
   * Converts the list to a standard JS array.
   *
   * @returns An array containing all elements in the list.
   * @complexity Time: O(n) | Space: O(n)
   */
  toArray(): T[] {
    const out: T[] = new Array<T>(this.len);
    for (let i = 0; i < this.len; i++) out[i] = this.data[i] as T;
    return out;
  }

  /**
   * Serializes the array list to a JSON string.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify(this.toArray());
  }
}
