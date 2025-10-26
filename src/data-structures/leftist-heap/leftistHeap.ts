export class LeftistHeap<T> {
  private root: Node<T> | null = null;
  private _size = 0;
  constructor(private compare: (a: T, b: T) => number) {}
  get size(): number { return this._size; }
  isEmpty(): boolean { return this._size===0; }
  peek(): T | null { return this.root?this.root.value:null; }
  add(x: T): void { this.root = this.meld(this.root, new Node(x)); this._size++; }
  poll(): T | null { if (!this.root) return null; const v=this.root.value; this.root = this.mergeChildren(this.root); this._size--; return v; }
  clear(): void { this.root=null; this._size=0; }
  private mergeChildren(n: Node<T>): Node<T> | null { return this.meld(n.left, n.right); }
  private meld(a: Node<T> | null, b: Node<T> | null): Node<T> | null {
    if (!a) return b; if (!b) return a; if (this.compare(a.value,b.value) < 0) [a,b]=[b,a];
    a.right = this.meld(a.right, b);
    if ((a.left?.npl ?? 0) < (a.right?.npl ?? 0)) [a.left, a.right] = [a.right, a.left];
    a.npl = ((a.right?.npl ?? -1) + 1);
    return a;
  }
}
class Node<T> { constructor(public value: T, public left: Node<T>|null=null, public right: Node<T>|null=null, public npl: number = 0){} }
