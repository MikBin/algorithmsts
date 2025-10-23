# Migration Guide: Algorithmsts Library Refactoring

## Overview

The Algorithmsts library has undergone a major refactoring to improve modularity, maintainability, and performance. This guide explains the changes and provides migration paths for existing users.

## Key Changes

### 1. Modular Architecture

The library is now organized into focused modules:
- **core/**: Fundamental interfaces, abstract classes, and utilities
- **data-structures/**: Data structure implementations
- **algorithms/**: Algorithm implementations
- **graphs/**: Graph data structures and algorithms
- **performance/**: Performance monitoring and benchmarking tools
- **types/**: TypeScript type definitions

### 2. Improved Exports

All modules are now properly exported with both ESM and CommonJS support, enabling better tree-shaking and reduced bundle sizes.

### 3. Backward Compatibility

Legacy imports are maintained but deprecated. Migration is recommended for optimal performance.

## Migration Steps

### Step 1: Update Import Statements

#### Before (Legacy - Deprecated)
```typescript
import algorithmsts from '@mikbin80/algorithmsts';

// Usage
const result = algorithmsts.binarySearch.search([1, 2, 3], 2);
const list = new algorithmsts.LinkedList();
```

#### After (Modern - Recommended)
```typescript
// Import specific components for better tree-shaking
import { BinarySearch } from '@mikbin80/algorithmsts/algorithms';
import { LinkedList } from '@mikbin80/algorithmsts/data-structures';

// Usage
const result = BinarySearch.search([1, 2, 3], 2);
const list = new LinkedList();
```

### Step 2: Update Interface Imports

#### Before (Legacy)
```typescript
import { ICollection, IDataStructure } from '@mikbin80/algorithmsts';
```

#### After (Modern)
```typescript
import type { ICollection, IDataStructure } from '@mikbin80/algorithmsts/core';
```

### Step 3: Update Graph-Related Imports

#### Before (Legacy)
```typescript
import { IGraph } from '@mikbin80/algorithmsts';
```

#### After (Modern)
```typescript
import type { IGraph } from '@mikbin80/algorithmsts/graphs';
```

## Module-Specific Migrations

### Data Structures

| Legacy Import | New Import |
|---------------|------------|
| `algorithmsts.LinkedList` | `import { LinkedList } from '@mikbin80/algorithmsts/data-structures'` |
| `algorithmsts.SkipList` | `import { SkipList } from '@mikbin80/algorithmsts/data-structures'` |
| `algorithmsts.SegmentTree` | `import { SegmentTree } from '@mikbin80/algorithmsts/data-structures'` |
| `algorithmsts.Trie` | `import { Trie } from '@mikbin80/algorithmsts/data-structures'` |
| `algorithmsts.SuffixTree` | `import { SuffixTree } from '@mikbin80/algorithmsts/data-structures'` |

### Algorithms

| Legacy Import | New Import |
|---------------|------------|
| `algorithmsts.binarySearch` | `import { BinarySearch } from '@mikbin80/algorithmsts/algorithms'` |
| `algorithmsts.segmentTree` | `import { SegmentTree } from '@mikbin80/algorithmsts/data-structures'` |
| `algorithmsts.ngramSimilarity` | `import { NgramSimilarity } from '@mikbin80/algorithmsts/algorithms'` |

### Graph Algorithms

| Legacy Import | New Import |
|---------------|------------|
| N/A | `import { BreadthFirstSearch, DepthFirstSearch } from '@mikbin80/algorithmsts/graphs'` |
| N/A | `import { DijkstraAlgorithm, AStarAlgorithm } from '@mikbin80/algorithmsts/graphs'` |
| N/A | `import { KruskalAlgorithm, PrimAlgorithm } from '@mikbin80/algorithmsts/graphs'` |

## Code Examples

### Searching
```typescript
// Before
import algorithmsts from '@mikbin80/algorithmsts';
const result = algorithmsts.binarySearch.search([1, 2, 3], 2);

// After
import { BinarySearch } from '@mikbin80/algorithmsts/algorithms';
const result = BinarySearch.search([1, 2, 3], 2);
```

### Data Structures
```typescript
// Before
import algorithmsts from '@mikbin80/algorithmsts';
const list = new algorithmsts.LinkedList();

// After
import { LinkedList } from '@mikbin80/algorithmsts/data-structures';
const list = new LinkedList();
```

### Graph Operations
```typescript
// New functionality - no legacy equivalent
import { AdjacencyListGraph, BreadthFirstSearch } from '@mikbin80/algorithmsts/graphs';

const graph = new AdjacencyListGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A', 'B');

const traversal = new BreadthFirstSearch();
const result = traversal.traverse(graph, 'A');
```

## Deprecation Timeline

- **Phase 1 (Current)**: Legacy imports are deprecated but functional
- **Phase 2 (Future Release)**: Deprecation warnings become errors
- **Phase 3 (Major Version Bump)**: Legacy imports removed entirely

## Performance Benefits

The new modular structure provides:
- **Better Tree-Shaking**: Only import what you need
- **Smaller Bundles**: Reduced bundle sizes for web applications
- **Improved Performance**: Faster loading and execution
- **Enhanced Type Safety**: Better TypeScript support

## Troubleshooting

### Common Issues

1. **Module not found errors**
   - Ensure you're using the correct import paths
   - Check that you're importing from the right module

2. **Type errors**
   - Update interface imports to use the new paths
   - Use `import type` for type-only imports

3. **Build failures**
   - Clear your node_modules and reinstall
   - Update your build configuration if necessary

### FAQ

**Q: Do I need to migrate immediately?**
A: No, legacy imports will continue to work, but migration is recommended for optimal performance.

**Q: Will the API change?**
A: The core APIs remain the same. Only import paths have changed.

**Q: How do I know what to import?**
A: Check the module documentation or use your IDE's auto-import feature.

**Q: Are there any breaking changes?**
A: No breaking changes to functionality, only to import paths.

## Support

For migration assistance or questions:
- Check the updated README.md for detailed documentation
- Review the module-specific documentation
- Open an issue on GitHub for support

---

*This migration guide will be updated as the library evolves.*
