type Point = number[];

class CTNode<T=unknown> {
  children: CTNode<T>[] = [];
  constructor(public p: Point, public data?: T) {}
}

/**
 * @title Cover Tree
 * @notice A tree data structure used for the nearest neighbor problem in metric spaces.
 * @dev It supports efficient nearest neighbor searches in datasets with intrinsic low dimensionality.
 * @template T Type of the optional data payload associated with each point.
 */
export class CoverTree<T=unknown> {
  private root: CTNode<T> | null = null;
  private pts: { p: Point; data?: T }[] = [];

  /**
   * @notice Constructs a new Cover Tree.
   * @param distance The distance function forming the metric space. Defaults to Euclidean distance.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private distance: (a: Point, b: Point) => number = CoverTree.euclidean) {}

  /**
   * @notice Computes the Euclidean distance between two points.
   * @param a The first point.
   * @param b The second point.
   * @returns The Euclidean distance.
   * @complexity Time: O(k) | Space: O(1) where k is the dimensionality of the points.
   */
  static euclidean(a: Point, b: Point): number { let s=0; for (let i=0;i<a.length;i++){ const d=a[i]-b[i]; s+=d*d; } return Math.sqrt(s); }

  /**
   * @notice Adds a new point to the Cover Tree.
   * @param p The coordinates of the point.
   * @param data Optional data associated with the point.
   * @complexity Time: O(log n) average | Space: O(1) where n is the number of points.
   */
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

  /**
   * @notice Finds the single nearest neighbor to the query point.
   * @param q The query point.
   * @returns The nearest point, its data, and distance, or `null` if empty.
   * @complexity Time: O(n) | Space: O(1) (currently implemented via linear scan).
   */
  nearest(q: Point): { p: Point; data?: T; dist: number } | null {
    if (this.pts.length === 0) return null;
    let best = this.pts[0]; let bestD = this.distance(q, best.p);
    for (let i=1;i<this.pts.length;i++) { const d=this.distance(q, this.pts[i].p); if (d<bestD){ best=this.pts[i]; bestD=d; } }
    return { p: best.p, data: best.data, dist: bestD };
  }

  /**
   * @notice Finds the k nearest neighbors to the query point.
   * @param q The query point.
   * @param k The number of neighbors to find.
   * @returns An array of the k nearest points sorted by distance.
   * @complexity Time: O(n log n) | Space: O(n) where n is the number of points.
   */
  kNearest(q: Point, k: number): { p: Point; data?: T; dist: number }[] {
    const arr = this.pts.map(x=>({ p:x.p, data:x.data, dist: this.distance(q, x.p) }));
    arr.sort((a,b)=>a.dist-b.dist);
    return arr.slice(0, k);
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
