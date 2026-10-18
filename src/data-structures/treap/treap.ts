import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { InOrderIterator } from "../../core/iterators/InOrderIterator";

class TreapNode<T> {
  constructor(
    public key: T,
    public priority: number,
    public left: TreapNode<T> | null = null,
    public right: TreapNode<T> | null = null,
  ) {}
}

/**
 * A Treap is a randomized binary search tree that maintains both the binary search tree
 * property (based on keys) and the heap property (based on random priorities).
 * This combination guarantees that the expected height of the tree is O(log n).
 *
 * @complexity Time: O(log n) expected for all operations | Space: O(n) memory allocation
 */
export class Treap<T> extends BaseDataStructure<T> {
  private root: TreapNode<T> | null = null;

  /**
   * Constructs a new Treap.
   *
   * @param compare Function to compare two elements.
   * @param rng Function that provides random numbers for priorities. Defaults to `Math.random`.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(
    private compare: (a: T, b: T) => number,
    private rng: () => number = Math.random,
  ) {
    super();
  }

  private rotateRight(y: TreapNode<T>): TreapNode<T> {
    const x = y.left!;
    y.left = x.right;
    x.right = y;
    return x;
  }
  private rotateLeft(x: TreapNode<T>): TreapNode<T> {
    const y = x.right!;
    x.right = y.left;
    y.left = x;
    return y;
  }

  /**
   * Adds an element to the treap.
   *
   * @param key The element to add.
   * @complexity Time: O(log n) expected | Space: O(1) node allocation, O(log n) expected recursion depth
   */
  add(key: T): void {
    this.root = this._insert(this.root, key);
    this._size++;
  }

  private _insert(node: TreapNode<T> | null, key: T): TreapNode<T> {
    if (!node) return new TreapNode(key, this.rng());
    const cmp = this.compare(key, node.key);
    if (cmp < 0) {
      node.left = this._insert(node.left, key);
      if (node.left!.priority > node.priority) node = this.rotateRight(node);
    } else {
      node.right = this._insert(node.right, key);
      if (node.right!.priority > node.priority) node = this.rotateLeft(node);
    }
    return node;
  }

  /**
   * Checks if the treap contains the specified element.
   *
   * @param key The element to check for.
   * @returns `true` if the element is found, `false` otherwise.
   * @complexity Time: O(log n) expected | Space: O(1)
   */
  contains(key: T): boolean {
    let cur = this.root;
    while (cur) {
      const c = this.compare(key, cur.key);
      if (c === 0) return true;
      cur = c < 0 ? cur.left : cur.right;
    }
    return false;
  }

  /**
   * Removes an element from the treap.
   *
   * @param key The element to remove.
   * @returns `true` if the element was removed, `false` if it was not found.
   * @complexity Time: O(log n) expected | Space: O(log n) expected recursion depth
   */
  remove(key: T): boolean {
    const [nr, removed] = this._erase(this.root, key);
    this.root = nr;
    if (removed) this._size--;
    return removed;
  }

  private _erase(node: TreapNode<T> | null, key: T): [TreapNode<T> | null, boolean] {
    if (!node) return [null, false];
    const cmp = this.compare(key, node.key);
    if (cmp < 0) {
      const [l, r] = this._erase(node.left, key);
      node.left = l;
      return [node, r];
    }
    if (cmp > 0) {
      const [rnode, r] = this._erase(node.right, key);
      node.right = rnode;
      return [node, r];
    }
    // node to delete
    if (!node.left) return [node.right, true];
    if (!node.right) return [node.left, true];
    if (node.left.priority > node.right.priority) {
      node = this.rotateRight(node);
      const [nr, r] = this._erase(node.right, key);
      node.right = nr;
      return [node, r];
    } else {
      node = this.rotateLeft(node);
      const [nl, r] = this._erase(node.left, key);
      node.left = nl;
      return [node, r];
    }
  }

  /**
   * Clears all elements from the treap.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.root = null;
    this._size = 0;
  }

  /**
   * Returns an iterator over the elements in the treap in sorted order.
   *
   * @returns An iterator.
   * @complexity Time: O(1) to create | Space: O(log n) expected for the iterator stack
   */
  iterator(): IIterator<T> {
    return new InOrderIterator(this.root);
  }

  /**
   * Converts the treap to an array in sorted order.
   *
   * @returns An array containing all elements in sorted order.
   * @complexity Time: O(n) where n is the number of elements | Space: O(n) for the output array
   */
  toArray(): T[] {
    const res: T[] = [];
    const it = this.iterator();
    while (it.hasNext()) res.push(it.next());
    return res;
  }
}
