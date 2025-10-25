import { BaseAlgorithm } from '../../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../../core/interfaces/IAlgorithm';
import { PerformanceMonitor } from '../../../core/utils/PerformanceMonitor';

/**
 * Type for sparse table operations
 */
export type SparseTableOperation<T> = (a: T, b: T) => T;

/**
 * Input interface for SparseTable construction
 */
export interface SparseTableConstructorInput<T> {
  /** The input array to build the sparse table from */
  array: T[];
  /** The operation to use for range queries (e.g., Math.min, Math.max) */
  operation: SparseTableOperation<T>;
}

/**
 * Input interface for SparseTable range queries
 */
export interface SparseTableQueryInput {
  /** The left index of the range (inclusive) */
  left: number;
  /** The right index of the range (inclusive) */
  right: number;
}

/**
 * Output interface for SparseTable range queries
 */
export interface SparseTableQueryOutput<T> {
  /** The result of the range query */
  result: T;
}

/**
 * Sparse Table Algorithm Implementation
 *
 * A sparse table is a data structure that allows efficient range queries on an array.
 * It precomputes answers to range queries in O(N log N) time and space, then answers
 * each query in O(1) time.
 *
 * **Time Complexity:**
 * - Construction: O(N log N)
 * - Query: O(1)
 * **Space Complexity:** O(N log N)
 *
 * Sparse tables are ideal for static arrays where the same range queries need to be
 * performed multiple times, and the operation is associative and idempotent (like min, max).
 *
 * @template T The type of elements in the array
 */
export class SparseTable<T> extends BaseAlgorithm<SparseTableConstructorInput<T>, SparseTableQueryOutput<T>> implements IAlgorithm<SparseTableConstructorInput<T>, SparseTableQueryOutput<T>> {
  private table: T[][] = [];
  private log2: number[] = [];
  private maxLog: number = 0;
  private n = 0;
  private operation!: SparseTableOperation<T>;

  /**
   * Creates a new SparseTable instance
   */
  constructor() {
    super('SparseTable', 'O(N log N)', 'O(N log N)');
  }

  /**
   * Initializes the sparse table with the given array and operation
   * @param input The construction input containing array and operation
   * @returns An empty result (construction doesn't return a value)
   */
  public execute(input: SparseTableConstructorInput<T>): SparseTableQueryOutput<T> {
    let result: SparseTableQueryOutput<T>;

    const executionTime = PerformanceMonitor.measureExecutionTime(() => {
      const { array, operation } = input;
      this.operation = operation;
      this.initializeTable(array);
      // Return a dummy result since construction doesn't have a meaningful output
      result = { result: array[0] };
    });

    // Log performance warning for large arrays (O(N log N) construction)
    if (executionTime > 100) {
      console.warn(`SparseTable construction performance warning: ${executionTime}ms for array of length ${input.array?.length || 0}`);
    }

    return result!;
  }

  /**
   * Performs a range query on the sparse table
   * @param left The left index of the range
   * @param right The right index of the range
   * @returns The result of the range query
   */
  public query(left: number, right: number): T {
    const len = right - left + 1;

    // For operations like sum where overlapping ranges cause double-counting,
    // use an iterative approach with non-overlapping ranges
    // We detect sum operations by testing if operation(a, 0) === a for simple values
    const testResult = this.operation(5, 0);
    if (testResult === 5) {
      return this.queryIterative(left, right);
    }

    // For idempotent operations (min, max), use the standard sparse table approach
    const p = this.log2[len];
    return this.operation(this.table[p][left], this.table[p][right - (1 << p) + 1]);
  }

  /**
   * Performs a range query using an alternative implementation
   * @param left The left index of the range
   * @param right The right index of the range
   * @returns The result of the range query
   */
  public queryOF(left: number, right: number): T {
    const len = right - left + 1;
    const p = this.log2[len];
    return this.operation(this.table[p][left], this.table[p][right - (1 << p) + 1]);
  }

  /**
   * Performs a range query using iterative approach
   * @param left The left index of the range
   * @param right The right index of the range
   * @returns The result of the range query
   */
  public queryIterative(left: number, right: number): T {
    let partial: T | null = null;
    for (let p = this.log2[right - left + 1]; left <= right; p = this.log2[right - left + 1]) {
      partial = partial !== null ? this.operation(partial, this.table[p][left]) : this.table[p][left];
      left += 1 << p;
    }
    return partial as T;
  }

  /**
   * Performs a recursive range query
   * @param left The left index of the range
   * @param right The right index of the range
   * @param partial The partial result accumulator
   * @returns The result of the range query
   */
  public queryRec(left: number, right: number, partial: T): T {
    if (right < left) return partial;
    const p = this.log2[right - left + 1];
    partial = this.operation(partial, this.table[p][left]);
    return this.queryRec(left + (1 << p), right, partial);
  }

  /**
   * Gets the size of the sparse table
   * @returns The number of elements in the original array
   */
  public get size(): number {
    return this.n;
  }

  /**
   * Initializes the sparse table data structure
   * @param arr The input array
   */
  private initializeTable(arr: T[]): void {
    const n = (this.n = arr.length);
    const maxLog = (this.maxLog = Math.floor(Math.log2(n)));

    this.log2 = new Array(n + 1).fill(0);
    this.precomputeLog2();

    // Initialize table with rows for each power of 2
    for (let i = 0; i < maxLog + 1; i++) {
      this.table.push(new Array(n - (1 << i) + 1).fill(null));
    }

    this.buildTable(arr);
  }

  /**
   * Precomputes the logarithm base 2 values for efficient range length calculations
   */
  private precomputeLog2(): void {
    for (let i = 2; i <= this.n; i++) {
      this.log2[i] = this.log2[i >> 1] + 1;
    }
  }

  /**
   * Builds the sparse table by computing range query results for all possible ranges
   * @param arr The input array
   */
  private buildTable(arr: T[]): void {
    const n = arr.length;

    // Initialize the base level (length 1 ranges)
    for (let i = 0; i < n; i++) {
      this.table[0][i] = arr[i];
    }

    // Build higher levels by combining smaller ranges
    for (let i = 1; i <= this.maxLog; i++) {
      for (let j = 0; j + (1 << i) <= n; j++) {
        this.table[i][j] = this.operation(this.table[i - 1][j], this.table[i - 1][j + (1 << (i - 1))]);
      }
    }
  }
}
