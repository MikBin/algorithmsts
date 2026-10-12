---
id: TASK-19
title: Backfill tests for 11 untested graph algorithm classes
status: To Do
assignee: []
created_date: '2026-10-12 10:38'
labels:
  - testing graphs
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: task
ordinal: 19000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Zero test references exist for: StronglyConnectedComponentsTarjan, StronglyConnectedComponentsKosaraju, BridgesAndArticulationPoints, BiconnectedComponents, EulerianPathCircuit, GraphColoringGreedy, TransitiveClosure, EdmondsKarpMaxFlow, HopcroftKarp, BoruvkaAlgorithm, DAGShortestPathAlgorithm. Several contain known bugs (TASK-9, TASK-12). Use test/graphs/fixtures/SampleGraphs.ts fixtures; cover directed+undirected, disconnected, empty, and error paths. Also add core pattern/abstract tests (src/core/patterns, src/core/abstracts, ConversionUtils, ComparisonUtils) - there is no test/core/ directory at all. See review section 5, finding T1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 All 11 graph algorithm classes have tests including edge and error paths
- [ ] #2 test/core/ exists covering patterns, abstracts, and core utils
- [ ] #3 Both AdjacencyListGraph and AdjacencyMatrixGraph exercised per algorithm
<!-- AC:END -->
