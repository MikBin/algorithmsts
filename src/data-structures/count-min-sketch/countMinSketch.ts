export type CMSHash = (s: string, seed: number) => number;
const defaultHash: CMSHash = (str, seed) => { let h=2166136261^seed; for (let i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; };

export class CountMinSketch {
  private table: Uint32Array[];
  constructor(private width: number, private depth: number, private hash: CMSHash = defaultHash) {
    if (width<=0 || depth<=0) throw new Error('invalid parameters');
    this.table = Array.from({length: depth}, ()=> new Uint32Array(width));
  }
  private idx(s: string, d: number): number { return this.hash(s, d) % this.width; }
  add(s: string, count = 1): void { for (let d=0; d<this.depth; d++) this.table[d][this.idx(s,d)] += count; }
  estimate(s: string): number { let m = Infinity; for (let d=0; d<this.depth; d++) m = Math.min(m, this.table[d][this.idx(s,d)]); return m === Infinity ? 0 : m; }
  reset(): void { for (const row of this.table) row.fill(0); }
}
