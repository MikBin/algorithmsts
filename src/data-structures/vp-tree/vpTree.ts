export class VPTree<T> {
  private root: Node<T> | null = null;
  constructor(private distance: (a: T, b: T) => number) {}

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
