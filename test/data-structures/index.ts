/**
 * Data Structures Test Suite Index
 *
 * This file exports all data structure tests for easy importing and running
 */

// Individual structure tests
export { } from './linked-list/linkedList.test';
export { } from './skip-list/skipList.test';
export { } from './segment-tree/segmentTree.test';
export { } from './trie/trie.test';
export { } from './suffix-tree/suffixTree.test';
export { } from './suffix-tree/comprehensive.test';
export { } from './suffix-tree/index.test';

// Integration tests
export { } from './integration/structureIntegration.test';
export { } from './integration/iteratorIntegration.test';
export { } from './integration/performanceIntegration.test';

// Test utilities and fixtures
export { StructureTestData } from './fixtures/StructureTestData';
export { PerformanceData } from './fixtures/PerformanceData';
export { TestUtils } from './utils/TestUtils';

// Re-export for convenience
export { describe, it, expect } from 'vitest';
