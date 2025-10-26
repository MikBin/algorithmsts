type Point3D = { x: number; y: number; z: number; data?: unknown };
class OctNode {
  constructor(
    public x: number,
    public y: number,
    public z: number,
    public w: number,
    public h: number,
    public d: number,
    public points: Point3D[] = [],
    public children: (OctNode | null)[] = Array(8).fill(null),
    public divided: boolean = false,
  ) {}
  contains(p: Point3D): boolean { return p.x>=this.x && p.x<this.x+this.w && p.y>=this.y && p.y<this.y+this.h && p.z>=this.z && p.z<this.z+this.d; }
}

export class Octree {
  private root: OctNode;
  constructor(x: number, y: number, z: number, w: number, h: number, d: number, private capacity = 4) { this.root = new OctNode(x,y,z,w,h,d); }

  insert(p: Point3D): boolean { return this._insert(this.root, p); }
  private _insert(n: OctNode, p: Point3D): boolean {
    if (!n.contains(p)) return false;
    if (n.points.length < this.capacity && !n.divided) { n.points.push(p); return true; }
    if (!n.divided) this.subdivide(n);
    for (let i=0;i<8;i++) if (this._insert(n.children[i]!, p)) return true;
    return false;
  }
  private subdivide(n: OctNode): void {
    n.divided = true; const hw=n.w/2, hh=n.h/2, hd=n.d/2;
    const xs=[n.x, n.x+hw], ys=[n.y, n.y+hh], zs=[n.z, n.z+hd];
    let idx=0; for (let xi=0;xi<2;xi++) for (let yi=0;yi<2;yi++) for (let zi=0;zi<2;zi++) { n.children[idx++] = new OctNode(xs[xi], ys[yi], zs[zi], hw, hh, hd); }
    for (const pt of n.points) this._insert(n, pt); n.points=[];
  }

  query(x: number, y: number, z: number, w: number, h: number, d: number): Point3D[] { const res: Point3D[]=[]; this._query(this.root,x,y,z,w,h,d,res); return res; }
  private _query(n: OctNode, x:number,y:number,z:number,w:number,h:number,d:number,out:Point3D[]): void {
    if (x>=n.x+n.w || x+w<=n.x || y>=n.y+n.h || y+h<=n.y || z>=n.z+n.d || z+d<=n.z) return;
    for (const p of n.points){ if (p.x>=x && p.x<x+w && p.y>=y && p.y<y+h && p.z>=z && p.z<z+d) out.push(p); }
    if (!n.divided) return; for (let i=0;i<8;i++) this._query(n.children[i]!, x,y,z,w,h,d, out);
  }
}
