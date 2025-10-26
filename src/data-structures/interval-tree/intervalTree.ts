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

  clear(): void { this.root = null; this._size = 0; }
  iterator(): IIterator<Interval> { return new InOrderIterator(this.root); }
  toArray(): Interval[] { const a: Interval[] = []; const it = this.iterator(); while (it.hasNext()) a.push(it.next()); return a; }
}
