import { AVLNode } from './interfaces';
import { AVLTreeIterator } from './iterator';

export class AVLTree<T> implements Iterable<T> {
  root: AVLNode<T> | null = null;
  size: number = 0;
  compare: (a: T, b: T) => number;

  constructor(compareFunction?: (a: T, b: T) => number) {
    this.compare = compareFunction || ((a: any, b: any) => a - b);
  }

  private _getHeight(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

  private _getBalanceFactor(node: AVLNode<T> | null): number {
    if (!node) return 0;
    return this._getHeight(node.left) - this._getHeight(node.right);
  }

  private _rightRotate(z: AVLNode<T>): AVLNode<T> {
    const y = z.left!;
    const T3 = y.right;

    y.right = z;
    z.left = T3;

    y.parent = z.parent;
    z.parent = y;
    if (T3) {
      T3.parent = z;
    }

    z.height = Math.max(this._getHeight(z.left), this._getHeight(z.right)) + 1;
    y.height = Math.max(this._getHeight(y.left), this._getHeight(y.right)) + 1;

    return y;
  }

  private _leftRotate(z: AVLNode<T>): AVLNode<T> {
    const y = z.right!;
    const T2 = y.left;

    y.left = z;
    z.right = T2;

    y.parent = z.parent;
    z.parent = y;
    if (T2) {
      T2.parent = z;
    }

    z.height = Math.max(this._getHeight(z.left), this._getHeight(z.right)) + 1;
    y.height = Math.max(this._getHeight(y.left), this._getHeight(y.right)) + 1;

    return y;
  }

  insert(value: T): AVLNode<T> {
    this.root = this._insert(this.root, value, null);
    return this.root!;
  }

  private _insert(node: AVLNode<T> | null, value: T, parent: AVLNode<T> | null): AVLNode<T> {
    if (!node) {
      this.size++;
      return { value, left: null, right: null, parent, height: 1 };
    }

    if (this.compare(value, node.value) < 0) {
      node.left = this._insert(node.left, value, node);
    } else if (this.compare(value, node.value) > 0) {
      node.right = this._insert(node.right, value, node);
    } else {
      return node;
    }

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    const balance = this._getBalanceFactor(node);

    if (balance > 1 && this.compare(value, node.left!.value) < 0) {
      return this._rightRotate(node);
    }

    if (balance < -1 && this.compare(value, node.right!.value) > 0) {
      return this._leftRotate(node);
    }

    if (balance > 1 && this.compare(value, node.left!.value) > 0) {
      node.left = this._leftRotate(node.left!);
      node.left.parent = node;
      return this._rightRotate(node);
    }

    if (balance < -1 && this.compare(value, node.right!.value) < 0) {
      node.right = this._rightRotate(node.right!);
      node.right.parent = node;
      return this._leftRotate(node);
    }

    return node;
  }

  delete(value: T): boolean {
    const initialSize = this.size;
    this.root = this._delete(this.root, value);
    return this.size < initialSize;
  }

  private _delete(node: AVLNode<T> | null, value: T): AVLNode<T> | null {
    if (!node) {
      return node;
    }

    if (this.compare(value, node.value) < 0) {
      node.left = this._delete(node.left, value);
    } else if (this.compare(value, node.value) > 0) {
      node.right = this._delete(node.right, value);
    } else {
      if (!node.left || !node.right) {
        this.size--;
        let temp = node.left || node.right;
        if(temp) {
            temp.parent = node.parent;
        }
        node = temp;
      } else {
        const temp = this._findMin(node.right);
        node.value = temp.value;
        node.right = this._delete(node.right, temp.value);
      }
    }

    if (!node) {
      return node;
    }

    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    const balance = this._getBalanceFactor(node);

    if (balance > 1 && this._getBalanceFactor(node.left) >= 0) {
      return this._rightRotate(node);
    }

    if (balance > 1 && this._getBalanceFactor(node.left) < 0) {
      node.left = this._leftRotate(node.left!);
      node.left.parent = node;
      return this._rightRotate(node);
    }

    if (balance < -1 && this._getBalanceFactor(node.right) <= 0) {
      return this._leftRotate(node);
    }

    if (balance < -1 && this._getBalanceFactor(node.right) > 0) {
      node.right = this._rightRotate(node.right!);
      node.right.parent = node;
      return this._leftRotate(node);
    }

    return node;
  }

  search(value: T): AVLNode<T> | null {
    let current = this.root;
    while (current) {
      if (this.compare(value, current.value) === 0) {
        return current;
      }
      current = this.compare(value, current.value) < 0 ? current.left : current.right;
    }
    return null;
  }

  private _findMin(node: AVLNode<T>): AVLNode<T> {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  findMin(): AVLNode<T> | null {
    if (!this.root) return null;
    return this._findMin(this.root);
  }

  findMax(): AVLNode<T> | null {
    if (!this.root) return null;
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  traversalInOrder(): T[] {
    const result: T[] = [];
    this._traversalInOrder(this.root, result);
    return result;
  }

  private _traversalInOrder(node: AVLNode<T> | null, result: T[]) {
    if (node) {
      this._traversalInOrder(node.left, result);
      result.push(node.value);
      this._traversalInOrder(node.right, result);
    }
  }

  traversalPreOrder(): T[] {
    const result: T[] = [];
    this._traversalPreOrder(this.root, result);
    return result;
  }

  private _traversalPreOrder(node: AVLNode<T> | null, result: T[]) {
    if (node) {
      result.push(node.value);
      this._traversalPreOrder(node.left, result);
      this._traversalPreOrder(node.right, result);
    }
  }

  traversalPostOrder(): T[] {
    const result: T[] = [];
    this._traversalPostOrder(this.root, result);
    return result;
  }

  private _traversalPostOrder(node: AVLNode<T> | null, result: T[]) {
    if (node) {
      this._traversalPostOrder(node.left, result);
      this._traversalPostOrder(node.right, result);
      result.push(node.value);
    }
  }

  traversalLevelOrder(): T[] {
    const result: T[] = [];
    if (!this.root) return result;
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift()!;
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  getHeight(): number {
    return this._getHeight(this.root);
  }

  clear(): void {
    this.root = null;
    this.size = 0;
  }

  isBalanced(): boolean {
    return this._isBalanced(this.root);
  }

  private _isBalanced(node: AVLNode<T> | null): boolean {
    if (!node) return true;
    const balance = this._getBalanceFactor(node);
    if (Math.abs(balance) > 1) return false;
    return this._isBalanced(node.left) && this._isBalanced(node.right);
  }

  getBalanceFactor(node: AVLNode<T>): number {
    return this._getBalanceFactor(node);
  }

  [Symbol.iterator](): Iterator<T> {
    return new AVLTreeIterator(this.root);
  }
}
