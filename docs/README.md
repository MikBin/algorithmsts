# Algorithmsts Library

A comprehensive, high-performance TypeScript library for algorithms and data structures, designed for modern JavaScript/TypeScript applications.

## Overview

Algorithmsts provides a complete suite of algorithms and data structures with a focus on performance, type safety, and developer experience. The library features a modular architecture that enables tree-shaking for optimal bundle sizes.

## Key Features

- 🚀 **High Performance**: Optimized implementations with comprehensive benchmarking
- 🔒 **Type Safe**: Full TypeScript support with strict typing
- 📦 **Tree Shakable**: Modular design for minimal bundle sizes
- 🧪 **Well Tested**: Extensive test coverage with performance benchmarks
- 📚 **Well Documented**: Comprehensive JSDoc documentation
- 🔄 **Backward Compatible**: Smooth migration path from legacy APIs

## Installation

```bash
npm install @mikbin80/algorithmsts
```

## Quick Start

### Modern Modular Import (Recommended)

```typescript
// Import specific components for better tree-shaking
import { BinarySearch } from '@mikbin80/algorithmsts/algorithms';
import { LinkedList } from '@mikbin80/algorithmsts/data-structures';
import { PerformanceMonitor } from '@mikbin80/algorithmsts/core';

// Use the components
const searchResult = BinarySearch.search([1, 2, 3], 2);
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);

// Monitor performance
const monitor = new PerformanceMonitor();
monitor.start('operation');
// ... your code ...
const metrics = monitor.end('operation');
console.log(`Operation took ${metrics.duration}ms`);
```

### Legacy Default Import (Deprecated)

```typescript
import algorithmsts from '@mikbin80/algorithmsts';

// This still works but is deprecated
const result = algorithmsts.binarySearch.search([1, 2, 3], 2);
```

## Library Structure

### Core Module (`@mikbin80/algorithmsts/core`)

Fundamental interfaces, abstract classes, and utilities:

```typescript
import type { ICollection, IDataStructure, IAlgorithm } from '@mikbin80/algorithmsts/core';
import { BaseDataStructure, PerformanceMonitor, Validator } from '@mikbin80/algorithmsts/core';
```

### Data Structures (`@mikbin80/algorithmsts/data-structures`)

High-performance data structure implementations:

```typescript
import {
  LinkedList,
  SkipList,
  SegmentTree,
  Trie,
  SuffixTree,
  AdjacencyListGraph,
  AdjacencyMatrixGraph
} from '@mikbin80/algorithmsts/data-structures';

// Example usage
const list = new LinkedList<number>();
const graph = new AdjacencyListGraph<string>();
```

### Algorithms (`@mikbin80/algorithmsts/algorithms`)

Comprehensive algorithm implementations:

```typescript
import {
  BinarySearch,
  CountingSort,
  RadixSortNumbers,
  BreadthFirstSearch,
  DepthFirstSearch,
  DijkstraAlgorithm,
  SparseTable
} from '@mikbin80/algorithmsts/algorithms';

// Example usage
const result = BinarySearch.search([1, 2, 3, 4, 5], 3);
const sorted = CountingSort.sort([3, 1, 4, 1, 5]);
```

### Graph Theory (`@mikbin80/algorithmsts/graphs`)

Complete graph data structures and algorithms:

```typescript
import {
  AdjacencyListGraph,
  AdjacencyMatrixGraph,
  BreadthFirstSearch,
  DepthFirstSearch,
  DijkstraAlgorithm,
  AStarAlgorithm,
  KruskalAlgorithm,
  PrimAlgorithm,
  TopologicalSort,
  CycleDetection
} from '@mikbin80/algorithmsts/graphs';

// Example usage
const graph = new AdjacencyListGraph<number>();
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1, 2);

const bfs = new BreadthFirstSearch();
const traversal = bfs.traverse(graph, 1);
```

### Performance Monitoring (`@mikbin80/algorithmsts/performance`)

Tools for measuring and analyzing performance:

```typescript
import { PerformanceMonitor } from '@mikbin80/algorithmsts/performance';

const monitor = new PerformanceMonitor();
monitor.start('algorithm');
// ... run algorithm ...
const metrics = monitor.end('algorithm');
console.log(`Time: ${metrics.duration}ms, Memory: ${metrics.memoryUsage}MB`);
```

## Examples

### Searching and Sorting

```typescript
import { BinarySearch, CountingSort } from '@mikbin80/algorithmsts/algorithms';

// Binary search
const data = [1, 3, 5, 7, 9, 11];
const index = BinarySearch.search(data, 7); // Returns 3

// Sorting
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = CountingSort.sort(unsorted); // [1, 1, 2, 3, 4, 5, 6, 9]
```

### Data Structures

```typescript
import { LinkedList, SegmentTree } from '@mikbin80/algorithmsts/data-structures';

// Linked List
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
console.log(list.size()); // 3

// Segment Tree for range queries
const data = [1, 3, 5, 7, 9, 11];
const tree = new SegmentTree(data, (a, b) => a + b); // Sum segment tree
const sum = tree.query(1, 3); // Sum of elements at indices 1-3
```

### Graph Algorithms

```typescript
import { AdjacencyListGraph, DijkstraAlgorithm } from '@mikbin80/algorithmsts/graphs';

// Create a weighted graph
const graph = new AdjacencyListGraph<string>(true); // true for weighted
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);

// Find shortest path
const dijkstra = new DijkstraAlgorithm();
const path = dijkstra.findPath(graph, 'A', 'B');
console.log(path); // { path: ['A', 'C', 'B'], distance: 3 }
```

### Performance Monitoring

```typescript
import { PerformanceMonitor } from '@mikbin80/algorithmsts/core';

const monitor = new PerformanceMonitor();

// Monitor a function
const result = monitor.measure(() => {
  // Your algorithm here
  return someComputation();
});

console.log(`Duration: ${result.duration}ms`);
console.log(`Memory Usage: ${result.memoryUsage}MB`);
```

## Performance Benchmarks

The library includes comprehensive performance benchmarks. Here are some key results:

### Data Structures Performance

| Operation | LinkedList | SkipList | SegmentTree |
|-----------|------------|----------|-------------|
| Insert | O(n) | O(log n) | O(log n) |
| Search | O(n) | O(log n) | O(log n) |
| Delete | O(n) | O(log n) | O(log n) |

### Algorithm Complexity

| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Binary Search | O(log n) | O(1) |
| Counting Sort | O(n + k) | O(n + k) |
| BFS/DFS | O(V + E) | O(V) |
| Dijkstra | O((V + E) log V) | O(V) |
| Segment Tree Query | O(log n) | O(n) |

## Migration Guide

If you're upgrading from an older version, see our [Migration Guide](./migration-guide.md) for detailed instructions on updating your code.

## API Reference

### Core Interfaces

- `ICollection<T>`: Base interface for collections
- `IDataStructure<T>`: Interface for data structures (Note: Not all data structures in the library implement this interface directly)
- `IAlgorithm`: Base interface for algorithms
- `IGraph<T>`: Interface for graph data structures

### Error Types

- `ArgumentError`: Invalid argument provided
- `DataStructureError`: Data structure operation error

## Documentation Pipeline

Hand-written documentation lives in the `docs/` directory and is committed. API documentation generated by TypeDoc is written to `docs/api/` and should remain local/ignored. Publishing to GitHub pages via `tools/gh-pages-publish.ts` has been removed as it relied on missing dependencies.

## Contributing

We welcome contributions! Please see our [Contributing Guide](../CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](../LICENSE) file for details.

## Support

- 📖 [Documentation](https://algorithmsts.dev)
- 🐛 [Issue Tracker](https://github.com/MikBin/algorithmsts/issues)
- 💬 [Discussions](https://github.com/MikBin/algorithmsts/discussions)

---

*Built with ❤️ for the JavaScript/TypeScript community*
