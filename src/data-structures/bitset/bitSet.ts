/**
 * @title BitSet
 * @notice A space-efficient array of boolean values stored as bits.
 * @dev Internally packed into a `Uint32Array`.
 */
export class BitSet {
  private words: Uint32Array;
  private _size: number;

  /**
   * @notice Constructs a new BitSet.
   * @param size The number of bits to allocate.
   * @complexity Time: O(1) | Space: O(size / 32)
   */
  constructor(size: number) {
    if (size <= 0) throw new Error('size must be > 0');
    this._size = size;
    this.words = new Uint32Array(Math.ceil(size / 32));
  }

  /**
   * @notice Gets the number of bits in the BitSet.
   * @returns The total capacity in bits.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number { return this._size; }
  private idx(i: number) { if (i < 0 || i >= this._size) throw new Error('index out of range'); return [i >>> 5, i & 31] as const; }

  /**
   * @notice Sets the bit at the specified index to true (1).
   * @param i The index of the bit to set.
   * @complexity Time: O(1) | Space: O(1)
   */
  set(i: number): void { const [w,b] = this.idx(i); this.words[w] |= (1 << b); }

  /**
   * @notice Clears the bit at the specified index, setting it to false (0).
   * @param i The index of the bit to clear.
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(i: number): void { const [w,b] = this.idx(i); this.words[w] &= ~(1 << b); }

  /**
   * @notice Toggles the bit at the specified index (0 becomes 1, 1 becomes 0).
   * @param i The index of the bit to toggle.
   * @complexity Time: O(1) | Space: O(1)
   */
  toggle(i: number): void { const [w,b] = this.idx(i); this.words[w] ^= (1 << b); }

  /**
   * @notice Gets the value of the bit at the specified index.
   * @param i The index of the bit.
   * @returns `true` if the bit is set, `false` otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  get(i: number): boolean { const [w,b] = this.idx(i); return (this.words[w] & (1 << b)) !== 0; }

  /**
   * @notice Counts the number of set bits (1s) in the BitSet.
   * @returns The number of set bits.
   * @complexity Time: O(n/32) | Space: O(1) where n is the size in bits.
   */
  count(): number { let c = 0; for (let i=0;i<this.words.length;i++){ let x=this.words[i]; x = x - ((x>>>1)&0x55555555); x=(x&0x33333333)+((x>>>2)&0x33333333); c += (((x+(x>>>4))&0x0F0F0F0F) * 0x01010101)>>>24; } return c; }

  /**
   * @notice Resets all bits to false (0).
   * @complexity Time: O(n/32) | Space: O(1) where n is the size in bits.
   */
  reset(): void { this.words.fill(0); }

  /**
   * @notice Converts the set bits to an array of indices.
   * @returns An array containing the indices of all set bits.
   * @complexity Time: O(n) | Space: O(k) where n is the size in bits and k is the number of set bits.
   */
  toArray(): number[] { const res: number[] = []; for (let i=0;i<this._size;i++) if (this.get(i)) res.push(i); return res; }

  /**
   * @notice Computes the bitwise union (OR) with another BitSet.
   * @param other The other BitSet to union with. Must have the same size.
   * @returns A new BitSet representing the union.
   * @complexity Time: O(n/32) | Space: O(n/32) where n is the size in bits.
   */
  union(other: BitSet): BitSet { if (other.size!==this.size) throw new Error('size mismatch'); const out = new BitSet(this.size); for (let i=0;i<this.words.length;i++) out.words[i]=this.words[i]|other.words[i]; return out; }

  /**
   * @notice Computes the bitwise intersection (AND) with another BitSet.
   * @param other The other BitSet to intersect with. Must have the same size.
   * @returns A new BitSet representing the intersection.
   * @complexity Time: O(n/32) | Space: O(n/32) where n is the size in bits.
   */
  intersect(other: BitSet): BitSet { if (other.size!==this.size) throw new Error('size mismatch'); const out = new BitSet(this.size); for (let i=0;i<this.words.length;i++) out.words[i]=this.words[i]&other.words[i]; return out; }

  /**
   * @notice Serializes the BitSet to a JSON string.
   * @returns A JSON string representation of the internal integer array.
   * @complexity Time: O(n/32) | Space: O(n/32) where n is the size in bits.
   */
  toJson(): string {
    return JSON.stringify(Array.from(this.words));
  }
}
