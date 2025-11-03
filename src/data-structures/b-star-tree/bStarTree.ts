type Comparator<K> = (a: K, b: K) => number;

class BStarNode<K, V> {
  keys: K[] = [];
  children: BStarNode<K, V>[] = [];
  values?: V[]; // only for leaves
  isLeaf: boolean;
  constructor(isLeaf: boolean) { this.isLeaf = isLeaf; if (isLeaf) this.values = []; }
}

export class BStarTree<K, V> {
  private root: BStarNode<K, V>;
  constructor(private compare: Comparator<K>, private order = 6) {
    if (order < 4) throw new Error('order must be >= 4');
    this.root = new BStarNode<K, V>(true);
  }

  get(key: K): V | undefined {
    let n = this.root;
    while (!n.isLeaf) {
      let i = 0; while (i < n.keys.length && this.compare(key, n.keys[i]) >= 0) i++;
      n = n.children[i];
    }
    const i = this.lowerBound(n.keys, key);
    if (i < n.keys.length && this.compare(n.keys[i], key) === 0) return n.values![i];
    return undefined;
  }

  set(key: K, value: V): void {
    const split = this.insertNonFull(this.root, key, value);
    if (split) {
      const [k, right] = split;
      const newRoot = new BStarNode<K, V>(false);
      newRoot.keys = [k];
      newRoot.children = [this.root, right];
      this.root = newRoot;
    }
  }

  private lowerBound(arr: K[], key: K): number { let l=0,r=arr.length; while(l<r){ const m=(l+r)>>1; if (this.compare(arr[m],key)<0) l=m+1; else r=m; } return l; }

  private maxKeys(): number { return this.order - 1; }
  private minKeys(): number { return Math.ceil((this.order - 1) * 2 / 3); }

  private insertNonFull(node: BStarNode<K, V>, key: K, value: V): [K, BStarNode<K, V>] | null {
    if (node.isLeaf) {
      const i = this.lowerBound(node.keys, key);
      if (i < node.keys.length && this.compare(node.keys[i], key) === 0) { node.values![i] = value; return null; }
      node.keys.splice(i, 0, key);
      node.values!.splice(i, 0, value);
      if (node.keys.length <= this.maxKeys()) return null;
      return this.splitLeaf(node);
    } else {
      let i = 0; while (i < node.keys.length && this.compare(key, node.keys[i]) >= 0) i++;
      // try redistribution with siblings to maintain B* properties
      const child = node.children[i];
      const leftSib = i > 0 ? node.children[i-1] : null;
      const rightSib = i+1 < node.children.length ? node.children[i+1] : null;

      // If child is about to overflow and a sibling exists with room, redistribute
      if (child.keys.length >= this.maxKeys()) {
        if (leftSib && leftSib.keys.length < this.maxKeys()) {
          // move separator down to child, move child's first up to parent separator, move from left sibling to parent
          leftSib.keys.push(node.keys[i-1]);
          if (!leftSib.isLeaf) leftSib.children.push(child.children[0]);
          node.keys[i-1] = child.keys.shift()!;
          if (child.isLeaf) child.values!.shift();
        } else if (rightSib && rightSib.keys.length < this.maxKeys()) {
          // symmetric to right
          rightSib.keys.unshift(node.keys[i]);
          if (!rightSib.isLeaf) rightSib.children.unshift(child.children.pop()!);
          node.keys[i] = child.keys.pop()!;
          if (child.isLeaf) child.values!.pop();
        }
      }

      const split = this.insertNonFull(child, key, value);
      if (!split) return null;
      const [midKey, newRight] = split;
      node.keys.splice(i, 0, midKey);
      node.children.splice(i+1, 0, newRight);
      if (node.keys.length <= this.maxKeys()) return null;
      return this.splitInternal(node);
    }
  }

  private splitLeaf(node: BStarNode<K, V>): [K, BStarNode<K, V>] {
    const right = new BStarNode<K, V>(true);
    const total = node.keys.length;
    const leftCount = Math.ceil((2 * total) / 3);
    right.keys = node.keys.splice(leftCount);
    right.values = node.values!.splice(leftCount);
    const upKey = right.keys[0];
    return [upKey, right];
  }

  private splitInternal(node: BStarNode<K, V>): [K, BStarNode<K, V>] {
    const right = new BStarNode<K, V>(false);
    const total = node.keys.length;
    const leftCount = Math.ceil((2 * total) / 3) - 1; // ensure one key goes up
    const upKey = node.keys[leftCount];
    right.keys = node.keys.splice(leftCount + 1);
    right.children = node.children.splice(leftCount + 1);
    node.keys = node.keys.slice(0, leftCount);
    return [upKey, right];
  }

  toJson(): string {
    return JSON.stringify(this.root);
  }
}
