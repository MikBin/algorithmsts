class RopeNode {
  constructor(
    public weight: number,
    public left: RopeNode | null,
    public right: RopeNode | null,
    public str: string | null,
  ) {}
}

/**
 * A Rope is a data structure for efficiently storing and manipulating large strings.
 *
 * @complexity Time: O(1) to O(n) depending on the operation | Space: O(n) where n is the length of the string
 */
export class Rope {
  private root: RopeNode | null = null;

  /**
   * Constructs a Rope from a given string.
   *
   * @param s The string to initialize the rope with.
   * @returns A new Rope instance containing the string.
   * @complexity Time: O(1) | Space: O(1) node allocation
   */
  static fromString(s: string): Rope { const r = new Rope(); r.root = new RopeNode(s.length, null, null, s); return r; }

  /**
   * Returns the total length of the string represented by the rope.
   *
   * @returns The length of the string.
   * @complexity Time: O(n) where n is the number of nodes (due to recursive totalLength call on the right child) | Space: O(h) recursion depth where h is the tree height
   */
  length(): number { return this.root ? this.root.weight + (this.root.right ? this.totalLength(this.root.right) : 0) : 0; }
  private totalLength(n: RopeNode | null): number { if (!n) return 0; if (n.str !== null) return n.str.length; return this.totalLength(n.left) + this.totalLength(n.right); }

  /**
   * Concatenates another rope to the end of this rope.
   *
   * @param other The rope to concatenate.
   * @returns A new Rope representing the concatenated string.
   * @complexity Time: O(n) to compute length | Space: O(1) new node allocation
   */
  concat(other: Rope): Rope { const newRoot = new RopeNode(this.length(), this.root, other.root, null); const r = new Rope(); r.root = newRoot; return r; }

  /**
   * Returns the character at the specified index.
   *
   * @param i The index of the character to retrieve.
   * @returns The character at the specified index.
   * @complexity Time: O(n) where n is the number of nodes (due to totalLength computation at each step) | Space: O(h) recursion depth where h is the tree height
   */
  charAt(i: number): string { if (!this.root) throw new Error('empty'); return this._charAt(this.root, i); }
  private _charAt(n: RopeNode, i: number): string { if (n.str !== null) return n.str[i]; if (i < (n.left ? this.totalLength(n.left) : 0)) return this._charAt(n.left!, i); return this._charAt(n.right!, i - (n.left ? this.totalLength(n.left) : 0)); }

  /**
   * Converts the rope to a standard string.
   *
   * @returns The string representation of the rope.
   * @complexity Time: O(n) where n is the number of nodes | Space: O(n) for the output string plus O(h) recursion depth
   */
  toString(): string { return this._toString(this.root); }
  private _toString(n: RopeNode | null): string { if (!n) return ''; if (n.str !== null) return n.str; return this._toString(n.left) + this._toString(n.right); }

  /**
   * Returns a substring of the rope.
   *
   * @param start The starting index of the substring.
   * @param end The ending index of the substring (exclusive).
   * @returns The extracted substring.
   * @complexity Time: O(n) where n is the total string length (to convert to string and slice) | Space: O(n) for string allocation
   */
  substring(start: number, end: number): string { const s=this.toString(); return s.slice(start, end); }

  /**
   * Inserts a string at a specified index.
   *
   * @param index The index at which to insert the string.
   * @param s The string to insert.
   * @returns A new Rope containing the result of the insertion.
   * @complexity Time: O(n + m) where n is the total string length and m is the length of the inserted string | Space: O(n + m) for string allocations
   */
  insert(index: number, s: string): Rope { const current=this.toString(); const ns=current.slice(0,index)+s+current.slice(index); return Rope.fromString(ns); }
}
