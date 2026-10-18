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
   *
   * @param x The element to insert.
   * @complexity Time: O(log log U) where U is the universe size | Space: O(log log U) recursion depth
   */
  insert(x: Key): void {
    if (x < 0 || x >= this.u) throw new Error('Out of bounds');
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
}
