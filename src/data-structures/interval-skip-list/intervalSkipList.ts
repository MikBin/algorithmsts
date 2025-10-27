type LevelNode<T> = {
  start: number;
  end: number;
  value: T;
  next: LevelNode<T> | null;
  down: LevelNode<T> | null;
};

function randomLevel(p=0.5, max=32){ let lvl=1; while(Math.random()<p && lvl<max) lvl++; return lvl; }

export class IntervalSkipList<T> {
  private heads: (LevelNode<T> | null)[] = [null];

  add(start: number, end: number, value: T): void {
    if (end < start) [start, end] = [end, start];
    const lvl = randomLevel();
    let down: LevelNode<T> | null = null;
    for (let i = 0; i < lvl; i++) {
      const node: LevelNode<T> = { start, end, value, next: null, down };
      down = node;
      if (i >= this.heads.length) this.heads.push(null);
      // insert at level i keeping sorted by start
      let prev: LevelNode<T> | null = null; let cur = this.heads[i];
      while (cur && cur.start <= start) { prev = cur; cur = cur.next; }
      if (prev) { node.next = prev.next; prev.next = node; } else { node.next = this.heads[i]; this.heads[i] = node; }
    }
  }

  update(oldStart: number, oldEnd: number, oldValue: T, newStart: number, newEnd: number, newValue: T): boolean {
    const ok = this.remove(oldStart, oldEnd, oldValue);
    this.add(newStart, newEnd, newValue);
    return ok;
  }

  remove(start: number, end: number, value: T): boolean {
    if (end < start) [start, end] = [end, start];
    let removed = false;
    for (let i = this.heads.length - 1; i >= 0; i--) {
      let prev: LevelNode<T> | null = null; let cur = this.heads[i];
      let removedThisLevel = false;
      while (cur && cur.start <= start) {
        if (cur.start === start && cur.end === end && cur.value === value) {
          // remove at this level
          if (prev) prev.next = cur.next; else this.heads[i] = cur.next;
          removed = true; removedThisLevel = true;
          break;
        }
        prev = cur; cur = cur.next;
      }
      // if not found at this level, do nothing and continue
    }
    return removed;
  }

  queryPoint(x: number): T[] {
    const res: T[] = [];
    // traverse from top level
    for (let i = this.heads.length - 1; i >= 0; i--) {
      let cur = this.heads[i];
      while (cur && cur.start <= x) { if (cur.end >= x) res.push(cur.value); cur = cur.next; }
    }
    return Array.from(new Set(res));
  }

  queryRange(x1: number, x2: number): T[] {
    if (x2 < x1) [x1, x2] = [x2, x1];
    const res: T[] = [];
    for (let i = this.heads.length - 1; i >= 0; i--) {
      let cur = this.heads[i];
      while (cur && cur.start <= x2) { if (cur.end >= x1) res.push(cur.value); cur = cur.next; }
    }
    return Array.from(new Set(res));
  }

  removeByValue(value: T): number {
    let count = 0;
    for (let i = this.heads.length - 1; i >= 0; i--) {
      let prev: LevelNode<T> | null = null; let cur = this.heads[i];
      while (cur) {
        if (cur.value === value) { count++; if (prev) prev.next = cur.next; else this.heads[i] = cur.next; cur = (prev? prev.next : this.heads[i]); continue; }
        prev = cur; cur = cur.next;
      }
    }
    return count;
  }

  splitAt(x: number, value: T): number {
    // integer semantics: [start,end] => [start,x] and [x+1,end] when start < x < end
    let splits = 0;
    const level0 = this.heads[0];
    let cur = level0;
    while (cur) {
      if (cur.value === value && cur.start < x && cur.end > x) {
        const rightStart = x + 1;
        const rightEnd = cur.end;
        cur.end = x;
        // insert new interval [rightStart,rightEnd] at level 0; higher levels are best-effort omitted for simplicity
        const node: LevelNode<T> = { start: rightStart, end: rightEnd, value, next: cur.next, down: null };
        cur.next = node;
        splits++;
      }
      cur = cur.next;
    }
    return splits;
  }

  mergeAdjacent(value: T): number {
    // merge overlapping or touching intervals of the same value at level 0; rebuild upper levels by simple re-add
    const merged: { s: number; e: number }[] = [];
    let a: LevelNode<T> | null = this.heads[0];
    // collect and sort
    const arr: { s:number; e:number }[] = [];
    while (a) { if (a.value===value) arr.push({ s:a.start, e:a.end }); a = a.next; }
    arr.sort((x,y)=>x.s-y.s);
    for (const iv of arr) {
      if (merged.length===0 || iv.s > merged[merged.length-1].e+1) merged.push({ s: iv.s, e: iv.e });
      else merged[merged.length-1].e = Math.max(merged[merged.length-1].e, iv.e);
    }
    // remove all value intervals
    this.removeByValue(value);
    // re-add merged at random levels
    for (const m of merged) this.add(m.s, m.e, value);
    return merged.length;
  }
}
