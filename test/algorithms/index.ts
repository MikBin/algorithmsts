/**
 * Algorithm Tests Module
 *
 * This module exports all algorithm tests for the Algorithmsts library.
 * Tests are organized by algorithm category and include unit tests,
 * integration tests, and performance benchmarks.
 *
 * @module test/algorithms
 */

// Unit tests for individual algorithms
export * from './searching/binary-search/binarySearch.test';
export * from './sorting/countingSort.test';
export * from './sorting/radixSort.test';
export * from './strings/similarities.test';
export * from './range-queries/sparse-table/sparseTable.test';
export * from './graphs/traversal/bfs.test';
export * from './graphs/traversal/dfs.test';

// Integration tests
export * from './integration/algorithmComparison.test';
export * from './integration/selectionStrategy.test';
export * from './integration/performanceBenchmark.test';

// Test fixtures and utilities
export * from './fixtures/AlgorithmTestData';
export * from './fixtures/PerformanceData';
export * from './utils/AlgorithmTestUtils';
