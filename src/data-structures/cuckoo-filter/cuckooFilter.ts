type Fingerprint = number;

function hash(s: string, seed: number): number { let h=2166136261^seed; for (let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }

export class CuckooFilter {
  private buckets: (Fingerprint[])[];
  private _size = 0;
  constructor(private bucketCount = 1024, private bucketSize = 4) {
    this.buckets = Array.from({length: bucketCount}, ()=>[]);
  }
  private fp(s: string): Fingerprint { const h1 = hash(s, 0); return (h1 & 0xffff) + 1; }
  private i1(s: string): number { return hash(s, 1) % this.bucketCount; }
  private i2(i1: number, f: Fingerprint): number { return (i1 ^ (hash(String(f), 2) % this.bucketCount)) % this.bucketCount; }

  add(s: string): boolean {
    const f = this.fp(s); const i1 = this.i1(s); const i2 = this.i2(i1, f);
    if (this.insertInto(i1, f) || this.insertInto(i2, f)) { this._size++; return true; }
    // kick-out loop
    let i = Math.random() < 0.5 ? i1 : i2; let cur = f;
    for (let k=0;k<500;k++) { const b = this.buckets[i]; const j = (Math.random() * b.length) | 0; [cur, b[j]] = [b[j], cur]; i = this.i2(i, cur); if (this.insertInto(i, cur)) { this._size++; return true; } }
    return false; // failure
  }
  private insertInto(i: number, f: Fingerprint): boolean { const b = this.buckets[i]; if (b.length < this.bucketSize) { b.push(f); return true; } return false; }
  mightContain(s: string): boolean { const f=this.fp(s); const i1=this.i1(s); const i2=this.i2(i1,f); return this.buckets[i1].includes(f) || this.buckets[i2].includes(f); }
  size(): number { return this._size; }
}
