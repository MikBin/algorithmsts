export class MonotonicQueue<T> {
  private data: T[] = [];
  constructor(private compare: (a: T, b: T) => number) {}
  push(x: T): void { while (this.data.length && this.compare(this.data[this.data.length-1], x) > 0) this.data.pop(); this.data.push(x); }
  pop(x: T): void { if (this.data.length && this.compare(this.data[0], x) === 0) this.data.shift(); }
  front(): T | undefined { return this.data[0]; }
  size(): number { return this.data.length; }
  toArray(): T[] { return [...this.data]; }

  toJson(): string {
    return JSON.stringify(this.data);
  }
}
