import { BaseDataStructure } from "../../core/abstracts/BaseDataStructure";
import { IIterator } from "../../core/interfaces/IIterator";
import { InOrderIterator } from "../../core/iterators/InOrderIterator";

class AANode<T> {
  constructor(
    public key: T,
    public level: number = 1,
    public left: AANode<T> | null = null,
    public right: AANode<T> | null = null,
  ) {}
}

export class AATree<T> extends BaseDataStructure<T> {
  private root: AANode<T> | null = null;
  constructor(private compare: (a: T, b: T) => number) {
    super();
  }

  private skew(node: AANode<T> | null): AANode<T> | null {
    if (!node || !node.left) return node;
    if (node.left.level === node.level) {
      const L = node.left;
      node.left = L.right;
      L.right = node;
      return L;
    }
    return node;
  }

  private split(node: AANode<T> | null): AANode<T> | null {
    if (!node || !node.right || !node.right.right) return node;
    if (node.level === node.right.right.level) {
      const R = node.right;
      node.right = R.left;
      R.left = node;
      R.level++;
      return R;
    }
    return node;
  }

  /**
   * TODO: Add description for add
   * @param key - TODO
   * @returns TODO
   * @complexity Time: TODO | Space: TODO
   */
  add(key: T): void {
    this.root = this._insert(this.root, key);
    this._size++;
  }

  private _insert(node: AANode<T> | null, key: T): AANode<T> {
    if (!node) return new AANode(key, 1);
    const cmp = this.compare(key, node.key);
    if (cmp < 0) node.left = this._insert(node.left, key);
    else if (cmp > 0) node.right = this._insert(node.right, key);
    // duplicates ignored
    node = this.skew(node)!;
    node = this.split(node)!;
    return node;
  }

  /**
   * Checks if the tree contains a key.
   * @param key - The key to check
   * @returns True if the key exists, false otherwise
   * @complexity Time: O(log n) | Space: O(1)
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
   * Removes a key from the tree.
   * @param key - The key to remove
   * @returns True if removed, false if not found
   * @complexity Time: O(log n) | Space: O(1)
   */
  remove(key: T): boolean {
    const [nr, removed] = this._remove(this.root, key);
    this.root = nr;
    if (removed) this._size--;
    return removed;
  }

  private _remove(node: AANode<T> | null, key: T): [AANode<T> | null, boolean] {
    if (!node) return [null, false];
    let removed = false;
    const cmp = this.compare(key, node.key);
    if (cmp < 0) {
      const [l, r] = this._remove(node.left, key);
      node.left = l;
      removed = r;
    } else if (cmp > 0) {
      const [ri, r] = this._remove(node.right, key);
      node.right = ri;
      removed = r;
    } else {
      removed = true;
      if (!node.left || !node.right) return [node.left || node.right, true];
      // replace with predecessor
      let pred = node.left;
      while (pred!.right) pred = pred!.right;
      node.key = pred!.key;
      const [l, _removedPred] = this._remove(node.left, node.key);
      node.left = l;
    }
    // decrease level if necessary
    const ideal = Math.min(node.left?.level ?? 0, node.right?.level ?? 0) + 1;
    if (ideal < node.level) {
      node.level = ideal;
      if (node.right && node.right.level > ideal) node.right.level = ideal;
      node = this.skew(node)!;
      if (node.right) node.right = this.skew(node.right)!;
      if (node.right?.right) node.right.right = this.skew(node.right.right)!;
      node = this.split(node)!;
      if (node.right) node.right = this.split(node.right)!;
    }
    return [node, removed];
  }

  /**
   * Clears the tree.
   * @complexity Time: O(1) | Space: O(1)
   */
  clear(): void {
    this.root = null;
    this._size = 0;
  }
  /**
   * Gets an iterator for the tree.
   * @returns An InOrderIterator
   * @complexity Time: O(1) | Space: O(1)
   */
  iterator(): IIterator<T> {
    return new InOrderIterator(this.root);
  }
  /**
   * Converts the tree to an array.
   * @returns An array of keys in order
   * @complexity Time: O(n) | Space: O(n)
   */
  toArray(): T[] {
    const out: T[] = [];
    const it = this.iterator();
    while (it.hasNext()) out.push(it.next());
    return out;
  }
  /**
   * Serializes the tree to JSON.
   * @returns A JSON string representation
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
