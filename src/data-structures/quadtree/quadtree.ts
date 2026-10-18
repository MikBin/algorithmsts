type Point = { x: number; y: number; data?: unknown };
class QuadNode {
  constructor(
    public x: number,
    public y: number,
    public w: number,
    public h: number,
    public points: Point[] = [],
    public nw: QuadNode | null = null,
    public ne: QuadNode | null = null,
    public sw: QuadNode | null = null,
    public se: QuadNode | null = null,
    public divided: boolean = false,
  ) {}
  contains(p: Point): boolean { return p.x>=this.x && p.x<this.x+this.w && p.y>=this.y && p.y<this.y+this.h; }
}

/**
 * A Quadtree data structure for partitioning 2D space and querying points.
 */
export class Quadtree {
  private root: QuadNode;

  /**
   * Creates a new Quadtree with the specified bounds and node capacity.
   *
   * @param x - The minimum x-coordinate of the quadtree bounds.
   * @param y - The minimum y-coordinate of the quadtree bounds.
   * @param w - The width of the quadtree bounds.
   * @param h - The height of the quadtree bounds.
   * @param capacity - The maximum number of points a node can hold before subdividing.
   * @param maxDepth - The maximum depth to subdivide. Default is 20 to prevent infinite recursion on identical points.
   * @complexity Time: O(1) | Space: O(1) (node allocation)
   */
  constructor(x: number, y: number, w: number, h: number, private capacity = 4, private maxDepth = 20) { this.root = new QuadNode(x,y,w,h); }

  /**
   * Inserts a point into the quadtree.
   *
   * @param p - The point to insert.
   * @returns True if the point was successfully inserted, false if it lies outside the bounds.
   * @complexity Time: O(log n) average, O(n) worst-case | Space: O(log n) average, O(n) worst-case (recursion depth)
   */
  insert(p: Point): boolean { return this._insert(this.root, p, 0); }
  private _insert(n: QuadNode, p: Point, depth: number): boolean {
    if (!n.contains(p)) return false;
    if ((n.points.length < this.capacity || depth >= this.maxDepth) && !n.divided){ n.points.push(p); return true; }
    if (!n.divided) this.subdivide(n, depth);
    return this._insert(n.nw!, p, depth + 1) || this._insert(n.ne!, p, depth + 1) || this._insert(n.sw!, p, depth + 1) || this._insert(n.se!, p, depth + 1);
  }
  private subdivide(n: QuadNode, depth: number): void {
    const hw=n.w/2, hh=n.h/2; n.divided=true;
    n.nw=new QuadNode(n.x, n.y, hw, hh);
    n.ne=new QuadNode(n.x+hw, n.y, hw, hh);
    n.sw=new QuadNode(n.x, n.y+hh, hw, hh);
    n.se=new QuadNode(n.x+hw, n.y+hh, hw, hh);
    for (const pt of n.points) this._insert(n, pt, depth);
    n.points = [];
  }

  /**
   * Queries the quadtree for points within a specified rectangular bounding box.
   *
   * @param x - The minimum x-coordinate of the query bounding box.
   * @param y - The minimum y-coordinate of the query bounding box.
   * @param w - The width of the query bounding box.
   * @param h - The height of the query bounding box.
   * @returns An array of points that fall within the specified query bounds.
   * @complexity Time: O(k + log n) average, O(n) worst-case (where k is the number of points found) | Space: O(k + log n) average, O(n) worst-case (recursion depth and result array)
   */
  query(x: number, y: number, w: number, h: number): Point[] { const res: Point[]=[]; this._query(this.root, x,y,w,h,res); return res; }
  private _query(n: QuadNode, x:number,y:number,w:number,h:number,out:Point[]): void {
    if (x>=n.x+n.w || x+w<=n.x || y>=n.y+n.h || y+h<=n.y) return; // no overlap
    for (const p of n.points){ if (p.x>=x && p.x<x+w && p.y>=y && p.y<y+h) out.push(p); }
    if (!n.divided) return;
    this._query(n.nw!,x,y,w,h,out); this._query(n.ne!,x,y,w,h,out); this._query(n.sw!,x,y,w,h,out); this._query(n.se!,x,y,w,h,out);
  }

  /**
   * Serializes the quadtree to a JSON string.
   *
   * @returns A JSON string representation of the quadtree.
   * @complexity Time: O(n) | Space: O(n) (JSON string allocation)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
