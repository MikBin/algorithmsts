type Rect = { x: number; y: number; w: number; h: number };
function area(r: Rect): number { return r.w * r.h; }
function union(a: Rect, b: Rect): Rect { const x=Math.min(a.x,b.x), y=Math.min(a.y,b.y); const x2=Math.max(a.x+a.w, b.x+b.w), y2=Math.max(a.y+a.h, b.y+b.h); return { x, y, w: x2-x, h: y2-y }; }
function enlarge(a: Rect, b: Rect): number { return area(union(a,b)) - area(a); }

class RStarNode {
  leaf: boolean;
  entries: { rect: Rect; child?: RStarNode; data?: unknown }[] = [];
  mbr: Rect | null = null;
  constructor(leaf: boolean){ this.leaf = leaf; }
}

type RStarEntry = { rect: Rect; child?: RStarNode; data?: unknown };

/**
 * An R*-Tree implementation, an optimized variant of the R-Tree used for spatial
 * indexing. It employs complex insertion heuristics and forced reinsertion to
 * maintain better tree structure and improve query performance.
 */
export class RStarTree {
  private root = new RStarNode(true);
  private minEntries: number;

  /**
   * Creates a new R*-Tree.
   *
   * @param maxEntries - The maximum number of entries a node can contain.
   * @param reinsertFraction - The fraction of entries to reinsert upon overflow (typically 0.3 for full R* behavior, 0 disables it).
   * @complexity Time: O(1) | Space: O(1) (node allocation)
   */
  constructor(private maxEntries = 8, private reinsertFraction = 0) {
    this.minEntries = Math.max(1, Math.floor(this.maxEntries * 0.4));
  }

  private getHeight(node: RStarNode): number {
    let height = 1;
    let curr = node;
    while (!curr.leaf && curr.entries.length > 0 && curr.entries[0].child) {
      height++;
      curr = curr.entries[0].child;
    }
    return height;
  }


  /**
   * Inserts a spatial rectangle and its associated data into the R*-Tree.
   *
   * @param rect - The bounding rectangle to insert.
   * @param data - Optional data associated with the rectangle.
   * @complexity Time: O(log n) average, potentially higher worst-case due to reinsertion and complex splitting | Space: O(log n) (recursion depth)
   */
  insert(rect: Rect, data?: unknown): void {
    const entry: RStarEntry = { rect, data };
    const treeHeight = this.getHeight(this.root);
    const split = this._insert(this.root, entry, treeHeight, 1, new Set());
    if (split) {
      const newRoot = new RStarNode(false);
      newRoot.entries.push(
        { rect: this.computeMBR(this.root), child: this.root },
        { rect: this.computeMBR(split), child: split }
      );
      this.root = newRoot;
    }
  }

  private chooseSubtree(node: RStarNode, rect: Rect): number {
    // R*-Tree heuristic: choose minimal overlap increase, then area increase
    let best = 0; let bestOverlap = Infinity; let bestInc = Infinity; let bestArea = Infinity;
    for (let i=0;i<node.entries.length;i++){
      const e = node.entries[i];
      const inc = enlarge(e.rect, rect);
      let overlap = 0;
      if (!node.leaf) {
        for (let j=0;j<node.entries.length;j++){ if (j===i) continue; const o = this.intersectionArea(union(e.rect, rect), node.entries[j].rect); overlap += o; }
      }
      const ar = area(e.rect);
      if (overlap < bestOverlap || (overlap===bestOverlap && (inc<bestInc || (inc===bestInc && ar<bestArea)))){
        bestOverlap = overlap; bestInc = inc; bestArea = ar; best = i;
      }
    }
    return best;
  }

  private _insert(node: RStarNode, entry: RStarEntry, nodeLevel: number, targetLevel: number, reinsertedLevels: Set<number>): RStarNode | null {
    if (nodeLevel === targetLevel) {
      node.entries.push(entry);
      if (node.entries.length > this.maxEntries) {
        if (this.reinsertFraction > 0 && node !== this.root && !reinsertedLevels.has(nodeLevel)) {
          reinsertedLevels.add(nodeLevel);
          this.reinsert(node, nodeLevel, reinsertedLevels);
          if (node.entries.length > this.maxEntries) return this.splitNode(node);
          return null;
        } else {
          return this.splitNode(node);
        }
      }
      this.refreshMBR(node); return null;
    }

    const idx = this.chooseSubtree(node, entry.rect);
    const child = node.entries[idx].child!;
    const split = this._insert(child, entry, nodeLevel - 1, targetLevel, reinsertedLevels);

    // During _insert or split, node.entries could have been mutated
    // Re-find the child node to update its mbr
    const childEntry = node.entries.find(e => e.child === child);
    if (childEntry) {
      childEntry.rect = this.computeMBR(child);
    }

    if (split) {
      node.entries.push({ rect: this.computeMBR(split), child: split });
    }

    if (node.entries.length > this.maxEntries) {
      if (this.reinsertFraction > 0 && node !== this.root && !reinsertedLevels.has(nodeLevel)) {
        reinsertedLevels.add(nodeLevel);
        this.reinsert(node, nodeLevel, reinsertedLevels);
        if (node.entries.length > this.maxEntries) return this.splitNode(node);
      } else {
        return this.splitNode(node);
      }
    }
    this.refreshMBR(node); return null;
  }

  private splitNode(node: RStarNode): RStarNode {
    // simple quadratic split (R*-Tree would do more): pick pair with worst dead space, then assign by minimal area increase
    const m = node.entries;
    let i1=0, i2=1, maxWaste=-Infinity;
    for (let i=0;i<m.length;i++) for (let j=i+1;j<m.length;j++){ const w = area(union(m[i].rect,m[j].rect)) - area(m[i].rect) - area(m[j].rect); if (w>maxWaste){ maxWaste=w; i1=i; i2=j; } }
    const n1 = new RStarNode(node.leaf); const n2 = new RStarNode(node.leaf);
    n1.entries.push(m[i1]); n2.entries.push(m[i2]);
    const remaining = m.filter((_,k)=>k!==i1 && k!==i2);
    while (remaining.length){ const e = remaining.pop()!; const inc1=enlarge(this.computeMBR(n1,true), e.rect); const inc2=enlarge(this.computeMBR(n2,true), e.rect); if (inc1<inc2) n1.entries.push(e); else n2.entries.push(e); }
    this.refreshMBR(n1); this.refreshMBR(n2);
    node.entries = n1.entries; node.leaf = n1.leaf; node.mbr = n1.mbr;
    return n2;
  }

  search(rect: Rect): unknown[] { const out: unknown[] = []; this._search(this.root, rect, out); return out; }
  private _search(node: RStarNode, rect: Rect, out: unknown[]): void { if (node.leaf){ for (const e of node.entries){ if (this.intersects(e.rect, rect)) out.push(e.data); } return; } for (const e of node.entries){ if (this.intersects(e.rect, rect)) this._search(e.child!, rect, out); } }

  private intersects(a: Rect, b: Rect): boolean { return !(a.x+a.w <= b.x || b.x+b.w <= a.x || a.y+a.h <= b.y || b.y+b.h <= a.y); }
  private intersectionArea(a: Rect, b: Rect): number { const x = Math.max(0, Math.min(a.x+a.w, b.x+b.w) - Math.max(a.x, b.x)); const y = Math.max(0, Math.min(a.y+a.h, b.y+b.h) - Math.max(a.y, b.y)); return x*y; }
  private computeMBR(nodeOrRect: RStarNode | Rect, ephemeral = false): Rect { if ('leaf' in nodeOrRect){ const node = nodeOrRect as RStarNode; let r = node.entries[0]?.rect; if (!r) return { x:0,y:0,w:0,h:0 }; for (let i=1;i<node.entries.length;i++) r = union(r!, node.entries[i].rect); if (!ephemeral) node.mbr = r!; return r!; } return nodeOrRect as Rect; }
  private refreshMBR(n: RStarNode){ n.mbr = this.computeMBR(n); }
  remove(rect: Rect, data?: unknown): boolean {
    const orphans: { entry: RStarEntry; level: number }[] = [];
    const removed = this._remove(this.root, rect, data, this.getHeight(this.root), orphans);
    if (this.root.entries.length === 1 && this.root.entries[0].child) {
      this.root = this.root.entries[0].child;
    }
    // Reinsert orphaned entries top-level
    for (const { entry, level } of orphans) {
      const treeHeight = this.getHeight(this.root);
      const split = this._insert(this.root, entry, treeHeight, level, new Set());
      if (split) {
        const newRoot = new RStarNode(false);
        newRoot.entries.push(
          { rect: this.computeMBR(this.root), child: this.root },
          { rect: this.computeMBR(split), child: split }
        );
        this.root = newRoot;
      }
    }
    return removed;
  }

  private _remove(node: RStarNode, rect: Rect, data: unknown, nodeLevel: number, orphans: { entry: RStarEntry; level: number }[]): boolean {
    if (node.leaf){
      const before = node.entries.length;
      node.entries = node.entries.filter(e=>!(e.rect.x===rect.x && e.rect.y===rect.y && e.rect.w===rect.w && e.rect.h===rect.h && (data===undefined || e.data===data)));
      if (node.entries.length !== before) { this.refreshMBR(node); return true; }
      return false;
    }
    // internal: search children that intersect
    let removed = false;
    for (let i=0;i<node.entries.length;i++){
      const e = node.entries[i];
      if (this.intersects(e.rect, rect)) {
        if (this._remove(e.child!, rect, data, nodeLevel - 1, orphans)) {
          removed = true;
          e.rect = this.computeMBR(e.child!);
          // underflow handling: reinsert entries of underflowed child
          if (e.child!.entries.length < this.minEntries) {
            const orphan = e.child!;
            node.entries.splice(i,1); i--;
            for (const en of orphan.entries) {
              orphans.push({ entry: en, level: nodeLevel - 1 });
            }
          }
        }
      }
    }
    this.refreshMBR(node); return removed;
  }

  private reinsert(node: RStarNode, nodeLevel: number, reinsertedLevels: Set<number>): void {
    // remove a fraction of entries farthest from MBR center and reinsert from root
    if (node.entries.length===0) return;
    const c = { x: node.mbr!.x + node.mbr!.w/2, y: node.mbr!.y + node.mbr!.h/2, w: 0, h: 0 } as Rect;
    const scored = node.entries.map((e, i) => ({ i, d: Math.hypot((e.rect.x+e.rect.w/2)-c.x, (e.rect.y+e.rect.h/2)-c.y) }));
    scored.sort((a,b)=>b.d-a.d);
    const m = Math.max(1, Math.floor(node.entries.length * this.reinsertFraction));
    const toRe = scored.slice(0, m).map(s=>node.entries[s.i]);
    // remove selected (by index set)
    const idxSet = new Set(scored.slice(0,m).map(s=>s.i));
    node.entries = node.entries.filter((_,i)=>!idxSet.has(i));
    this.refreshMBR(node);
    for (const e of toRe) {
      const treeHeight = this.getHeight(this.root);
      const split = this._insert(this.root, e, treeHeight, nodeLevel, reinsertedLevels);
      if (split) {
        const newRoot = new RStarNode(false);
        newRoot.entries.push({ rect: this.computeMBR(this.root), child: this.root }, { rect: this.computeMBR(split), child: split });
        this.root = newRoot;
      }
    }
  }


  /**
   * Serializes the R*-Tree to a JSON string.
   *
   * @returns A JSON string representation of the tree.
   * @complexity Time: O(n) | Space: O(n) (JSON string allocation)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
