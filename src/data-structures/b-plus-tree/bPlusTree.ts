type KeyComparator<K> = (a: K, b: K) => number;

class BPlusNode<K, V> {
  keys: K[] = [];
  isLeaf: boolean;
  children: BPlusNode<K, V>[] = [];
  values?: V[]; // only for leaves
  next?: BPlusNode<K, V> | null; // leaf-level linked list
  constructor(isLeaf: boolean) {
    this.isLeaf = isLeaf;
    if (isLeaf) this.values = [];
    this.next = null;
  }
}

export class BPlusTree<K, V> {
  private root: BPlusNode<K, V>;
  constructor(private compare: KeyComparator<K>, private order = 4) {
    if (order < 3) throw new Error('order must be >= 3');
    this.root = new BPlusNode<K, V>(true);
  }

  get(key: K): V | undefined {
    let node = this.root;
    while (!node.isLeaf) {
      let i = 0;
      while (i < node.keys.length && this.compare(key, node.keys[i]) >= 0) i++;
      node = node.children[i];
    }
    const i = this.lowerBound(node.keys, key);
    if (i < node.keys.length && this.compare(node.keys[i], key) === 0) return node.values![i];
    return undefined;
  }

  set(key: K, value: V): void {
    const split = this._insert(this.root, key, value);
    if (split) {
      const [middleKey, newNode] = split;
      const newRoot = new BPlusNode<K, V>(false);
      newRoot.keys = [middleKey];
      newRoot.children = [this.root, newNode];
      this.root = newRoot;
    }
  }

  toArray(): Array<{ key: K; value: V }> {
    // iterate leaves
    let n = this.root;
    while (!n.isLeaf) n = n.children[0];
    const out: Array<{ key: K; value: V }> = [];
    while (n) {
      for (let i = 0; i < n.keys.length; i++) out.push({ key: n.keys[i], value: n.values![i] });
      n = n.next ?? null;
    }
    return out;
  }

  private lowerBound(arr: K[], key: K): number {
    let l = 0, r = arr.length;
    while (l < r) { const m = (l + r) >> 1; if (this.compare(arr[m], key) < 0) l = m + 1; else r = m; }
    return l;
  }

  private _insert(node: BPlusNode<K, V>, key: K, value: V): [K, BPlusNode<K, V>] | null {
    if (node.isLeaf) {
      const i = this.lowerBound(node.keys, key);
      if (i < node.keys.length && this.compare(node.keys[i], key) === 0) { node.values![i] = value; return null; }
      node.keys.splice(i, 0, key);
      node.values!.splice(i, 0, value);
      if (node.keys.length <= this.order - 1) return null; // within capacity
      // split leaf
      const mid = Math.ceil(node.keys.length / 2);
      const right = new BPlusNode<K, V>(true);
      right.keys = node.keys.splice(mid);
      right.values = node.values!.splice(mid);
      right.next = node.next; node.next = right;
      const middleKey = right.keys[0];
      return [middleKey, right];
    } else {
      let i = 0; while (i < node.keys.length && this.compare(key, node.keys[i]) >= 0) i++;
      const split = this._insert(node.children[i], key, value);
      if (!split) return null;
      const [middleKey, newChild] = split;
      node.keys.splice(i, 0, middleKey);
      node.children.splice(i + 1, 0, newChild);
      if (node.keys.length <= this.order - 1) return null;
      // split internal
      const mid = Math.ceil(node.keys.length / 2) - 1; // middle key to push up
      const upKey = node.keys[mid];
      const right = new BPlusNode<K, V>(false);
      right.keys = node.keys.splice(mid + 1);
      const movedChildren = node.children.splice(mid + 1);
      right.children = movedChildren;
      // node retains keys [0..mid-1]
      node.keys = node.keys.slice(0, mid);
      return [upKey, right];
    }
  }
}
