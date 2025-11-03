class OrderNode<T> {
  constructor(
    public key: T,
    public left: OrderNode<T> | null = null,
    public right: OrderNode<T> | null = null,
    public size: number = 1,
  ) {}
}

export class OrderStatisticTree<T> {
  private root: OrderNode<T> | null = null;
  constructor(private compare: (a: T, b: T) => number) {}

  private update(n: OrderNode<T>) { n.size = 1 + (n.left?.size ?? 0) + (n.right?.size ?? 0); }

  add(key: T): void { this.root = this._insert(this.root, key); }
  private _insert(n: OrderNode<T> | null, key: T): OrderNode<T> { if (!n) return new OrderNode(key); if (this.compare(key, n.key) < 0) n.left = this._insert(n.left, key); else n.right = this._insert(n.right, key); this.update(n); return n; }

  contains(key: T): boolean { let n = this.root; while (n) { const c = this.compare(key, n.key); if (c===0) return true; n = c<0 ? n.left : n.right; } return false; }

  select(k: number): T | null { if (!this.root || k<0 || k>=this.root.size) return null; return this._select(this.root, k); }
  private _select(n: OrderNode<T>, k: number): T { const leftSize = n.left?.size ?? 0; if (k < leftSize) return this._select(n.left!, k); if (k === leftSize) return n.key; return this._select(n.right!, k - leftSize - 1); }

  rank(key: T): number { let n = this.root; let r = 0; while (n) { const c = this.compare(key, n.key); if (c < 0) { n = n.left; } else { r += (n.left?.size ?? 0) + (c===0 ? 0 : 1); if (c===0) return r; n = n.right; } } return r; }

  toArray(): T[] { const res: T[] = []; const stack: (OrderNode<T>|null)[] = [this.root]; while (stack.length){ const n=stack.pop(); if (!n) continue; res.push(n.key); stack.push(n.left,n.right); } return res; }

  toJson(): string {
    return JSON.stringify(this.root);
  }
}
