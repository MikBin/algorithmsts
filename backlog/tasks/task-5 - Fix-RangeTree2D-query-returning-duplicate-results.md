---
id: TASK-5
title: Fix RangeTree2D query returning duplicate results
status: Done
completed_date: '2026-10-16 10:50'
assignee: []
created_date: '2026-10-12 10:36'
labels:
  - data-structures bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 5000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
range-tree/rangeTree2D.ts:27-35: query() calls collectByY(n.byY) at every node on the descent, but each ancestor's byY contains all descendant points, so every result is returned once per overlapping ancestor (guaranteed duplicates for queries spanning more than one level). Collect only at the O(log n) canonical decomposition nodes, like the x-dimension variant. See review section 3, finding C5.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 query() returns each point exactly once
- [x] #2 Results match a brute-force filter on randomized point fixtures
- [x] #3 Complexity O(log^2 n + k) claim documented and holds
<!-- AC:END -->
