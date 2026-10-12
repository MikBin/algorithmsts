---
id: TASK-25
title: Align complexity claims with implementations across graph algorithms
status: To Do
assignee: []
created_date: '2026-10-12 10:38'
labels:
  - graphs docs performance
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: docs
ordinal: 25000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
JSDoc claims describe heap-based textbook algorithms while code re-sorts/scans: PrimAlgorithm.ts:13,71 and DijkstraAlgorithm.ts:12,66 claim O((V+E) log V) but re-sort the queue every iteration (~O(E^2 log E)); EdmondsKarpMaxFlow.ts:12,77 claims O(V*E^2) but BFS scans all vertices (~O(V^3 E)); HopcroftKarp.ts:23,52,67 claims O(E sqrt V) but uses Array.includes per neighbor (use Set); TopologicalSort.ts:32,90 claims O(V+E) but order.unshift per vertex is O(V^2); graphs-module BFS/DFS materialize full paths per vertex (Theta(V^2) space). Either implement with the library's own heaps/priority queue or correct the JSDoc. Also fix CycleDetection.ts:98 double-unshift malformed cycle output, and consider iterative DFS variants for deep graphs. See review section 4.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Dijkstra/Prim use the library BinaryHeap/PriorityQueue (or JSDoc corrected to true complexity)
- [ ] #2 EdmondsKarp, HopcroftKarp, TopologicalSort complexities match code (or code optimized to match)
- [ ] #3 HopcroftKarp uses Set for right-side matching
- [ ] #4 CycleDetection directed cycle output well-formed and tested
<!-- AC:END -->
