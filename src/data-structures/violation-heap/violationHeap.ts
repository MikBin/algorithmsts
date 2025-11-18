export class ViolationHeap<T> {
  private root: Node<T> | null = null;
  private _size = 0;
  constructor(private compare: (a: T, b: T) => number) {}
  size(): number { return this._size; }
  isEmpty(): boolean { return this._size === 0; }
  peek(): T | null { return this.root ? this.root.value : null; }
  add(x: T): void { const n = new Node(x); this.root = this.meld(this.root, n); this._size++; }
  poll(): T | null { if (!this.root) return null; const res = this.root.value; this.root = this.mergeChildren(this.root); this._size--; return res; }
  clear(): void { this.root = null; this._size = 0; }
  private mergeChildren(n: Node<T>): Node<T> | null {
    // pair children from left to right then meld back from right to left
    const arr: (Node<T> | null)[] = [];
    let c = n.child;
    while (c) { const a = c; const b = c.next; c = b ? b.next : null; if (a) a.next = null; if (b) b.next = null; arr.push(this.meld(a, b)); }
    let res: Node<T> | null = null; for (let i = arr.length - 1; i >= 0; i--) res = this.meld(res, arr[i]);
    return res;
  }
  private meld(a: Node<T> | null, b: Node<T> | null): Node<T> | null {
    if (!a) return b; if (!b) return a; if (this.compare(a.value, b.value) > 0) [a, b] = [b, a];
    // violation heap-style: link b as child of a, adjust ranks lazily
    b.next = a.child; a.child = b; a.rank = Math.max(a.rank, b.rank + (b.wasSecondChild ? 0 : 1)); b.wasSecondChild = true;
    return a;
  }
}
class Node<T> { constructor(public value: T, public child: Node<T> | null = null, public next: Node<T> | null = null, public rank = 0, public wasSecondChild = false) {} }
