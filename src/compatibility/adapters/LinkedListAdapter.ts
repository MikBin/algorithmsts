/**
 * LinkedList Adapter for Backward Compatibility
 *
 * Provides a backward-compatible interface for the LinkedList data structure
 * that delegates to the new LinkedList implementation while maintaining
 * the legacy API.
 *
 * @module compatibility/adapters/LinkedListAdapter
 */

import { LinkedList } from '../../data-structures/linked-list/linkedList';
import { DeprecationWarning } from '../utils/DeprecationWarning';

/**
 * Legacy LinkedList interface for backward compatibility
 * @deprecated Use LinkedList from data-structures/linked-list instead
 */
export class LinkedListAdapter<T> {
  private newList: LinkedList<T>;

  /**
   * Creates a new LinkedListAdapter
   * @deprecated Use new LinkedList() from data-structures/linked-list instead
   */
  constructor() {
    DeprecationWarning.warn(
      'LinkedListAdapter',
      'LinkedList from data-structures/linked-list',
      '2.0.0'
    );
    this.newList = new LinkedList<T>();
  }

  /**
   * Returns the number of elements in the list
   * @returns The number of elements
   */
  size(): number {
    return this.newList.size;
  }

  /**
   * Checks if the list is empty
   * @returns True if empty, false otherwise
   */
  isEmpty(): boolean {
    return this.newList.size === 0;
  }

  /**
   * Adds an item to the end of the list
   * @param value The value to add
   */
  add(value: T): void {
    this.newList.add(value);
  }

  /**
   * Deletes the first item from the list
   * @returns The deleted item, or null if empty
   */
  shift(): T | null {
    return this.newList.shift();
  }

  /**
   * Returns the first item in the list
   * @returns The first item, or null if empty
   */
  first(): T | null {
    return this.newList.first();
  }

  /**
   * Returns the last item in the list
   * @returns The last item, or null if empty
   */
  last(): T | null {
    return this.newList.last();
  }

  /**
   * Deletes the last element from the list
   * @returns The deleted item, or null if empty
   */
  pop(): T | null {
    return this.newList.pop();
  }

  /**
   * Inserts a value at a specific index
   * @param index The index to insert at
   * @param value The value to insert
   * @returns True if successful, false otherwise
   */
  insertAt(index: number, value: T): boolean {
    return this.newList.insertAt(index, value);
  }

  /**
   * Retrieves the value at a specific index
   * @param index The index to retrieve
   * @returns The value at the index, or null if out of bounds
   */
  getAt(index: number): T | null {
    return this.newList.getAt(index);
  }

  /**
   * Removes the item at a specific index
   * @param index The index to remove
   * @returns The removed value, or null if out of bounds
   */
  removeAt(index: number): T | null {
    return this.newList.removeAt(index);
  }

  /**
   * Removes the first occurrence of a value from the list
   * @param value The value to remove
   * @returns The removed value, or null if not found
   */
  remove(value: T): T | null {
    return this.newList.remove(value);
  }

  /**
   * Clears the list
   */
  clear(): void {
    this.newList.clear();
  }

  /**
   * Creates a LinkedList from an array
   * @param arr The source array
   * @returns A new LinkedListAdapter
   */
  static fromArray<T>(arr: T[]): LinkedListAdapter<T> {
    const adapter = new LinkedListAdapter<T>();
    for (const item of arr) {
      adapter.add(item);
    }
    return adapter;
  }

  /**
   * Returns an iterator for the list
   * @returns An iterator over the values
   */
  [Symbol.iterator](): Iterator<T> {
    return this.newList.toArray()[Symbol.iterator]();
  }

  /**
   * Returns an array representation of the list
   * @returns An array of all elements
   */
  toArray(): T[] {
    return this.newList.toArray();
  }
}
