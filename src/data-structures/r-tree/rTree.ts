type Rect = { x: number; y: number; w: number; h: number };
function area(r: Rect): number { return r.w * r.h; }
function union(a: Rect, b: Rect): Rect { const x=Math.min(a.x,b.x), y=Math.min(a.y,b.y); const x2=Math.max(a.x+a.w, b.x+b.w), y2=Math.max(a.y+a.h, b.y+b.h); return { x, y, w: x2-x, h: y2-y }; }
function enlarge(a: Rect, b: Rect): number { return area(union(a,b)) - area(a); }

class RNode {
  leaf: boolean;
  entries: { rect: Rect; child?: RNode; data?: unknown }[] = [];
  mbr: Rect | null = null;
  constructor(leaf: boolean){ this.leaf = leaf; }
}

export class RTree {
  private root = new RNode(true);
  constructor(private maxEntries = 8) {}

  insert(rect: Rect, data?: unknown): void { const split = this._insert(this.root, rect, data); if (split) { const newRoot = new RNode(false); newRoot.entries.push({ rect: this.computeMBR(this.root), child: this.root }, { rect: this.computeMBR(split), child: split }); this.root = newRoot; } }

  private _insert(node: RNode, rect: Rect, data?: unknown): RNode | null {
    if (node.leaf) {
      node.entries.push({ rect, data });
      if (node.entries.length > this.maxEntries) return this.splitNode(node);
      this.refreshMBR(node); return null;
    }
    // choose child that requires least enlargement
    let best = 0; let bestInc = Infinity;
    for (let i=0;i<node.entries.length;i++){ const inc = enlarge(node.entries[i].rect, rect); if (inc<bestInc){ bestInc=inc; best=i; } }
    const child = node.entries[best].child!;
    const split = this._insert(child, rect, data);
    node.entries[best].rect = this.computeMBR(child);
    if (split){ node.entries.push({ rect: this.computeMBR(split), child: split }); if (node.entries.length>this.maxEntries) return this.splitNode(node); }
    this.refreshMBR(node); return null;
  }

  private splitNode(node: RNode): RNode {
    // linear split heuristic
    const m = node.entries;
    let i1=0, i2=0, maxD=-1;
    for (let i=0;i<m.length;i++) for (let j=i+1;j<m.length;j++){ const r1=m[i].rect, r2=m[j].rect; const d = area(union(r1,r2)) - area(r1) - area(r2); if (d>maxD){ maxD=d; i1=i; i2=j; } }
    const n1 = new RNode(node.leaf); const n2 = new RNode(node.leaf);
    const e1 = m[i1]; const e2 = m[i2];
    n1.entries.push(e1); n2.entries.push(e2);
    const remaining = m.filter((_,k)=>k!==i1 && k!==i2);
    while (remaining.length){ const e = remaining.pop()!; const inc1=enlarge(this.computeMBR(n1,true), e.rect); const inc2=enlarge(this.computeMBR(n2,true), e.rect); if (inc1<inc2) n1.entries.push(e); else n2.entries.push(e); }
    this.refreshMBR(n1); this.refreshMBR(n2);
    // mutate original node to first split part
    node.entries = n1.entries; node.leaf = n1.leaf; node.mbr = n1.mbr;
    return n2;
  }

  search(rect: Rect): unknown[] { const out: unknown[] = []; this._search(this.root, rect, out); return out; }
  private _search(node: RNode, rect: Rect, out: unknown[]): void {
    if (node.leaf){ for (const e of node.entries){ if (this.intersects(e.rect, rect)) out.push(e.data); } return; }
    for (const e of node.entries){ if (this.intersects(e.rect, rect)) this._search(e.child!, rect, out); }
  }

  private intersects(a: Rect, b: Rect): boolean { return !(a.x+a.w <= b.x || b.x+b.w <= a.x || a.y+a.h <= b.y || b.y+b.h <= a.y); }
  private computeMBR(nodeOrRect: RNode | Rect, ephemeral = false): Rect { if ('leaf' in nodeOrRect){ const node = nodeOrRect as RNode; let r = node.entries[0]?.rect; if (!r) return { x:0,y:0,w:0,h:0 }; for (let i=1;i<node.entries.length;i++) r = union(r!, node.entries[i].rect); if (!ephemeral) node.mbr = r!; return r!; } return nodeOrRect as Rect; }
  private refreshMBR(n: RNode){ n.mbr = this.computeMBR(n); }
}
