import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { InOrderIterator } from "../../core/iterators/InOrderIterator";

class Node<T> {
  constructor(
    public key: T,
    public left: Node<T> | null = null,
    public right: Node<T> | null = null,
    public height = 1,
  ) {}
}

/**
 * A WAVL (Weak AVL) Tree is a self-balancing binary search tree.
 * It combines the rebalancing conditions of AVL trees with the relaxed balance conditions
 * of red-black trees. This allows it to perform insertions with a constant number of rotations
 * and at most a constant number of structural changes during deletions.
 *
 * @complexity Time: O(log n) for most operations | Space: O(n) memory allocation
 */
export class WAVLTree<T> extends BaseDataStructure<T> {
  private root: Node<T> | null = null;

  /**
   * Constructs a new WAVL Tree.
   *
   * @param compare Function to compare two elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number) {
    super();
  }

  private h(n: Node<T> | null) {
    return n ? n.height : 0;
  }
  private upd(n: Node<T>) {
    n.height = 1 + Math.max(this.h(n.left), this.h(n.right));
  }
  private rotR(y: Node<T>): Node<T> {
    const x = y.left!;
    y.left = x.right;
    x.right = y;
    this.upd(y);
    this.upd(x);
    return x;
  }
  private rotL(x: Node<T>): Node<T> {
    const y = x.right!;
    x.right = y.left;
    y.left = x;
    this.upd(x);
    this.upd(y);
    return y;
  }

  private balance(n: Node<T>): Node<T> {
    this.upd(n);
    const bf = this.h(n.left) - this.h(n.right);
    if (bf > 1) {
      if (this.h(n.left!.left) < this.h(n.left!.right)) n.left = this.rotL(n.left!);
      return this.rotR(n);
    }
    if (bf < -1) {
      if (this.h(n.right!.right) < this.h(n.right!.left)) n.right = this.rotR(n.right!);
      return this.rotL(n);
    }
    return n;
  }

  /**
   * Adds an element to the tree.
   *
   * @param x The element to add.
   * @complexity Time: O(log n) | Space: O(1) node allocation, O(log n) recursion depth
   */
  add(x: T): void {
    this.root = this._insert(this.root, x);
    this._size++;
  }
  private _insert(n: Node<T> | null, x: T): Node<T> {
    if (!n) return new Node(x);
    const c = this.compare(x, n.key);
    if (c < 0) n.left = this._insert(n.left, x);
    else if (c > 0) n.right = this._insert(n.right, x);
    else return n;
    return this.balance(n);
  }

  /**
   * Checks if the tree contains the specified element.
   *
   * @param x The element to check for.
   * @returns `true` if the element is found, `false` otherwise.
   * @complexity Time: O(log n) worst-case | Space: O(1)
   */
  contains(x: T): boolean {
    let n = this.root;
    while (n) {
      const c = this.compare(x, n.key);
      if (c === 0) return true;
      n = c < 0 ? n.left : n.right;
    }
    return false;
  }

  /**
   * Removes an element from the tree.
   *
   * @param x The element to remove.
   * @returns `true` if the element was removed, `false` if it was not found.
   * @complexity Time: O(log n) | Space: O(log n) recursion depth
   */
  remove(x: T): boolean {
    const [nr, rem] = this._remove(this.root, x);
    this.root = nr;
    if (rem) this._size--;
    return rem;
  }
  private _remove(n: Node<T> | null, x: T): [Node<T> | null, boolean] {
    if (!n) return [null, false];
    const c = this.compare(x, n.key);
    if (c < 0) {
      const [l, r] = this._remove(n.left, x);
      n.left = l;
      return [this.balance(n), r];
    }
    if (c > 0) {
      const [rnode, r] = this._remove(n.right, x);
      n.right = rnode;
      return [this.balance(n), r];
    } // delete
    if (!n.left) return [n.right, true];
    if (!n.right) return [n.left, true];
    let s = n.right;
    while (s!.left) s = s!.left;
    n.key = s!.key;
    const [nr, _] = this._remove(n.right, s!.key);
    n.right = nr;
    return [this.balance(n), true];
  }

  /**
   * Clears all elements from the tree.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.root = null;
    this._size = 0;
  }

  /**
   * Returns an iterator over the elements in the tree in sorted order.
   *
   * @returns An iterator.
   * @complexity Time: O(1) to create | Space: O(log n) for the iterator stack
   */
  iterator(): IIterator<T> {
    return new InOrderIterator(this.root);
  }

  /**
   * Converts the tree to an array in sorted order.
   *
   * @returns An array containing all elements in sorted order.
   * @complexity Time: O(n) where n is the number of elements | Space: O(n) for the output array
   */
  toArray(): T[] {
    const out: T[] = [];
    const it = this.iterator();
    while (it.hasNext()) out.push(it.next());
    return out;
  }
}
