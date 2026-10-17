import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { InOrderIterator } from "../../core/iterators/InOrderIterator";

class TreapNode<T> {
  constructor(
    public key: T,
    public priority: number,
    public left: TreapNode<T> | null = null,
    public right: TreapNode<T> | null = null,
  ) {}
}

export class Treap<T> extends BaseDataStructure<T> {
  private root: TreapNode<T> | null = null;
  constructor(
    private compare: (a: T, b: T) => number,
    private rng: () => number = Math.random,
  ) {
    super();
  }

  private rotateRight(y: TreapNode<T>): TreapNode<T> {
    const x = y.left!;
    y.left = x.right;
    x.right = y;
    return x;
  }
  private rotateLeft(x: TreapNode<T>): TreapNode<T> {
    const y = x.right!;
    x.right = y.left;
    y.left = x;
    return y;
  }

  add(key: T): void {
    this.root = this._insert(this.root, key);
    this._size++;
  }

  private _insert(node: TreapNode<T> | null, key: T): TreapNode<T> {
    if (!node) return new TreapNode(key, this.rng());
    const cmp = this.compare(key, node.key);
    if (cmp < 0) {
      node.left = this._insert(node.left, key);
      if (node.left!.priority > node.priority) node = this.rotateRight(node);
    } else {
      node.right = this._insert(node.right, key);
      if (node.right!.priority > node.priority) node = this.rotateLeft(node);
    }
    return node;
  }

  contains(key: T): boolean {
    let cur = this.root;
    while (cur) {
      const c = this.compare(key, cur.key);
      if (c === 0) return true;
      cur = c < 0 ? cur.left : cur.right;
    }
    return false;
  }

  remove(key: T): boolean {
    const [nr, removed] = this._erase(this.root, key);
    this.root = nr;
    if (removed) this._size--;
    return removed;
  }

  private _erase(node: TreapNode<T> | null, key: T): [TreapNode<T> | null, boolean] {
    if (!node) return [null, false];
    const cmp = this.compare(key, node.key);
    if (cmp < 0) {
      const [l, r] = this._erase(node.left, key);
      node.left = l;
      return [node, r];
    }
    if (cmp > 0) {
      const [rnode, r] = this._erase(node.right, key);
      node.right = rnode;
      return [node, r];
    }
    // node to delete
    if (!node.left) return [node.right, true];
    if (!node.right) return [node.left, true];
    if (node.left.priority > node.right.priority) {
      node = this.rotateRight(node);
      const [nr, r] = this._erase(node.right, key);
      node.right = nr;
      return [node, r];
    } else {
      node = this.rotateLeft(node);
      const [nl, r] = this._erase(node.left, key);
      node.left = nl;
      return [node, r];
    }
  }

  clear(): void {
    this.root = null;
    this._size = 0;
  }
  iterator(): IIterator<T> {
    return new InOrderIterator(this.root);
  }
  toArray(): T[] {
    const res: T[] = [];
    const it = this.iterator();
    while (it.hasNext()) res.push(it.next());
    return res;
  }
}
