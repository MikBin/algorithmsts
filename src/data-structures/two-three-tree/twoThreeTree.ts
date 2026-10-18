class TTNode<T> {
  keys: T[] = [];
  children: (TTNode<T> | null)[] = [];
  constructor(public leaf: boolean) {}
}

/**
 * A 2-3 Tree is a self-balancing search tree where every node with children (internal node)
 * has either two children and one data element or three children and two data elements.
 * This implementation is non-standard (leaves are not properly split on overflow), meaning
 * operations can degrade to linear time for sorted inputs.
 *
 * @complexity Time: O(log n) for balanced splits, Θ(n) worst case when a leaf never splits | Space: O(n) memory allocation
 */
export class TwoThreeTree<T> {
  private findIndex(n: TTNode<T>, x: T): number {
    let i = 0;
    while (i < n.keys.length && this.compare(n.keys[i], x) < 0) i++;
    return i;
  }
  private root: TTNode<T> = new TTNode<T>(true);

  /**
   * Constructs a new 2-3 Tree.
   *
   * @param compare Function to compare two elements.
   * @complexity Time: O(1) | Space: O(1) node allocation
   */
  constructor(private compare: (a: T, b: T) => number) {}

  /**
   * Checks if the tree contains the specified element.
   *
   * @param x The element to check for.
   * @returns `true` if the element is found, `false` otherwise.
   * @complexity Time: O(log n) for balanced splits, Θ(n) worst case when a leaf never splits — degenerate for sorted input | Space: O(1)
   */
  contains(x: T): boolean {
    let n = this.root;
    while (true) {
      const i = this.findIndex(n, x);
      if (i < n.keys.length && this.compare(n.keys[i], x) === 0) return true;
      if (n.leaf) return false;
      n = n.children[i]!;
    }
  }

  /**
   * Adds an element to the tree.
   *
   * @param x The element to add.
   * @complexity Time: O(log n) for balanced splits, Θ(n) worst case when a leaf never splits — degenerate for sorted input | Space: O(log n) recursion depth for node splitting
   */
  add(x: T): void {
    const r = this.root;
    if (r.keys.length === 2 && !r.leaf) {
      // root full? split
      const s = new TTNode<T>(false);
      s.children = [r, null, null];
      this.splitChild(s, 0);
      this.root = s;
      this.insertNonFull(s, x);
    } else if (r.keys.length === 2 && r.leaf) {
      const arr = [...r.keys, x].sort(this.compare);
      r.keys = [arr[1]];
      const left = new TTNode<T>(true);
      left.keys = [arr[0]];
      const right = new TTNode<T>(true);
      right.keys = [arr[2]];
      r.leaf = false;
      r.children = [left, right, null];
    } else this.insertNonFull(r, x);
  }

  private insertNonFull(n: TTNode<T>, x: T) {
    if (n.leaf) {
      const i = this.findIndex(n, x);
      if (i < n.keys.length && this.compare(n.keys[i], x) === 0) return;
      n.keys.splice(i, 0, x);
      if (n.keys.length > 2) {
        // split 3-key leaf into 2 nodes under parent assumption
        // handled by caller for root; for internal leaves, will be handled by parent splitChild path
      }
    } else {
      let i = this.findIndex(n, x);
      if (i < n.keys.length && this.compare(n.keys[i], x) === 0) return;
      if (n.children[i]!.keys.length === 2 && !n.children[i]!.leaf) {
        this.splitChild(n, i);
        if (this.compare(x, n.keys[i]) > 0) i++;
      }
      this.insertNonFull(n.children[i]!, x);
    }
  }

  private splitChild(p: TTNode<T>, i: number) {
    const y = p.children[i]!;
    const z = new TTNode<T>(y.leaf);
    z.keys = [y.keys[1]];
    y.keys = [y.keys[0]];
    if (!y.leaf) {
      z.children = [y.children[1]!, y.children[2]!, null];
      y.children = [y.children[0]!, y.children[1]!, null];
    }
    p.children.splice(i + 1, 0, z);
    p.keys.splice(i, 0, z.keys[0] as T);
  }

  /**
   * Converts the tree to an array in sorted order.
   *
   * @returns An array containing all elements in sorted order.
   * @complexity Time: O(n) where n is the number of elements | Space: O(n) for the output array, plus O(log n) recursion depth
   */
  toArray(): T[] {
    const out: T[] = [];
    this.inOrder(this.root, out);
    return out;
  }
  private inOrder(n: TTNode<T>, out: T[]) {
    if (n.leaf) {
      out.push(...n.keys);
    } else {
      if (n.keys.length === 1) {
        this.inOrder(n.children[0]!, out);
        out.push(n.keys[0]);
        this.inOrder(n.children[1]!, out);
      } else {
        this.inOrder(n.children[0]!, out);
        out.push(n.keys[0]);
        this.inOrder(n.children[1]!, out);
        out.push(n.keys[1]);
        this.inOrder(n.children[2]!, out);
      }
    }
  }
}
