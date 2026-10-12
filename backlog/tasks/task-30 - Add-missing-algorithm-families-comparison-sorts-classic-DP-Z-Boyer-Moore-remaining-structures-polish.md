---
id: TASK-30
title: >-
  Add missing algorithm families: comparison sorts, classic DP, Z/Boyer-Moore,
  remaining structures polish
status: To Do
assignee: []
created_date: '2026-10-12 10:39'
labels:
  - algorithms feature
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: low
type: feature
ordinal: 30000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Gaps against the comprehensive-library positioning (review section 4): no comparison sorts (merge/quick/heap/insertion) in src/algorithms (AlgorithmSelector tests even name a BubbleSort that does not exist in src); no classic dynamic programming (LCS, LIS, knapsack, coin change, subset-sum); no Z-algorithm or Boyer-Moore string matching; suffix structures exist as data structures but have no algorithm-level functions. Also long-tail structure polish: two-three-tree never splits non-root 3-key leaves (22-27), order-statistic-tree toArray returns non-sorted order and has no balancing, suffix-array binary search uses localeCompare vs charCodeAt construction, van-emde-boas lacks delete/successor/predecessor and crashes on out-of-range insert, rope is O(n) per operation (ignores weights, rebuilds on insert), quadtree/octree/ball-tree lack max-depth and distinct-point guards (ball-tree recurses infinitely on >8 identical points), fibonacci-heap lacks decreaseKey/cascading cuts. Every new export needs JSDoc complexity + tests per AGENTS.md.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Merge/quick/heap/insertion sorts implemented with tests and complexity docs
- [ ] #2 LCS, LIS, knapsack implemented with tests
- [ ] #3 Z-algorithm and Boyer-Moore implemented with tests
- [ ] #4 At least the two-three-tree, order-statistic-tree, suffix-array, van-emde-boas, rope, and spatial-tree guard issues fixed with tests
- [ ] #5 AlgorithmSelector references only algorithms that exist in src/
<!-- AC:END -->
