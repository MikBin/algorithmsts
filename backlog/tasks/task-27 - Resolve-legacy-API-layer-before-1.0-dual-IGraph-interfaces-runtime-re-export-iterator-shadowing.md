---
id: TASK-27
title: >-
  Resolve legacy API layer before 1.0: dual IGraph, interfaces runtime
  re-export, iterator shadowing
status: To Do
assignee: []
created_date: '2026-10-12 10:39'
labels:
  - api breaking
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: low
type: enhancement
ordinal: 27000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
src/interfaces.ts (deprecated, package at 0.1.0 so breaking changes allowed): (1) re-exports a 4-line legacy IGraph via ./interfaces while the full IGraph lives in ./graphs - two incompatible same-named public types; (2) export * from ./core ships the entire core runtime under a module named interfaces; (3) locally declared IteratorResult/Iterator/Iterable/Collection shadow ES2015 built-ins, two of them not even exported (dead); (4) legacy StringTMap family and binaryComparisonRoutine referenced nowhere; lines 71-84 are commented-out dead code. Decide: slim ./interfaces to type-only legacy re-exports or remove entirely with a migration note in migration-guide.md. Also update src/migration-guide.md. See review section 1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Exactly one IGraph type remains in the public API
- [ ] #2 ./interfaces is type-only (or removed) and no longer ships core runtime
- [ ] #3 Shadowed iterator type declarations removed
- [ ] #4 migration-guide.md reflects the final decision
<!-- AC:END -->
