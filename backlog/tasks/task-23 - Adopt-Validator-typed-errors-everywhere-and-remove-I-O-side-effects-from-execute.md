---
id: TASK-23
title: >-
  Adopt Validator/typed errors everywhere and remove I/O side effects from
  execute()
status: In Progress
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
- [x] #1 src/algorithms and graph algorithms validate via Validator/ArgumentError
- [x] #2 No console.warn or un-injected wall-clock calls in library code paths
- [x] #3 PerformanceMonitor accepts an injectable clock; tests use it instead of monkey-patching
- [ ] #4 BST/AVL state encapsulated; Strategy.ts constrained to comparable types
- [ ] #5 AbstractFactory placeholders removed or implemented
<!-- AC:END -->

## Progress Notes
2026-10-16: PR #154 (9acac0b, rev 2 after the superseded #146/#148/#151) - typed errors across all of src/graphs/algorithms, zero console.warn in src (routed via PerformanceMonitor.getLogger()), setClock/setLogger/getLogger/clock injectables + unit tests, Validator/ArgumentError adoption in src/algorithms, Strategy generics constrained, pattern throws typed. Residual: BST/AVL `root`/`compare` fields still public (AC4 partial), AbstractFactory placeholders still throw (now typed) rather than being implemented/removed (AC5) - both tracked in TASK-36.
