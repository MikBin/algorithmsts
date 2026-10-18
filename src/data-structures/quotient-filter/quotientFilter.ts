/**
 * A Quotient Filter implementation, a probabilistic data structure that can
 * test whether an element is a member of a set. It uses hashing to map strings
 * to a quotient (bucket) and a remainder (stored value).
 */
export class QuotientFilter {
  private buckets: Set<number>[];

  /**
   * Creates a new Quotient Filter.
   *
   * @param m - The number of buckets (quotients).
   * @param rBits - The number of bits to use for the remainder.
   * @complexity Time: O(m) | Space: O(m) (bucket array allocation)
   */
  constructor(private m: number = 1024, private rBits: number = 12) {
    if (m <= 0 || rBits <= 0) throw new Error('invalid parameters');
    this.buckets = Array.from({ length: m }, () => new Set<number>());
  }
  private hash(s: string): number { let h=2166136261>>>0; for (let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
  private q(s: string): number { return this.hash(s) % this.m; }
  private r(s: string): number { return (this.hash(s) >>> 0) & ((1<<this.rBits)-1); }

  /**
   * Adds an element to the filter.
   *
   * @param s - The string to add.
   * @complexity Time: O(k) | Space: O(1) (where k is the string length for hashing)
   */
  add(s: string): void { this.buckets[this.q(s)].add(this.r(s)); }

  /**
   * Checks if an element might be in the filter.
   * May return false positives, but never false negatives.
   *
   * @param s - The string to check.
   * @returns True if the string might be in the filter, false if it is definitely not.
   * @complexity Time: O(k) | Space: O(1) (where k is the string length for hashing)
   */
  mightContain(s: string): boolean { return this.buckets[this.q(s)].has(this.r(s)); }

  /**
   * Clears all elements from the filter.
   *
   * @complexity Time: O(m) | Space: O(1)
   */
  reset(): void { for (const b of this.buckets) b.clear(); }

  /**
   * Serializes the filter to a JSON string.
   *
   * @returns A JSON string representation of the filter.
   * @complexity Time: O(m + n) | Space: O(m + n) (JSON string and array allocations, where n is total items stored)
   */
  toJson(): string {
    return JSON.stringify(this.buckets.map(b => Array.from(b)));
  }
}
