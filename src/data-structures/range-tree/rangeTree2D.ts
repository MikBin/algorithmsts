type Point2D<T=unknown> = { x: number; y: number; data?: T };

class RangeNode<T> {
  xKey: number;
  minX: number;
  maxX: number;
  point: Point2D<T>;
  left: RangeNode<T> | null = null;
  right: RangeNode<T> | null = null;
  byY: Point2D<T>[] = [];
  constructor(points: Point2D<T>[]) {
    const mid = Math.floor(points.length/2);
    const sortedX = points.sort((a,b)=>a.x-b.x);
    const pivot = sortedX[mid];
    this.xKey = pivot.x;
    this.point = pivot;
    this.minX = sortedX[0].x;
    this.maxX = sortedX[sortedX.length - 1].x;
    this.byY = points.slice().sort((a,b)=>a.y-b.y);
    const leftPts = sortedX.slice(0, mid);
    const rightPts = sortedX.slice(mid+1);
    if (leftPts.length) this.left = new RangeNode(leftPts);
    if (rightPts.length) this.right = new RangeNode(rightPts);
  }
}

/**
 * A 2-Dimensional Range Tree used for fast orthogonal range queries.
 * Built as a binary search tree on the x-coordinates, where each node contains
 * an auxiliary 1D array sorted by y-coordinates.
 */
export class RangeTree2D<T=unknown> {
  private root: RangeNode<T> | null = null;

  /**
   * Creates a new 2D Range Tree.
   *
   * @param points - Optional array of 2D points to initially build the tree.
   * @complexity Time: O(n log^2 n) | Space: O(n log n) (due to storing auxiliary y-arrays at each node level)
   */
  constructor(points: Point2D<T>[] = []) { if (points.length) this.root = new RangeNode(points.slice()); }

  /**
   * Queries points in a rectangular region.
   *
   * Time complexity: O(log^2 n + k) where n is total points, k is number of reported points
   * Space complexity: O(n log n)
   */
  query(x1:number, x2:number, y1:number, y2:number): Point2D<T>[] {
    const out: Point2D<T>[] = [];
    const dfs = (n: RangeNode<T> | null) => {
      if (!n) return;

      // If subtree is completely outside x-range, prune
      if (x2 < n.minX || x1 > n.maxX) return;

      // If subtree is completely within x-range, collect from byY array and return
      if (x1 <= n.minX && x2 >= n.maxX) {
        const collectByY = (arr: Point2D<T>[]) => {
          let l=0,r=arr.length; while(l<r){ const m=(l+r)>>1; if (arr[m].y<y1) l=m+1; else r=m; } const start=l; l=0; r=arr.length; while(l<r){ const m=(l+r)>>1; if (arr[m].y<=y2) l=m+1; else r=m; } const end=l; for (let i=start;i<end;i++){ const p=arr[i]; out.push(p); }
        };
        collectByY(n.byY);
        return;
      }

      // Check current node's exact point if within query bounds
      if (n.point.x >= x1 && n.point.x <= x2 && n.point.y >= y1 && n.point.y <= y2) {
        out.push(n.point);
      }

      // Traverse subtrees for partial overlaps
      dfs(n.left);
      dfs(n.right);
    };
    dfs(this.root);
    return out;
  }


  /**
   * Serializes the tree to a JSON string.
   *
   * @returns A JSON string representation of the tree.
   * @complexity Time: O(n log n) | Space: O(n log n) (JSON string representation including auxiliary arrays)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
