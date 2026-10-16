---
id: TASK-2
title: Fix BinomialHeap merge corruption (self-meld drops incoming tree)
status: Done
completed_date: '2026-10-16 10:50'
assignee: []
created_date: '2026-10-12 10:35'
labels:
  - data-structures bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 2000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
binomial-heap/binomialHeap.ts:34 case 2: when a and b are both present with no carry the expression evaluates to meld(a, a): the tree is melded with itself (self-referencing child), the incoming tree b is dropped while _size still counts it. add(1); add(2) alone corrupts the heap and the following poll() walks an infinite sibling chain. Verified by trace. See review section 3, finding C1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Merging two heaps preserves every element and correct size
- [x] #2 add(1); add(2) then poll() returns 1 then 2 without hanging
- [x] #3 Property test: heap contents match sorted array across randomized merge sequences
- [x] #4 Regression test added in test/data-structures/binomial-heap/
<!-- AC:END -->
