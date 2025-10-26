import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';
import { SkipNode, BinaryComparisonRoutine } from './interfaces';
import { SkipListIterator } from './iterator';

/**
 * @internal
 * Determines whether to advance to the next level in a skip list.
 * @param P - The probability of returning true.
 * @returns A boolean indicating whether to advance.
 */
const flipCoin = (P: number = 0.5): boolean => Math.random() < P;

/**
 * @internal
 * Generates a random level for a new node in the skip list.
 * @param maxLevel - The maximum level allowed in the skip list.
 * @returns A random level for the new node.
 */
const getLevel = (maxLevel: number): number => {
  let level: number = 1;
  while (flipCoin() && level < maxLevel) {
    level++;
  }
  return level;
};

/**
 * @internal
 * The default comparison function for skip list values.
 * @param x - The first value.
 * @param y - The second value.
 * @returns 1 if x > y, -1 if x < y, and 0 if x === y.
 */
const defaultComparisonFn: BinaryComparisonRoutine<any> = (x, y) => {
  if (x > y) return 1;
  if (x < y) return -1;
  return 0;
};

/**
 * Skip list implementation - a probabilistic data structure for fast search, insertion, and deletion
 * @template T The type of elements in the skip list
 */
export class SkipList<T> extends BaseDataStructure<T> {
  private head: SkipNode<T>;
  private updateNodes: SkipNode<T>[];
  private maxLevel: number;
  private comparisonFn: BinaryComparisonRoutine<T>;

  /**
   * Creates a new SkipList
   * @param maxLevel The maximum level of the skip list
   * @param dummyRootVal The value for the dummy root node
   * @param comparisonFn The function to use to compare values
   */
  constructor(
    maxLevel: number,
    dummyRootVal: T,
    comparisonFn: BinaryComparisonRoutine<T> = defaultComparisonFn,
  ) {
    super();
    this.maxLevel = maxLevel;
    this.comparisonFn = comparisonFn;
    this.head = {
      pointers: Array<SkipNode<T>>(this.maxLevel + 1),
      value: dummyRootVal,
      count: 0,
    };
    this.updateNodes = Array<SkipNode<T>>(this.maxLevel + 1);
    this._size = 0;
  }

  /**
   * Returns the number of elements in the skip list
   * @returns The number of elements in the skip list
   * @complexity O(1)
   */
  get size(): number {
    return this._size;
  }

  /**
   * Inserts a value into the skip list
   * If the value already exists, its count is incremented
   * @param val The value to insert
   * @complexity O(log n) average case
   */
  add(val: T): void {
    let currentNode = this.head;

    // Find the position to insert the new node
    for (let i = this.maxLevel; i >= 1; i--) {
      while (currentNode.pointers[i] && this.comparisonFn(currentNode.pointers[i]!.value, val) < 0) {
        currentNode = currentNode.pointers[i]!;
      }
      this.updateNodes[i] = currentNode;
    }

    currentNode = currentNode.pointers[1]!;

    // If the node already exists, increment its counter
    if (currentNode && this.comparisonFn(currentNode.value, val) === 0) {
      currentNode.count++;
    } else {
      // Otherwise, create a new node and insert it
      const newLevel = getLevel(this.maxLevel);
      const newNode: SkipNode<T> = {
        pointers: Array<SkipNode<T>>(newLevel + 1),
        value: val,
        count: 1,
      };
      for (let i = 1; i <= newLevel; i++) {
        newNode.pointers[i] = this.updateNodes[i].pointers[i];
        this.updateNodes[i].pointers[i] = newNode;
      }
      this._size++;
    }
  }

  /**
   * Removes a value from the skip list
   * @param val The value to remove
   * @complexity O(log n) average case
   */
  remove(val: T): void {
    let currentNode = this.head;

    // Find the node to remove
    for (let i = this.maxLevel; i >= 1; i--) {
      while (currentNode.pointers[i] && this.comparisonFn(currentNode.pointers[i]!.value, val) < 0) {
        currentNode = currentNode.pointers[i]!;
      }
      this.updateNodes[i] = currentNode;
    }

    currentNode = currentNode.pointers[1]!;

    // If the node is found, remove it
    if (currentNode && this.comparisonFn(currentNode.value, val) === 0) {
      for (let i = 1; i <= this.maxLevel; i++) {
        if (this.updateNodes[i].pointers[i] === currentNode) {
          this.updateNodes[i].pointers[i] = currentNode.pointers[i];
        }
      }
      this._size--;
    }
  }

  /**
   * Clears all elements from the skip list
   * @complexity O(1)
   */
  clear(): void {
    this.head.pointers = Array<SkipNode<T>>(this.maxLevel + 1);
    this._size = 0;
  }

  /**
   * Creates an iterator for this data structure
   * @returns An iterator over the elements
   */
  iterator(): IIterator<T> {
    return new SkipListIterator<T>(this.head);
  }

  /**
   * Checks if the data structure contains a specific element
   * @param element The element to search for
   * @returns True if the element is found, false otherwise
   * @complexity O(log n) average case
   */
  contains(element: T): boolean {
    let currentNode = this.head;

    // Search for the node
    for (let i = this.maxLevel; i >= 1; i--) {
      while (currentNode.pointers[i] && this.comparisonFn(currentNode.pointers[i]!.value, element) < 0) {
        currentNode = currentNode.pointers[i]!;
      }
    }

    currentNode = currentNode.pointers[1]!;

    return currentNode !== undefined && this.comparisonFn(currentNode.value, element) === 0;
  }

  /**
   * Converts the data structure to an array
   * @returns An array containing all elements
   * @complexity O(n)
   */
  toArray(): T[] {
    const result: T[] = [];
    let currentNode = this.head.pointers[1];
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.pointers[1];
    }
    return result;
  }

  /**
   * Legacy alias for add
   */
  insert(val: T): void {
    this.add(val);
  }

  /**
   * Find a value and return it, or null if not present
   */
  find(val: T): T | null {
    let currentNode = this.head;
    for (let i = this.maxLevel; i >= 1; i--) {
      while (currentNode.pointers[i] && this.comparisonFn(currentNode.pointers[i]!.value, val) < 0) {
        currentNode = currentNode.pointers[i]!;
      }
    }
    currentNode = currentNode.pointers[1]!;
    return currentNode && this.comparisonFn(currentNode.value, val) === 0 ? currentNode.value : null;
  }
}
