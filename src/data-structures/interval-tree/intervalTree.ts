import { IIterator } from '../../core/interfaces/IIterator';

export type Interval = { start: number; end: number };

class Node {
  constructor(
    public interval: Interval,
    public max: number,
    public left: Node | null = null,
    public right: Node | null = null,
  ) {}
}

class InOrderIterator implements IIterator<Interval> {
  private stack: Array<{ node: Node | null; visited: boolean }> = [];
  private cur: Interval | null = null;
  constructor(root: Node | null) { this.stack.push({ node: root, visited: false }); }
  private step(): boolean { while (this.stack.length) { const { node, visited } = this.stack.pop()!; if (!node) continue; if (visited) { this.cur = node.interval; return true; } this.stack.push({ node: node.right, visited: false }); this.stack.push({ node, visited: true }); this.stack.push({ node: node.left, visited: false }); } return false; }
  hasNext(): boolean { if (this.cur) return true; return this.step(); }
  next(): Interval { if (!this.hasNext()) throw new Error('No more elements'); const v = this.cur!; this.cur = null; return v; }
  current(): Interval { if (!this.cur) throw new Error('No current element'); return this.cur; }
}

export class IntervalTree {
  private root: Node | null = null;
  private _size = 0;

  get size(): number { return this._size; }

  add(interval: Interval): void { this.root = this._insert(this.root, interval); this._size++; }
  removeExact(interval: Interval): boolean { const [nr, removed] = this._remove(this.root, interval); this.root = nr; if (removed) this._size--; return removed; }

  private _insert(node: Node | null, it: Interval): Node {
    if (!node) return new Node(it, it.end);
    if (it.start < node.interval.start) node.left = this._insert(node.left, it);
    else node.right = this._insert(node.right, it);
    node.max = Math.max(node.max, it.end);
    return node;
  }

  searchOverlap(query: Interval): Interval[] { const res: Interval[] = []; this._search(this.root, query, res); return res; }

  private _search(node: Node | null, q: Interval, res: Interval[]): void {
    if (!node) return;
    if (node.left && node.left.max >= q.start) this._search(node.left, q, res);
    if (node.interval.start <= q.end && node.interval.end >= q.start) res.push(node.interval);
    if (node.right && node.interval.start <= q.end) this._search(node.right, q, res);
  }

  private _remove(node: Node | null, it: Interval): [Node | null, boolean] {
    if (!node) return [null, false];
    let removed = false;
    if (it.start < node.interval.start) { const [l,r]=this._remove(node.left, it); node.left=l; removed=r; }
    else if (it.start > node.interval.start) { const [ri,r]=this._remove(node.right, it); node.right=ri; removed=r; }
    else if (it.end === node.interval.end) {
      removed = true;
      if (!node.left) return [node.right, true];
      if (!node.right) return [node.left, true];
      // replace with min from right
      let minPar = node; let min = node.right;
      while (min!.left) { minPar = min!; min = min!.left; }
      node.interval = min!.interval;
      if (minPar.left === min) minPar.left = min!.right; else minPar.right = min!.right;
    } else { const [ri,r]=this._remove(node.right, it); node.right=ri; removed=r; }
    node.max = Math.max(node.interval.end, node.left?node.left.max:-Infinity, node.right?node.right.max:-Infinity);
    return [node, removed];
  }

  clear(): void { this.root = null; this._size = 0; }
  iterator(): IIterator<Interval> { return new InOrderIterator(this.root); }
  toArray(): Interval[] { const a: Interval[] = []; const it = this.iterator(); while (it.hasNext()) a.push(it.next()); return a; }
}
