import { RBNode, Color } from './interfaces';
import { RedBlackTreeIterator } from './iterator';

export class RedBlackTree<T> implements Iterable<T> {
  root: RBNode<T> | null;
  size: number;
  private compare: (a: T, b: T) => number;
  private NIL: RBNode<T>; // Sentinel node for all leaf references

  constructor(compareFunction?: (a: T, b: T) => number) {
    this.NIL = {
      value: null as any, // Using null as a sentinel value
      color: 'black',
      left: null,
      right: null,
      parent: null,
    };
    this.NIL.left = this.NIL;
    this.NIL.right = this.NIL;
    this.NIL.parent = this.NIL;
    this.root = this.NIL;
    this.size = 0;
    this.compare = compareFunction || ((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  }

  // Core operations
  insert(value: T): RBNode<T> {
    const newNode: RBNode<T> = {
      value,
      color: 'red',
      left: this.NIL,
      right: this.NIL,
      parent: null,
    };

    let y: RBNode<T> | null = null;
    let x: RBNode<T> | null = this.root;

    while (x !== this.NIL && x !== null) {
      y = x;
      if (this.compare(newNode.value, x.value) < 0) {
        x = x.left;
      } else {
        x = x.right;
      }
    }

    newNode.parent = y;
    if (y === null) {
      this.root = newNode;
    } else if (this.compare(newNode.value, y.value) < 0) {
      y.left = newNode;
    } else {
      y.right = newNode;
    }

    if (newNode.parent === null) {
      newNode.color = 'black';
      this.root = newNode;
      this.size++;
      return newNode;
    }

    this.insertFixup(newNode);
    this.size++;
    return newNode;
  }

  private insertFixup(z: RBNode<T>): void {
    while (z.parent && z.parent.color === 'red') {
      if (z.parent.parent && z.parent === z.parent.parent.left) {
        const y = z.parent.parent.right;
        if (y && y.color === 'red') {
          z.parent.color = 'black';
          y.color = 'black';
          z.parent.parent.color = 'red';
          z = z.parent.parent;
        } else {
          if (z === z.parent.right) {
            z = z.parent;
            this.leftRotate(z);
          }
          if (z.parent) {
            z.parent.color = 'black';
            if (z.parent.parent) {
              z.parent.parent.color = 'red';
              this.rightRotate(z.parent.parent);
            }
          }
        }
      } else if (z.parent && z.parent.parent) {
        const y = z.parent.parent.left;
        if (y && y.color === 'red') {
          z.parent.color = 'black';
          y.color = 'black';
          z.parent.parent.color = 'red';
          z = z.parent.parent;
        } else {
          if (z === z.parent.left) {
            z = z.parent;
            this.rightRotate(z);
          }
          if (z.parent) {
            z.parent.color = 'black';
            if (z.parent.parent) {
              z.parent.parent.color = 'red';
              this.leftRotate(z.parent.parent);
            }
          }
        }
      }
    }
    if (this.root) {
      this.root.color = 'black';
    }
  }

  private leftRotate(x: RBNode<T>): void {
    const y = x.right;
    if (y) {
      x.right = y.left;
      if (y.left && y.left !== this.NIL) {
        y.left.parent = x;
      }
      y.parent = x.parent;
      if (x.parent === null) {
        this.root = y;
      } else if (x === x.parent.left) {
        x.parent.left = y;
      } else {
        x.parent.right = y;
      }
      y.left = x;
      x.parent = y;
    }
  }

  private rightRotate(y: RBNode<T>): void {
    const x = y.left;
    if (x) {
      y.left = x.right;
      if (x.right && x.right !== this.NIL) {
        x.right.parent = y;
      }
      x.parent = y.parent;
      if (y.parent === null) {
        this.root = x;
      } else if (y === y.parent.right) {
        y.parent.right = x;
      } else {
        y.parent.left = x;
      }
      x.right = y;
      y.parent = x;
    }
  }

  delete(value: T): boolean {
    const z = this.search(value);
    if (z === null) {
      return false;
    }

    let y = z;
    let yOriginalColor = y.color;
    let x: RBNode<T> | null = null;

    if (z.left === this.NIL) {
      x = z.right;
      if (x) this.transplant(z, x);
    } else if (z.right === this.NIL) {
      x = z.left;
      if (x) this.transplant(z, x);
    } else {
      const minNode = this.findMinNode(z.right);
      if (minNode) {
        y = minNode;
        yOriginalColor = y.color;
        x = y.right;
        if (y.parent === z) {
          if (x) x.parent = y;
        } else {
          if (x) this.transplant(y, x);
          y.right = z.right;
          if (y.right) y.right.parent = y;
        }
        this.transplant(z, y);
        y.left = z.left;
        if (y.left) y.left.parent = y;
        y.color = z.color;
      }
    }

    if (yOriginalColor === 'black' && x) {
      this.deleteFixup(x);
    }

    this.size--;
    this.NIL.parent = this.NIL; // Ensure NIL's parent is not pointing into the tree
    return true;
  }

  private transplant(u: RBNode<T>, v: RBNode<T>): void {
    if (u.parent === null) {
      this.root = v;
    } else if (u === u.parent.left) {
      u.parent.left = v;
    } else {
      u.parent.right = v;
    }
    v.parent = u.parent;
  }

  private deleteFixup(x: RBNode<T>): void {
    while (x !== this.root && x.color === 'black') {
      if (x.parent && x === x.parent.left) {
        let w = x.parent.right;
        if (w && w.color === 'red') {
          w.color = 'black';
          x.parent.color = 'red';
          this.leftRotate(x.parent);
          w = x.parent.right;
        }
        if (w && w.left && w.right && w.left.color === 'black' && w.right.color === 'black') {
          w.color = 'red';
          x = x.parent;
        } else if (w) {
          if (w.right && w.right.color === 'black') {
            if (w.left) w.left.color = 'black';
            w.color = 'red';
            this.rightRotate(w);
            w = x.parent.right;
          }
          if (w && x.parent) {
            w.color = x.parent.color;
            x.parent.color = 'black';
            if (w.right) w.right.color = 'black';
            this.leftRotate(x.parent);
          }
          x = this.root ? this.root : x;
        }
      } else if (x.parent) {
        let w = x.parent.left;
        if (w && w.color === 'red') {
          w.color = 'black';
          x.parent.color = 'red';
          this.rightRotate(x.parent);
          w = x.parent.left;
        }
        if (w && w.right && w.left && w.right.color === 'black' && w.left.color === 'black') {
          w.color = 'red';
          x = x.parent;
        } else if (w) {
          if (w.left && w.left.color === 'black') {
            if (w.right) w.right.color = 'black';
            w.color = 'red';
            this.leftRotate(w);
            w = x.parent.left;
          }
          if (w && x.parent) {
            w.color = x.parent.color;
            x.parent.color = 'black';
            if (w.left) w.left.color = 'black';
            this.rightRotate(x.parent);
          }
          x = this.root ? this.root : x;
        }
      }
    }
    x.color = 'black';
  }

  search(value: T): RBNode<T> | null {
    let current = this.root;
    while (current !== this.NIL && current !== null) {
      const comparison = this.compare(value, current.value);
      if (comparison === 0) {
        return current;
      }
      current = comparison < 0 ? current.left : current.right;
    }
    return null;
  }

  // Find operations
  findMin(): T | null {
    const minNode = this.findMinNode(this.root);
    return minNode ? minNode.value : null;
  }

  private findMinNode(node: RBNode<T> | null): RBNode<T> | null {
    if (node === null || node === this.NIL) {
      return null;
    }
    let current = node;
    while (current.left && current.left !== this.NIL) {
      current = current.left;
    }
    return current;
  }

  findMax(): T | null {
    const maxNode = this.findMaxNode(this.root);
    return maxNode ? maxNode.value : null;
  }

  private findMaxNode(node: RBNode<T> | null): RBNode<T> | null {
    if (node === null || node === this.NIL) {
      return null;
    }
    let current = node;
    while (current.right && current.right !== this.NIL) {
      current = current.right;
    }
    return current;
  }

  // Traversal methods
  traversalInOrder(): T[] {
    const result: T[] = [];
    this.inOrder(this.root, result);
    return result;
  }

  private inOrder(node: RBNode<T> | null, result: T[]): void {
    if (node !== null && node !== this.NIL) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
  }

  traversalPreOrder(): T[] {
    const result: T[] = [];
    this.preOrder(this.root, result);
    return result;
  }

  private preOrder(node: RBNode<T> | null, result: T[]): void {
    if (node !== null && node !== this.NIL) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  traversalPostOrder(): T[] {
    const result: T[] = [];
    this.postOrder(this.root, result);
    return result;
  }

  private postOrder(node: RBNode<T> | null, result: T[]): void {
    if (node !== null && node !== this.NIL) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
  }

  traversalLevelOrder(): T[] {
    const result: T[] = [];
    const queue: RBNode<T>[] = [];
    if (this.root !== null && this.root !== this.NIL) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      const node = queue.shift();
      if (node) {
        result.push(node.value);
        if (node.left !== null && node.left !== this.NIL) {
          queue.push(node.left);
        }
        if (node.right !== null && node.right !== this.NIL) {
          queue.push(node.right);
        }
      }
    }
    return result;
  }

  // Utility methods
  isEmpty(): boolean {
    return this.root === this.NIL;
  }

  getSize(): number {
    return this.size;
  }

  getHeight(): number {
    return this.getNodeHeight(this.root);
  }

  private getNodeHeight(node: RBNode<T> | null): number {
    if (node === null || node === this.NIL) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  clear(): void {
    this.root = this.NIL;
    this.size = 0;
  }

  // Balance checking
  isRedBlackTree(): boolean {
    if (this.root === null || this.root === this.NIL) {
      return true;
    }
    if (this.root.color !== 'black') {
      return false;
    }
    return this.checkRedBlackProperties(this.root);
  }

  private checkRedBlackProperties(node: RBNode<T> | null): boolean {
    if (node === null || node === this.NIL) {
      return true;
    }
    if (node.color === 'red') {
      if ((node.left && node.left.color === 'red') || (node.right && node.right.color === 'red')) {
        return false;
      }
    }
    const leftBlackHeight = this.getBlackHeightNode(node.left);
    const rightBlackHeight = this.getBlackHeightNode(node.right);
    if (leftBlackHeight !== rightBlackHeight) {
      return false;
    }
    return this.checkRedBlackProperties(node.left) && this.checkRedBlackProperties(node.right);
  }

  getBlackHeight(): number {
    return this.getBlackHeightNode(this.root);
  }

  private getBlackHeightNode(node: RBNode<T> | null): number {
    if (node === null || node === this.NIL) {
      return 1;
    }
    const leftBlackHeight = this.getBlackHeightNode(node.left);
    const rightBlackHeight = this.getBlackHeightNode(node.right);
    if (leftBlackHeight !== rightBlackHeight) {
      // This indicates a violation of R-B properties, but for height, we'll just return one path's height
      return -1; // Or throw an error
    }
    return (node.color === 'black' ? 1 : 0) + leftBlackHeight;
  }

  [Symbol.iterator](): Iterator<T> {
    return new RedBlackTreeIterator<T>(this.root, this.NIL);
  }

  toJson(): string {
    return JSON.stringify(this.root, (key, value) => {
      if (key === 'parent' || value === this.NIL) {
        return undefined;
      }
      return value;
    });
  }
}
