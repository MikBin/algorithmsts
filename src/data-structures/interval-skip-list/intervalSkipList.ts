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
}
