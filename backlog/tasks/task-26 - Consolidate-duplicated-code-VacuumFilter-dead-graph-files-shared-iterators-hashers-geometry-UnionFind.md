---
id: TASK-26
title: >-
  Consolidate duplicated code: VacuumFilter, dead graph files, shared
  iterators/hashers/geometry/UnionFind
status: Done
assignee: []
created_date: '2026-10-12 10:39'
labels:
  - data-structures graphs refactor
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: chore
ordinal: 26000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
VacuumFilter is ~95% identical to CuckooFilter (only hash seeds differ) - parameterize and remove one. Dead code: src/graphs/bfs.ts, src/graphs/dfs.ts (function-style copies exported by nothing) and legacy 4-line src/graphs/IGraph.ts. Duplicated utilities: five copy-pasted ArrayIterator classes (stack/queue/deque/arrayList/circularBuffer), six near-identical in-order iterators (splay/treap/aa/wavl/scapegoat/interval-tree), FNV-1a defaultHash + JSON serializer re-declared in eight places (bypassing probabilistic-interfaces.ts), Rect/MBR geometry duplicated between rTree.ts and rStarTree.ts, Union-Find re-implemented inline four times in Kruskal/Boruvka while UnionFind exists in disjoint-set, FenwickTree findKth === findPrefixSum. Also merge the two live BFS/DFS class pairs (algorithms/graphs/traversal vs graphs/algorithms/traversal). See review sections 10 and 4.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 VacuumFilter removed or implemented as parameterized CuckooFilter
- [x] #2 src/graphs/bfs.ts, dfs.ts, and legacy IGraph.ts deleted
- [x] #3 Shared ArrayIterator and in-order iterator in src/core; duplicates removed
- [x] #4 Single shared defaultHash/serializer module used by all probabilistic structures
- [x] #5 Kruskal/Boruvka use the UnionFind class; one BFS/DFS class pair remains public
<!-- AC:END -->

## Progress Notes

**Stage A:** Removed orphaned traversal implementations, mitigating the broken coverage tests, and updated their users to rely exclusively on `src/graphs/algorithms/traversal`. Removed `VacuumFilter` and its tests entirely. Cleaned up stray root scripts from earlier runs. `ArrayIterator` and `InOrderIterator` utilities were previously extracted successfully in this PR and their callers migrated.

**Stage B:** Completed remaining tasks. Wired shared `UnionFind` into Kruskal and Boruvka algorithms. Delegated `FenwickTree.findPrefixSum` to `findKth`. Restored original peek/current semantics in `InOrderIterator` and removed `as any` casting in `IntervalTree`. Consolidated hash and geometry utility imports throughout the probabilistic data structures and R-Trees.
