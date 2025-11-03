export class QuotientFilter {
  private buckets: Set<number>[];
  constructor(private m: number = 1024, private rBits: number = 12) {
    if (m <= 0 || rBits <= 0) throw new Error('invalid parameters');
    this.buckets = Array.from({ length: m }, () => new Set<number>());
  }
  private hash(s: string): number { let h=2166136261>>>0; for (let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
  private q(s: string): number { return this.hash(s) % this.m; }
  private r(s: string): number { return (this.hash(s) >>> 0) & ((1<<this.rBits)-1); }
  add(s: string): void { this.buckets[this.q(s)].add(this.r(s)); }
  mightContain(s: string): boolean { return this.buckets[this.q(s)].has(this.r(s)); }
  reset(): void { for (const b of this.buckets) b.clear(); }

  toJson(): string {
    return JSON.stringify(this.buckets.map(b => Array.from(b)));
  }
}
