/**
 * A Vantage-Point (VP) Tree is a metric tree that segregates data in a metric space
 * by choosing a position in the space (the "vantage point") and dividing the data points
 * into two sets: those that are nearer to the vantage point than a threshold, and those that are not.
 * It is highly effective for nearest neighbor search in various metric spaces.
 *
 * @complexity Time: O(n log^2 n) for construction, O(log n) expected for search | Space: O(n) memory allocation
 */
export class VPTree<T> {
  private root: Node<T> | null = null;

  /**
   * Constructs a new VP Tree.
   *
   * @param distance Function to calculate the distance between two elements. Must satisfy metric space properties.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private distance: (a: T, b: T) => number) {}

  /**
   * Builds the tree from a set of points.
   *
   * @param points The points to populate the tree with.
   * @complexity Time: O(n log^2 n) (sort-based median selection per node) | Space: O(n) for tree nodes and temporary arrays
   */
  build(points: T[]): void { this.root = this._build(points); }
  private _build(points: T[]): Node<T> | null {
    if (points.length === 0) return null;
    const vp = points[points.length-1]; // pick last as vantage point
    const node = new Node<T>(vp);
    if (points.length === 1) return node;
    const dists = points.slice(0, -1).map(p => this.distance(p, vp));
    const median = this.kth(dists.slice(), Math.floor(dists.length/2));
    node.mu = median;
    const left: T[] = []; const right: T[] = [];
    for (let i=0;i<points.length-1;i++){ const p=points[i]; (dists[i] <= median ? left : right).push(p); }
    node.left = this._build(left);
    node.right = this._build(right);
    return node;
  }

  private kth(arr: number[], k: number): number { arr.sort((a,b)=>a-b); return arr[k]; }

  /**
   * Finds all points within a specified distance (radius) from a target point.
   *
   * @param target The central point of the search.
   * @param tau The maximum distance (radius) to search within.
   * @returns An array of points that fall within the given distance.
   * @complexity Time: O(log n) expected, worst-case O(n) | Space: O(k) where k is the number of points found, plus O(log n) recursion depth
   */
  rangeQuery(target: T, tau: number): T[] { const res: T[] = []; this._range(this.root, target, tau, res); return res; }
  private _range(node: Node<T> | null, t: T, tau: number, out: T[]): void {
    if (!node) return;
    const d = this.distance(t, node.vp);
    if (d <= tau) out.push(node.vp);
    if (d - tau <= node.mu) this._range(node.left, t, tau, out);
    if (d + tau >= node.mu) this._range(node.right, t, tau, out);
  }
}
class Node<T> { constructor(public vp: T, public mu: number = 0, public left: Node<T>|null=null, public right: Node<T>|null=null){} }
