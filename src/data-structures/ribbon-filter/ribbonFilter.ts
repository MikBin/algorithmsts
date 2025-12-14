import { BitSet } from '../bitset';

export type HashFn = (str: string, seed: number) => number;
export type Serializer<T> = (item: T) => string;

const defaultHash: HashFn = (str: string, seed: number) => {
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

export interface RibbonFilterOptions<T> {
  hashFn?: HashFn;
  serializer?: Serializer<T>;
  overheadFactor?: number;
}

export class RibbonFilter<T = string> {
  private slots: Uint8Array;
  private numSlots: number;
  private hashFn: HashFn;
  private serializer: Serializer<T>;
  private seed: number = 0;
  private readonly W = 64;

  constructor(items: T[], options: RibbonFilterOptions<T> = {}) {
    this.hashFn = options.hashFn || defaultHash;
    this.serializer = options.serializer || defaultSerializer;

    const distinctItems = Array.from(new Set(items.map(i => this.serializer(i))));
    const n = distinctItems.length;

    if (n === 0) {
      this.numSlots = 0;
      this.slots = new Uint8Array(0);
      return;
    }

    // Use 2.0 overhead for small N to avoid pigeonhole issues, 1.2 otherwise
    let overhead = options.overheadFactor || 1.2;
    if (n < 16 && overhead < 2.0) overhead = 2.0;

    this.numSlots = Math.ceil(n * overhead);

    let success = false;
    let attempts = 0;

    while (!success && attempts < 20) {
      try {
        this.slots = this.construct(distinctItems, this.seed);
        success = true;
      } catch (e) {
        this.seed++;
        attempts++;
      }
    }

    if (!success) {
      throw new Error('Failed to construct Ribbon Filter after multiple attempts.');
    }
  }

  private getHash(s: string, seed: number): { start: number, coeffs: bigint, target: number } {
    const h1 = this.hashFn(s, seed + 100);
    const h2 = this.hashFn(s, seed + 200);
    const h3 = this.hashFn(s, seed + 300);

    const lower = BigInt(h2);
    const upper = BigInt(h3);
    let coeffs = (upper << 32n) | lower;

    let maxStart = this.numSlots - this.W;
    if (maxStart < 0) maxStart = 0;

    const start = h1 % (maxStart + 1);
    const fp = this.hashFn(s, seed + 400) & 0xFF;

    const validLen = Math.min(this.W, this.numSlots - start);
    let mask = (1n << BigInt(validLen)) - 1n;

    coeffs &= mask;

    if (coeffs === 0n) {
      coeffs |= 1n;
    }

    return { start, coeffs, target: fp };
  }

  private construct(items: string[], seed: number): Uint8Array {
    interface Row {
      start: number;
      coeffs: bigint;
      target: number;
    }

    let rows: Row[] = items.map(item => this.getHash(item, seed));
    rows.sort((a, b) => a.start - b.start);

    const solution = new Uint8Array(this.numSlots);
    const pivots = new Map<number, Row>();

    rowLoop: for (const row of rows) {
      let currCoeffs = row.coeffs;
      let currTarget = row.target;

      while (currCoeffs !== 0n) {
        let bitIndex = 0;
        let temp = currCoeffs;
        while ((temp & 1n) === 0n) {
          temp >>= 1n;
          bitIndex++;
        }

        const col = row.start + bitIndex;

        // This check is conceptually redundant with getHash masking but safe to keep
        if (col >= this.numSlots) {
           currCoeffs &= ~(1n << BigInt(bitIndex));
           continue;
        }

        const existingPivot = pivots.get(col);

        if (existingPivot) {
          const diff = existingPivot.start - row.start;
          const pCoeffsShifted = existingPivot.coeffs << BigInt(diff);

          currCoeffs ^= pCoeffsShifted;
          currTarget ^= existingPivot.target;

        } else {
          // Normalize pivot
          const normalizedCoeffs = currCoeffs >> BigInt(bitIndex);

          pivots.set(col, {
            start: col,
            coeffs: normalizedCoeffs,
            target: currTarget
          });
          // Row is successfully used as a pivot. Move to next row.
          continue rowLoop;
        }
      }

      // If we exit the while loop, currCoeffs is 0.
      // This means the row was completely eliminated by existing pivots.
      // We must check if the target matches (should be 0).
      if (currTarget !== 0) {
         throw new Error('Inconsistent system');
      }
    }

    for (let col = this.numSlots - 1; col >= 0; col--) {
      const pivot = pivots.get(col);
      if (pivot) {
        let val = pivot.target;
        let c = pivot.coeffs >> 1n;
        let offset = 1;

        while (c !== 0n) {
          if ((c & 1n) === 1n) {
             const otherCol = col + offset;
             if (otherCol < this.numSlots) {
                val ^= solution[otherCol];
             }
          }
          c >>= 1n;
          offset++;
        }
        solution[col] = val;
      } else {
        solution[col] = 0;
      }
    }
    return solution;
  }

  mightContain(item: T): boolean {
    if (this.numSlots === 0) return false;
    const { start, coeffs, target: fingerprint } = this.getHash(this.serializer(item), this.seed);
    let result = 0;
    let c = coeffs;
    let curr = start;

    while (c !== 0n && curr < this.numSlots) {
      if ((c & 1n) === 1n) {
        result ^= this.slots[curr];
      }
      c >>= 1n;
      curr++;
    }
    return result === fingerprint;
  }
}
