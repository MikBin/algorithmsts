export class MonotonicStack<T> {
  private data: T[] = [];
  constructor(private compare: (a: T, b: T) => number) {}
  push(x: T): void { while (this.data.length && this.compare(this.data[this.data.length-1], x) > 0) this.data.pop(); this.data.push(x); }
  pop(): T | undefined { return this.data.pop(); }
  top(): T | undefined { return this.data[this.data.length-1]; }
  isEmpty(): boolean { return this.data.length===0; }
  toArray(): T[] { return [...this.data]; }
}
