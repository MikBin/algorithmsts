/**
 * A Pairing Heap implementation, an optimal heap data structure that provides
 * excellent amortized performance and supports min-heap properties by default.
 */
export class PairingHeap<T> {
  private root: Node<T> | null = null;
  private _size = 0;

  /**
   * Creates a new Pairing Heap.
   *
   * @param compare - Comparator function to determine the heap order.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number) {}

  /**
   * Returns the current number of elements in the heap.
   *
   * @returns The size of the heap.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number { return this._size; }

  /**
   * Checks if the heap is empty.
   *
   * @returns True if the heap is empty, false otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean { return this._size === 0; }

  /**
   * Retrieves the element at the top of the heap without removing it.
   *
   * @returns The top element, or null if the heap is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peek(): T | null { return this.root ? this.root.value : null; }

  /**
   * Adds a new value to the heap.
   *
   * @param value - The value to add.
   * @complexity Time: O(1) | Space: O(1) (node allocation)
   */
  add(value: T): void { const node = new Node(value); this.root = this.meld(this.root, node); this._size++; }

  /**
   * Removes and returns the top element of the heap.
   * Uses a two-pass merging strategy to reorganize the heap.
   *
   * @returns The removed top element, or null if the heap is empty.
   * @complexity Time: O(log n) amortized | Space: O(n) (array allocation for the two-pass algorithm)
   */
  poll(): T | null { if (!this.root) return null; const res = this.root.value; this.root = this.twoPass(this.root.child); this._size--; return res; }

  /**
   * Clears all elements from the heap.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
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

  /**
   * Serializes the heap to a JSON string.
   *
   * @returns A JSON string representation of the heap.
   * @complexity Time: O(n) | Space: O(n) (JSON string allocation)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
class Node<T> { constructor(public value: T, public child: Node<T> | null = null, public sibling: Node<T> | null = null) {} }
