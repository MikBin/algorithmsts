export type Point = number[];

class KDNode {
  constructor(public point: Point, public axis: number, public left: KDNode | null = null, public right: KDNode | null = null) {}
}

/**
 * Represents a k-d tree (k-dimensional tree) for organizing points in a k-dimensional space.
 */
export class KDTree {
  private root: KDNode | null = null;
  private k: number;
  private _size = 0;

  /**
   * Initializes a new k-d tree with the specified number of dimensions.
   *
   * @param dimensions The number of dimensions for points in this tree.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(dimensions: number) { if (dimensions <= 0) throw new Error('dimensions must be > 0'); this.k = dimensions; }

  /**
   * Gets the number of points stored in the tree.
   *
   * @returns The number of points.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number { return this._size; }

  /**
   * Inserts a new point into the k-d tree.
   *
   * @param p The point to insert.
   * @complexity Time: O(log n) average, O(n) worst-case | Space: O(log n) average, O(n) worst-case (recursion depth)
   */
  insert(p: Point): void { if (p.length !== this.k) throw new Error('point dimension mismatch'); this.root = this._insert(this.root, p, 0); this._size++; }
  private _insert(node: KDNode | null, p: Point, depth: number): KDNode { if (!node) return new KDNode(p, depth % this.k); if (p[node.axis] < node.point[node.axis]) node.left = this._insert(node.left, p, depth + 1); else node.right = this._insert(node.right, p, depth + 1); return node; }

  /**
   * Finds all points within the specified multi-dimensional bounding box.
   *
   * @param min The minimum coordinates of the bounding box.
   * @param max The maximum coordinates of the bounding box.
   * @returns An array of points that fall within the bounding box.
   * @complexity Time: O(k * n^(1-1/k) + m) average, O(n * k + m) worst-case (where k is dimensionality, m is reported points) | Space: O(log n + m) average, O(n + m) worst-case
   */
  rangeQuery(min: Point, max: Point): Point[] { const res: Point[] = []; this._range(this.root, min, max, res); return res; }
  private _range(node: KDNode | null, min: Point, max: Point, out: Point[]) { if (!node) return; let inside = true; for (let i=0;i<this.k;i++){ if (node.point[i] < min[i] || node.point[i] > max[i]) { inside=false; break; } } if (inside) out.push(node.point); if (node.left && node.point[node.axis] >= min[node.axis]) this._range(node.left, min, max, out); if (node.right && node.point[node.axis] <= max[node.axis]) this._range(node.right, min, max, out); }

  /**
   * Finds the nearest neighbor to a given query point.
   *
   * @param q The query point.
   * @returns An object containing the nearest point and its distance, or null if the tree is empty.
   * @complexity Time: O(log n) average, O(n) worst-case | Space: O(log n) average, O(n) worst-case (recursion depth)
   */
  nearest(q: Point): { point: Point; dist: number } | null { let best: Point | null = null; let bestD = Infinity; const dist=(a:Point,b:Point)=>{ let s=0; for (let i=0;i<this.k;i++){ const d=a[i]-b[i]; s+=d*d; } return Math.sqrt(s); }; const dfs=(n:KDNode|null)=>{ if(!n) return; const d=dist(q,n.point); if(d<bestD){ bestD=d; best=n.point; } const axis=n.axis; const goLeft = q[axis] < n.point[axis]; const first = goLeft? n.left : n.right; const second = goLeft? n.right : n.left; dfs(first); if (Math.abs(q[axis]-n.point[axis]) < bestD) dfs(second); }; dfs(this.root); return best? { point: best, dist: bestD } : null; }

  /**
   * Finds the k nearest neighbors to a given query point.
   * Note: The current implementation performs a linear scan over all points.
   *
   * @param q The query point.
   * @param k The number of nearest neighbors to retrieve.
   * @returns An array of objects containing the points and their distances.
   * @complexity Time: O(n log n) | Space: O(n)
   */
  kNearest(q: Point, k: number): { point: Point; dist: number }[] { const pts=this.toArray(); const dist=(a:Point,b:Point)=>{ let s=0; for (let i=0;i<this.k;i++){ const d=a[i]-b[i]; s+=d*d; } return Math.sqrt(s); }; const arr=pts.map(p=>({ point:p, dist: dist(q,p) })); arr.sort((a,b)=>a.dist-b.dist); return arr.slice(0, Math.max(0,k)); }

  /**
   * Returns an array of all points in the tree via a pre-order traversal.
   *
   * @returns An array of all points.
   * @complexity Time: O(n) | Space: O(n)
   */
  toArray(): Point[] { const res: Point[] = []; const stack: (KDNode|null)[] = [this.root]; while (stack.length) { const n = stack.pop(); if (!n) continue; res.push(n.point); stack.push(n.left, n.right); } return res; }

  /**
   * Clears the tree, removing all points.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void { this.root = null; this._size = 0; }

  /**
   * Serializes the internal tree state to a JSON string.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
