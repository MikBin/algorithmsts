import { BitSet } from '../bitset';

export type HashFn = (str: string, seed: number) => number;
export type Serializer<T> = (item: T) => string;

export const defaultHash: HashFn = (str: string, seed: number) => {
  let h1 = 0x811c9dc5 ^ seed, h2 = 0x01000193 + seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 16777619);
    h2 = (h2 + ch + (h2 << 1) + (h2 << 4)) >>> 0;
  }
  return (h1 ^ (h2 >>> 1)) >>> 0;
};

const defaultSerializer = (item: any): string => {
  if (typeof item === 'string') return item;
  return JSON.stringify(item);
};

export interface BloomFilterOptions<T> {
  hashFn?: HashFn;
  serializer?: Serializer<T>;
}

/**
 * @title Bloom Filter
 * @notice A space-efficient probabilistic data structure that is used to test whether an element is a member of a set.
 * @dev False positive matches are possible, but false negatives are not.
 * @template T The type of elements stored in the filter.
 */
export class BloomFilter<T = string> {
  private bits: BitSet;
  private hashFn: HashFn;
  private serializer: Serializer<T>;

  /**
   * @notice Constructs a new Bloom Filter.
   * @param m Size of the bit array (number of bits).
   * @param k Number of hash functions.
   * @param options Configuration options including custom hash function or serializer.
   * @complexity Time: O(m) | Space: O(m)
   */
  constructor(private m: number, private k: number, options: BloomFilterOptions<T> = {}) {
    if (m <= 0 || k <= 0) throw new Error('Invalid parameters: m and k must be positive');
    this.bits = new BitSet(m);
    this.hashFn = options.hashFn || defaultHash;
    this.serializer = options.serializer || defaultSerializer;
  }

  /**
   * @notice Creates an optimal Bloom Filter given expected items and desired false positive probability.
   * @param expectedItems The estimated number of elements to be inserted.
   * @param falsePositiveRate The desired maximum false positive probability.
   * @param options Optional configuration.
   * @returns A properly sized BloomFilter.
   * @complexity Time: O(m) | Space: O(m) where m is the computed optimal bit size.
   */
  static create<T>(expectedItems: number, falsePositiveRate: number, options: BloomFilterOptions<T> = {}): BloomFilter<T> {
    const n = expectedItems;
    const p = falsePositiveRate;
    // m = -n*ln(p) / (ln(2)^2)
    const m = Math.ceil(-n * Math.log(p) / (Math.LN2 ** 2));
    // k = (m/n) * ln(2)
    const k = Math.ceil((m / n) * Math.LN2);
    return new BloomFilter<T>(m, k, options);
  }

  private idx(s: string, i: number): number {
    return this.hashFn(s, i) % this.m;
  }

  /**
   * @notice Adds an item to the filter.
   * @param item The item to insert.
   * @complexity Time: O(k) | Space: O(1) where k is the number of hash functions.
   */
  add(item: T): void {
    const s = this.serializer(item);
    for (let i = 0; i < this.k; i++) {
      const j = this.idx(s, i);
      this.bits.set(j);
    }
  }

  /**
   * @notice Checks if an item might be in the filter.
   * @param item The item to query.
   * @returns `true` if the item might be in the set, `false` if it is definitely not.
   * @complexity Time: O(k) | Space: O(1) where k is the number of hash functions.
   */
  mightContain(item: T): boolean {
    const s = this.serializer(item);
    for (let i = 0; i < this.k; i++) {
      const j = this.idx(s, i);
      if (!this.bits.get(j)) return false;
    }
    return true;
  }

  /**
   * @notice Resets the filter by clearing all bits.
   * @complexity Time: O(m/32) | Space: O(1) where m is the number of bits.
   */
  reset(): void {
    this.bits.reset();
  }

  /**
   * @notice Serializes the filter into a JSON string.
   * @returns A string representing the filter's state.
   * @complexity Time: O(m) | Space: O(m) where m is the number of bits.
   */
  toJson(): string {
    return JSON.stringify({
      m: this.m,
      k: this.k,
      bits: JSON.parse(this.bits.toJson()), // BitSet returns a stringified array
    });
  }
}
