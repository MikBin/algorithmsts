export class BitSet {
  private words: Uint32Array;
  private _size: number;

  constructor(size: number) {
    if (size <= 0) throw new Error('size must be > 0');
    this._size = size;
    this.words = new Uint32Array(Math.ceil(size / 32));
  }

  get size(): number { return this._size; }
  private idx(i: number) { if (i < 0 || i >= this._size) throw new Error('index out of range'); return [i >>> 5, i & 31] as const; }
  set(i: number): void { const [w,b] = this.idx(i); this.words[w] |= (1 << b); }
  clear(i: number): void { const [w,b] = this.idx(i); this.words[w] &= ~(1 << b); }
  toggle(i: number): void { const [w,b] = this.idx(i); this.words[w] ^= (1 << b); }
  get(i: number): boolean { const [w,b] = this.idx(i); return (this.words[w] & (1 << b)) !== 0; }
  count(): number { let c = 0; for (let i=0;i<this.words.length;i++){ let x=this.words[i]; x = x - ((x>>>1)&0x55555555); x=(x&0x33333333)+((x>>>2)&0x33333333); c += (((x+(x>>>4))&0x0F0F0F0F) * 0x01010101)>>>24; } return c; }
  reset(): void { this.words.fill(0); }
  toArray(): number[] { const res: number[] = []; for (let i=0;i<this._size;i++) if (this.get(i)) res.push(i); return res; }
  union(other: BitSet): BitSet { if (other.size!==this.size) throw new Error('size mismatch'); const out = new BitSet(this.size); for (let i=0;i<this.words.length;i++) out.words[i]=this.words[i]|other.words[i]; return out; }
  intersect(other: BitSet): BitSet { if (other.size!==this.size) throw new Error('size mismatch'); const out = new BitSet(this.size); for (let i=0;i<this.words.length;i++) out.words[i]=this.words[i]&other.words[i]; return out; }
}
