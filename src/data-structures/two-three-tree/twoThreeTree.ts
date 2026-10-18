class TTNode<T> {
  keys: T[] = [];
  children: (TTNode<T> | null)[] = [];
  constructor(public leaf: boolean) {}
}

/**
 * A 2-3 Tree is a self-balancing search tree where every node with children (internal node)
 * has either two children and one data element or three children and two data elements.
 *
 * @complexity Time: O(log n) for balanced splits | Space: O(n) memory allocation
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
   * @complexity Time: O(log n) | Space: O(1)
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
   * @complexity Time: O(log n) | Space: O(log n) recursion depth for node splitting
   */
  add(x: T): void {
    const res = this.insertRec(this.root, x);
    if (res) {
      // Root split
      const newRoot = new TTNode<T>(false);
      newRoot.keys = [res.median];
      newRoot.children = [this.root, res.right, null];
      this.root = newRoot;
    }
  }

  private insertRec(n: TTNode<T>, x: T): { median: T, right: TTNode<T> } | null {
    const i = this.findIndex(n, x);
    if (i < n.keys.length && this.compare(n.keys[i], x) === 0) return null; // Duplicate

    if (n.leaf) {
      n.keys.splice(i, 0, x);
      if (n.keys.length > 2) {
        return this.splitNode(n);
      }
      return null;
    } else {
      const res = this.insertRec(n.children[i]!, x);
      if (res) {
        const j = this.findIndex(n, res.median);
        n.keys.splice(j, 0, res.median);
        n.children.splice(j + 1, 0, res.right);
        if (n.keys.length > 2) {
          return this.splitNode(n);
        }
      }
      return null;
    }
  }

  private splitNode(n: TTNode<T>): { median: T, right: TTNode<T> } {
    // n currently has 3 keys and 4 children (if not leaf)
    const right = new TTNode<T>(n.leaf);
    const median = n.keys[1];

    right.keys = [n.keys[2]];
    n.keys = [n.keys[0]];

    if (!n.leaf) {
      right.children = [n.children[2]!, n.children[3]!, null];
      n.children = [n.children[0]!, n.children[1]!, null];
    }

    return { median, right };
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
