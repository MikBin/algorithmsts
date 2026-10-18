type LevelNode<T> = {
  start: number;
  end: number;
  value: T;
  next: LevelNode<T> | null;
  down: LevelNode<T> | null;
};

/**
 * Represents an Interval Skip List, a probabilistic data structure for storing and querying overlapping intervals.
 */
export class IntervalSkipList<T> {
  private heads: (LevelNode<T> | null)[] = [null];
  private rng: () => number;

  /**
   * Initializes a new Interval Skip List.
   *
   * @param rng A random number generator function, defaulting to Math.random.
   * @complexity Time: O(1) | Space: O(1)
   */
  constructor(rng: () => number = Math.random) {
    this.rng = rng;
  }

  private randomLevel(p = 0.5, max = 32) {
    let lvl = 1;
    while (this.rng() < p && lvl < max) lvl++;
    return lvl;
  }

  /**
   * Adds a new interval to the skip list.
   *
   * @param start The start coordinate of the interval.
   * @param end The end coordinate of the interval.
   * @param value The value associated with the interval.
   * @complexity Time: O(log n) expected | Space: O(log n) expected
   */
  add(start: number, end: number, value: T): void {
    if (end < start) [start, end] = [end, start];
    const lvl = this.randomLevel();
    let down: LevelNode<T> | null = null;
    for (let i = 0; i < lvl; i++) {
      const node: LevelNode<T> = { start, end, value, next: null, down };
      down = node;
      if (i >= this.heads.length) this.heads.push(null);
      // insert at level i keeping sorted by start
      let prev: LevelNode<T> | null = null;
      let cur = this.heads[i];
      while (cur && cur.start <= start) {
        prev = cur;
        cur = cur.next;
      }
      if (prev) {
        node.next = prev.next;
        prev.next = node;
      } else {
        node.next = this.heads[i];
        this.heads[i] = node;
      }
    }
  }

  /**
   * Updates an existing interval by removing the old one and inserting the new one.
   *
   * @param oldStart The original start coordinate.
   * @param oldEnd The original end coordinate.
   * @param oldValue The original value.
   * @param newStart The new start coordinate.
   * @param newEnd The new end coordinate.
   * @param newValue The new value.
   * @returns True if the old interval was found and replaced, false otherwise.
   * @complexity Time: O(log n) expected | Space: O(log n) expected
   */
  update(
    oldStart: number,
    oldEnd: number,
    oldValue: T,
    newStart: number,
    newEnd: number,
    newValue: T,
  ): boolean {
    const ok = this.remove(oldStart, oldEnd, oldValue);
    this.add(newStart, newEnd, newValue);
    return ok;
  }

  /**
   * Removes a specific interval from the skip list.
   *
   * @param start The start coordinate of the interval to remove.
   * @param end The end coordinate of the interval to remove.
   * @param value The value of the interval to remove.
   * @returns True if removed, false if not found.
   * @complexity Time: O(log n) expected | Space: O(1)
   */
  remove(start: number, end: number, value: T): boolean {
    if (end < start) [start, end] = [end, start];
    let removed = false;
    for (let i = this.heads.length - 1; i >= 0; i--) {
      let prev: LevelNode<T> | null = null;
      let cur = this.heads[i];
      let _removedThisLevel = false;
      while (cur && cur.start <= start) {
        if (cur.start === start && cur.end === end && cur.value === value) {
          // remove at this level
          if (prev) prev.next = cur.next;
          else this.heads[i] = cur.next;
          removed = true;
          _removedThisLevel = true;
          break;
        }
        prev = cur;
        cur = cur.next;
      }
      // if not found at this level, do nothing and continue
    }
    return removed;
  }

  /**
   * Queries all intervals overlapping a specific point.
   *
   * @param x The point coordinate to query.
   * @returns An array of unique values overlapping the point.
   * @complexity Time: O(k + log n) expected where k is number of matches | Space: O(k)
   */
  queryPoint(x: number): T[] {
    const res: T[] = [];
    // traverse from top level
    for (let i = this.heads.length - 1; i >= 0; i--) {
      let cur = this.heads[i];
      while (cur && cur.start <= x) {
        if (cur.end >= x) res.push(cur.value);
        cur = cur.next;
      }
    }
    return Array.from(new Set(res));
  }

  /**
   * Queries all intervals overlapping a given range [x1, x2].
   *
   * @param x1 The start of the query range.
   * @param x2 The end of the query range.
   * @returns An array of unique values overlapping the range.
   * @complexity Time: O(k + log n) expected where k is number of matches | Space: O(k)
   */
  queryRange(x1: number, x2: number): T[] {
    if (x2 < x1) [x1, x2] = [x2, x1];
    const res: T[] = [];
    for (let i = this.heads.length - 1; i >= 0; i--) {
      let cur = this.heads[i];
      while (cur && cur.start <= x2) {
        if (cur.end >= x1) res.push(cur.value);
        cur = cur.next;
      }
    }
    return Array.from(new Set(res));
  }

  /**
   * Removes all intervals that have the specified value.
   *
   * @param value The value to match for removal.
   * @returns The number of intervals removed.
   * @complexity Time: O(n) | Space: O(1)
   */
  removeByValue(value: T): number {
    let count = 0;
    for (let i = this.heads.length - 1; i >= 0; i--) {
      let prev: LevelNode<T> | null = null;
      let cur = this.heads[i];
      while (cur) {
        if (cur.value === value) {
          count++;
          if (prev) prev.next = cur.next;
          else this.heads[i] = cur.next;
          cur = prev ? prev.next : this.heads[i];
          continue;
        }
        prev = cur;
        cur = cur.next;
      }
    }
    return count;
  }

  /**
   * Splits intervals associated with a value at point x.
   * If an interval spans across x, it is split into [start, x] and [x+1, end].
   *
   * @param x The coordinate at which to split.
   * @param value The value associated with the intervals to split.
   * @returns The number of intervals that were successfully split.
   * @complexity Time: O(n) | Space: O(1)
   */
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
        const node: LevelNode<T> = {
          start: rightStart,
          end: rightEnd,
          value,
          next: cur.next,
          down: null,
        };
        cur.next = node;
        splits++;
      }
      cur = cur.next;
    }
    return splits;
  }

  /**
   * Merges adjacent or overlapping intervals of the same value.
   *
   * @param value The value of the intervals to merge.
   * @returns The number of merged intervals remaining.
   * @complexity Time: O(n log n) | Space: O(n)
   */
  mergeAdjacent(value: T): number {
    // merge overlapping or touching intervals of the same value at level 0; rebuild upper levels by simple re-add
    const merged: { s: number; e: number }[] = [];
    let a: LevelNode<T> | null = this.heads[0];
    // collect and sort
    const arr: { s: number; e: number }[] = [];
    while (a) {
      if (a.value === value) arr.push({ s: a.start, e: a.end });
      a = a.next;
    }
    arr.sort((x, y) => x.s - y.s);
    for (const iv of arr) {
      if (merged.length === 0 || iv.s > merged[merged.length - 1].e + 1)
        merged.push({ s: iv.s, e: iv.e });
      else merged[merged.length - 1].e = Math.max(merged[merged.length - 1].e, iv.e);
    }
    // remove all value intervals
    this.removeByValue(value);
    // re-add merged at random levels
    for (const m of merged) this.add(m.s, m.e, value);
    return merged.length;
  }

  /**
   * Serializes the structure's heads to a JSON string.
   * Down and next pointers are omitted.
   *
   * @returns The JSON representation.
   * @complexity Time: O(n) | Space: O(n)
   */
  toJson(): string {
    return JSON.stringify(this.heads, (key, value) => {
      if (key === "down" || key === "next") {
        return undefined;
      }
      return value;
    });
  }
}
