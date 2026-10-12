---
id: TASK-11
title: >-
  Fix SparseTable type-unsafe op probe, state accumulation on re-init, and empty
  input
status: To Do
assignee: []
created_date: '2026-10-12 10:37'
labels:
  - algorithms bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 11000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
algorithms/range-queries/sparse-table/sparseTable.ts: (1) lines 109-111: query() probes this.operation(5 as T, 0 as T) to pick the O(1) idempotent path vs iterative path; for non-number T the probe yields NaN and routes to the idempotent path which double-counts for sum-like operations; (2) initializeTable (172-185) pushes rows without resetting this.table so re-execution accumulates stale rows; (3) empty input crashes in buildTable with no validation. Replace probe with explicit idempotency declaration or safe detection. See review section 4, finding A4.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 No type-unsafe probe of the operation function
- [ ] #2 Sum on non-number T (e.g. objects with comparator) returns correct results via the non-overlapping path
- [ ] #3 Re-running execute does not accumulate table rows
- [ ] #4 Empty array throws ArgumentError with clear message
<!-- AC:END -->
