import { fnv1a32 } from "../../core/utils/HashUtils";

export type CMSHash = (s: string, seed: number) => number;

/**
 * @title Count-Min Sketch
 * @notice A probabilistic data structure that serves as a frequency table of events in a stream of data.
 * @dev It uses hash functions to map events to frequencies, but unlike a hash table, it may overcount events due to collisions (but never undercounts).
 */
export class CountMinSketch {
  private table: Uint32Array[];

  /**
   * @notice Constructs a new Count-Min Sketch.
   * @param width The number of buckets per hash function (controls the error bound).
   * @param depth The number of hash functions (controls the probability of error).
   * @param hash An optional custom hash function.
   * @complexity Time: O(width * depth) | Space: O(width * depth)
   */
  constructor(
    private width: number,
    private depth: number,
    private hash: CMSHash = fnv1a32,
  ) {
    if (width <= 0 || depth <= 0) throw new Error("invalid parameters");
    this.table = Array.from({ length: depth }, () => new Uint32Array(width));
  }
  private idx(s: string, d: number): number {
    return this.hash(s, d) % this.width;
  }

  /**
   * @notice Adds an item to the sketch, increasing its frequency count.
   * @param s The item to add (as a string).
   * @param count The amount to increase the frequency by. Defaults to 1.
   * @complexity Time: O(depth) | Space: O(1)
   */
  add(s: string, count = 1): void {
    for (let d = 0; d < this.depth; d++) this.table[d][this.idx(s, d)] += count;
  }

  /**
   * @notice Estimates the frequency count of an item.
   * @param s The item to query.
   * @returns The estimated frequency count. This is an upper bound on the true count.
   * @complexity Time: O(depth) | Space: O(1)
   */
  estimate(s: string): number {
    let m = Infinity;
    for (let d = 0; d < this.depth; d++) m = Math.min(m, this.table[d][this.idx(s, d)]);
    return m === Infinity ? 0 : m;
  }

  /**
   * @notice Resets the sketch, clearing all frequency counts.
   * @complexity Time: O(width * depth) | Space: O(1)
   */
  reset(): void {
    for (const row of this.table) row.fill(0);
  }

  /**
   * @notice Serializes the sketch into a JSON string.
   * @returns A string representing the JSON structure of the underlying table.
   * @complexity Time: O(width * depth) | Space: O(width * depth)
   */
  toJson(): string {
    return JSON.stringify(this.table.map((row) => Array.from(row)));
  }
}
