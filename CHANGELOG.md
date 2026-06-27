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

## [0.1.0] - 2026-06-27

This release is a focused cleanup of the **vector-similarity** module: it removes
divergent duplicate implementations, unifies input validation, moves the analysis
tooling out of the published build, and raises test coverage to 100% (lines and
branches) for `src/vector-similarity/**`.

### Breaking
- **Validation errors are now typed**: `classic.ts` (and the rest of the module)
  throw `TypeError` for non-array / non-finite-element inputs and `RangeError` for
  empty / length-mismatch inputs. (`TypeError`/`RangeError` extend `Error`, so
  `catch (e) { if (e instanceof Error) }` callers are unaffected.)
- **Removed `jaccardSimilarity`** from `classic.ts` (superseded by the
  `jaccardSimilarityBinary`/`Weighted`/`RealValued` family). Use
  `jaccardSimilarityBinary`.
- **`chebyshevSimilarity`** is now exported from `classic` (its canonical home)
  instead of `heuristics`. Deep-importers should update the import path.
- **`canberraSimilarity`** canonical implementation is the per-coordinate-normalized
  version in `heuristics` (unchanged behavior for the public entry point; only
  the previously-unreachable duplicate in `classic.ts` was removed).
- **Tooling moved**: `vectorGenerationService.ts` and `vector-similarity-analysis.ts`
  moved from `src/vector-similarity/` to `tools/vector-similarity/` and are no
  longer emitted into `dist`. The `analyze-similarity` script path was updated.
- **Empty-vector behavior** for functions that previously computed silently
  (e.g. `cosineSimilarity`, `euclideanDistance`) now throws `RangeError`.
  `pearsonCorrelation`, `distanceCorrelation`, the Jaccard family and
  `vectorSimilarityCorrelation` still accept empty arrays and return their
  documented value.

### Added
- New public exports: the raw distance functions (`euclideanDistance`,
  `squaredEuclideanDistance`, `manhattanDistance`, `dotProduct`, `chebyshevDistance`,
  `gowerDistance`, `soergelDistance`, `kulczynskiDistance`, `canberraDistance`,
  `lorentzianDistance`), `normalizedCosineSimilarity`, `pearsonCorrelation`,
  `diceCoefficient`/`diceDistance`, `distanceToSimilarity`, and the unique
  `heuristics` similarities (`brayCurtisSimilarity`, `harmonicMeanSimilarity`,
  `kendallCorrelationSimilarity`, `geometricMeanSimilarity`, `ratioBasedSimilarity`).
- Option interfaces (`MinkowskiOptions`, `MeanSimilarityOptions`, and the
  `VectorSimilarity*Options` types) are now part of the public surface.
- Internal shared validation helper `validateVectors` / `validateThirdArray`
  (`similarity/internal/validateVectors.ts`) standardizing error types.
- `VectorGenerationService` now accepts an injectable RNG (`new VectorGenerationService(rng)`)
  for deterministic output, with full unit tests.
- `vitest.config.ts` now pins the istanbul coverage provider and enforces a
  **100% line/branch/function/statement** gate on `src/vector-similarity/**`.

### Changed
- Unified input validation across every similarity file via `validateVectors`,
  removing ~300 lines of duplicated guard boilerplate.
- Converted provably-unreachable defensive clamps into branchless
  `Math.max(0, Math.min(1, x))` expressions (behavior preserved).
- `nonLinear.ts` now reuses `dotProduct`/`squaredEuclideanDistance` from `classic`
  instead of private copies.
- `jaccardSimilarityRealValued` is now a documented alias of `jaccardSimilarityWeighted`.
- `index.ts` uses only explicit named exports (no `export *`) to prevent silent
  name collisions.
- JSDoc across the module now consistently includes time/space complexity and
  `@throws` annotations.

### Removed
- Duplicate definitions of `canberraSimilarity`, `chebyshevSimilarity` and
  `waveHedgesSimilarity` (one canonical copy of each remains).
- Dead unreachable branches in `geometricMeanSimilarity`, `distanceCorrelation`,
  and the mean/std family.

### Migration notes
- If you deep-imported `chebyshevSimilarity` from `heuristics`, import it from
  `classic` (or simply from the package entry point, unchanged).
- If you caught validation errors by exact constructor (`e.constructor === Error`),
  update to `e instanceof Error` or handle `TypeError`/`RangeError` explicitly.

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
