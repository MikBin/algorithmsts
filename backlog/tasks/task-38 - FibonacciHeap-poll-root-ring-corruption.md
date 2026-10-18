---
id: TASK-38
title: FibonacciHeap.poll() corrupts the root ring
status: To Do
assignee: []
created_date: '2026-10-18'
labels:
  - data-structures
  - correctness
dependencies:
  - TASK-30
priority: high
type: bug
ordinal: 38000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
`FibonacciHeap.poll()` corrupts the root ring on stock master — executed repro at PR #184 head (identical on base 5af7dd1): insert 1..9 then four polls → `[1,2,3,null]` while `size===6` (elements silently lost); 20 shuffled uniques drain only 6/20. Suspected root cause: `fibonacciHeap.ts:141-150` merges children via `mergeLists` without isolating each child first, so sibling pointers get spliced/self-looped. Note: `decreaseKey` itself is correct in isolation (verified).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 regression test with the failing repro (n=9 drain + n=20 shuffled drain 20/20)
- [ ] #2 root cause fixed, no heuristic
- [ ] #3 full suite + coverage gate green
- [ ] #4 task file honest
<!-- AC:END -->

## Progress Notes
