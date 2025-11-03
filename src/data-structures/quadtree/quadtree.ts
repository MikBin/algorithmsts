type Point = { x: number; y: number; data?: unknown };
class QuadNode {
  constructor(
    public x: number,
    public y: number,
    public w: number,
    public h: number,
    public points: Point[] = [],
    public nw: QuadNode | null = null,
    public ne: QuadNode | null = null,
    public sw: QuadNode | null = null,
    public se: QuadNode | null = null,
    public divided: boolean = false,
  ) {}
  contains(p: Point): boolean { return p.x>=this.x && p.x<this.x+this.w && p.y>=this.y && p.y<this.y+this.h; }
}

export class Quadtree {
  private root: QuadNode;
  constructor(x: number, y: number, w: number, h: number, private capacity = 4) { this.root = new QuadNode(x,y,w,h); }

  insert(p: Point): boolean { return this._insert(this.root, p); }
  private _insert(n: QuadNode, p: Point): boolean {
    if (!n.contains(p)) return false;
    if (n.points.length < this.capacity && !n.divided){ n.points.push(p); return true; }
    if (!n.divided) this.subdivide(n);
    return this._insert(n.nw!, p) || this._insert(n.ne!, p) || this._insert(n.sw!, p) || this._insert(n.se!, p);
  }
  private subdivide(n: QuadNode): void {
    const hw=n.w/2, hh=n.h/2; n.divided=true;
    n.nw=new QuadNode(n.x, n.y, hw, hh);
    n.ne=new QuadNode(n.x+hw, n.y, hw, hh);
    n.sw=new QuadNode(n.x, n.y+hh, hw, hh);
    n.se=new QuadNode(n.x+hw, n.y+hh, hw, hh);
    for (const pt of n.points) this._insert(n, pt);
    n.points = [];
  }

  query(x: number, y: number, w: number, h: number): Point[] { const res: Point[]=[]; this._query(this.root, x,y,w,h,res); return res; }
  private _query(n: QuadNode, x:number,y:number,w:number,h:number,out:Point[]): void {
    if (x>=n.x+n.w || x+w<=n.x || y>=n.y+n.h || y+h<=n.y) return; // no overlap
    for (const p of n.points){ if (p.x>=x && p.x<x+w && p.y>=y && p.y<y+h) out.push(p); }
    if (!n.divided) return;
    this._query(n.nw!,x,y,w,h,out); this._query(n.ne!,x,y,w,h,out); this._query(n.sw!,x,y,w,h,out); this._query(n.se!,x,y,w,h,out);
  }

  toJson(): string {
    return JSON.stringify(this.root);
  }
}
