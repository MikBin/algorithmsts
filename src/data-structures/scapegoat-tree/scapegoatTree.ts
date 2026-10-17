import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { InOrderIterator } from "../../core/iterators/InOrderIterator";

class Node<T> {
  constructor(
    public key: T,
    public left: Node<T> | null = null,
    public right: Node<T> | null = null,
  ) {}
}

export class ScapegoatTree<T> extends BaseDataStructure<T> {
  private root: Node<T> | null = null;
  private _sizeReal = 0; // track array rebuild criterion
  constructor(
    private compare: (a: T, b: T) => number,
    private alpha = 2 / 3,
  ) {
    super();
  }

  add(x: T): void {
    const path: Node<T>[] = [];
    let d = 0;
    let n = this.root;
    if (!n) {
      this.root = new Node(x);
      this._size++;
      this._sizeReal++;
      return;
    }
    while (n) {
      path.push(n);
      d++;
      const c = this.compare(x, n.key);
      if (c < 0) {
        if (!n.left) {
          n.left = new Node(x);
          break;
        }
        n = n.left;
      } else if (c > 0) {
        if (!n.right) {
          n.right = new Node(x);
          break;
        }
        n = n.right;
      } else {
        return;
      }
    }
    this._size++;
    this._sizeReal++;
    // if depth too large, rebuild at scapegoat
    if (d > Math.floor(Math.log(this._sizeReal) / Math.log(1 / this.alpha))) {
      for (let i = path.length - 1; i >= 0; i--) {
        const p = path[i];
        const sizeL = this.sizeOf(p.left);
        const sizeR = this.sizeOf(p.right);
        if (sizeL > this.alpha * (sizeL + sizeR + 1) || sizeR > this.alpha * (sizeL + sizeR + 1)) {
          // rebuild subtree rooted at p
          const arr: T[] = [];
          this.flatten(p, arr);
          const rebuilt = this.buildBalanced(arr, 0, arr.length - 1);
          if (i === 0) this.root = rebuilt;
          else {
            const parent = path[i - 1];
            if (parent.left === p) parent.left = rebuilt;
            else parent.right = rebuilt;
          }
          break;
        }
      }
    }
  }

  contains(x: T): boolean {
    let n = this.root;
    while (n) {
      const c = this.compare(x, n.key);
      if (c === 0) return true;
      n = c < 0 ? n.left : n.right;
    }
    return false;
  }

  remove(x: T): boolean {
    const [nr, removed] = this._remove(this.root, x);
    this.root = nr;
    if (removed) {
      this._size--;
      if (this._size < this.alpha * this._sizeReal) {
        // rebuild whole tree
        const arr: T[] = [];
        this.flatten(this.root, arr);
        this.root = this.buildBalanced(arr, 0, arr.length - 1);
        this._sizeReal = this._size;
      }
    }
    return removed;
  }

  private _remove(node: Node<T> | null, x: T): [Node<T> | null, boolean] {
    if (!node) return [null, false];
    const c = this.compare(x, node.key);
    if (c < 0) {
      const [l, r] = this._remove(node.left, x);
      node.left = l;
      return [node, r];
    }
    if (c > 0) {
      const [rnode, r] = this._remove(node.right, x);
      node.right = rnode;
      return [node, r];
    }
    // delete this node
    if (!node.left) return [node.right, true];
    if (!node.right) return [node.left, true];
    // replace with successor
    let succParent = node;
    let succ = node.right;
    while (succ!.left) {
      succParent = succ!;
      succ = succ!.left;
    }
    node.key = succ!.key;
    if (succParent.left === succ) succParent.left = succ!.right;
    else succParent.right = succ!.right;
    return [node, true];
  }

  private sizeOf(n: Node<T> | null): number {
    if (!n) return 0;
    return 1 + this.sizeOf(n.left) + this.sizeOf(n.right);
  }
  private flatten(n: Node<T> | null, out: T[]): void {
    if (!n) return;
    this.flatten(n.left, out);
    out.push(n.key);
    this.flatten(n.right, out);
  }
  private buildBalanced(arr: T[], l: number, r: number): Node<T> | null {
    if (l > r) return null;
    const m = (l + r) >> 1;
    const node = new Node(arr[m]);
    node.left = this.buildBalanced(arr, l, m - 1);
    node.right = this.buildBalanced(arr, m + 1, r);
    return node;
  }

  clear(): void {
    this.root = null;
    this._size = 0;
    this._sizeReal = 0;
  }
  iterator(): IIterator<T> {
    return new InOrderIterator(this.root);
  }
  toArray(): T[] {
    const out: T[] = [];
    const it = this.iterator();
    while (it.hasNext()) out.push(it.next());
    return out;
  }
}
