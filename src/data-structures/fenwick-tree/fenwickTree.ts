import { IFenwickTree } from "./interfaces";

/**
 * Represents a Fenwick Tree (Binary Indexed Tree) for efficient point updates and prefix sum queries.
 */
export class FenwickTree implements IFenwickTree {
  private readonly _tree: number[];
  private readonly _size: number;

  /**
   * Initializes a new Fenwick Tree with the specified size or an array of initial values.
   *
   * @param sizeOrValues The size of the tree, or an array of initial values to build the tree from.
   * @complexity Time: O(n) (if values provided) or O(n) (if size provided due to fill) | Space: O(n)
   */
  constructor(size: number);
  constructor(values: number[]);
  constructor(sizeOrValues: number | number[]) {
    if (typeof sizeOrValues === "number") {
      this._size = sizeOrValues;
      this._tree = new Array(this._size + 1).fill(0);
    } else {
      this._size = sizeOrValues.length;
      this._tree = new Array(this._size + 1).fill(0);
      this.build(sizeOrValues);
    }
  }

  /**
   * Builds the Fenwick Tree from an array of values.
   *
   * @param values The values to build the tree from.
   * @complexity Time: O(n log n) | Space: O(1)
   */
  build(values: number[]): void {
    for (let i = 0; i < this._size; i++) {
      this.update(i, values[i]);
    }
  }

  /**
   * Adds a delta to the value at the given index.
   *
   * @param index The index to update.
   * @param delta The value to add.
   * @complexity Time: O(log n) | Space: O(1)
   */
  update(index: number, delta: number): void {
    if (index < 0 || index >= this._size) {
      throw new Error("Index out of bounds");
    }
    let i = index + 1;
    while (i <= this._size) {
      this._tree[i] += delta;
      i += this.lsb(i);
    }
  }

  /**
   * Sets the value at the given index to a new value.
   *
   * @param index The index to modify.
   * @param value The new value.
   * @complexity Time: O(log n) | Space: O(1)
   */
  set(index: number, value: number): void {
    if (index < 0 || index >= this._size) {
      throw new Error("Index out of bounds");
    }
    const currentValue = this.query(index) - this.query(index - 1);
    const delta = value - currentValue;
    this.update(index, delta);
  }

  /**
   * Queries the prefix sum from 0 to the given index.
   *
   * @param index The end index for the prefix sum.
   * @returns The prefix sum.
   * @complexity Time: O(log n) | Space: O(1)
   */
  query(index: number): number {
    if (index < -1 || index >= this._size) {
      throw new Error("Index out of bounds");
    }
    let sum = 0;
    let i = index + 1;
    while (i > 0) {
      sum += this._tree[i];
      i -= this.lsb(i);
    }
    return sum;
  }

  /**
   * Queries the sum in the given range [left, right].
   *
   * @param left The start index of the range.
   * @param right The end index of the range.
   * @returns The sum of the range.
   * @complexity Time: O(log n) | Space: O(1)
   */
  rangeQuery(left: number, right: number): number {
    if (left < 0 || right < 0 || left >= this._size || right >= this._size || left > right) {
      throw new Error("Invalid range");
    }
    return this.query(right) - this.query(left - 1);
  }

  /**
   * Finds the index with the kth largest prefix sum (binary lifting).
   *
   * @param k The target prefix sum value.
   * @returns The index where the prefix sum reaches or exceeds k.
   * @complexity Time: O(log n) | Space: O(1)
   */
  findKth(k: number): number {
    let index = 0;
    let bitMask = 1;
    while (bitMask << 1 <= this._size) {
      bitMask <<= 1;
    }

    while (bitMask > 0) {
      const nextIndex = index + bitMask;
      if (nextIndex <= this._size && this._tree[nextIndex] < k) {
        k -= this._tree[nextIndex];
        index = nextIndex;
      }
      bitMask >>= 1;
    }
    return index;
  }

  /**
   * Alias for findKth, finding the index with the target prefix sum.
   *
   * @param target The target prefix sum.
   * @returns The corresponding index.
   * @complexity Time: O(log n) | Space: O(1)
   */
  findPrefixSum(target: number): number {
    return this.findKth(target);
  }

  /**
   * Gets the logical size of the tree (number of elements).
   *
   * @returns The size.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number {
    return this._size;
  }

  /**
   * Checks if the tree is empty.
   *
   * @returns True if empty, false otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean {
    return this._size === 0;
  }

  /**
   * Clears the tree by resetting all values to 0.
   *
   * @complexity Time: O(n) | Space: O(1)
   */
  clear(): void {
    this._tree.fill(0);
  }

  /**
   * Clones the Fenwick tree.
   *
   * @returns A new FenwickTree instance with identical contents.
   * @complexity Time: O(n) | Space: O(n)
   */
  clone(): FenwickTree {
    const newTree = new FenwickTree(this._size);
    for (let i = 0; i < this._tree.length; i++) {
      newTree._tree[i] = this._tree[i];
    }
    return newTree;
  }

  private lsb(index: number): number {
    return index & -index;
  }

  /**
   * Serializes the internal tree state to a JSON string.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify(this._tree);
  }
}
