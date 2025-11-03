export type HLLHash = (s: string) => number;
const defaultHash: HLLHash = (s) => { // 32-bit FNV-1a
  let h=2166136261>>>0; for (let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; };

export class HyperLogLog {
  private m: number;
  private p: number;
  private registers: Uint8Array;
  private alphaMM: number;

  constructor(p: number = 12, private hash: HLLHash = defaultHash) {
    if (p < 4 || p > 16) throw new Error('p must be in [4,16]');
    this.p = p; this.m = 1 << p; this.registers = new Uint8Array(this.m);
    const m = this.m; this.alphaMM = (m===16?0.673: m===32?0.697: m===64?0.709: 0.7213/(1+1.079/m)) * m * m;
  }

  add(s: string): void {
    const x = this.hash(s); const idx = x >>> (32 - this.p); const w = (x << this.p) | (1 << (this.p-1));
    const rho = 1 + Math.clz32(w); // position of first 1
    if (rho > this.registers[idx]) this.registers[idx] = rho as any;
  }

  count(): number {
    let sum = 0; let zeros = 0;
    for (let i = 0; i < this.m; i++) { const r = this.registers[i]; sum += 1 / (1 << r); if (r===0) zeros++; }
    let est = this.alphaMM / sum;
    // small range correction
    if (est <= (5/2) * this.m && zeros>0) est = this.m * Math.log(this.m / zeros);
    // large range omitted for 32-bit hash simplicity
    return est;
  }

  reset(): void { this.registers.fill(0); }

  toJson(): string {
    return JSON.stringify(Array.from(this.registers));
  }
}
