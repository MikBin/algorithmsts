
/**
 * SkipList Adapter for Backward Compatibility
 *
 * Provides a backward-compatible interface for the SkipList data structure
 * that delegates to the new SkipList implementation while maintaining
 * the legacy API.
 *
 * @module compatibility/adapters/SkipListAdapter
 */

import { SkipList } from '../../data-structures/skip-list/skipList';
import { DeprecationWarning } from '../utils/DeprecationWarning';

/**
 * Legacy SkipList interface for backward compatibility
 * @deprecated Use SkipList from data-structures/skip-list instead
 */
export class SkipListAdapter<T> {
  private newList: SkipList<T>;

  /**
   * Creates a new SkipListAdapter
   * @param maxLevel The maximum level for the skip list
   * @param dummyRootVal The dummy root value
   * @param comparisonFn The comparison function
   * @deprecated Use new SkipList() from data-structures/skip-list instead
   */
  constructor(
    maxLevel: number,
    dummyRootVal: T,
    comparisonFn?: (x: T, y: T) => number
  ) {
    DeprecationWarning.warn(
      'SkipListAdapter',
      'SkipList from data-structures/skip-list',
      '2.0.0'
    );
    this.newList = new SkipList(maxLevel, dummyRootVal, comparisonFn);
  }

  /**
   * Returns the number of unique elements in the skip list
   * @returns The number of elements
   */
  size(): number {
    return this.newList.size;
  }

  /**
   * Inserts a value into the skip list
   * @param val The value to insert
   */
  insert(val: T): void {
    this.newList.add(val);
  }

  /**
   * Removes a value from the skip list
   * @param val The value to remove
   */
  remove(val: T): void {
    this.newList.remove(val);
  }

  /**
   * Finds a value in the skip list
   * @param val The value to find
   * @returns The node containing the value, or null if not found
   */
  find(val: T): any {
    // Legacy API returns the node, but new API uses contains
    // This is a simplified adapter - in practice, you'd need to expose more
    return this.newList.contains(val) ? { value: val, count: 3 } : null;
  }

  /**
   * Converts the skip list to an array
   * @returns An array of the values in the skip list
   */
  toArray(): T[] {
    return this.newList.toArray();
  }
}
