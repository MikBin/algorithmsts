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

/**
 * @title Ball Tree
 * @notice A spatial data structure that organizes points into nested hyper-spheres (balls)
 * @dev Useful for nearest neighbor and range queries in high-dimensional spaces.
 * @template T Type of the optional data payload associated with each point.
 */
export class BallTree<T=unknown> {
  private root: BallNode<T> | null = null;

  /**
   * @notice Creates a new Ball Tree from a set of points.
   * @param points The initial set of points to build the tree from.
   * @param distance Optional distance function, defaults to Euclidean distance.
   * @complexity Time: O(n log n) | Space: O(n) (recursion depth)
   */
  constructor(points: { p: Point; data?: T }[] = [], private distance: (a: Point, b: Point) => number = BallTree.euclidean) {
    if (points.length) this.root = this.build(points);
  }

  /**
   * @notice Computes the Euclidean distance between two points.
   * @param a The first point.
   * @param b The second point.
   * @returns The Euclidean distance.
   * @complexity Time: O(k) | Space: O(1) where k is the dimensionality of the points.
   */
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

    // If all points are identical, maxd will be 0. Avoid infinite recursion.
    if (maxd === 0) {
      const center = this.centroid(points.map(x=>x.p));
      return new BallNode<T>(center, 0, points);
    }

    let leftPts: {p:Point;data?:T}[] = []; let rightPts: {p:Point;data?:T}[] = [];
    for (const pt of points){ const da=this.distance(pt.p, far.p); const db=this.distance(pt.p, far2.p); (da<db?leftPts:rightPts).push(pt); }

    // Fallback if all points went to one side (should not happen if maxd > 0 and using farthest points, but just in case)
    if (leftPts.length === 0 || rightPts.length === 0) {
       const half = Math.floor(points.length / 2);
       leftPts = points.slice(0, half);
       rightPts = points.slice(half);
    }

    const left = this.build(leftPts);
    const right = this.build(rightPts);
    const center = this.centroid(points.map(x=>x.p));
    const radius = Math.max(left? left.radius + this.distance(center, left.center):0, right? right.radius + this.distance(center, right.center):0);
    const node = new BallNode<T>(center, radius, [], left, right);
    return node;
  }

  private centroid(ps: Point[]): Point { const k=ps[0].length; const c=new Array(k).fill(0); for (const p of ps) for (let i=0;i<k;i++) c[i]+=p[i]; for (let i=0;i<k;i++) c[i]/=ps.length; return c; }

  /**
   * @notice Finds all points within a certain radius of a given center point.
   * @param center The center point of the range query.
   * @param tau The search radius (tau).
   * @returns An array of points that fall within the specified radius.
   * @complexity Time: O(n) worst-case | Space: O(log n) (recursion depth)
   */
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

  /**
   * @notice Serializes the tree into a JSON string.
   * @returns A string representing the JSON structure of the tree.
   * @complexity Time: O(n) | Space: O(n) (recursion depth)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
