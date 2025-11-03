type Point = number[];

class KDNode {
  constructor(
    public point: Point,
    public axis: number,
    public left: KDNode | null = null,
    public right: KDNode | null = null,
  ) {}
}

export class KDRangeTree {
  private root: KDNode | null = null;
  private k = 0;
  constructor(points: Point[] = []) {
    if (points.length) { this.k = points[0].length; this.root = this.build(points, 0); }
  }

  private build(points: Point[], depth: number): KDNode | null {
    if (!points.length) return null;
    const axis = depth % (this.k || points[0].length);
    points.sort((a,b)=>a[axis]-b[axis]);
    const m = (points.length>>1);
    const node = new KDNode(points[m], axis);
    node.left = this.build(points.slice(0,m), depth+1);
    node.right = this.build(points.slice(m+1), depth+1);
    return node;
  }

  rangeQuery(bounds: Array<[number, number]>): Point[] {
    const out: Point[] = [];
    const dfs = (n: KDNode | null) => {
      if (!n) return;
      let inside = true;
      for (let i=0;i<(this.k||bounds.length);i++){ if (n.point[i] < bounds[i][0] || n.point[i] > bounds[i][1]) { inside=false; break; } }
      if (inside) out.push(n.point);
      const axis = n.axis; const [lo, hi] = bounds[axis];
      if (n.point[axis] >= lo) dfs(n.left);
      if (n.point[axis] <= hi) dfs(n.right);
    };
    dfs(this.root);
    return out;
  }

  toJson(): string {
    return JSON.stringify(this.root);
  }
}
