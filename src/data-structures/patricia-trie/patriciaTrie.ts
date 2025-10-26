type Edge = { label: string; child: Node };
class Node {
  edges: Edge[] = [];
  value?: unknown;
}

export class PatriciaTrie<V = unknown> {
  private root = new Node();

  set(key: string, value: V): void {
    this._set(this.root, key, value);
  }

  private _set(node: Node, key: string, value: V): void {
    for (let i = 0; i < node.edges.length; i++) {
      const e = node.edges[i];
      const lcp = this.longestCommonPrefix(key, e.label);
      if (lcp.length === 0) continue;
      if (lcp.length === e.label.length) {
        // go down
        this._set(e.child, key.slice(lcp.length), value);
        return;
      } else {
        // split edge
        const restLabel = e.label.slice(lcp.length);
        const oldChild = e.child;
        const mid = new Node();
        e.label = lcp; e.child = mid;
        mid.edges.push({ label: restLabel, child: oldChild });
        if (key.length === lcp.length) { mid.value = value; }
        else { mid.edges.push({ label: key.slice(lcp.length), child: new Node() }); mid.edges[mid.edges.length-1].child.value = value as any; }
        return;
      }
    }
    if (key.length === 0) { node.value = value; return; }
    const child = new Node(); child.value = value as any; node.edges.push({ label: key, child });
  }

  get(key: string): V | undefined {
    const n = this._findNode(this.root, key);
    return (n && n.value !== undefined) ? (n.value as V) : undefined;
  }

  has(key: string): boolean { return this.get(key) !== undefined; }

  private _findNode(node: Node, key: string): Node | null {
    if (key.length === 0) return node;
    for (const e of node.edges) {
      if (key.startsWith(e.label)) return this._findNode(e.child, key.slice(e.label.length));
      if (e.label.startsWith(key)) return null; // no exact match below
      const lcp = this.longestCommonPrefix(key, e.label);
      if (lcp.length > 0) return null;
    }
    return null;
  }

  private longestCommonPrefix(a: string, b: string): string { let i=0; while (i<a.length && i<b.length && a[i]===b[i]) i++; return a.slice(0,i); }
}
