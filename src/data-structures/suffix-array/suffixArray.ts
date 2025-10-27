type SAEntry = { index: number; rank: number; nextRank: number };

export class SuffixArray {
  private sa: number[] = [];
  private s: string = '';

  build(s: string): void {
    this.s = s;
    const n = s.length;
    const entries: SAEntry[] = Array.from({ length: n }, (_, i) => ({ index: i, rank: s.charCodeAt(i), nextRank: i + 1 < n ? s.charCodeAt(i + 1) : -1 }));
    entries.sort((a, b) => a.rank === b.rank ? a.nextRank - b.nextRank : a.rank - b.rank);

    const ind = new Array<number>(n);
    for (let k = 4; k < 2 * n; k <<= 1) {
      let rank = 0;
      let prevRank = entries[0].rank;
      entries[0].rank = rank; ind[entries[0].index] = 0;
      for (let i = 1; i < n; i++) {
        if (entries[i].rank === prevRank && entries[i].nextRank === entries[i - 1].nextRank) {
          prevRank = entries[i].rank;
          entries[i].rank = rank;
        } else {
          prevRank = entries[i].rank;
          entries[i].rank = ++rank;
        }
        ind[entries[i].index] = i;
      }
      for (let i = 0; i < n; i++) {
        const nextIndex = entries[i].index + (k >> 1);
        entries[i].nextRank = nextIndex < n ? entries[ind[nextIndex]].rank : -1;
      }
      entries.sort((a, b) => a.rank === b.rank ? a.nextRank - b.nextRank : a.rank - b.rank);
    }
    this.sa = entries.map(e => e.index);
  }

  getArray(): number[] { return this.sa.slice(); }

  // Binary search pattern occurrences
  search(pat: string): number[] {
    const n = this.s.length; const m = pat.length;
    let l = 0, r = this.sa.length - 1; let first = -1, last = -1;
    while (l <= r) { const mid = (l + r) >> 1; const cmp = this.s.substring(this.sa[mid], Math.min(n, this.sa[mid] + m)).localeCompare(pat); if (cmp >= 0) { r = mid - 1; if (cmp === 0) first = mid; } else l = mid + 1; }
    l = 0; r = this.sa.length - 1;
    while (l <= r) { const mid = (l + r) >> 1; const cmp = this.s.substring(this.sa[mid], Math.min(n, this.sa[mid] + m)).localeCompare(pat); if (cmp <= 0) { l = mid + 1; if (cmp === 0) last = mid; } else r = mid - 1; }
    if (first === -1) return [];
    const res: number[] = [];
    for (let i = first; i <= last; i++) res.push(this.sa[i]);
    return res.sort((a,b)=>a-b);
  }
}
