export type HashFn = (str: string, seed: number) => number;
export type Serializer<T> = (item: T) => string;

const defaultHash: HashFn = (str: string, seed: number) => {
  // FNV-1a inspired hash
  let h = 2166136261 ^ seed;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

const defaultSerializer = (item: any): string => {
  if (typeof item === 'string') return item;
  return JSON.stringify(item);
};

export interface CuckooFilterOptions<T> {
  hashFn?: HashFn;
  serializer?: Serializer<T>;
  maxKicks?: number;
}

export class CuckooFilter<T = string> {
  // Using a flat array to store fingerprints.
  // buckets are virtual: bucket i occupies indices [i*bucketSize, (i+1)*bucketSize - 1]
  private buckets: Uint16Array;
  private bucketCount: number;
  private _size = 0;
  private hashFn: HashFn;
  private serializer: Serializer<T>;
  private maxKicks: number;

  /**
   * @param capacity Estimated number of items to store.
   * @param bucketSize Number of items per bucket (usually 4).
   * @param options Configuration options.
   */
  constructor(capacity: number = 1024, private bucketSize: number = 4, options: CuckooFilterOptions<T> = {}) {
    // Determine bucket count: capacity / bucketSize, rounded up to power of 2 for efficient masking?
    // Power of 2 is nice for modulo, but not strictly required if we use modulo.
    // However, standard Cuckoo Filters often use power of 2 for the 'alternate index' XOR trick to work easily?
    // The XOR trick: i2 = i1 ^ hash(fingerprint). This requires bucketCount to be a power of 2.

    let bCount = Math.ceil(capacity / bucketSize);
    // Round up to next power of 2
    bCount = Math.pow(2, Math.ceil(Math.log2(bCount)));
    if (bCount < 1) bCount = 1;

    this.bucketCount = bCount;
    this.buckets = new Uint16Array(this.bucketCount * this.bucketSize);

    this.hashFn = options.hashFn || defaultHash;
    this.serializer = options.serializer || defaultSerializer;
    this.maxKicks = options.maxKicks || 500;
  }

  // 16-bit fingerprint. 0 is reserved for 'empty'.
  private fp(s: string): number {
    const h = this.hashFn(s, 0);
    // range [1, 65535]
    let f = (h & 0xffff);
    if (f === 0) f = 1;
    return f;
  }

  private idx(s: string): number {
    const h = this.hashFn(s, 1);
    return h & (this.bucketCount - 1); // Only works if bucketCount is power of 2
  }

  private altIdx(i: number, f: number): number {
    // i2 = i1 ^ hash(f)
    const h = this.hashFn(String(f), 2);
    return (i ^ h) & (this.bucketCount - 1);
  }

  add(item: T): boolean {
    const s = this.serializer(item);
    const f = this.fp(s);
    const i1 = this.idx(s);
    const i2 = this.altIdx(i1, f);

    if (this.insertIntoBucket(i1, f) || this.insertIntoBucket(i2, f)) {
      this._size++;
      return true;
    }

    // Kick-out process
    let i = Math.random() < 0.5 ? i1 : i2;
    let curF = f;

    for (let k = 0; k < this.maxKicks; k++) {
      // Swap curF with a random element in bucket i
      const offset = i * this.bucketSize;
      const randSlot = Math.floor(Math.random() * this.bucketSize);

      const oldF = this.buckets[offset + randSlot];
      this.buckets[offset + randSlot] = curF;
      curF = oldF;

      // Move to alternate location
      i = this.altIdx(i, curF);

      if (this.insertIntoBucket(i, curF)) {
        this._size++;
        return true;
      }
    }

    return false; // Table is full (or max kicks reached)
  }

  private insertIntoBucket(i: number, f: number): boolean {
    const offset = i * this.bucketSize;
    for (let j = 0; j < this.bucketSize; j++) {
      if (this.buckets[offset + j] === 0) {
        this.buckets[offset + j] = f;
        return true;
      }
    }
    return false;
  }

  mightContain(item: T): boolean {
    const s = this.serializer(item);
    const f = this.fp(s);
    const i1 = this.idx(s);
    const i2 = this.altIdx(i1, f);
    return this.bucketContains(i1, f) || this.bucketContains(i2, f);
  }

  private bucketContains(i: number, f: number): boolean {
    const offset = i * this.bucketSize;
    for (let j = 0; j < this.bucketSize; j++) {
      if (this.buckets[offset + j] === f) return true;
    }
    return false;
  }

  delete(item: T): boolean {
    const s = this.serializer(item);
    const f = this.fp(s);
    const i1 = this.idx(s);
    if (this.deleteFromBucket(i1, f)) {
      this._size--;
      return true;
    }
    const i2 = this.altIdx(i1, f);
    if (this.deleteFromBucket(i2, f)) {
      this._size--;
      return true;
    }
    return false;
  }

  private deleteFromBucket(i: number, f: number): boolean {
    const offset = i * this.bucketSize;
    for (let j = 0; j < this.bucketSize; j++) {
      if (this.buckets[offset + j] === f) {
        this.buckets[offset + j] = 0;
        return true;
      }
    }
    return false;
  }

  size(): number {
    return this._size;
  }

  toJson(): string {
    return JSON.stringify({
      bucketCount: this.bucketCount,
      bucketSize: this.bucketSize,
      size: this._size,
      buckets: Array.from(this.buckets) // Convert TypedArray to normal array for JSON
    });
  }
}
