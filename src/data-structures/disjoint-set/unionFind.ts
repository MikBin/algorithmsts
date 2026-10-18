/**
 * Represents a Disjoint-Set (Union-Find) data structure using path compression and union by size.
 */
export class UnionFind {
  private parent: number[];
  private sizeArr: number[];
  private _count: number;

  /**
   * Initializes a new Union-Find structure with the specified number of isolated elements.
   *
   * @param n The number of elements.
   * @complexity Time: O(n) | Space: O(n)
   */
  constructor(n: number) { if (n<=0) throw new Error('n must be > 0'); this.parent = Array.from({length:n}, (_,i)=>i); this.sizeArr = new Array(n).fill(1); this._count = n; }

  /**
   * Finds the representative root of the set containing element x.
   * Applies path compression to flatten the structure.
   *
   * @param x The element to find.
   * @returns The representative root of the set containing x.
   * @complexity Time: O(α(n)) amortized | Space: O(α(n)) (recursion depth)
   */
  find(x: number): number { if (this.parent[x]!==x) this.parent[x]=this.find(this.parent[x]); return this.parent[x]; }

  /**
   * Unions the sets containing elements a and b using union by size.
   *
   * @param a The first element.
   * @param b The second element.
   * @returns True if a merge occurred, false if they are already in the same set.
   * @complexity Time: O(α(n)) amortized | Space: O(α(n)) (recursion depth)
   */
  union(a: number, b: number): boolean { let ra=this.find(a), rb=this.find(b); if (ra===rb) return false; if (this.sizeArr[ra]<this.sizeArr[rb]) [ra,rb]=[rb,ra]; this.parent[rb]=ra; this.sizeArr[ra]+=this.sizeArr[rb]; this._count--; return true; }

  /**
   * Checks if elements a and b are in the same set.
   *
   * @param a The first element.
   * @param b The second element.
   * @returns True if connected, false otherwise.
   * @complexity Time: O(α(n)) amortized | Space: O(α(n)) (recursion depth)
   */
  connected(a: number, b: number): boolean { return this.find(a)===this.find(b); }

  /**
   * Returns the current number of disjoint sets.
   *
   * @returns The number of components.
   * @complexity Time: O(1) | Space: O(1)
   */
  setCount(): number { return this._count; }

  /**
   * Serializes the union-find state to a JSON string.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify({
      parent: this.parent,
      sizeArr: this.sizeArr,
      count: this._count,
    });
  }
}
