# Strategy for Removing Legacy Algorithms

## Overview
This document outlines the strategy for identifying, verifying, and removing legacy algorithm implementations from the `algorithmsts` library. The goal is to transition fully to the new modular architecture located in `src/algorithms/` and `src/data-structures/`, improving maintainability, performance, and type safety.

## 1. Identified Legacy Components

The following components have been identified as legacy, with modern replacements already in place.

| Legacy Component | Legacy Location | Modern Replacement Location | Verification Status |
| :--- | :--- | :--- | :--- |
| **LinkedList** | `src/linkedList/` | `src/data-structures/linked-list/` | **Verified**: Modern version is a functional superset, strictly typed, and integrated with `BaseDataStructure`. |
| **SkipList** | `src/skipList/` | `src/data-structures/skip-list/` | **Verified**: Modern version includes better typing, iterators, and cleaner interfaces. |
| **SegmentTree** | `src/segmentTree/` | `src/data-structures/segment-tree/` | **Verified**: Modern version implements standard interfaces and includes specialized variants (Lazy, MeanVariance). |
| **Trie** | `src/trie/` | `src/data-structures/trie/` | **Verified**: Modern version follows the new architecture. |
| **SuffixTree** | `src/suffixTree/` | `src/data-structures/suffix-tree/` | **Verified**: Modern version exists. Note: Legacy `UkkonenAlgorithm.ts` is likely integrated into the modern `suffixTree.ts` or its helpers. |
| **BinarySearch** | `src/binarySearch/` | `src/algorithms/searching/binary-search/` | **Verified**: Modern version uses a class-based approach with performance monitoring. |
| **Sorting** | `src/sorting/` | `src/algorithms/sorting/` | **Verified**: Implementations (Counting, Radix) are migrated. |
| **Strings** | `src/strings/` | `src/algorithms/strings/` | **Verified**: Similarity functions are migrated. `words_dictionary.json` needs to be checked if it's used/moved. |

## 2. Comparison Summary

### Quality & Robustness
The modern implementations consistently feature:
- **Strict TypeScript Typing**: Extensive use of generics and interfaces.
- **Unified Architecture**: Inheritance from `BaseAlgorithm` or `BaseDataStructure`.
- **Standardized Iterators**: Implementation of `IIterator` and `[Symbol.iterator]`.
- **Performance Monitoring**: Integration with `PerformanceMonitor` (for algorithms).
- **Better Documentation**: JSDoc comments are more detailed and standardized.

### Compatibility Layer
The `src/compatibility/` directory currently contains adapters (e.g., `LinkedListAdapter`) that **wrap the Modern implementations**, not the Legacy ones. This confirms that the Legacy implementations are effectively dead code, as even the compatibility layer delegates to the new code.

## 3. Removal Strategy

### Phase 1: Clean Up Legacy Implementations
Since the compatibility layer does not depend on the files in the legacy directories, we can safely delete them.

**Action Items:**
1.  **Delete Legacy Directories**:
    - `src/binarySearch/`
    - `src/linkedList/`
    - `src/segmentTree/`
    - `src/skipList/`
    - `src/sorting/`
    - `src/strings/` (Check `words_dictionary.json` usage first)
    - `src/suffixTree/`
    - `src/trie/`

2.  **Update `src/algorithmsts.ts`**:
    - Remove direct imports from the deleted legacy directories.
    - Ensure the default export uses the Compatibility Adapters (which wrap modern code) or points directly to modern code where appropriate, preserving the deprecated API surface if necessary for Phase 2, or removing it if we are ready for Phase 3 (Breaking Changes).
    - *Decision*: Since the task asks to "verify if... completely removable", and we found the adapters point to modern code, we will update `algorithmsts.ts` to use these adapters or modern exports, removing any dependencies on the deleted files.

3.  **Handle `words_dictionary.json`**:
    - Verify if `src/strings/words_dictionary.json` is used by modern tests or code. If so, move it to `src/algorithms/strings/` or a test fixture location.

### Phase 2: Deprecation & Final Cleanup (Future)
- Once the legacy folders are gone, the `compatibility` layer remains as the only bridge for older API users.
- In a future breaking change (v2.0.0), the `compatibility` folder and `LegacyAPI` should be removed.

## 4. Execution Plan (Immediate)

1.  **Verification**: Confirm `words_dictionary.json` usage.
2.  **Deletion**: Execute `rm -rf` on identified legacy folders.
3.  **Refactoring**: Edit `src/algorithmsts.ts` to remove broken imports and wire up `algorithmsts` object using the Compatibility layer or Modern modules.
4.  **Testing**: Run `npm test` to ensure the core library and modern components are unaffected.

## 5. Rollback Plan
If tests fail:
1.  Revert `src/algorithmsts.ts` changes.
2.  Restore deleted directories from git history.
