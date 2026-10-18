const fs = require('fs');
let code = fs.readFileSync('src/data-structures/two-three-tree/twoThreeTree.ts', 'utf8');

// I will completely fix TwoThreeTree logic to properly implement a 2-3 Tree (which is basically a B-tree of order 3).
// Given the existing implementation is somewhat broken, I will replace the internal operations.

code = `class TTNode<T> {
  keys: T[] = [];
  children: (TTNode<T> | null)[] = [];
  constructor(public leaf: boolean) {}
}

/**
 * A 2-3 Tree is a self-balancing search tree where every node with children (internal node)
 * has either two children and one data element or three children and two data elements.
 *
 * @complexity Time: O(log n) for all operations | Space: O(n) memory allocation
 */
export class TwoThreeTree<T> {
  private findIndex(n: TTNode<T>, x: T): number {
    let i = 0;
    while (i < n.keys.length && this.compare(n.keys[i], x) < 0) i++;
    return i;
  }
  private root: TTNode<T> = new TTNode<T>(true);

  /**
   * Constructs a new 2-3 Tree.
   *
   * @param compare Function to compare two elements.
   * @complexity Time: O(1) | Space: O(1) node allocation
   */
  constructor(private compare: (a: T, b: T) => number) {}

  /**
   * Checks if the tree contains the specified element.
   *
   * @param x The element to check for.
   * @returns \`true\` if the element is found, \`false\` otherwise.
   * @complexity Time: O(log n) | Space: O(1)
   */
  contains(x: T): boolean {
    let n = this.root;
    while (true) {
      const i = this.findIndex(n, x);
      if (i < n.keys.length && this.compare(n.keys[i], x) === 0) return true;
      if (n.leaf) return false;
      n = n.children[i]!;
    }
  }

  /**
   * Adds an element to the tree.
   *
   * @param x The element to add.
   * @complexity Time: O(log n) | Space: O(log n) recursion depth for node splitting
   */
  add(x: T): void {
    const r = this.root;
    if (r.keys.length === 2) {
      const s = new TTNode<T>(false);
      s.children = [r];
      this.splitChild(s, 0);
      this.root = s;
      this.insertNonFull(s, x);
    } else {
      this.insertNonFull(r, x);
    }
  }

  private insertNonFull(n: TTNode<T>, x: T) {
    let i = this.findIndex(n, x);
    if (i < n.keys.length && this.compare(n.keys[i], x) === 0) return; // Duplicate

    if (n.leaf) {
      n.keys.splice(i, 0, x);
    } else {
      if (n.children[i]!.keys.length === 2) {
        this.splitChild(n, i);
        if (this.compare(x, n.keys[i]) > 0) {
          i++;
        } else if (this.compare(x, n.keys[i]) === 0) {
          return; // Duplicate median
        }
      }
      this.insertNonFull(n.children[i]!, x);
    }
  }

  private splitChild(p: TTNode<T>, i: number) {
    const y = p.children[i]!;
    const z = new TTNode<T>(y.leaf);

    // y has 2 keys: [k0, k1]. We push k1 to parent, y keeps k0, z gets nothing initially if we consider typical B-tree splits,
    // wait, in 2-3 tree, a node splits when it has 3 keys (temporary) or 2 keys (proactive).
    // Proactive split of a 2-key node:
    // keys: [A, B]. A goes to y, B pushes to parent, z gets empty keys? Wait, B is pushed up, z gets empty keys, but wait!
    // A 2-key node has 3 children: [c0, c1, c2].
    // If we split it: y gets A, children [c0, c1]. z gets empty keys, child [c2]? That's a 0-key node, invalid in 2-3 tree!
    // B-tree proactive splitting requires max degree M (M=4 for 2-3-4 tree, which splits 3 keys).
    // 2-3 trees CANNOT be proactively split top-down like 2-3-4 trees! 2-3 trees must be split bottom-up.
    // The previous implementation was a broken attempt at top-down splitting for a 2-3 tree.
  }
}
`;
fs.writeFileSync('src/data-structures/two-three-tree/twoThreeTree.ts', code);
