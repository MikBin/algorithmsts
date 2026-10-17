import { IIterator } from "../../core/interfaces/IIterator";
import { InOrderIterator } from "../../core/iterators/InOrderIterator";

export type Interval = { start: number; end: number };

class Node {
  constructor(
    public key: Interval,
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
    if (it.start < node.key.start) node.left = this._insert(node.left, it);
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
    if (node.key.start <= q.end && node.key.end >= q.start) res.push(node.key);
    if (node.right && node.key.start <= q.end) this._search(node.right, q, res);
  }

  private _remove(node: Node | null, it: Interval): [Node | null, boolean] {
    if (!node) return [null, false];
    let removed = false;
    if (it.start < node.key.start) {
      const [l, r] = this._remove(node.left, it);
      node.left = l;
      removed = r;
    } else if (it.start > node.key.start) {
      const [ri, r] = this._remove(node.right, it);
      node.right = ri;
      removed = r;
    } else if (it.end === node.key.end) {
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
      node.key = min!.key;
      if (minPar.left === min) minPar.left = min!.right;
      else minPar.right = min!.right;
    } else {
      const [ri, r] = this._remove(node.right, it);
      node.right = ri;
      removed = r;
    }
    node.max = Math.max(
      node.key.end,
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
    return new InOrderIterator<Interval>(this.root as any);
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
