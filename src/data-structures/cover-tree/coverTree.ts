type Point = number[];

class CTNode<T=unknown> {
  children: CTNode<T>[] = [];
  constructor(public p: Point, public data?: T) {}
}

export class CoverTree<T=unknown> {
  private root: CTNode<T> | null = null;
  private pts: { p: Point; data?: T }[] = [];
  constructor(private distance: (a: Point, b: Point) => number = CoverTree.euclidean) {}

  static euclidean(a: Point, b: Point): number { let s=0; for (let i=0;i<a.length;i++){ const d=a[i]-b[i]; s+=d*d; } return Math.sqrt(s); }

  add(p: Point, data?: T): void {
    this.pts.push({ p, data });
    const n = new CTNode<T>(p, data);
    if (!this.root) { this.root = n; return; }
    // simple greedy insertion: descend to closest child until no improvement
    let cur = this.root;
    while (true) {
      let best: CTNode<T> | null = null; let bestD = this.distance(p, cur.p);
      for (const c of cur.children) {
        const d = this.distance(p, c.p);
        if (d < bestD) { bestD = d; best = c; }
      }
      if (best) cur = best; else break;
    }
    cur.children.push(n);
  }

  nearest(q: Point): { p: Point; data?: T; dist: number } | null {
    if (this.pts.length === 0) return null;
    let best = this.pts[0]; let bestD = this.distance(q, best.p);
    for (let i=1;i<this.pts.length;i++) { const d=this.distance(q, this.pts[i].p); if (d<bestD){ best=this.pts[i]; bestD=d; } }
    return { p: best.p, data: best.data, dist: bestD };
  }

  kNearest(q: Point, k: number): { p: Point; data?: T; dist: number }[] {
    const arr = this.pts.map(x=>({ p:x.p, data:x.data, dist: this.distance(q, x.p) }));
    arr.sort((a,b)=>a.dist-b.dist);
    return arr.slice(0, k);
  }

  toJson(): string {
    return JSON.stringify(this.root);
  }
}
