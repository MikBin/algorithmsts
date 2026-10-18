class OrderNode<T> {
  constructor(
    public key: T,
    public left: OrderNode<T> | null = null,
    public right: OrderNode<T> | null = null,
    public size: number = 1,
  ) {}
}

/**
 * An Order Statistic Tree implemented as an unbalanced Binary Search Tree that augments
 * each node with the size of its subtree, allowing for dynamic selection and ranking.
 */
export class OrderStatisticTree<T> {
  private root: OrderNode<T> | null = null;

  /**
   * Creates a new Order Statistic Tree.
   *
   * @param compare - Comparator function to define the ordering of elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number) {}

  private update(n: OrderNode<T>) { n.size = 1 + (n.left?.size ?? 0) + (n.right?.size ?? 0); }

  /**
   * Inserts a key into the tree. Updates subtree sizes along the insertion path.
   *
   * @param key - The key to insert.
   * @complexity Time: O(h) | Space: O(h) (recursion depth, where h is tree height)
   */
  add(key: T): void { this.root = this._insert(this.root, key); }
  private _insert(n: OrderNode<T> | null, key: T): OrderNode<T> { if (!n) return new OrderNode(key); if (this.compare(key, n.key) < 0) n.left = this._insert(n.left, key); else n.right = this._insert(n.right, key); this.update(n); return n; }

  /**
   * Checks if the tree contains the specified key.
   *
   * @param key - The key to search for.
   * @returns True if the key is found, false otherwise.
   * @complexity Time: O(h) | Space: O(1)
   */
  contains(key: T): boolean { let n = this.root; while (n) { const c = this.compare(key, n.key); if (c===0) return true; n = c<0 ? n.left : n.right; } return false; }

  /**
   * Returns the k-th smallest element (0-indexed) in the tree.
   *
   * @param k - The index of the order statistic to find.
   * @returns The k-th smallest key, or null if the index is out of bounds.
   * @complexity Time: O(h) | Space: O(h) (recursion depth, where h is tree height)
   */
  select(k: number): T | null { if (!this.root || k<0 || k>=this.root.size) return null; return this._select(this.root, k); }
  private _select(n: OrderNode<T>, k: number): T { const leftSize = n.left?.size ?? 0; if (k < leftSize) return this._select(n.left!, k); if (k === leftSize) return n.key; return this._select(n.right!, k - leftSize - 1); }

  /**
   * Returns the rank (0-indexed) of the specified key in the tree.
   * This is the number of elements strictly less than the key.
   *
   * @param key - The key to find the rank for.
   * @returns The rank of the key.
   * @complexity Time: O(h) | Space: O(1)
   */
  rank(key: T): number { let n = this.root; let r = 0; while (n) { const c = this.compare(key, n.key); if (c < 0) { n = n.left; } else { r += (n.left?.size ?? 0) + (c===0 ? 0 : 1); if (c===0) return r; n = n.right; } } return r; }

  /**
   * Returns an array containing all elements in the tree using a pre-order traversal.
   *
   * @returns An array of the tree's elements.
   * @complexity Time: O(n) | Space: O(n) (array allocation and traversal stack)
   */
  toArray(): T[] {
    const res: T[] = [];
    const stack: OrderNode<T>[] = [];
    let curr = this.root;
    while (curr || stack.length) {
      while (curr) { stack.push(curr); curr = curr.left; }
      curr = stack.pop()!;
      res.push(curr.key);
      curr = curr.right;
    }
    return res;
  }

  /**
   * Perfectly balances the tree.
   *
   * @complexity Time: O(n) | Space: O(n)
   */
  rebuild(): void {
    const elements = this.toArray();
    this.root = this.buildBalanced(elements, 0, elements.length - 1);
  }

  private buildBalanced(arr: T[], start: number, end: number): OrderNode<T> | null {
    if (start > end) return null;
    const mid = start + Math.floor((end - start) / 2);
    const node = new OrderNode(arr[mid]);
    node.left = this.buildBalanced(arr, start, mid - 1);
    node.right = this.buildBalanced(arr, mid + 1, end);
    this.update(node);
    return node;
  }

  /**
   * Serializes the tree to a JSON string.
   *
   * @returns A JSON string representation of the tree.
   * @complexity Time: O(n) | Space: O(n) (JSON string allocation)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
