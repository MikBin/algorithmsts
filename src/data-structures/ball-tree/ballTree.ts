type Point = number[];

class BallNode<T=unknown> {
  constructor(
    public center: Point,
    public radius: number,
    public points: { p: Point; data?: T }[] = [],
    public left: BallNode<T> | null = null,
    public right: BallNode<T> | null = null,
  ) {}
}

export class BallTree<T=unknown> {
  private root: BallNode<T> | null = null;
  constructor(points: { p: Point; data?: T }[] = [], private distance: (a: Point, b: Point) => number = BallTree.euclidean) {
    if (points.length) this.root = this.build(points);
  }

  static euclidean(a: Point, b: Point): number { let s=0; for (let i=0;i<a.length;i++){ const d=a[i]-b[i]; s+=d*d; } return Math.sqrt(s); }

  private build(points: { p: Point; data?: T }[]): BallNode<T> | null {
    if (points.length === 0) return null;
    if (points.length <= 8) {
      // leaf: center = centroid, radius = max distance
      const center = this.centroid(points.map(x=>x.p));
      const radius = Math.max(0, ...points.map(x=>this.distance(center, x.p)));
      return new BallNode<T>(center, radius, points);
    }
    // pick two farthest points (approx: random pivot then farthest)
    const a = points[0].p;
    let far = points[0]; let maxd = -1;
    for (const pt of points){ const d=this.distance(a, pt.p); if (d>maxd){ maxd=d; far=pt; } }
    let far2 = points[0]; maxd = -1;
    for (const pt of points){ const d=this.distance(far.p, pt.p); if (d>maxd){ maxd=d; far2=pt; } }
    const leftPts: {p:Point;data?:T}[] = []; const rightPts: {p:Point;data?:T}[] = [];
    for (const pt of points){ const da=this.distance(pt.p, far.p); const db=this.distance(pt.p, far2.p); (da<db?leftPts:rightPts).push(pt); }
    const left = this.build(leftPts);
    const right = this.build(rightPts);
    const center = this.centroid(points.map(x=>x.p));
    const radius = Math.max(left? left.radius + this.distance(center, left.center):0, right? right.radius + this.distance(center, right.center):0);
    const node = new BallNode<T>(center, radius, [], left, right);
    return node;
  }

  private centroid(ps: Point[]): Point { const k=ps[0].length; const c=new Array(k).fill(0); for (const p of ps) for (let i=0;i<k;i++) c[i]+=p[i]; for (let i=0;i<k;i++) c[i]/=ps.length; return c; }

  rangeQuery(center: Point, tau: number): { p: Point; data?: T }[] {
    const out: { p: Point; data?: T }[] = [];
    const dfs = (n: BallNode<T> | null) => {
      if (!n) return;
      const d = this.distance(center, n.center);
      if (d - n.radius > tau) return; // outside
      if (!n.left && !n.right) {
        for (const item of n.points) if (this.distance(center, item.p) <= tau) out.push(item);
        return;
      }
      dfs(n.left); dfs(n.right);
    };
    dfs(this.root);
    return out;
  }
}
