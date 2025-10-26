export class BinomialHeap<T> {
  private trees: Array<Node<T> | null> = [];
  private _size = 0;
  constructor(private compare: (a: T, b: T) => number) {}
  get size(): number { return this._size; }
  isEmpty(): boolean { return this._size === 0; }
  peek(): T | null { if (this.isEmpty()) return null; const [i] = this.findMinTree(); return this.trees[i]!.value; }
  add(value: T): void { const h = new BinomialHeap<T>(this.compare); h.trees[0] = new Node(value); h._size = 1; this.merge(h); }
  poll(): T | null {
    if (this.isEmpty()) return null;
    const [minIndex] = this.findMinTree();
    const minTree = this.trees[minIndex]!;
    this.trees[minIndex] = null;
    this._size -= 1 << minTree.order;
    const rev = new BinomialHeap<T>(this.compare);
    let child = minTree.child;
    for (let k = minTree.order - 1; k >= 0; k--) {
      const next = child!.sibling; child!.sibling = null; child!.order = k; rev.trees[k] = child!; child = next;
    }
    rev._size = (1 << minTree.order) - 1;
    this.merge(rev);
    return minTree.value;
  }
  clear(): void { this.trees = []; this._size = 0; }
  merge(other: BinomialHeap<T>): void {
    let carry: Node<T> | null = null;
    const maxLen = Math.max(this.trees.length, other.trees.length) + 1;
    for (let i = 0; i < maxLen; i++) {
      const a = this.trees[i] || null; const b = other.trees[i] || null;
      const count = (a?1:0) + (b?1:0) + (carry?1:0);
      switch (count) {
        case 0: break;
        case 1: this.trees[i] = a || b || carry; carry = null; break;
        case 2: carry = this.meld(a || b!, carry || (a && b ? null : null) || (a && !b ? b : a)!); this.trees[i] = null; break;
        case 3: this.trees[i] = carry!; carry = this.meld(a!, b!); break;
      }
    }
    this._size += other._size;
    other.trees = []; other._size = 0;
  }
  private meld(a: Node<T>, b: Node<T>): Node<T> { if (this.compare(a.value, b.value) <= 0) { b.parent = a; b.sibling = a.child; a.child = b; a.order++; return a; } else { a.parent = b; a.sibling = b.child; b.child = a; b.order++; return b; } }
  private findMinTree(): [number, Node<T>] { let idx = -1; let min: T | null = null; for (let i = 0; i < this.trees.length; i++) { const t = this.trees[i]; if (!t) continue; if (min === null || this.compare(t.value, min) < 0) { min = t.value; idx = i; } } return [idx, this.trees[idx]!] }
}
class Node<T> { constructor(public value: T, public order = 0, public parent: Node<T> | null = null, public child: Node<T> | null = null, public sibling: Node<T> | null = null) {} }
