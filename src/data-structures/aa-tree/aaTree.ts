import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';

class AANode<T> {
  constructor(
    public key: T,
    public level: number = 1,
    public left: AANode<T> | null = null,
    public right: AANode<T> | null = null,
  ) {}
}

class InOrderIterator<T> implements IIterator<T> {
  private stack: Array<{ node: AANode<T> | null; visited: boolean }> = [];
  private cur: T | null = null;
  constructor(root: AANode<T> | null) { this.stack.push({ node: root, visited: false }); }
  private step(): boolean { while (this.stack.length) { const { node, visited } = this.stack.pop()!; if (!node) continue; if (visited) { this.cur = node.key; return true; } this.stack.push({ node: node.right, visited: false }); this.stack.push({ node, visited: true }); this.stack.push({ node: node.left, visited: false }); } return false; }
  hasNext(): boolean { if (this.cur!==null) return true; return this.step(); }
  next(): T { if (!this.hasNext()) throw new Error('No more elements'); const v=this.cur as T; this.cur=null; return v; }
  current(): T { if (this.cur===null) throw new Error('No current element'); return this.cur as T; }
}

export class AATree<T> extends BaseDataStructure<T> {
  private root: AANode<T> | null = null;
  constructor(private compare: (a: T, b: T) => number) { super(); }

  private skew(node: AANode<T> | null): AANode<T> | null {
    if (!node || !node.left) return node;
    if (node.left.level === node.level) {
      const L = node.left;
      node.left = L.right;
      L.right = node;
      return L;
    }
    return node;
  }

  private split(node: AANode<T> | null): AANode<T> | null {
    if (!node || !node.right || !node.right.right) return node;
    if (node.level === node.right.right.level) {
      const R = node.right;
      node.right = R.left;
      R.left = node;
      R.level++;
      return R;
    }
    return node;
  }

  add(key: T): void {
    this.root = this._insert(this.root, key);
    this._size++;
  }

  private _insert(node: AANode<T> | null, key: T): AANode<T> {
    if (!node) return new AANode(key, 1);
    const cmp = this.compare(key, node.key);
    if (cmp < 0) node.left = this._insert(node.left, key);
    else if (cmp > 0) node.right = this._insert(node.right, key);
    // duplicates ignored
    node = this.skew(node)!;
    node = this.split(node)!;
    return node;
  }

  contains(key: T): boolean {
    let cur = this.root;
    while (cur) { const c = this.compare(key, cur.key); if (c===0) return true; cur = c<0 ? cur.left : cur.right; }
    return false;
  }

  remove(key: T): boolean {
    const [nr, removed] = this._remove(this.root, key);
    this.root = nr;
    if (removed) this._size--;
    return removed;
  }

  private _remove(node: AANode<T> | null, key: T): [AANode<T> | null, boolean] {
    if (!node) return [null, false];
    let removed = false;
    const cmp = this.compare(key, node.key);
    if (cmp < 0) { const [l, r] = this._remove(node.left, key); node.left = l; removed = r; }
    else if (cmp > 0) { const [ri, r] = this._remove(node.right, key); node.right = ri; removed = r; }
    else {
      removed = true;
      if (!node.left || !node.right) return [node.left || node.right, true];
      // replace with predecessor
      let pred = node.left;
      while (pred!.right) pred = pred!.right;
      node.key = pred!.key;
      const [l, _] = this._remove(node.left, node.key);
      node.left = l;
    }
    // decrease level if necessary
    const ideal = Math.min(node.left?.level ?? 0, node.right?.level ?? 0) + 1;
    if (ideal < node.level) {
      node.level = ideal;
      if (node.right && node.right.level > ideal) node.right.level = ideal;
      node = this.skew(node)!;
      if (node.right) node.right = this.skew(node.right)!;
      if (node.right?.right) node.right.right = this.skew(node.right.right)!;
      node = this.split(node)!;
      if (node.right) node.right = this.split(node.right)!;
    }
    return [node, removed];
  }

  clear(): void { this.root = null; this._size = 0; }
  iterator(): IIterator<T> { return new InOrderIterator(this.root); }
  toArray(): T[] { const out: T[] = []; const it = this.iterator(); while (it.hasNext()) out.push(it.next()); return out; }
}
