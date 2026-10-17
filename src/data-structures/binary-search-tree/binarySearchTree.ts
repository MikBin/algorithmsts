import { BSTNode } from './interfaces';
import { inOrderTraversal } from './iterator';

/**
 * @title Binary Search Tree
 * @notice A binary search tree (BST) is a node-based binary tree data structure which has the following properties:
 * - The left subtree of a node contains only nodes with keys lesser than the node's key
 * - The right subtree of a node contains only nodes with keys greater than the node's key
 * - The left and right subtree each must also be a binary search tree
 * - There must be no duplicate keys
 */
export class BinarySearchTree<T> {
  private _root: BSTNode<T> | null = null;
  _size: number = 0;
  private _compare: (a: T, b: T) => number;

  /**
   * @param compareFunction Optional custom comparison function.
   * If not provided, a default one will be used.
   */
  constructor(compareFunction?: (a: T, b: T) => number) {
    this._compare = compareFunction || ((a: any, b: any) => a < b ? -1 : a > b ? 1 : 0);
  }

  get root(): BSTNode<T> | null {
    return this._root;
  }

  get size(): number {
    return this._size;
  }

  /**
   * @notice Inserts a new value into the BST.
   * @param value The value to insert.
   * @returns The newly created node.
   */
  insert(value: T): BSTNode<T> {
    const newNode: BSTNode<T> = { value, left: null, right: null, parent: null };

    if (this._root === null) {
      this._root = newNode;
      this._size++;
      return newNode;
    }

    let currentNode = this._root;
    while (currentNode) {
      const comparison = this._compare(value, currentNode.value);

      if (comparison < 0) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          newNode.parent = currentNode;
          this._size++;
          return newNode;
        }
        currentNode = currentNode.left;
      } else if (comparison > 0) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          newNode.parent = currentNode;
          this._size++;
          return newNode;
        }
        currentNode = currentNode.right;
      } else {
        // Value already exists, reject duplicates.
        return currentNode;
      }
    }
    // This part should not be reachable.
    return newNode;
  }

  /**
   * @notice Deletes a value from the BST.
   * @param value The value to delete.
   * @returns `true` if the value was deleted, `false` otherwise.
   */
  remove(value: T): boolean {
    const nodeToDelete = this.search(value);

    if (!nodeToDelete) {
      return false;
    }

    this.deleteNode(nodeToDelete);
    this._size--;
    return true;
  }

  private deleteNode(node: BSTNode<T>): void {
    if (node.left === null && node.right === null) {
      // Case 1: Node has no children (leaf)
      this.replaceNodeInParent(node, null);
    } else if (node.left === null) {
      // Case 2: Node has one child (right)
      this.replaceNodeInParent(node, node.right);
    } else if (node.right === null) {
      // Case 2: Node has one child (left)
      this.replaceNodeInParent(node, node.left);
    } else {
      // Case 3: Node has two children
      const successor = this.findMinNode(node.right);
      node.value = successor.value;
      this.deleteNode(successor);
    }
  }

  private replaceNodeInParent(node: BSTNode<T>, newNode: BSTNode<T> | null) {
    const parent = node.parent;
    if (parent === null) {
      this._root = newNode;
    } else if (node === parent.left) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    if (newNode) {
      newNode.parent = parent;
    }
  }

  /**
   * @notice Searches for a value in the BST.
   * @param value The value to search for.
   * @returns The node containing the value, or `null` if not found.
   */
  search(value: T): BSTNode<T> | null {
    let currentNode = this._root;
    while (currentNode) {
      const comparison = this._compare(value, currentNode.value);
      if (comparison === 0) {
        return currentNode;
      } else if (comparison < 0) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  /**
   * @notice Finds the minimum value in the BST.
   * @returns The node containing the minimum value, or `null` if the tree is empty.
   */
  findMin(): BSTNode<T> | null {
    if (this._root === null) {
      return null;
    }
    return this.findMinNode(this._root);
  }

  /**
   * @notice Finds the maximum value in the BST.
   * @returns The node containing the maximum value, or `null` if the tree is empty.
   */
  findMax(): BSTNode<T> | null {
    if (this._root === null) {
      return null;
    }
    return this.findMaxNode(this._root);
  }

  /**
   * @notice Finds the minimum value in a subtree.
   * @param node The root of the subtree.
   * @returns The node containing the minimum value.
   */
  findMinNode(node: BSTNode<T>): BSTNode<T> {
    let currentNode = node;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  /**
   * @notice Finds the maximum value in a subtree.
   * @param node The root of the subtree.
   * @returns The node containing the maximum value.
   */
  findMaxNode(node: BSTNode<T>): BSTNode<T> {
    let currentNode = node;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

  /**
   * @notice Performs an in-order traversal of the BST.
   * @returns An array of values in sorted order.
   */
  traversalInOrder(): T[] {
    const result: T[] = [];
    this.inOrder(this._root, result);
    return result;
  }

  private inOrder(node: BSTNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
  }

  /**
   * @notice Performs a pre-order traversal of the BST.
   * @returns An array of values in pre-order.
   */
  traversalPreOrder(): T[] {
    const result: T[] = [];
    this.preOrder(this._root, result);
    return result;
  }

  private preOrder(node: BSTNode<T> | null, result: T[]): void {
    if (node !== null) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  /**
   * @notice Performs a post-order traversal of the BST.
   * @returns An array of values in post-order.
   */
  traversalPostOrder(): T[] {
    const result: T[] = [];
    this.postOrder(this._root, result);
    return result;
  }

  private postOrder(node: BSTNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
  }

  /**
   * @notice Performs a level-order traversal of the BST.
   * @returns An array of values in level-order.
   */
  traversalLevelOrder(): T[] {
    const result: T[] = [];
    if (this._root === null) {
      return result;
    }

    const queue: BSTNode<T>[] = [this._root];
    while (queue.length > 0) {
      const node = queue.shift()!;
      result.push(node.value);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    return result;
  }

  /**
   * @notice Checks if the BST is empty.
   * @returns `true` if the tree is empty, `false` otherwise.
   */
  isEmpty(): boolean {
    return this._root === null;
  }

  /**
   * @notice Gets the height of the BST.
   * @returns The height of the tree.
   */
  getHeight(): number {
    return this.getNodeHeight(this._root);
  }

  private getNodeHeight(node: BSTNode<T> | null): number {
    if (node === null) {
      return -1;
    }
    const leftHeight = this.getNodeHeight(node.left);
    const rightHeight = this.getNodeHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * @notice Clears the BST.
   */
  clear(): void {
    this._root = null;
    this._size = 0;
  }

  [Symbol.iterator](): Generator<T, void, unknown> {
    return inOrderTraversal(this._root);
  }
  /**
   * @notice Converts the BST to a JSON representation.
   * @returns A JSON object representing the tree structure.
   */
  toJson(): string {
    return JSON.stringify(this._root, (key, value) => {
      if (key === 'parent') {
        return undefined; // Exclude parent to avoid circular references
      }
      return value;
    });
  }
}
