type State = {
  next: Map<string, number>;
  link: number;
  len: number;
};

/**
 * A Suffix Automaton (Directed Acyclic Word Graph) is a powerful data structure that represents
 * all substrings of a given string in a highly compressed form. It allows for linear time
 * construction and efficient solutions to various string processing problems.
 *
 * @complexity Time: O(n) for construction over alphabet of constant size | Space: O(n) memory allocation
 */
export class SuffixAutomaton {
  private st: State[] = [{ next: new Map(), link: -1, len: 0 }];
  private last = 0;

  /**
   * Adds a single character to the automaton.
   *
   * @param ch The character to add.
   * @complexity Time: O(1) amortized, but bounded by alphabet size | Space: O(1) expected per character
   */
  addChar(ch: string): void {
    let cur = this.st.length; this.st.push({ next: new Map(), link: 0, len: this.st[this.last].len + 1 });
    let p = this.last;
    while (p !== -1 && !this.st[p].next.has(ch)) { this.st[p].next.set(ch, cur); p = this.st[p].link; }
    if (p === -1) { this.st[cur].link = 0; }
    else {
      const q = this.st[p].next.get(ch)!;
      if (this.st[p].len + 1 === this.st[q].len) { this.st[cur].link = q; }
      else {
        const clone = this.st.length; this.st.push({ next: new Map(this.st[q].next), link: this.st[q].link, len: this.st[p].len + 1 });
        while (p !== -1 && this.st[p].next.get(ch) === q) { this.st[p].next.set(ch, clone); p = this.st[p].link; }
        this.st[q].link = this.st[cur].link = clone;
      }
    }
    this.last = cur;
  }

  /**
   * Builds the suffix automaton for a given string.
   *
   * @param s The string to build the automaton for.
   * @complexity Time: O(n) where n is the length of the string | Space: O(n) memory allocation for states
   */
  build(s: string): void { for (const ch of s) this.addChar(ch); }

  /**
   * Checks if a substring is present in the automaton (i.e., if it was a substring of the original string).
   *
   * @param sub The substring to search for.
   * @returns `true` if the substring is found, `false` otherwise.
   * @complexity Time: O(m) where m is the length of the substring | Space: O(1)
   */
  contains(sub: string): boolean { let v = 0; for (const ch of sub) { const to = this.st[v].next.get(ch); if (to === undefined) return false; v = to; } return true; }

  /**
   * Resets the automaton to its initial empty state.
   *
   * @complexity Time: O(1) | Space: O(1)
   */
  reset(): void { this.st = [{ next: new Map(), link: -1, len: 0 }]; this.last = 0; }
}
