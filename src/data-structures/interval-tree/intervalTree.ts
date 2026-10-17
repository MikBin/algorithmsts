import { IIterator } from "../../core/interfaces/IIterator";
import { InOrderIterator } from "../../core/iterators/InOrderIterator";

export type Interval = { start: number; end: number };

class Node {
  constructor(
    public interval: Interval,
    public max: number,
    public left: Node | null = null,
    public right: Node | null = null,
  ) {}
}

export class IntervalTree {
  private root: Node | null = null;
  private _size = 0;

  get size(): number {
    return this._size;
  }

  add(interval: Interval): void {
    this.root = this._insert(this.root, interval);
    this._size++;
  }
  removeExact(interval: Interval): boolean {
    const [nr, removed] = this._remove(this.root, interval);
    this.root = nr;
    if (removed) this._size--;
    return removed;
  }

  private _insert(node: Node | null, it: Interval): Node {
    if (!node) return new Node(it, it.end);
    if (it.start < node.interval.start) node.left = this._insert(node.left, it);
    else node.right = this._insert(node.right, it);
    node.max = Math.max(node.max, it.end);
    return node;
  }

  searchOverlap(query: Interval): Interval[] {
    const res: Interval[] = [];
    this._search(this.root, query, res);
    return res;
  }

  private _search(node: Node | null, q: Interval, res: Interval[]): void {
    if (!node) return;
    if (node.left && node.left.max >= q.start) this._search(node.left, q, res);
    if (node.interval.start <= q.end && node.interval.end >= q.start) res.push(node.interval);
    if (node.right && node.interval.start <= q.end) this._search(node.right, q, res);
  }

  private _remove(node: Node | null, it: Interval): [Node | null, boolean] {
    if (!node) return [null, false];
    let removed = false;
    if (it.start < node.interval.start) {
      const [l, r] = this._remove(node.left, it);
      node.left = l;
      removed = r;
    } else if (it.start > node.interval.start) {
      const [ri, r] = this._remove(node.right, it);
      node.right = ri;
      removed = r;
    } else if (it.end === node.interval.end) {
      removed = true;
      if (!node.left) return [node.right, true];
      if (!node.right) return [node.left, true];
      // replace with min from right
      let minPar = node;
      let min = node.right;
      while (min!.left) {
        minPar = min!;
        min = min!.left;
      }
      node.interval = min!.interval;
      if (minPar.left === min) minPar.left = min!.right;
      else minPar.right = min!.right;
    } else {
      const [ri, r] = this._remove(node.right, it);
      node.right = ri;
      removed = r;
    }
    node.max = Math.max(
      node.interval.end,
      node.left ? node.left.max : -Infinity,
      node.right ? node.right.max : -Infinity,
    );
    return [node, removed];
  }

  clear(): void {
    this.root = null;
    this._size = 0;
  }
  iterator(): IIterator<Interval> {
    return new InOrderIterator(this.root);
  }
  toArray(): Interval[] {
    const a: Interval[] = [];
    const it = this.iterator();
    while (it.hasNext()) a.push(it.next());
    return a;
  }

  toJson(): string {
    return JSON.stringify(this.root);
  }
}
