type Key = number;

function upperSqrt(u: number) {
  return 1 << Math.ceil(Math.log2(Math.sqrt(u)));
}
function lowerSqrt(u: number) {
  return 1 << Math.floor(Math.log2(Math.sqrt(u)));
}
function high(x: number, u: number) {
  const l = lowerSqrt(u);
  return Math.floor(x / l);
}
function low(x: number, u: number) {
  const l = lowerSqrt(u);
  return x % l;
}
function _index(h: number, l: number, u: number) {
  const lS = lowerSqrt(u);
  return h * lS + l;
}

/**
 * A van Emde Boas (vEB) tree is a tree data structure which implements an associative array with m-bit integer keys.
 * It performs all operations in O(log m) time, or equivalently O(log log U) time, where U is the universe size.
 *
 * @complexity Time: O(log log U) for most operations | Space: O(U) memory allocation
 */
export class VanEmdeBoasTree {
  private u: number;
  private min: Key | null = null;
  private max: Key | null = null;
  private summary: VanEmdeBoasTree | null = null;
  private cluster: (VanEmdeBoasTree | null)[] = [];

  /**
   * Constructs a new van Emde Boas tree.
   *
   * @param universeSize The maximum number of elements the tree can hold (universe size). Will be rounded up to the next power of 2.
   * @complexity Time: O(U) where U is the universe size (for cluster allocation) | Space: O(U)
   */
  constructor(universeSize: number) {
    this.u = 1 << Math.ceil(Math.log2(universeSize));
    if (this.u > 2) {
      const highS = upperSqrt(this.u);
      this.summary = new VanEmdeBoasTree(highS);
      this.cluster = Array.from({ length: highS }, () => new VanEmdeBoasTree(lowerSqrt(this.u)));
    }
  }

  /**
   * Returns the universe size (U) of the tree.
   *
   * @returns The universe size.
   * @complexity Time: O(1) | Space: O(1)
   */
  getUniverse(): number {
    return this.u;
  }

  /**
   * Returns the minimum element currently in the tree.
   *
   * @returns The minimum element, or `null` if the tree is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  getMin(): Key | null {
    return this.min;
  }

  /**
   * Returns the maximum element currently in the tree.
   *
   * @returns The maximum element, or `null` if the tree is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  getMax(): Key | null {
    return this.max;
  }

  /**
   * Checks if a given key is a member of the tree.
   *
   * @param x The key to check for.
   * @returns `true` if the key is in the tree, `false` otherwise.
   * @complexity Time: O(log log U) where U is the universe size | Space: O(log log U) recursion depth
   */
  member(x: Key): boolean {
    if (x === this.min || x === this.max) return this.min !== null;
    if (this.u <= 2) return false;
    const h = high(x, this.u),
      l = low(x, this.u);
    return this.cluster[h]!.member(l);
  }

  /**
   * Inserts an element into an empty tree. Used internally.
   *
   * @param x The element to insert.
   * @complexity Time: O(1) | Space: O(1)
   */
  insertEmpty(x: Key): void {
    this.min = this.max = x;
  }

  /**
   * Inserts an element into the tree.
   * Duplicate elements are ignored (no-op).
   *
   * @param x The element to insert.
   * @complexity Time: O(log log U) where U is the universe size | Space: O(log log U) recursion depth
   */
  insert(x: Key): void {
    if (x < 0 || x >= this.u) throw new Error('Out of bounds');
    if (this.member(x)) return;
    if (this.min === null) {
      this.insertEmpty(x);
      return;
    }
    if (x < this.min) {
      const t = this.min;
      this.min = x;
      x = t;
    }
    if (this.u > 2) {
      const h = high(x, this.u),
        l = low(x, this.u);
      if (this.cluster[h]!.getMin() === null) {
        this.summary!.insert(h);
        this.cluster[h]!.insertEmpty(l);
      } else {
        this.cluster[h]!.insert(l);
      }
    }
    if (x > (this.max as number)) this.max = x;
  }


  /**
   * Returns the successor of a given key.
   *
   * @param x The key to find the successor for.
   * @returns The successor key, or `null` if none exists.
   * @complexity Time: O(log log U) | Space: O(log log U)
   */
  successor(x: Key): Key | null {
    if (this.u === 2) {
      if (x === 0 && this.max === 1) return 1;
      return null;
    }
    if (this.min !== null && x < this.min) return this.min;
    const maxLow = this.cluster[high(x, this.u)]?.getMax();
    if (maxLow !== null && maxLow !== undefined && low(x, this.u) < maxLow) {
      const offset = this.cluster[high(x, this.u)]?.successor(low(x, this.u));
      return offset !== null && offset !== undefined ? _index(high(x, this.u), offset, this.u) : null;
    } else {
      const succCluster = this.summary?.successor(high(x, this.u));
      if (succCluster === null || succCluster === undefined) return null;
      const offset = this.cluster[succCluster]?.getMin();
      return offset !== null && offset !== undefined ? _index(succCluster, offset, this.u) : null;
    }
  }

  /**
   * Returns the predecessor of a given key.
   *
   * @param x The key to find the predecessor for.
   * @returns The predecessor key, or `null` if none exists.
   * @complexity Time: O(log log U) | Space: O(log log U)
   */
  predecessor(x: Key): Key | null {
    if (this.u === 2) {
      if (x === 1 && this.min === 0) return 0;
      return null;
    }
    if (this.max !== null && x > this.max) return this.max;
    const minLow = this.cluster[high(x, this.u)]?.getMin();
    if (minLow !== null && minLow !== undefined && low(x, this.u) > minLow) {
      const offset = this.cluster[high(x, this.u)]?.predecessor(low(x, this.u));
      return offset !== null && offset !== undefined ? _index(high(x, this.u), offset, this.u) : null;
    } else {
      const predCluster = this.summary?.predecessor(high(x, this.u));
      if (predCluster === null || predCluster === undefined) {
        if (this.min !== null && x > this.min) return this.min;
        return null;
      }
      const offset = this.cluster[predCluster]?.getMax();
      return offset !== null && offset !== undefined ? _index(predCluster, offset, this.u) : null;
    }
  }

  /**
   * Deletes a key from the tree.
   *
   * @param x The key to delete.
   * @complexity Time: O(log log U) | Space: O(log log U)
   */
  delete(x: Key): void {
    if (this.min === this.max) {
      if (this.min === x) this.min = this.max = null;
      return;
    }
    if (this.u === 2) {
      if (x === 0) this.min = 1;
      else this.min = 0;
      this.max = this.min;
      return;
    }
    if (x === this.min) {
      const firstCluster = this.summary?.getMin();
      if (firstCluster === null || firstCluster === undefined) {
        // Was only element
        this.min = this.max = null;
        return;
      }
      const minLow = this.cluster[firstCluster]?.getMin();
      if (minLow !== null && minLow !== undefined) {
        x = _index(firstCluster, minLow, this.u);
        this.min = x;
      }
    }
    const h = high(x, this.u);
    const l = low(x, this.u);
    this.cluster[h]?.delete(l);
    if (this.cluster[h]?.getMin() === null) {
      this.summary?.delete(h);
      if (x === this.max) {
        const summaryMax = this.summary?.getMax();
        if (summaryMax === null || summaryMax === undefined) {
          this.max = this.min;
        } else {
          const maxLow = this.cluster[summaryMax]?.getMax();
          if (maxLow !== null && maxLow !== undefined) {
            this.max = _index(summaryMax, maxLow, this.u);
          }
        }
      }
    } else if (x === this.max) {
      const maxLow = this.cluster[h]?.getMax();
      if (maxLow !== null && maxLow !== undefined) {
        this.max = _index(h, maxLow, this.u);
      }
    }
  }
}
