export class SkewHeap<T> {
  private root: Node<T> | null = null;
  private _size = 0;
  constructor(private compare: (a: T, b: T) => number) {}
  get size(): number { return this._size; }
  isEmpty(): boolean { return this._size===0; }
  peek(): T | null { return this.root?this.root.value:null; }
  add(x: T): void { this.root = this.meld(this.root, new Node(x)); this._size++; }
  poll(): T | null { if (!this.root) return null; const v=this.root.value; this.root = this.meld(this.root.left, this.root.right); this._size--; return v; }
  clear(): void { this.root=null; this._size=0; }
  private meld(a: Node<T> | null, b: Node<T> | null): Node<T> | null {
    if (!a) return b; if (!b) return a; if (this.compare(a.value,b.value) > 0) [a,b]=[b,a];
    a.right = this.meld(a.right, b);
    // swap children
    const tmp = a.left; a.left = a.right; a.right = tmp;
    return a;
  }
}
class Node<T> { constructor(public value: T, public left: Node<T>|null=null, public right: Node<T>|null=null){} }
