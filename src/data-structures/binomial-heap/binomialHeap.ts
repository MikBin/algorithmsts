/**
 * @title Binomial Heap
 * @notice A collection of binomial trees that satisfies the binomial heap properties.
 * @dev Depending on the comparator, this can act as a min-heap or a max-heap. It supports efficient merging of two heaps.
 * @template T The type of elements stored in the heap.
 */
export class BinomialHeap<T> {
  private trees: Array<Node<T> | null> = [];
  private _size = 0;

  /**
   * @notice Creates a new Binomial Heap.
   * @param compare The comparison function used to order the elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number) {}

  /**
   * @notice Returns the number of elements in the heap.
   * @returns The number of elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number { return this._size; }

  /**
   * @notice Checks if the heap is empty.
   * @returns `true` if the heap contains no elements, `false` otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean { return this._size === 0; }

  /**
   * @notice Returns the root element of the heap with the extreme value without removing it.
   * @returns The extreme element, or `null` if the heap is empty.
   * @complexity Time: O(log n) | Space: O(1) where n is the number of elements.
   */
  peek(): T | null { if (this.isEmpty()) return null; const [i] = this.findMinTree(); return this.trees[i]!.value; }

  /**
   * @notice Adds a new element to the heap.
   * @param value The element to add.
   * @complexity Time: O(log n) | Space: O(log n) where n is the number of elements.
   */
  add(value: T): void { const h = new BinomialHeap<T>(this.compare); h.trees[0] = new Node(value); h._size = 1; this.merge(h); }

  /**
   * @notice Removes and returns the root element with the extreme value from the heap.
   * @returns The extreme element, or `null` if the heap is empty.
   * @complexity Time: O(log n) | Space: O(log n) where n is the number of elements.
   */
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
  /**
   * @notice Removes all elements from the heap.
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void { this.trees = []; this._size = 0; }

  /**
   * @notice Merges another heap into this one destructively (empties the other heap).
   * @param other The other BinomialHeap to merge into this one.
   * @complexity Time: O(log n) | Space: O(1) where n is the total number of elements in both heaps.
   */
  merge(other: BinomialHeap<T>): void {
    let carry: Node<T> | null = null;
    const maxLen = Math.max(this.trees.length, other.trees.length) + 1;
    for (let i = 0; i < maxLen; i++) {
      const a = this.trees[i] || null; const b = other.trees[i] || null;
      const count = (a?1:0) + (b?1:0) + (carry?1:0);
      switch (count) {
        case 0: break;
        case 1: this.trees[i] = a || b || carry; carry = null; break;
        case 2: if (a && b) carry = this.meld(a, b); else if (a && carry) carry = this.meld(a, carry); else carry = this.meld(b!, carry!); this.trees[i] = null; break;
        case 3: this.trees[i] = carry!; carry = this.meld(a!, b!); break;
      }
    }
    this._size += other._size;
    other.trees = []; other._size = 0;
  }
  private meld(a: Node<T>, b: Node<T>): Node<T> { if (this.compare(a.value, b.value) <= 0) { b.parent = a; b.sibling = a.child; a.child = b; a.order++; return a; } else { a.parent = b; a.sibling = b.child; b.child = a; b.order++; return b; } }
  private findMinTree(): [number, Node<T>] { let idx = -1; let min: T | null = null; for (let i = 0; i < this.trees.length; i++) { const t = this.trees[i]; if (!t) continue; if (min === null || this.compare(t.value, min) < 0) { min = t.value; idx = i; } } return [idx, this.trees[idx]!] }

  /**
   * @notice Serializes the heap into a JSON string.
   * @returns A string representing the internal binomial trees.
   * @complexity Time: O(n) | Space: O(n) (recursion depth via stringify)
   */
  toJson(): string {
    return JSON.stringify(this.trees, (key, value) => {
      if (key === 'parent' || key === 'sibling') {
        return undefined;
      }
      return value;
    });
  }
}
class Node<T> { constructor(public value: T, public order = 0, public parent: Node<T> | null = null, public child: Node<T> | null = null, public sibling: Node<T> | null = null) {} }
