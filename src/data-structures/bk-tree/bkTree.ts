/**
 * @title BK-Tree
 * @notice A tree data structure specifically designed for discrete metric spaces.
 * @dev Often used for spell checking or finding similar strings based on Levenshtein distance.
 * @template T The type of elements stored in the tree.
 */
export class BKTree<T> {
  private root: Node<T> | null = null;

  /**
   * @notice Creates a new BK-Tree.
   * @param distance The distance function forming the metric space. Must satisfy metric space properties (identity, symmetry, triangle inequality).
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(private distance: (a: T, b: T) => number) {}

  /**
   * @notice Adds a new value to the tree.
   * @param value The value to add.
   * @complexity Time: O(h) average | Space: O(h) (recursion depth via _add) where h is the tree height.
   */
  add(value: T): void { if (!this.root) { this.root = new Node(value); return; } this._add(this.root, value); }
  private _add(n: Node<T>, v: T): void { const d = this.distance(v, n.value); const child = n.children.get(d); if (child) this._add(child, v); else n.children.set(d, new Node(v)); }

  /**
   * @notice Finds all values within a given distance from a query value.
   * @param value The center query value.
   * @param radius The maximum distance (inclusive) to search.
   * @returns An array of results with values and their corresponding distances.
   * @complexity Time: O(n) worst case; typically far below n thanks to triangle-inequality pruning | Space: O(h) (recursion depth via _query) where n is the total number of nodes and h is the height.
   */
  query(value: T, radius: number): { value: T; distance: number }[] { const res: { value: T; distance: number }[] = []; this._query(this.root, value, radius, res); return res; }
  private _query(n: Node<T> | null, v: T, r: number, out: { value: T; distance: number }[]) { if (!n) return; const d = this.distance(v, n.value); if (d <= r) out.push({ value: n.value, distance: d }); for (let dist = d - r; dist <= d + r; dist++) { const c = n.children.get(dist); if (c) this._query(c, v, r, out); } }

  /**
   * @notice Serializes the tree into a JSON string.
   * @returns A string representing the JSON structure of the tree.
   * @complexity Time: O(n) | Space: O(n) (recursion depth) where n is the number of nodes.
   */
  toJson(): string {
    return JSON.stringify(this.root, (key, value) => {
      if (value instanceof Map) {
        return {
          dataType: 'Map',
          value: Array.from(value.entries()),
        };
      }
      return value;
    });
  }
}
class Node<T> { children = new Map<number, Node<T>>(); constructor(public value: T) {} }
