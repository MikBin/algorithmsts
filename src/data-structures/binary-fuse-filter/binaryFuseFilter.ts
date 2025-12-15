import { HashFn, Serializer, IProbabilisticFilter } from '../probabilistic-interfaces';

export interface BinaryFuseFilterOptions<T> {
  hashFn?: HashFn;
  serializer?: Serializer<T>;
  // Max iterations for peeling construction usually fixed, but could be exposed.
}

const defaultHash: HashFn = (str: string, seed: number) => {
  // Need a good hash function that can produce 64-bit values ideally,
  // or at least good distribution.
  // Using FNV-1a style for now, but split into 3 independent seeds for h0, h1, h2.
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

export class BinaryFuseFilter<T = string> implements IProbabilisticFilter<T> {
  private fingerprints: Uint8Array | Uint16Array | Uint32Array;
  private segmentLength: number;
  private segmentLengthMask: number;
  private size_: number;
  private fingerprintSize: number;
  private hashFn: HashFn;
  private serializer: Serializer<T>;

  /**
   * Constructs a static Binary Fuse Filter from a set of items.
   * Based on Graf & Lemire, "Binary Fuse Filters: Fast and Smaller Than Bloom Filters", 2022.
   */
  constructor(
    items: T[],
    fingerprintSize: 8 | 16 | 32 = 8,
    options: BinaryFuseFilterOptions<T> = {}
  ) {
    this.size_ = items.length;
    this.fingerprintSize = fingerprintSize;
    this.hashFn = options.hashFn || defaultHash;
    this.serializer = options.serializer || defaultSerializer;

    // Calculate segment length
    // 3 segments. Total size roughly 1.125 * N?
    // Reference implementation uses arity=3.
    // Length of array m approx 1.125 * n.
    // Segment length = m / 3.
    // Segment length must be appropriate size.

    // Using simple logic from paper:
    // capacity = floor(1 / 0.879 * size)? ~1.13x
    // Let's use 1.25x for safety to avoid cycles with simple hash functions.
    let capacity = Math.floor(this.size_ * 1.25);
    // Add some padding
    if (capacity < 32) capacity = 32;

    // We need segment length to be used in modulo or mapping.
    // Simple implementation: segmentLength.
    this.segmentLength = Math.ceil(capacity / 3);
    const m = this.segmentLength * 3;

    if (fingerprintSize === 8) this.fingerprints = new Uint8Array(m);
    else if (fingerprintSize === 16) this.fingerprints = new Uint16Array(m);
    else this.fingerprints = new Uint32Array(m);

    if (items.length > 0) {
      this.build(items);
    }
  }

  private getHash(item: T, seed: number): number {
    return this.hashFn(this.serializer(item), seed);
  }

  private getFingerprint(h: number): number {
    let f = h;
    if (this.fingerprintSize === 8) {
      f = f & 0xff;
      if (f === 0) f = 1;
    } else if (this.fingerprintSize === 16) {
      f = f & 0xffff;
      if (f === 0) f = 1;
    } else {
      f = f >>> 0;
      if (f === 0) f = 1;
    }
    return f;
  }

  /**
   * Calculate 3 locations for a key.
   */
  private getLocations(h: number): [number, number, number] {
    // h0, h1, h2
    // We can derive them from a single large hash or multiple calls.
    // For simplicity, we assume hashFn can be seeded or we mix the hash.

    // To match paper's efficiency, we should use 1 hash and derive 3 indices.
    // h0 = reduce(hash, segmentLength)
    // h1 = segmentLength + reduce(rotl(hash, ...), segmentLength)
    // h2 = 2*segmentLength + reduce(rotl(hash, ...), segmentLength)

    // Simple simulation:
    // Use the 32-bit hash h directly for h0.
    // Mix it for h1, h2.

    const h0 = h % this.segmentLength;

    // Simple mixing
    let h_mix = Math.imul(h ^ 0x55555555, 0x12345678);
    const h1 = this.segmentLength + (h_mix >>> 0) % this.segmentLength;

    h_mix = Math.imul(h ^ 0xAAAAAAAA, 0x87654321);
    const h2 = 2 * this.segmentLength + (h_mix >>> 0) % this.segmentLength;

    return [h0, h1, h2];
  }

  private build(items: T[]) {
    // Peeling algorithm
    // 1. Compute locations for all keys.
    // 2. Count XOR sums or degrees?
    // Actually, simple peeling uses "degree" = number of keys mapping to this slot.
    // Wait, binary fuse uses a specific construction.
    // It's a hypergraph peeling.

    const m = this.fingerprints.length;

    // We need to store which keys map to which slots during construction.
    // Standard Peeling:
    // Array of sets? Too expensive.
    // Array of XOR'ed hashes and counts.

    // Let's use a simpler approach for construction:
    // structure:
    //   t2count: Uint8Array of size m (counts)
    //   t2hash: Uint32Array of size m (XOR sum of hashes of keys) -> to verify which key is there when count=1?
    // No, we need to know WHICH key it is.
    // Usually, we store index of key in the items array.
    // t2xorIndex: XOR sum of key indices.

    const capacity = m;
    const t2count = new Uint8Array(capacity);
    const t2xorIndex = new Uint32Array(capacity);

    // Iterate items
    const hashes = new Uint32Array(items.length);
    for (let i = 0; i < items.length; i++) {
      const h = this.getHash(items[i], 0); // Seed 0
      hashes[i] = h;
      const [h0, h1, h2] = this.getLocations(h);

      t2count[h0]++;
      t2xorIndex[h0] ^= i;

      t2count[h1]++;
      t2xorIndex[h1] ^= i;

      t2count[h2]++;
      t2xorIndex[h2] ^= i;
    }

    // Stack for peeling
    const q: number[] = [];
    for (let i = 0; i < capacity; i++) {
      if (t2count[i] === 1) {
        q.push(i);
      }
    }

    const stack: [number, number][] = []; // [slot_index, key_index]

    let processed = 0;
    while (q.length > 0) {
      const idx = q.pop()!;
      if (t2count[idx] !== 1) continue; // Should not happen if logic is correct

      const keyIndex = t2xorIndex[idx];
      stack.push([idx, keyIndex]);
      processed++;

      const h = hashes[keyIndex];
      const [h0, h1, h2] = this.getLocations(h);

      // Remove this key from other 2 slots
      const others = [h0, h1, h2].filter(x => x !== idx);
      for (const other of others) {
        t2count[other]--;
        t2xorIndex[other] ^= keyIndex;
        if (t2count[other] === 1) {
          q.push(other);
        }
      }
    }

    if (processed < items.length) {
      // Failed to peel. Usually implies cycle.
      // If this fails, the filter is invalid.
      throw new Error("BinaryFuseFilter construction failed (cycles detected). Try increasing capacity or using a different hash seed.");
    }

    // Assign fingerprints in reverse order
    while (stack.length > 0) {
      const [idx, keyIndex] = stack.pop()!;
      const h = hashes[keyIndex];
      const fp = this.getFingerprint(h); // Use same h or derived? Usually okay.
      const [h0, h1, h2] = this.getLocations(h);

      // T[idx] = fp ^ T[other1] ^ T[other2]
      // One of h0, h1, h2 is idx.
      let val = fp;
      if (h0 !== idx) val ^= this.fingerprints[h0];
      if (h1 !== idx) val ^= this.fingerprints[h1];
      if (h2 !== idx) val ^= this.fingerprints[h2];

      this.fingerprints[idx] = val;
    }
  }

  mightContain(item: T): boolean {
    const h = this.getHash(item, 0);
    const fp = this.getFingerprint(h);
    const [h0, h1, h2] = this.getLocations(h);

    // Ensure unsigned 32-bit comparison
    const f = (this.fingerprints[h0] ^ this.fingerprints[h1] ^ this.fingerprints[h2]) >>> 0;
    return f === fp;
  }

  size(): number {
    return this.size_;
  }

  toJson(): string {
    return JSON.stringify({
      fingerprintSize: this.fingerprintSize,
      size: this.size_,
      segmentLength: this.segmentLength,
      fingerprints: Array.from(this.fingerprints)
    });
  }

  static fromJson<T>(json: string, options: BinaryFuseFilterOptions<T> = {}): BinaryFuseFilter<T> {
    const data = JSON.parse(json);
    // Dummy item array to init
    const filter = new BinaryFuseFilter<T>([], data.fingerprintSize as 8 | 16 | 32, options);
    filter.size_ = data.size;
    filter.segmentLength = data.segmentLength;

    if (data.fingerprintSize === 8) {
      filter.fingerprints = new Uint8Array(data.fingerprints);
    } else if (data.fingerprintSize === 16) {
      filter.fingerprints = new Uint16Array(data.fingerprints);
    } else {
      filter.fingerprints = new Uint32Array(data.fingerprints);
    }

    return filter;
  }
}
