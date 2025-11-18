export class FibonacciHeap<T> {
  private min: Node<T> | null = null;
  private _size = 0;
  constructor(private compare: (a: T, b: T) => number) {}
  get size(): number { return this._size; }
  isEmpty(): boolean { return this._size===0; }
  peek(): T | null { return this.min?this.min.value:null; }
  add(x: T): void { const n = new Node(x); this.min = this.mergeLists(this.min, n); this._size++; }
  merge(other: FibonacciHeap<T>): void { this.min = this.mergeLists(this.min, other.min); this._size += other._size; other.min = null; other._size = 0; }
  poll(): T | null {
    const z = this.min; if (!z) return null; if (z.child){ let c: Node<T> = z.child; const start = c; do { const next: Node<T> = c.right!; this.min = this.mergeLists(this.min, c); c.parent=null; c=next; } while(c!==start); }
    // remove z
    z.left!.right = z.right; z.right!.left = z.left; if (z===z.right) this.min = null; else { this.min = z.right; this.consolidate(); }
    this._size--; return z.value;
  }
  clear(): void { this.min=null; this._size=0; }
  private mergeLists(a: Node<T> | null, b: Node<T> | null): Node<T> | null { if (!a) return b; if (!b) return a; if (this.compare(a.value,b.value) > 0) [a,b]=[b,a]; const aRight=a.right!; a.right=b.right; b.right!.left=a; b.right=aRight; aRight.left=b; return a; }
  private consolidate(): void { const A: Array<Node<T> | null> = []; const roots: Node<T>[] = []; if (!this.min) return; let w=this.min; do { roots.push(w!); w=w!.right!; } while(w!==this.min); for (let x of roots){ let d=x.degree; while(A[d]){ let y=A[d]!; if (this.compare(x.value,y.value) > 0) { const tmp=x; (x as any)=y; (y as any)=tmp; } this.link(y,x); A[d]=null; d++; } A[d]=x; } this.min=null; for (const a of A){ if (!a) continue; a.left=a.right=a; this.min=this.mergeLists(this.min,a); } }
  private link(y: Node<T>, x: Node<T>): void { // make y child of x
    // remove y from root list
    y.left!.right=y.right; y.right!.left=y.left; y.parent=x; if (!x.child){ x.child=y; y.left=y.right=y; } else { y.left=x.child; y.right=x.child!.right; x.child!.right!.left=y; x.child!.right=y; }
    x.degree++; y.mark=false;
  }

  toJson(): string {
    const replacer = (key: any, value: any) => {
      if (key === 'parent' || key === 'left' || key === 'right') {
        return undefined;
      }
      return value;
    };
    return JSON.stringify(this.min, replacer);
  }
}
class Node<T> { constructor(public value: T, public degree=0, public parent: Node<T>|null=null, public child: Node<T>|null=null, public left: Node<T>|null=null, public right: Node<T>|null=null, public mark=false){ this.left=this; this.right=this; } }
