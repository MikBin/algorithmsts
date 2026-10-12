---
id: TASK-31
title: >-
  Fix purity violations in data structures: KDRangeTree input mutation, heap
  merge argument consumption, non-injectable randomness
status: To Do
assignee: []
created_date: '2026-10-12 10:39'
labels:
  - data-structures purity
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: bug
ordinal: 31000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Purity mandate violations in data structures (review section 2a): (1) kdRangeTree.ts:22 build() sorts the caller's array in place - new KDRangeTree(userPoints) reorders user data (sibling rangeTree2D.ts:23 copies first, do the same); (2) FibonacciHeap.merge (fibonacciHeap.ts:9) and BinomialHeap.merge (binomialHeap.ts:39) empty the argument heap while BinaryHeap.merge does not - pick one documented convention; (3) SkipList, CuckooFilter, VacuumFilter, IntervalSkipList call Math.random() directly - adopt Treap's injectable rng pattern (treap.ts:30); (4) lazyMaxAndSumSegmentTree query applies pending lazy updates (109-110) - document or make read-only; (5) SplayTree.contains() splays - document the mutation; (6) HashMap.entries() returns internal tuple references (hashMap.ts:40) - return copies; (7) hashMap.has() is get()!==undefined so stored undefined breaks it (also PatriciaTrie) - track presence explicitly. Also AlgorithmTestUtils ships un-injected Math.random and console.warn in public API.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 KDRangeTree does not mutate the input array; test asserts caller array unchanged
- [ ] #2 Heap merge convention decided, implemented, and documented
- [ ] #3 All randomness injectable (constructor-provided rng) in SkipList/CuckooFilter/VacuumFilter/IntervalSkipList
- [ ] #4 has() correct when values are undefined; tests added
<!-- AC:END -->
