type Key = number;

function upperSqrt(u:number){ return 1<<Math.ceil(Math.log2(Math.sqrt(u))); }
function lowerSqrt(u:number){ return 1<<Math.floor(Math.log2(Math.sqrt(u))); }
function high(x:number,u:number){ const l=lowerSqrt(u); return Math.floor(x/l); }
function low(x:number,u:number){ const l=lowerSqrt(u); return x%l; }
function index(h:number,l:number,u:number){ const lS=lowerSqrt(u); return h*lS + l; }

export class VanEmdeBoasTree {
  private u: number;
  private min: Key | null = null;
  private max: Key | null = null;
  private summary: VanEmdeBoasTree | null = null;
  private cluster: (VanEmdeBoasTree | null)[] = [];

  constructor(universeSize: number) {
    this.u = 1<<Math.ceil(Math.log2(universeSize));
    if (this.u > 2) {
      const highS = upperSqrt(this.u);
      this.summary = new VanEmdeBoasTree(highS);
      this.cluster = Array.from({length: highS}, ()=> new VanEmdeBoasTree(lowerSqrt(this.u)));
    }
  }

  getUniverse(): number { return this.u; }
  getMin(): Key | null { return this.min; }
  getMax(): Key | null { return this.max; }

  member(x: Key): boolean {
    if (x===this.min || x===this.max) return this.min!==null; if (this.u<=2) return false;
    const h = high(x,this.u), l = low(x,this.u);
    return this.cluster[h]!.member(l);
  }

  insertEmpty(x: Key): void { this.min = this.max = x; }

  insert(x: Key): void {
    if (this.min===null) { this.insertEmpty(x); return; }
    if (x < this.min) { const t=this.min; this.min=x; x=t; }
    if (this.u>2) {
      const h = high(x,this.u), l = low(x,this.u);
      if (this.cluster[h]!.getMin()===null) { this.summary!.insert(h); this.cluster[h]!.insertEmpty(l); }
      else { this.cluster[h]!.insert(l); }
    }
    if (x > (this.max as number)) this.max = x;
  }
}
