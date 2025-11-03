export class UnionFind {
  private parent: number[];
  private sizeArr: number[];
  private _count: number;
  constructor(n: number) { if (n<=0) throw new Error('n must be > 0'); this.parent = Array.from({length:n}, (_,i)=>i); this.sizeArr = new Array(n).fill(1); this._count = n; }
  find(x: number): number { if (this.parent[x]!==x) this.parent[x]=this.find(this.parent[x]); return this.parent[x]; }
  union(a: number, b: number): boolean { let ra=this.find(a), rb=this.find(b); if (ra===rb) return false; if (this.sizeArr[ra]<this.sizeArr[rb]) [ra,rb]=[rb,ra]; this.parent[rb]=ra; this.sizeArr[ra]+=this.sizeArr[rb]; this._count--; return true; }
  connected(a: number, b: number): boolean { return this.find(a)===this.find(b); }
  setCount(): number { return this._count; }

  toJson(): string {
    return JSON.stringify({
      parent: this.parent,
      sizeArr: this.sizeArr,
      count: this._count,
    });
  }
}
