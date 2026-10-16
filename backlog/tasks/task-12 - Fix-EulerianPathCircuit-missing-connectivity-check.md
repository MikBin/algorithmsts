---
id: TASK-12
title: Fix EulerianPathCircuit missing connectivity check
status: Done
completed_date: '2026-10-16 10:50'
assignee: []
created_date: '2026-10-12 10:37'
labels:
  - graphs bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 12000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
graphs/algorithms/graph/EulerianPathCircuit.ts:29-50 (undirected) and 91-136 (directed): no connectivity check before declaring an Eulerian path/circuit. Two disjoint triangles (all even degrees) pass the parity check but the Hierholzer walk covers only one component, and the algorithm reports type 'circuit' with half the edges. Add a connectivity check over edges for both variants. See review section 4, finding A3.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Disconnected graph with valid degrees does not report a circuit/path
- [x] #2 Connectivity check added for both directed and undirected variants
- [x] #3 Tests: two disjoint triangles, isolated-vertex cases
<!-- AC:END -->
