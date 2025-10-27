export class PairingHeap<T> {
  private root: Node<T> | null = null;
  private _size = 0;
  constructor(private compare: (a: T, b: T) => number) {}
  get size(): number { return this._size; }
  isEmpty(): boolean { return this._size === 0; }
  peek(): T | null { return this.root ? this.root.value : null; }
  add(value: T): void { const node = new Node(value); this.root = this.meld(this.root, node); this._size++; }
  poll(): T | null { if (!this.root) return null; const res = this.root.value; this.root = this.twoPass(this.root.child); this._size--; return res; }
  clear(): void { this.root = null; this._size = 0; }
  private meld(a: Node<T> | null, b: Node<T> | null): Node<T> | null {
    if (!a) return b;
    if (!b) return a;
    if (this.compare(a.value, b.value) <= 0) { b.sibling = a.child; a.child = b; return a; }
    else { a.sibling = b.child; b.child = a; return b; }
  }
  private twoPass(first: Node<T> | null): Node<T> | null {
    if (!first) return null;
    const arr: Node<T>[] = [];
    let cur: Node<T> | null = first;
    while (cur) {
      const a: Node<T> = cur;
      const b: Node<T> | null = cur.sibling;
      cur = b ? b.sibling : null;
      a.sibling = null;
      if (b) b.sibling = null;
      arr.push(this.meld(a, b)!);
    }
    let res: Node<T> | null = null;
    for (let i = arr.length - 1; i >= 0; i--) res = this.meld(res, arr[i]);
    return res;
  }
}
class Node<T> { constructor(public value: T, public child: Node<T> | null = null, public sibling: Node<T> | null = null) {} }
