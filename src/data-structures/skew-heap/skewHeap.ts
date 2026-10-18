/**
 * A Skew Heap (or self-adjusting heap) is a heap data structure implemented as a binary tree.
 * Skew heaps are advantageous because of their ability to merge more quickly than binary heaps.
 * In contrast with leftist heaps, there are no structural constraints, so there is no guarantee
 * that the height of the tree is logarithmic. However, the amortized complexity of all operations is O(log n).
 *
 * @complexity Time: O(log n) amortized for add/poll/merge | Space: O(n) memory allocation
 */
export class SkewHeap<T> {
  private root: Node<T> | null = null;
  private _size = 0;

  /**
   * Constructs a new Skew Heap.
   *
   * @param compare Function to determine the priority of elements. By default acts as a min-heap.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number) {}

  /**
   * Gets the number of elements in the heap.
   *
   * @returns The number of elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  get size(): number { return this._size; }

  /**
   * Checks whether the heap is empty.
   *
   * @returns `true` if empty, `false` otherwise.
   * @complexity Time: O(1) | Space: O(1)
   */
  isEmpty(): boolean { return this._size===0; }

  /**
   * Retrieves, but does not remove, the highest priority element in the heap.
   *
   * @returns The highest priority element, or `null` if the heap is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peek(): T | null { return this.root?this.root.value:null; }

  /**
   * Adds a new element to the heap.
   *
   * @param x The element to add.
   * @complexity Time: O(log n) amortized | Space: O(1) node allocation
   */
  add(x: T): void { this.root = this.meld(this.root, new Node(x)); this._size++; }

  /**
   * Retrieves and removes the highest priority element from the heap.
   *
   * @returns The highest priority element, or `null` if the heap is empty.
   * @complexity Time: O(log n) amortized | Space: O(log n) expected recursion depth for merge
   */
  poll(): T | null { if (!this.root) return null; const v=this.root.value; this.root = this.meld(this.root.left, this.root.right); this._size--; return v; }

  /**
   * Clears all elements from the heap.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void { this.root=null; this._size=0; }

  private meld(a: Node<T> | null, b: Node<T> | null): Node<T> | null {
    if (!a) return b; if (!b) return a; if (this.compare(a.value,b.value) > 0) [a,b]=[b,a];
    a.right = this.meld(a.right, b);
    // swap children
    const tmp = a.left; a.left = a.right; a.right = tmp;
    return a;
  }
}
class Node<T> { constructor(public value: T, public left: Node<T>|null=null, public right: Node<T>|null=null){} }
