---
id: TASK-13
title: Fix BinaryClosestSearch distance semantics for sign-only comparators
status: Done
completed_date: '2026-10-16 10:50'
assignee: []
created_date: '2026-10-12 10:37'
labels:
  - algorithms bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 13000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
algorithms/searching/binary-search/binarySearch.ts:174-184: BinaryClosestSearch uses Math.abs(compareFn(...)) as a distance, but the documented comparator contract (lines 13-14, 103-104) requires only sign, not magnitude. With a -1/0/1 comparator or localeCompare every distance is 1, the tie branch fires, and results are arbitrary. Either require difference-returning comparators (validate and document) or rewrite to not depend on magnitude. See review section 4, finding A5.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Works correctly with a sign-only comparator (-1/0/1)
- [x] #2 Documented comparator contract matches implementation
- [x] #3 Tests include localeCompare and sign-only comparators
<!-- AC:END -->
