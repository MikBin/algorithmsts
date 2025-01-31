export type STOperation<T> = (a: T, b: T) => T;

export class SparseTable<T> {
  private table: T[][] = [];
  private log2: number[] = [];
  private maxLog: number = 0;
  private n = 0;

  constructor(
    private arr: T[],
    private op: STOperation<T>,
  ) {
    this.initializeTable();
  }

  private initializeTable(): void {
    const n = (this.n = this.arr.length);
    const maxLog = (this.maxLog = Math.floor(Math.log2(n)));

    this.log2 = new Array(n + 1).fill(0);
    this.precomputeLog2();

    //row i length = n - 2**i +1
    for (let i = 0; i < maxLog + 1; i++) {
      this.table.push(new Array(n - (1 << i) + 1).fill(null));
    }

    this.buildTable();
  }

  private precomputeLog2(): number[] {
    for (let i = 2; i <= this.arr.length; i++) {
      this.log2[i] = this.log2[i >> 1] + 1;
    }
    return this.log2;
  }

  private buildTable(): void {
    const n = this.arr.length;
    // Initialize the table with the input array
    for (let i = 0; i < n; i++) {
      this.table[0][i] = this.arr[i];
    }

    // Build the sparse table
    for (let i = 1; i <= this.maxLog; i++) {
      for (let j = 0; j + (1 << i) <= n; j++) {
        this.table[i][j] = this.op(this.table[i - 1][j], this.table[i - 1][j + (1 << (i - 1))]);
      }
    }
  }

  queryOF(left: number, right: number): T {
    const len = right - left + 1;
    const p = this.log2[len];
    return this.op(this.table[p][left], this.table[p][right - (1 << p) + 1]);
  }

  query(left: number, right: number): T {
    let partial: T | null = null;
    for (let p = this.log2[right - left + 1]; left <= right; p = this.log2[right - left + 1]) {
      partial = partial !== null ? this.op(partial, this.table[p][left]) : this.table[p][left];
      left += 1 << p;
    }
    return partial as T;
  }

  queryRec(left: number, right: number, partial: T): T {
    if (right < left) return partial;
    const p = this.log2[right - left + 1];
    partial = this.op(partial, this.table[p][left]);
    return this.queryRec(left + (1 << p), right, partial);
  }

  get size(): number {
    return this.arr.length;
  }
}
