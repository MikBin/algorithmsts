---
id: TASK-9
title: Fix BellmanFord for undirected graphs and negative undirected edges
status: To Do
assignee: []
created_date: '2026-10-12 10:37'
labels:
  - graphs bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 9000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
graphs/algorithms/shortest-path/BellmanFordAlgorithm.ts:37-55: relaxes graph.getEdges(), which for undirected AdjacencyListGraph/AdjacencyMatrixGraph returns each edge once (deduplicated), so reverse relaxations never happen. Querying the standard undirected fixture from D to A returns found:false, distance:Infinity. The class never checks isDirected(). Negative-cycle detection also misses a negative undirected edge (which is itself a negative cycle). See review section 4, finding A2.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Either relax both directions for undirected graphs or throw ArgumentError for undirected input - decide and document
- [ ] #2 Undirected fixture query D to A returns correct finite distance
- [ ] #3 Negative undirected edge is detected as negative cycle (or rejected as invalid input)
- [ ] #4 Tests cover undirected graphs from non-root source vertices
<!-- AC:END -->
