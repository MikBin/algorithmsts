/**
 * A Sparse Set is a data structure that represents a set of integers from a bounded universe.
 * It provides O(1) expected time for addition, deletion, and membership testing,
 * and allows for fast clearing and iteration.
 *
 * @complexity Time: O(1) for most operations | Space: O(u) where u is the capacity (universe size)
 */
export class SparseSet {
  private sparse: number[];
  private dense: number[] = [];
  private _size = 0;

  /**
   * Constructs a new Sparse Set with a given maximum capacity.
   *
   * @param capacity The maximum allowed integer value (universe size) plus one.
   * @complexity Time: O(u) where u is the capacity (array allocation and initialization) | Space: O(u)
   */
  constructor(private capacity: number) { if (capacity<=0) throw new Error('capacity must be > 0'); this.sparse = new Array(capacity).fill(-1); }

  /**
   * Returns the number of elements currently in the set.
   *
   * @returns The number of elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number { return this._size; }

  /**
   * Checks if a given integer is present in the set.
   *
   * @param x The integer to check for.
   * @returns `true` if the integer is in the set, `false` otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  has(x: number): boolean { return x>=0 && x<this.capacity && this.sparse[x] !== -1 && this.sparse[x] < this._size && this.dense[this.sparse[x]] === x; }

  /**
   * Adds an integer to the set.
   *
   * @param x The integer to add.
   * @returns `true` if added successfully, `false` if it was out of bounds or already present.
   * @complexity Time: O(1) amortized | Space: O(1)
   */
  add(x: number): boolean { if (x<0 || x>=this.capacity || this.has(x)) return false; this.sparse[x] = this._size; this.dense[this._size] = x; this._size++; return true; }

  /**
   * Removes an integer from the set.
   *
   * @param x The integer to remove.
   * @returns `true` if the integer was removed, `false` if it was not in the set.
   * @complexity Time: O(1) | Space: O(1)
   */
  delete(x: number): boolean { if (!this.has(x)) return false; const i = this.sparse[x]; const y = this.dense[this._size-1]; this.dense[i] = y; this.sparse[y] = i; this._size--; this.sparse[x] = -1; return true; }

  /**
   * Clears all elements from the set.
   *
   * @complexity Time: O(u) where u is the capacity (due to sparse array fill) | Space: O(1)
   */
  clear(): void { this._size = 0; this.sparse.fill(-1); this.dense = []; }

  /**
   * Returns an array containing all elements currently in the set.
   *
   * @returns An array of the elements.
   * @complexity Time: O(n) where n is the number of elements in the set | Space: O(n) for the output array
   */
  values(): number[] { return this.dense.slice(0, this._size); }
}
