# Changelog

All notable changes to the Algorithmsts library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Documentation Generation**: Added comprehensive API documentation generation using TypeDoc
  - Created `tools/generate-docs.ts` script for automated documentation generation
  - Generates HTML documentation in `docs/api/` directory
  - Includes JSDoc comments from all modules with proper cross-references

- **Usage Examples**: Created extensive usage examples for all major library components
  - `docs/examples/core-usage.ts`: Core infrastructure, interfaces, utilities, and design patterns
  - `docs/examples/data-structures.ts`: All data structures (LinkedList, SkipList, SegmentTree, Trie, SuffixTree, Graphs)
  - `docs/examples/algorithms.ts`: All algorithms (sorting, searching, string processing, range queries, graph algorithms)
  - `docs/examples/graphs.ts`: Graph structures and algorithms (BFS, DFS, shortest paths, MST, topological sort, cycle detection)
  - `docs/examples/performance.ts`: Performance monitoring, benchmarking, and comparative analysis

- **Build System Enhancements**: Updated Rollup configuration for modular builds
  - Separate bundle generation for each major module (core, data-structures, algorithms, graphs, performance, types, compatibility)
  - Added source maps for all bundles in both development and production
  - Optimized bundle size with tree-shaking and minification
  - Maintained backward compatibility in build outputs

- **Deployment Scripts**: Enhanced deployment and build automation
  - Updated `tools/semantic-release-prepare.ts` to include documentation generation in pre-push hooks
  - Modified `tools/gh-pages-publish.ts` to include API documentation in GitHub Pages deployment
  - Created `tools/build-and-docs.ts` for streamlined build and documentation process
  - Added `build:docs` script to package.json for combined build and documentation generation

- **Package Scripts**: Updated npm scripts for improved developer experience
  - Fixed lint script to target `src/` directory instead of `lib/`
  - Added `docs` script for standalone documentation generation
  - Added `build:docs` script for combined build and documentation workflow
  - Added `bench` script for performance benchmarking

### Changed
- **Build Configuration**: Refactored `rollup.config.ts` from single configuration to multiple outputs
  - Each module now builds separately with its own entry point
  - Improved tree-shaking and bundle optimization
  - Enhanced source map generation for debugging

### Technical Details
- **Documentation**: Generated using TypeDoc with comprehensive JSDoc extraction
  - Covers all public APIs across core, data structures, algorithms, and graphs modules
  - Includes complexity annotations, examples, and cross-references
  - GitHub Pages ready with proper navigation and search

- **Examples**: All examples are written in TypeScript with proper typing
  - Demonstrate real-world usage patterns
  - Include performance comparisons and best practices
  - Cover edge cases and error handling

- **Build System**: Modular approach allows for:
  - Selective imports: `import { LinkedList } from '@mikbin80/algorithmsts/data-structures'`
  - Smaller bundle sizes when only specific modules are needed
  - Better tree-shaking for modern bundlers

### Migration Notes
- **Import Paths**: While existing imports continue to work, new modular imports are recommended:
  ```typescript
  // Old way (still works)
  import { LinkedList, BinarySearch } from '@mikbin80/algorithmsts';

  // New recommended way
  import { LinkedList } from '@mikbin80/algorithmsts/data-structures';
  import { BinarySearch } from '@mikbin80/algorithmsts/algorithms';
  ```

- **Build Process**: The build now generates multiple bundles. The main bundle remains backward compatible.

### Performance
- **Bundle Size**: Modular builds reduce bundle size for applications using only specific features
- **Documentation**: Static HTML generation provides fast loading documentation
- **Examples**: Comprehensive examples help developers understand performance characteristics

## [0.0.1] - 2025-10-23

### Added
- Initial release of Algorithmsts library
- Core infrastructure with interfaces and abstract base classes
- Data structures: LinkedList, SkipList, SegmentTree, Trie, SuffixTree
- Algorithms: Sorting (CountingSort, RadixSort), Searching (BinarySearch), String processing
- Graph structures and algorithms
- Performance monitoring utilities
- Compatibility layer for legacy API support
- Basic build and test setup

### Changed
- N/A (initial release)

### Deprecated
- N/A (initial release)

### Removed
- N/A (initial release)

### Fixed
- N/A (initial release)

### Security
- N/A (initial release)
