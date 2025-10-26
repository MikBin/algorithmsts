type Point2D<T=unknown> = { x: number; y: number; data?: T };

class RangeNode<T> {
  xKey: number;
  left: RangeNode<T> | null = null;
  right: RangeNode<T> | null = null;
  byY: Point2D<T>[] = [];
  constructor(points: Point2D<T>[]) {
    const mid = Math.floor(points.length/2);
    const sortedX = points.sort((a,b)=>a.x-b.x);
    const pivot = sortedX[mid];
    this.xKey = pivot.x;
    this.byY = points.slice().sort((a,b)=>a.y-b.y);
    const leftPts = sortedX.slice(0, mid);
    const rightPts = sortedX.slice(mid+1);
    if (leftPts.length) this.left = new RangeNode(leftPts);
    if (rightPts.length) this.right = new RangeNode(rightPts);
  }
}

export class RangeTree2D<T=unknown> {
  private root: RangeNode<T> | null = null;
  constructor(points: Point2D<T>[] = []) { if (points.length) this.root = new RangeNode(points.slice()); }

  query(x1:number, x2:number, y1:number, y2:number): Point2D<T>[] {
    const out: Point2D<T>[] = [];
    const dfs = (n: RangeNode<T> | null) => { if (!n) return; if (x2 < n.xKey) return dfs(n.left); if (x1 > n.xKey) return dfs(n.right);
      // this node's slab overlaps; if subtree entirely within x-range, use byY to binary search
      const collectByY = (arr: Point2D<T>[]) => {
        // linear scan between lower and upper bound (binary search indices)
        let l=0,r=arr.length; while(l<r){ const m=(l+r)>>1; if (arr[m].y<y1) l=m+1; else r=m; } const start=l; l=0; r=arr.length; while(l<r){ const m=(l+r)>>1; if (arr[m].y<=y2) l=m+1; else r=m; } const end=l; for (let i=start;i<end;i++){ const p=arr[i]; if (p.x>=x1 && p.x<=x2) out.push(p); }
      };
      // For simplicity, traverse both subtrees and filter byY at current
      collectByY(n.byY);
      dfs(n.left); dfs(n.right);
    };
    dfs(this.root);
    return out;
  }
}
