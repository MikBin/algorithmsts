import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { InOrderIterator } from "../../core/iterators/InOrderIterator";

class Node<T> {
  constructor(
    public key: T,
    public left: Node<T> | null = null,
    public right: Node<T> | null = null,
  ) {}
}

/**
 * A Splay Tree is a self-adjusting binary search tree with the additional property
 * that recently accessed elements are quick to access again.
 * It performs basic operations such as insertion, look-up and removal
 * in O(log n) amortized time.
 *
 * @complexity Time: O(log n) amortized for all operations | Space: O(n) memory allocation
 */
export class SplayTree<T> extends BaseDataStructure<T> {
  private root: Node<T> | null = null;

  /**
   * Constructs a new Splay Tree.
   *
   * @param compare Function to compare two elements.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private compare: (a: T, b: T) => number) {
    super();
  }

  private rotateRight(y: Node<T>): Node<T> {
    const x = y.left!;
    y.left = x.right;
    x.right = y;
    return x;
  }
  private rotateLeft(x: Node<T>): Node<T> {
    const y = x.right!;
    x.right = y.left;
    y.left = x;
    return y;
  }

  private splay(root: Node<T> | null, key: T): Node<T> | null {
    if (!root) return null;
    const cmp = this.compare(key, root.key);
    if (cmp < 0) {
      if (!root.left) return root;
      const cmp2 = this.compare(key, root.left.key);
      if (cmp2 < 0) {
        root.left.left = this.splay(root.left.left, key);
        root = this.rotateRight(root);
      } else if (cmp2 > 0) {
        root.left.right = this.splay(root.left.right, key);
        if (root.left.right) root.left = this.rotateLeft(root.left);
      }
      return root.left ? this.rotateRight(root) : root;
    } else if (cmp > 0) {
      if (!root.right) return root;
      const cmp2 = this.compare(key, root.right.key);
      if (cmp2 > 0) {
        root.right.right = this.splay(root.right.right, key);
        root = this.rotateLeft(root);
      } else if (cmp2 < 0) {
        root.right.left = this.splay(root.right.left, key);
        if (root.right.left) root.right = this.rotateRight(root.right);
      }
      return root.right ? this.rotateLeft(root) : root;
    } else {
      return root;
    }
  }

  /**
   * Adds an element to the tree.
   *
   * @param key The element to add.
   * @complexity Time: O(log n) amortized | Space: O(1) node allocation, O(h) recursion depth where h is the tree height
   */
  add(key: T): void {
    if (!this.root) {
      this.root = new Node(key);
      this._size++;
      return;
    }
    this.root = this.splay(this.root, key);
    const cmp = this.compare(key, this.root!.key);
    if (cmp === 0) return; // no duplicates
    const n = new Node(key);
    if (cmp < 0) {
      n.right = this.root;
      n.left = this.root!.left;
      this.root!.left = null;
    } else {
      n.left = this.root;
      n.right = this.root!.right;
      this.root!.right = null;
    }
    this.root = n;
    this._size++;
  }

  /**
   * Checks if the tree contains the specified key.
   * Note: This operation splays the accessed node (or the nearest node if not found) to the root.
   *
   * @param key The element to check for.
   * @returns `true` if the element is found, `false` otherwise.
   * @complexity Time: O(log n) amortized | Space: O(h) recursion depth where h is the tree height
   */
  contains(key: T): boolean {
    this.root = this.splay(this.root, key);
    return !!this.root && this.compare(this.root.key, key) === 0;
  }

  /**
   * Removes an element from the tree.
   *
   * @param key The element to remove.
   * @returns `true` if the element was removed, `false` if it was not found.
   * @complexity Time: O(log n) amortized | Space: O(h) recursion depth where h is the tree height
   */
  remove(key: T): boolean {
    if (!this.root) return false;
    this.root = this.splay(this.root, key);
    if (!this.root || this.compare(this.root.key, key) !== 0) return false;
    if (!this.root.left) {
      this.root = this.root.right;
    } else {
      const right = this.root!.right;
      this.root = this.splay(this.root!.left, key);
      if (this.root) this.root.right = right;
    }
    this._size--;
    return true;
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
    const res: T[] = [];
    const it = this.iterator();
    while (it.hasNext()) res.push(it.next());
    return res;
  }
}
