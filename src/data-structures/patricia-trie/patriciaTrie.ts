type Edge = { label: string; child: Node };
class Node {
  edges: Edge[] = [];
  declare value?: unknown;
}

/**
 * A Patricia Trie (Radix Tree) implementation for compact string-key storage.
 * Compresses paths by merging nodes with single children.
 */
export class PatriciaTrie<V = unknown> {
  private root = new Node();

  /**
   * Inserts a key-value pair into the trie.
   * If the key already exists, updates its value.
   *
   * @param key - The string key to insert.
   * @param value - The value to associate with the key.
   * @complexity Time: O(k + sibling scans) worst case | Space: O(k) (recursion depth and string allocation, where k is key length)
   */
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
        e.label = lcp;
        e.child = mid;
        mid.edges.push({ label: restLabel, child: oldChild });
        if (key.length === lcp.length) {
          mid.value = value;
        } else {
          mid.edges.push({ label: key.slice(lcp.length), child: new Node() });
          mid.edges[mid.edges.length - 1].child.value = value;
        }
        return;
      }
    }
    if (key.length === 0) {
      node.value = value;
      return;
    }
    const child = new Node();
    child.value = value;
    node.edges.push({ label: key, child });
  }

  /**
   * Retrieves the value associated with the specified key.
   *
   * @param key - The string key to find.
   * @returns The associated value, or undefined if the key is not found.
   * @complexity Time: O(k + sibling scans) worst case | Space: O(k) (recursion depth, where k is key length)
   */
  get(key: string): V | undefined {
    const n = this._findNode(this.root, key);
    return n && Object.prototype.hasOwnProperty.call(n, "value") ? (n.value as V) : undefined;
  }

  /**
   * Checks if the specified key exists in the trie.
   *
   * @param key - The string key to search for.
   * @returns True if the key is found, false otherwise.
   * @complexity Time: O(k + sibling scans) worst case | Space: O(k) (recursion depth, where k is key length)
   */
  has(key: string): boolean {
    const n = this._findNode(this.root, key);
    return !!(n && Object.prototype.hasOwnProperty.call(n, "value"));
  }

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

  private longestCommonPrefix(a: string, b: string): string {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    return a.slice(0, i);
  }

  /**
   * Serializes the trie to a JSON string.
   *
   * @returns A JSON string representation of the trie.
   * @complexity Time: O(n) | Space: O(n) (JSON string allocation)
   */
  toJson(): string {
    return JSON.stringify(this.root);
  }
}
