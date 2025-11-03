import { BTreeNode } from './interfaces';
import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';
import { BTreeIterator } from './iterator';

/**
 * @title B-Tree
 * @notice A self-balancing tree data structure that maintains sorted data
 * @dev This class is an implementation of a B-Tree, a self-balancing tree data structure that keeps data sorted and allows for searches, sequential access, insertions, and deletions in logarithmic time.
 * @template T The type of elements stored in the B-Tree.
 */
export class BTree<T> extends BaseDataStructure<T> {
  private _root: BTreeNode<T> | null;
  private _order: number;
  private _compare: (a: T, b: T) => number;

  /**
   * @notice Creates a new B-Tree.
   * @param order The order of the B-Tree, which determines the maximum number of children each node can have.
   * @param compareFunction An optional function to compare elements, defaults to a standard comparison function.
   * @dev The order of the B-Tree must be at least 2.
   */
  constructor(order: number, compareFunction?: (a: T, b: T) => number) {
    super();
    if (order < 2) {
      throw new Error('Order must be at least 2.');
    }
    this._root = null;
    this._order = order;
    this._compare =
      compareFunction ||
      ((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
  }

  /**
   * @notice Returns the number of elements in the B-Tree.
   * @returns The number of elements in the B-Tree.
   * @complexity O(1)
   * @dev This method provides the size of the B-Tree in constant time.
   */
  get size(): number {
    return this._size;
  }

  /**
   * @notice Inserts a key into the B-Tree.
   * @param key The key to insert.
   * @dev This method inserts a key into the B-Tree and maintains the B-Tree properties.
   */
  insert(key: T): void {
    if (!this._root) {
      this._root = this._createNode(true);
      this._root.keys[0] = key;
      this._size = 1;
      return;
    }

    if (this._root.keys.length === 2 * this._order - 1) {
      const newRoot = this._createNode(false);
      newRoot.children[0] = this._root;
      this._root.parent = newRoot;
      this._splitChild(newRoot, 0, this._root);
      this._root = newRoot;
    }

    this._insertNonFull(this._root, key);
    this._size++;
  }

  private _splitChild(parent: BTreeNode<T>, index: number, child: BTreeNode<T>): void {
    const newSibling = this._createNode(child.isLeaf, parent);
    const middleKeyIndex = this._order - 1;

    parent.keys.splice(index, 0, child.keys[middleKeyIndex]);
    parent.children.splice(index + 1, 0, newSibling);

    newSibling.keys = child.keys.splice(middleKeyIndex + 1);
    const middleKey = child.keys.splice(middleKeyIndex)[0];

    if (!child.isLeaf) {
      newSibling.children = child.children.splice(middleKeyIndex + 1);
      newSibling.children.forEach(c => (c.parent = newSibling));
    }
  }

  private _insertNonFull(node: BTreeNode<T>, key: T): void {
    let i = this._findInsertionIndex(node, key);

    if (node.isLeaf) {
      node.keys.splice(i, 0, key);
      return;
    }

    if (node.children[i].keys.length === 2 * this._order - 1) {
      this._splitChild(node, i, node.children[i]);
      if (this._compare(key, node.keys[i]) > 0) {
        i++;
      }
    }

    this._insertNonFull(node.children[i], key);
  }

  /**
   * @notice Deletes a key from the B-Tree.
   * @param key The key to delete.
   * @returns True if the key was deleted, false otherwise.
   * @dev This method deletes a key from the B-Tree and maintains the B-Tree properties.
   */
  delete(key: T): boolean {
    if (!this._root) {
      return false;
    }

    const result = this._delete(this._root, key);
    if (this._root.keys.length === 0 && !this._root.isLeaf) {
      this._root = this._root.children[0];
    }
    return result;
  }

  private _delete(node: BTreeNode<T>, key: T): boolean {
    const i = this._findInsertionIndex(node, key);

    if (i < node.keys.length && this._compare(node.keys[i], key) === 0) {
      if (node.isLeaf) {
        node.keys.splice(i, 1);
        this._size--;
        return true;
      } else {
        return this._deleteInternalNode(node, i);
      }
    } else {
      if (node.isLeaf) {
        return false;
      } else {
        const result = this._deleteFromSubtree(node, i, key);
        return result.found;
      }
    }
  }

  private _deleteInternalNode(node: BTreeNode<T>, index: number): boolean {
    const key = node.keys[index];
    const leftChild = node.children[index];
    const rightChild = node.children[index + 1];

    if (leftChild.keys.length >= this._order) {
      const predecessor = this._getPredecessor(leftChild);
      node.keys[index] = predecessor;
      return this._delete(leftChild, predecessor);
    } else if (rightChild.keys.length >= this._order) {
      const successor = this._getSuccessor(rightChild);
      node.keys[index] = successor;
      return this._delete(rightChild, successor);
    } else {
      this._merge(node, index);
      return this._delete(leftChild, key);
    }
  }

  private _getPredecessor(node: BTreeNode<T>): T {
    let current = node;
    while (!current.isLeaf) {
      current = current.children[current.keys.length];
    }
    return current.keys[current.keys.length - 1];
  }

  private _getSuccessor(node: BTreeNode<T>): T {
    let current = node;
    while (!current.isLeaf) {
      current = current.children[0];
    }
    return current.keys[0];
  }

  private _deleteFromSubtree(node: BTreeNode<T>, index: number, key: T): { found: boolean; index: number } {
    if (node.children[index].keys.length < this._order) {
      if (index > 0 && node.children[index - 1].keys.length >= this._order) {
        this._borrowFromPrev(node, index);
      } else if (index < node.keys.length && node.children[index + 1].keys.length >= this._order) {
        this._borrowFromNext(node, index);
      } else {
        if (index > 0) {
          this._merge(node, index - 1);
          index--;
        } else {
          this._merge(node, index);
        }
      }
    }
    return { found: this._delete(node.children[index], key), index };
  }

  private _borrowFromPrev(node: BTreeNode<T>, index: number): void {
    const child = node.children[index];
    const sibling = node.children[index - 1];

    child.keys.unshift(node.keys[index - 1]);
    node.keys[index - 1] = sibling.keys.pop()!;

    if (!sibling.isLeaf) {
      child.children.unshift(sibling.children.pop()!);
    }
  }

  private _borrowFromNext(node: BTreeNode<T>, index: number): void {
    const child = node.children[index];
    const sibling = node.children[index + 1];

    child.keys.push(node.keys[index]);
    node.keys[index] = sibling.keys.shift()!;

    if (!sibling.isLeaf) {
      child.children.push(sibling.children.shift()!);
    }
  }

  private _merge(node: BTreeNode<T>, index: number): void {
    const leftChild = node.children[index];
    const rightChild = node.children[index + 1];

    leftChild.keys.push(node.keys[index]);
    leftChild.keys.push(...rightChild.keys);
    leftChild.children.push(...rightChild.children);

    node.keys.splice(index, 1);
    node.children.splice(index + 1, 1);
  }

  /**
   * @notice Searches for a key in the B-Tree.
   * @param key The key to search for.
   * @returns The node containing the key, or null if the key is not found.
   * @dev This method searches for a key in the B-Tree and returns the node where the key is located.
   */
  search(key: T): BTreeNode<T> | null {
    return this._search(this._root, key)?.node || null;
  }

  private _search(node: BTreeNode<T> | null, key: T): { node: BTreeNode<T>; index: number } | null {
    if (!node) {
      return null;
    }

    const i = this._findInsertionIndex(node, key);

    if (i < node.keys.length && this._compare(key, node.keys[i]) === 0) {
      return { node, index: i };
    }

    if (node.isLeaf) {
      return null;
    }

    return this._search(node.children[i], key);
  }

  /**
   * @notice Performs a range query on the B-Tree.
   * @param start The start of the range.
   * @param end The end of the range.
   * @returns An array of keys within the specified range.
   * @dev This method returns all the keys in the B-Tree that are within the given range.
   */
  rangeQuery(start: T, end: T): T[] {
    const result: T[] = [];
    this._traverseInOrder(this._root, key => {
      if (this._compare(key, start) >= 0 && this._compare(key, end) <= 0) {
        result.push(key);
      }
    });
    return result;
  }

  /**
   * @notice Finds the minimum key in the B-Tree.
   * @returns The minimum key, or null if the B-Tree is empty.
   * @dev This method finds the minimum key in the B-Tree by traversing to the leftmost leaf.
   */
  findMin(): T | null {
    if (!this._root) {
      return null;
    }

    let current = this._root;
    while (!current.isLeaf) {
      current = current.children[0];
    }

    return current.keys[0];
  }

  /**
   * @notice Finds the maximum key in the B-Tree.
   * @returns The maximum key, or null if the B-Tree is empty.
   * @dev This method finds the maximum key in the B-Tree by traversing to the rightmost leaf.
   */
  findMax(): T | null {
    if (!this._root) {
      return null;
    }

    let current = this._root;
    while (!current.isLeaf) {
      current = current.children[current.children.length - 1];
    }

    return current.keys[current.keys.length - 1];
  }

  /**
   * @notice Performs an in-order traversal of the B-Tree.
   * @returns An array of keys in sorted order.
   * @dev This method returns all the keys in the B-Tree in sorted order.
   */
  traversalInOrder(): T[] {
    const result: T[] = [];
    this._traverseInOrder(this._root, key => result.push(key));
    return result;
  }

  private _traverseInOrder(node: BTreeNode<T> | null, callback: (key: T) => void): void {
    if (node) {
      for (let i = 0; i < node.keys.length; i++) {
        if (!node.isLeaf) {
          this._traverseInOrder(node.children[i], callback);
        }
        callback(node.keys[i]);
      }
      if (!node.isLeaf) {
        this._traverseInOrder(node.children[node.keys.length], callback);
      }
    }
  }

  /**
   * @notice Performs a level-order traversal of the B-Tree.
   * @returns An array of keys in level order.
   * @dev This method returns all the keys in the B-Tree in level order.
   */
  traversalLevelOrder(): T[] {
    if (!this._root) {
      return [];
    }

    const result: T[] = [];
    const queue: BTreeNode<T>[] = [this._root];

    while (queue.length > 0) {
      const node = queue.shift()!;
      for (const key of node.keys) {
        result.push(key);
      }
      if (!node.isLeaf) {
        for (const child of node.children) {
          queue.push(child);
        }
      }
    }

    return result;
  }

  /**
   * @notice Checks if the B-Tree is empty.
   * @returns True if the B-Tree is empty, false otherwise.
   * @complexity O(1)
   * @dev This method checks if the B-Tree is empty in constant time.
   */
  isEmpty(): boolean {
    return this._size === 0;
  }

  /**
   * @notice Returns the number of elements in the B-Tree.
   * @returns The number of elements in the B-Tree.
   * @complexity O(1)
   * @dev This method is an alias for the `size` getter.
   */
  getSize(): number {
    return this.size;
  }

  /**
   * @notice Returns the height of the B-Tree.
   * @returns The height of the B-Tree.
   * @dev The height of a B-Tree is the number of levels from the root to a leaf.
   */
  getHeight(): number {
    if (!this._root) {
      return 0;
    }

    let height = 0;
    let current = this._root;
    while (!current.isLeaf) {
      height++;
      current = current.children[0];
    }
    return height;
  }

  /**
   * @notice Clears the B-Tree.
   * @dev This method removes all the elements from the B-Tree.
   */
  clear(): void {
    this._root = null;
    this._size = 0;
  }

  /**
   * @notice Creates an iterator for the B-Tree.
   * @returns An iterator over the elements of the B-Tree.
   * @dev This method returns an iterator that can be used to traverse the B-Tree.
   */
  iterator(): IIterator<T> {
    return new BTreeIterator(this._root);
  }

  /**
   * @notice Checks if the B-Tree contains a specific element.
   * @param element The element to search for.
   * @returns True if the element is found, false otherwise.
   * @dev This method checks if the B-Tree contains a specific element.
   */
  contains(element: T): boolean {
    return this.search(element) !== null;
  }

  /**
   * @notice Converts the B-Tree to an array.
   * @returns An array containing all the elements of the B-Tree in sorted order.
   * @dev This method is an alias for the `traversalInOrder` method.
   */
  toArray(): T[] {
    return this.traversalInOrder();
  }

  private _createNode(isLeaf: boolean, parent?: BTreeNode<T>): BTreeNode<T> {
    return {
      keys: [],
      children: [],
      isLeaf,
      parent,
    };
  }

  private _findInsertionIndex(node: BTreeNode<T>, key: T): number {
    let low = 0;
    let high = node.keys.length - 1;
    let mid = 0;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      const cmp = this._compare(key, node.keys[mid]);
      if (cmp === 0) {
        return mid;
      } else if (cmp < 0) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  toJson(): string {
    return JSON.stringify(this._root, (key, value) => {
      if (key === 'parent') {
        return undefined;
      }
      return value;
    });
  }
}
