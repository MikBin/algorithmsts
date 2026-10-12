---
id: TASK-23
title: >-
  Adopt Validator/typed errors everywhere and remove I/O side effects from
  execute()
status: To Do
assignee: []
created_date: '2026-10-12 10:38'
labels:
  - algorithms graphs purity
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: enhancement
ordinal: 23000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Three error regimes exist: graph structures use Validator+ArgumentError (good), graph algorithms throw ad-hoc Error, src/algorithms mostly does not validate (nulls silently become empty results, invalid inputs crash with raw TypeError). Additionally every exported execute() in src/algorithms wraps work in PerformanceMonitor.measureExecutionTime (performance.now) and may console.warn - 14 exported methods with un-injectable I/O violating the purity mandate. Make PerformanceMonitor accept an injected clock; remove console.warn from library paths (or route through an injectable logger). Also fix public mutable fields on BST/AVL (root/size/compare), the unconstrained-generic sorts in core/patterns/Strategy.ts, AlgorithmTemplate any-plumbing, and AbstractFactory throwing placeholders. See review sections 2, 2a, and 4.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 src/algorithms and graph algorithms validate via Validator/ArgumentError
- [ ] #2 No console.warn or un-injected wall-clock calls in library code paths
- [ ] #3 PerformanceMonitor accepts an injectable clock; tests use it instead of monkey-patching
- [ ] #4 BST/AVL state encapsulated; Strategy.ts constrained to comparable types
- [ ] #5 AbstractFactory placeholders removed or implemented
<!-- AC:END -->
