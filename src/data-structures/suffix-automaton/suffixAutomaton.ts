type State = {
  next: Map<string, number>;
  link: number;
  len: number;
};

export class SuffixAutomaton {
  private st: State[] = [{ next: new Map(), link: -1, len: 0 }];
  private last = 0;

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

  build(s: string): void { for (const ch of s) this.addChar(ch); }

  contains(sub: string): boolean { let v = 0; for (const ch of sub) { const to = this.st[v].next.get(ch); if (to === undefined) return false; v = to; } return true; }

  reset(): void { this.st = [{ next: new Map(), link: -1, len: 0 }]; this.last = 0; }
}
