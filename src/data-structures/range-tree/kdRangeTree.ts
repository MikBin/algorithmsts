type Point = number[];

class KDNode {
  constructor(
    public point: Point,
    public axis: number,
    public left: KDNode | null = null,
    public right: KDNode | null = null,
  ) {}
}

/**
 * A k-dimensional Range Tree implemented via a k-d tree structure.
 * Optimizes multi-dimensional orthogonal range queries.
 */
export class KDRangeTree {
  private root: KDNode | null = null;
  private k = 0;

  /**
   * Creates a new KDRangeTree built from the provided multi-dimensional points.
   *
   * @param points - Array of k-dimensional points to build the tree from.
   * @complexity Time: O(n log^2 n) | Space: O(n log n) (node allocations and point array sorting)
   */
  constructor(points: Point[] = []) {
    if (points.length) { this.k = points[0].length; this.root = this.build([...points], 0); }
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

  /**
   * Queries the tree for points falling within the specified k-dimensional bounding box.
   *
   * @param bounds - Array of length k, where each element is a tuple [min, max] defining the bounds for that dimension.
   * @returns An array of points that lie within the given bounds.
   * @complexity Time: O(k + n^(1 - 1/k) + m) where m is number of reported points | Space: O(log n + m) (recursion depth and result array)
   */
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

  /**
   * Serializes the tree to a JSON string.
   *
   * @returns A JSON string representation of the tree.
   * @complexity Time: O(n) | Space: O(n) (JSON string allocation)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
