import { BitSet } from '../bitset';

export type HashFn = (str: string, seed: number) => number;
export type Serializer<T> = (item: T) => string;

const defaultHash: HashFn = (str: string, seed: number) => {
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

export class BloomFilter<T = string> {
  private bits: BitSet;
  private hashFn: HashFn;
  private serializer: Serializer<T>;

  /**
   * @param m Size of the bit array (number of bits)
   * @param k Number of hash functions
   * @param options Configuration options
   */
  constructor(private m: number, private k: number, options: BloomFilterOptions<T> = {}) {
    if (m <= 0 || k <= 0) throw new Error('Invalid parameters: m and k must be positive');
    this.bits = new BitSet(m);
    this.hashFn = options.hashFn || defaultHash;
    this.serializer = options.serializer || defaultSerializer;
  }

  /**
   * Creates an optimal Bloom Filter for n items and false positive probability p
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

  add(item: T): void {
    const s = this.serializer(item);
    for (let i = 0; i < this.k; i++) {
      const j = this.idx(s, i);
      this.bits.set(j);
    }
  }

  mightContain(item: T): boolean {
    const s = this.serializer(item);
    for (let i = 0; i < this.k; i++) {
      const j = this.idx(s, i);
      if (!this.bits.get(j)) return false;
    }
    return true;
  }

  reset(): void {
    this.bits.reset();
  }

  toJson(): string {
    return JSON.stringify({
      m: this.m,
      k: this.k,
      bits: JSON.parse(this.bits.toJson()), // BitSet returns a stringified array
    });
  }
}
