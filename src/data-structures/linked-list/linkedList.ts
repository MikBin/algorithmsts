import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';
import { Node } from './interfaces';
import { LinkedListIterator } from './iterator';

/**
 * Doubly linked list implementation
 * @template T The type of elements in the list
 */
export class LinkedList<T> extends BaseDataStructure<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;

  /**
   * Creates a new empty LinkedList
   */
  constructor() {
    super();
    this.head = null;
    this.tail = null;
  }

  /**
   * Returns the number of elements in the list
   * @returns The number of elements in the list
   * @complexity O(1)
   */
  get size(): number {
    return this._size;
  }

  /**
   * Adds an item to the end of the list
   * @param value The value to add
   * @complexity O(1)
   */
  add(value: T): void {
    const node: Node<T> = { value, next: null, prev: null };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this._size++;
  }

  /**
   * Deletes the first item from the list
   * @returns The deleted item, or null if the list is empty
   * @complexity O(1)
   */
  shift(): T | null {
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
      this._size--;
      return value;
    }
    return null;
  }

  /**
   * Returns the first item in the list, or null if the list is empty
   * @returns The first item in the list
   * @complexity O(1)
   */
  first(): T | null {
    return this.head ? this.head.value : null;
  }

  /**
   * Returns the last item in the list, or null if the list is empty
   * @returns The last item in the list
   * @complexity O(1)
   */
  last(): T | null {
    return this.tail ? this.tail.value : null;
  }

  /**
   * Deletes the last element from the list
   * @returns The deleted item, or null if the list is empty
   * @complexity O(1)
   */
  pop(): T | null {
    if (this.tail) {
      const value = this.tail.value;
      this.tail = this.tail.prev;
      if (!this.tail) {
        this.head = null;
      } else {
        this.tail.next = null;
      }
      this._size--;
      return value;
    }
    return null;
  }

  /**
   * Inserts a value at a specific index
   * @param index The index to insert at
   * @param value The value to insert
   * @returns True if the insertion was successful, false otherwise
   * @complexity O(n)
   */
  insertAt(index: number, value: T): boolean {
    if (index < 0 || index > this._size) {
      return false;
    }
    if (index === this._size) {
      this.add(value);
      return true;
    }
    if (index === 0) {
      const node: Node<T> = { value, next: this.head, prev: null };
      if (this.head) {
        this.head.prev = node;
      }
      this.head = node;
      this._size++;
      return true;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    const node: Node<T> = { value, next: current, prev: current!.prev };
    current!.prev!.next = node;
    current!.prev = node;
    this._size++;
    return true;
  }

  /**
   * Retrieves the value at a specific index
   * @param index The index to retrieve
   * @returns The value at the index, or null if the index is out of bounds
   * @complexity O(n)
   */
  getAt(index: number): T | null {
    if (index < 0 || index >= this._size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current ? current.value : null;
  }

  /**
   * Removes the item at a specific index
   * @param index The index to remove
   * @returns The removed value, or null if the index is out of bounds
   * @complexity O(n)
   */
  removeAt(index: number): T | null {
    if (index < 0 || index >= this._size) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this._size - 1) {
      return this.pop();
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    if (current) {
      if (current.prev) {
        current.prev.next = current.next;
      }
      if (current.next) {
        current.next.prev = current.prev;
      }
      this._size--;
      return current.value;
    }
    return null;
  }

  /**
   * Removes the first occurrence of a value from the list
   * @param value The value to remove
   * @returns The removed value, or null if the value is not found
   * @complexity O(n)
   */
  remove(value: T): T | null {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return this.removeAt(index);
      }
      current = current.next;
      index++;
    }
    return null;
  }

  /**
   * Clears the list
   * @complexity O(1)
   */
  clear(): void {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  /**
   * Creates a LinkedList from an array
   * @param arr The source array
   * @returns A new LinkedList
   * @complexity O(n)
   */
  static fromArray<T>(arr: T[]): LinkedList<T> {
    const list = new LinkedList<T>();
    for (const item of arr) {
      list.add(item);
    }
    return list;
  }

  /**
   * Creates an iterator for this data structure
   * @returns An iterator over the elements
   */
  iterator(): IIterator<T> {
    return new LinkedListIterator<T>(this.head);
  }

  /**
   * Checks if the data structure contains a specific element
   * @param element The element to search for
   * @returns True if the element is found, false otherwise
   * @complexity O(n)
   */
  contains(element: T): boolean {
    let current = this.head;
    while (current) {
      if (current.value === element) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  /**
   * Converts the data structure to an array
   * @returns An array containing all elements
   * @complexity O(n)
   */
  toArray(): T[] {
    const arr: T[] = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  /**
   * @notice Converts the LinkedList to a JSON representation.
   * @returns A JSON object representing the list structure.
   */
  toJson(): string {
    return JSON.stringify(this.head, (key, value) => {
      if (key === 'prev') {
        return undefined; // Exclude prev to avoid circular references
      }
      return value;
    });
  }

  /**
   * Checks if the list is empty
   * @returns True if the list is empty, false otherwise
   * @complexity O(1)
   */

}
