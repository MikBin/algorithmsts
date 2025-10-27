export type Point = number[];

class KDNode {
  constructor(public point: Point, public axis: number, public left: KDNode | null = null, public right: KDNode | null = null) {}
}

export class KDTree {
  private root: KDNode | null = null;
  private k: number;
  private _size = 0;
  constructor(dimensions: number) { if (dimensions <= 0) throw new Error('dimensions must be > 0'); this.k = dimensions; }
  get size(): number { return this._size; }
  insert(p: Point): void { if (p.length !== this.k) throw new Error('point dimension mismatch'); this.root = this._insert(this.root, p, 0); this._size++; }
  private _insert(node: KDNode | null, p: Point, depth: number): KDNode { if (!node) return new KDNode(p, depth % this.k); if (p[node.axis] < node.point[node.axis]) node.left = this._insert(node.left, p, depth + 1); else node.right = this._insert(node.right, p, depth + 1); return node; }
  rangeQuery(min: Point, max: Point): Point[] { const res: Point[] = []; this._range(this.root, min, max, res); return res; }
  private _range(node: KDNode | null, min: Point, max: Point, out: Point[]) { if (!node) return; let inside = true; for (let i=0;i<this.k;i++){ if (node.point[i] < min[i] || node.point[i] > max[i]) { inside=false; break; } } if (inside) out.push(node.point); if (node.left && node.point[node.axis] >= min[node.axis]) this._range(node.left, min, max, out); if (node.right && node.point[node.axis] <= max[node.axis]) this._range(node.right, min, max, out); }
  nearest(q: Point): { point: Point; dist: number } | null { let best: Point | null = null; let bestD = Infinity; const dist=(a:Point,b:Point)=>{ let s=0; for (let i=0;i<this.k;i++){ const d=a[i]-b[i]; s+=d*d; } return Math.sqrt(s); }; const dfs=(n:KDNode|null)=>{ if(!n) return; const d=dist(q,n.point); if(d<bestD){ bestD=d; best=n.point; } const axis=n.axis; const goLeft = q[axis] < n.point[axis]; const first = goLeft? n.left : n.right; const second = goLeft? n.right : n.left; dfs(first); if (Math.abs(q[axis]-n.point[axis]) < bestD) dfs(second); }; dfs(this.root); return best? { point: best, dist: bestD } : null; }
  toArray(): Point[] { const res: Point[] = []; const stack: (KDNode|null)[] = [this.root]; while (stack.length) { const n = stack.pop(); if (!n) continue; res.push(n.point); stack.push(n.left, n.right); } return res; }
  clear(): void { this.root = null; this._size = 0; }
}
