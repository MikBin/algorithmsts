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
 * A Scapegoat Tree is a self-balancing binary search tree that provides worst-case O(log n)
 * search time, and O(log n) amortized insertion and deletion time.
 * It maintains balance without storing additional per-node balance information,
 * instead occasionally rebuilding subtrees when they become too unbalanced.
 *
 * @complexity Time: O(log n) amortized for add/remove, O(log n) worst-case for search | Space: O(n) memory allocation
 */
export class ScapegoatTree<T> extends BaseDataStructure<T> {
  private root: Node<T> | null = null;
  private _sizeReal = 0; // track array rebuild criterion

  /**
   * Constructs a new Scapegoat Tree.
   *
   * @param compare Function to compare two elements.
   * @param alpha Balance parameter, typically between 0.5 and 1. Defaults to 2/3.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(
    private compare: (a: T, b: T) => number,
    private alpha = 2 / 3,
  ) {
    super();
  }

  /**
   * Adds an element to the tree.
   *
   * @param x The element to add.
   * @complexity Time: O(log n) amortized, O(n) worst-case if rebuilding is needed | Space: O(n) if rebuilding is needed, O(log n) otherwise for the path
   */
  add(x: T): void {
    const path: Node<T>[] = [];
    let d = 0;
    let n = this.root;
    if (!n) {
      this.root = new Node(x);
      this._size++;
      this._sizeReal++;
      return;
    }
    while (n) {
      path.push(n);
      d++;
      const c = this.compare(x, n.key);
      if (c < 0) {
        if (!n.left) {
          n.left = new Node(x);
          break;
        }
        n = n.left;
      } else if (c > 0) {
        if (!n.right) {
          n.right = new Node(x);
          break;
        }
        n = n.right;
      } else {
        return;
      }
    }
    this._size++;
    this._sizeReal++;
    // if depth too large, rebuild at scapegoat
    if (d > Math.floor(Math.log(this._sizeReal) / Math.log(1 / this.alpha))) {
      for (let i = path.length - 1; i >= 0; i--) {
        const p = path[i];
        const sizeL = this.sizeOf(p.left);
        const sizeR = this.sizeOf(p.right);
        if (sizeL > this.alpha * (sizeL + sizeR + 1) || sizeR > this.alpha * (sizeL + sizeR + 1)) {
          // rebuild subtree rooted at p
          const arr: T[] = [];
          this.flatten(p, arr);
          const rebuilt = this.buildBalanced(arr, 0, arr.length - 1);
          if (i === 0) this.root = rebuilt;
          else {
            const parent = path[i - 1];
            if (parent.left === p) parent.left = rebuilt;
            else parent.right = rebuilt;
          }
          break;
        }
      }
    }
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
   * @complexity Time: O(log n) amortized, O(n) worst-case if global rebuilding is needed | Space: O(n) if global rebuilding is needed, O(log n) recursion depth otherwise
   */
  remove(x: T): boolean {
    const [nr, removed] = this._remove(this.root, x);
    this.root = nr;
    if (removed) {
      this._size--;
      if (this._size < this.alpha * this._sizeReal) {
        // rebuild whole tree
        const arr: T[] = [];
        this.flatten(this.root, arr);
        this.root = this.buildBalanced(arr, 0, arr.length - 1);
        this._sizeReal = this._size;
      }
    }
    return removed;
  }

  private _remove(node: Node<T> | null, x: T): [Node<T> | null, boolean] {
    if (!node) return [null, false];
    const c = this.compare(x, node.key);
    if (c < 0) {
      const [l, r] = this._remove(node.left, x);
      node.left = l;
      return [node, r];
    }
    if (c > 0) {
      const [rnode, r] = this._remove(node.right, x);
      node.right = rnode;
      return [node, r];
    }
    // delete this node
    if (!node.left) return [node.right, true];
    if (!node.right) return [node.left, true];
    // replace with successor
    let succParent = node;
    let succ = node.right;
    while (succ!.left) {
      succParent = succ!;
      succ = succ!.left;
    }
    node.key = succ!.key;
    if (succParent.left === succ) succParent.left = succ!.right;
    else succParent.right = succ!.right;
    return [node, true];
  }

  private sizeOf(n: Node<T> | null): number {
    if (!n) return 0;
    return 1 + this.sizeOf(n.left) + this.sizeOf(n.right);
  }
  private flatten(n: Node<T> | null, out: T[]): void {
    if (!n) return;
    this.flatten(n.left, out);
    out.push(n.key);
    this.flatten(n.right, out);
  }
  private buildBalanced(arr: T[], l: number, r: number): Node<T> | null {
    if (l > r) return null;
    const m = (l + r) >> 1;
    const node = new Node(arr[m]);
    node.left = this.buildBalanced(arr, l, m - 1);
    node.right = this.buildBalanced(arr, m + 1, r);
    return node;
  }

  /**
   * Clears the tree of all elements.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.root = null;
    this._size = 0;
    this._sizeReal = 0;
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
