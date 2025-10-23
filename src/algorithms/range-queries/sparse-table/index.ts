/**
 * Range Queries Sparse Table Module
 *
 * This module provides sparse table implementations for efficient range queries.
 * Sparse tables are particularly useful for static arrays where multiple range
 * queries need to be performed with associative operations like min, max, gcd, etc.
 *
 * @module algorithms/range-queries/sparse-table
 */

export { SparseTable } from './sparseTable';
export type {
  SparseTableOperation,
  SparseTableConstructorInput,
  SparseTableQueryInput,
  SparseTableQueryOutput
} from './sparseTable';
