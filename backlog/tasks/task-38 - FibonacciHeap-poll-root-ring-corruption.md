---
id: TASK-38
title: FibonacciHeap.poll() corrupts the root ring
status: Done
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
`FibonacciHeap.poll()` had issues where children were improperly merged into the root list without resetting pointers, causing structural corruption. While the root ring loop logic and `c.left`/`c.right` logic has been fixed in `TASK-30`, a lingering issue was identified: `decreaseKey` on a promoted node with a missing `c.parent = null` pending clearing can falsely interpret its old parent as valid and cause cascading cuts, thereby dropping elements prematurely (e.g. `[0, null, null, …]` on a drain). This bug requires family coverage and a dedicated regression test (now integrated) to ensure the `c.parent = null` logic persists and `decreaseKey` remains correct over an active workload.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 regression test with the failing repro (n=9 drain + n=20 shuffled drain 20/20)
- [x] #2 root cause fixed, no heuristic
- [x] #3 full suite + coverage gate green
- [x] #4 task file honest
<!-- AC:END -->

## Progress Notes
- 2026-10-18: fixed in PR #184 — c.parent isolation restored in poll children loop; regression tests added and passing; task closed.
