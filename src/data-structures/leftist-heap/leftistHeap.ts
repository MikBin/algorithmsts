/**
 * Represents a Leftist Heap, a priority queue variant that maintains a "leftist" property for efficient merging.
 */
export class LeftistHeap<T> {
  private root: Node<T> | null = null;
  private _size = 0;

  /**
   * Initializes a new Leftist Heap.
   *
   * @param compare Comparator function for element ordering.
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
  isEmpty(): boolean { return this._size===0; }

  /**
   * Retrieves, but does not remove, the minimum element from the heap.
   *
   * @returns The minimum element, or null if the heap is empty.
   * @complexity Time: O(1) | Space: O(1)
   */
  peek(): T | null { return this.root?this.root.value:null; }

  /**
   * Inserts an element into the heap.
   *
   * @param x The element to insert.
   * @complexity Time: O(log n) | Space: O(log n) (recursion depth)
   */
  add(x: T): void { this.root = this.meld(this.root, new Node(x)); this._size++; }

  /**
   * Retrieves and removes the minimum element from the heap.
   *
   * @returns The minimum element, or null if the heap is empty.
   * @complexity Time: O(log n) | Space: O(log n) (recursion depth)
   */
  poll(): T | null { if (!this.root) return null; const v=this.root.value; this.root = this.mergeChildren(this.root); this._size--; return v; }

  /**
   * Clears all elements from the heap.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void { this.root=null; this._size=0; }
  private mergeChildren(n: Node<T>): Node<T> | null { return this.meld(n.left, n.right); }
  private meld(a: Node<T> | null, b: Node<T> | null): Node<T> | null {
    if (!a) return b; if (!b) return a; if (this.compare(a.value,b.value) > 0) [a,b]=[b,a];
    a.right = this.meld(a.right, b);
    if ((a.left?.npl ?? 0) < (a.right?.npl ?? 0)) [a.left, a.right] = [a.right, a.left];
    a.npl = ((a.right?.npl ?? -1) + 1);
    return a;
  }

  /**
   * Serializes the Leftist Heap to a JSON string.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
class Node<T> { constructor(public value: T, public left: Node<T>|null=null, public right: Node<T>|null=null, public npl: number = 0){} }
