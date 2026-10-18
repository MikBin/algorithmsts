export class FibonacciNode<T> {
  constructor(
    public value: T,
    public degree = 0,
    public parent: FibonacciNode<T> | null = null,
    public child: FibonacciNode<T> | null = null,
    public left: FibonacciNode<T> | null = null,
    public right: FibonacciNode<T> | null = null,
    public mark = false,
  ) {
    this.left = this;
    this.right = this;
  }
}

/**
 * Represents a Fibonacci Heap, a priority queue with exceptional amortized time bounds.
 */
export class FibonacciHeap<T> {
  private min: FibonacciNode<T> | null = null;
  private _size = 0;

  /**
   * Initializes a new Fibonacci Heap.
   *
   * @param compare Comparator function to establish element ordering.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number) {}

  /**
   * Gets the number of elements in the heap.
   *
   * @returns The size of the heap.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number { return this._size; }

  /**
   * Checks if the heap is empty.
   *
   * @returns True if empty, false otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean { return this._size === 0; }

  /**
   * Retrieves, but does not remove, the minimum element from the heap.
   *
   * @returns The minimum element, or null if the heap is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peek(): T | null { return this.min ? this.min.value : null; }

  /**
   * Inserts an element into the heap.
   *
   * @param x The element to insert.
   * @returns The newly created node.
   * @complexity Time: O(1) | Space: O(1)
   */
  add(x: T): FibonacciNode<T> {
    const n = new FibonacciNode(x);
    this.min = this.mergeLists(this.min, n);
    this._size++;
    return n;
  }

  /**
   * Decreases the value of a specific node in the heap.
   *
   * @param node The node whose value needs to be decreased.
   * @param newValue The new value for the node. Must be less than or equal to current value based on compare function.
   * @complexity Time: O(1) amortized | Space: O(log n) worst case recursion / O(1) amortized
   */
  decreaseKey(node: FibonacciNode<T>, newValue: T): void {
    if (this.compare(newValue, node.value) > 0) {
      throw new Error("New value is strictly greater than current value");
    }
    node.value = newValue;
    const parent = node.parent;
    if (parent !== null && this.compare(node.value, parent.value) < 0) {
      this.cut(node, parent);
      this.cascadingCut(parent);
    }
    if (this.min !== null && this.compare(node.value, this.min.value) < 0) {
      this.min = node;
    }
  }

  private cut(x: FibonacciNode<T>, y: FibonacciNode<T>): void {
    // remove x from child list of y
    x.left!.right = x.right;
    x.right!.left = x.left;
    y.degree--;
    if (y.child === x) {
      y.child = x.right === x ? null : x.right;
    }
    x.right = x.left = x;
    x.parent = null;
    x.mark = false;
    this.min = this.mergeLists(this.min, x);
  }

  private cascadingCut(y: FibonacciNode<T>): void {
    const z = y.parent;
    if (z !== null) {
      if (!y.mark) {
        y.mark = true;
      } else {
        this.cut(y, z);
        this.cascadingCut(z);
      }
    }
  }

  /**
   * Merges another heap into this one destructively (empties the other heap).
   *
   * @param other The other Fibonacci heap to merge.
   * @complexity Time: O(1) | Space: O(1)
   */
  merge(other: FibonacciHeap<T>): void {
    if (other === this) return;
    this.min = this.mergeLists(this.min, other.min);
    this._size += other._size;
    other.min = null;
    other._size = 0;
  }

  /**
   * Retrieves and removes the minimum element from the heap.
   * Consolidation is performed during this operation.
   *
   * @returns The minimum element, or null if the heap is empty.
   * @complexity Time: O(log n) amortized | Space: O(n) worst-case
   */
  poll(): T | null {
    const z = this.min;
    if (!z) return null;
    if (z.child) {
      let c: FibonacciNode<T> = z.child;
      const start = c;
      do {
        const next: FibonacciNode<T> = c.right!;
        c.left = c.right = c;
        c.parent = null;

        this.min = this.mergeLists(this.min, c);

        c = next;
      } while (c !== start);
    }
    // remove z
    z.left!.right = z.right;
    z.right!.left = z.left;
    if (z === z.right) {
      this.min = null;
    } else {
      this.min = z.right;
      this.consolidate();
    }
    this._size--;
    return z.value;
  }

  /**
   * Clears all elements from the heap.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.min = null;
    this._size = 0;
  }

  private mergeLists(a: FibonacciNode<T> | null, b: FibonacciNode<T> | null): FibonacciNode<T> | null {
    if (!a) return b;
    if (!b) return a;
    if (this.compare(a.value, b.value) > 0) [a, b] = [b, a];
    const aRight = a.right!;
    a.right = b.right;
    b.right!.left = a;
    b.right = aRight;
    aRight.left = b;
    return a;
  }

  private consolidate(): void {
    const A: Array<FibonacciNode<T> | null> = [];
    const roots: FibonacciNode<T>[] = [];
    if (!this.min) return;
    let w = this.min;
    do {
      roots.push(w!);
      w = w!.right!;
    } while (w !== this.min);

    for (let x of roots) {
      let d = x.degree;
      while (A[d]) {
        let y = A[d]!;
        if (this.compare(x.value, y.value) > 0) {
          const tmp = x;
          (x as any) = y;
          (y as any) = tmp;
        }
        this.link(y, x);
        A[d] = null;
        d++;
      }
      A[d] = x;
    }

    this.min = null;
    for (const a of A) {
      if (!a) continue;
      a.left = a.right = a;
      this.min = this.mergeLists(this.min, a);
    }
  }

  private link(y: FibonacciNode<T>, x: FibonacciNode<T>): void {
    // make y child of x
    // remove y from root list
    y.left!.right = y.right;
    y.right!.left = y.left;
    y.parent = x;
    if (!x.child) {
      x.child = y;
      y.left = y.right = y;
    } else {
      y.left = x.child;
      y.right = x.child!.right;
      x.child!.right!.left = y;
      x.child!.right = y;
    }
    x.degree++;
    y.mark = false;
  }

  /**
   * Serializes the Fibonacci Heap to a JSON string.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
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
