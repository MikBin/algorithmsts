export type HashFn = (s: string, seed: number) => number;

const defaultHash: HashFn = (str: string, seed: number) => {
  let h1 = 0x811c9dc5 ^ seed, h2 = 0x01000193 + seed;
  for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 16777619); h2 = (h2 + ch + (h2<<1) + (h2<<4)) >>> 0; }
  return (h1 ^ (h2 >>> 1)) >>> 0;
};

export class BloomFilter {
  private bits: Uint8Array;
  constructor(private m: number, private k: number, private hashFn: HashFn = defaultHash) {
    if (m<=0 || k<=0) throw new Error('invalid parameters');
    this.bits = new Uint8Array(m);
  }
  private idx(s: string, i: number): number { return this.hashFn(s, i) % this.m; }
  add(s: string): void { for (let i=0;i<this.k;i++){ const j=this.idx(s,i); this.bits[j]=1; } }
  mightContain(s: string): boolean { for (let i=0;i<this.k;i++){ const j=this.idx(s,i); if (this.bits[j]===0) return false; } return true; }
  reset(): void { this.bits.fill(0); }
}
