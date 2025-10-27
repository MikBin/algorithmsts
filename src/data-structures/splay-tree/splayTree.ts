import { BaseDataStructure } from '../../core/abstracts/BaseDataStructure';
import { IIterator } from '../../core/interfaces/IIterator';

class Node<T> { constructor(public key: T, public left: Node<T>|null=null, public right: Node<T>|null=null){} }

class InOrderIterator<T> implements IIterator<T> {
  private stack: Array<{ node: Node<T> | null; visited: boolean }> = [];
  private cur: T | null = null;
  constructor(root: Node<T> | null) { this.stack.push({ node: root, visited: false }); }
  private step(): boolean { while (this.stack.length) { const { node, visited } = this.stack.pop()!; if (!node) continue; if (visited) { this.cur = node.key; return true; } this.stack.push({ node: node.right, visited: false }); this.stack.push({ node, visited: true }); this.stack.push({ node: node.left, visited: false }); } return false; }
  hasNext(): boolean { if (this.cur!==null) return true; return this.step(); }
  next(): T { if (!this.hasNext()) throw new Error('No more elements'); const v=this.cur as T; this.cur=null; return v; }
  current(): T { if (this.cur===null) throw new Error('No current element'); return this.cur as T; }
}

export class SplayTree<T> extends BaseDataStructure<T> {
  private root: Node<T> | null = null;
  constructor(private compare: (a: T, b: T) => number) { super(); }

  private rotateRight(y: Node<T>): Node<T> { const x = y.left!; y.left = x.right; x.right = y; return x; }
  private rotateLeft(x: Node<T>): Node<T> { const y = x.right!; x.right = y.left; y.left = x; return y; }

  private splay(root: Node<T> | null, key: T): Node<T> | null {
    if (!root) return null;
    const cmp = this.compare(key, root.key);
    if (cmp < 0) {
      if (!root.left) return root;
      const cmp2 = this.compare(key, root.left.key);
      if (cmp2 < 0) { root.left.left = this.splay(root.left.left, key); root = this.rotateRight(root); }
      else if (cmp2 > 0) { root.left.right = this.splay(root.left.right, key); if (root.left.right) root.left = this.rotateLeft(root.left); }
      return root.left ? this.rotateRight(root) : root;
    } else if (cmp > 0) {
      if (!root.right) return root;
      const cmp2 = this.compare(key, root.right.key);
      if (cmp2 > 0) { root.right.right = this.splay(root.right.right, key); root = this.rotateLeft(root); }
      else if (cmp2 < 0) { root.right.left = this.splay(root.right.left, key); if (root.right.left) root.right = this.rotateRight(root.right); }
      return root.right ? this.rotateLeft(root) : root;
    } else {
      return root;
    }
  }

  add(key: T): void {
    if (!this.root) { this.root = new Node(key); this._size++; return; }
    this.root = this.splay(this.root, key);
    const cmp = this.compare(key, this.root!.key);
    if (cmp === 0) return; // no duplicates
    const n = new Node(key);
    if (cmp < 0) { n.right = this.root; n.left = this.root!.left; this.root!.left = null; }
    else { n.left = this.root; n.right = this.root!.right; this.root!.right = null; }
    this.root = n; this._size++;
  }

  contains(key: T): boolean { this.root = this.splay(this.root, key); return !!this.root && this.compare(this.root.key, key) === 0; }

  remove(key: T): boolean {
    if (!this.root) return false;
    this.root = this.splay(this.root, key);
    if (!this.root || this.compare(this.root.key, key) !== 0) return false;
    if (!this.root.left) { this.root = this.root.right; }
    else {
      const right = this.root!.right;
      this.root = this.splay(this.root!.left, key);
      if (this.root) this.root.right = right;
    }
    this._size--; return true;
  }

  clear(): void { this.root = null; this._size = 0; }
  iterator(): IIterator<T> { return new InOrderIterator(this.root); }
  toArray(): T[] { const res: T[] = []; const it = this.iterator(); while (it.hasNext()) res.push(it.next()); return res; }
}
