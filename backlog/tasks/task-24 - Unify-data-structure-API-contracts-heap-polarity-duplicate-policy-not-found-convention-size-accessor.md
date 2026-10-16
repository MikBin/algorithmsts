---
id: TASK-24
title: >-
  Unify data-structure API contracts: heap polarity, duplicate policy, not-found
  convention, size accessor
status: Done
completed_date: '2026-10-16 10:50'
assignee: []
created_date: '2026-10-12 10:38'
labels:
  - data-structures api
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: enhancement
ordinal: 24000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Library-wide contract inconsistencies (review sections 2-3): comparator polarity inverted across heaps (BinaryHeap/DAryHeap/LeftistHeap max vs WeakHeap/SkewHeap/PairingHeap/FibonacciHeap/BinomialHeap min with identical comparators); duplicate policy undocumented and structure-specific (rejected vs silently stored vs multiset); empty/not-found returns mix null, undefined, -1, and sentinel nodes; size() method in some structures vs get size() in others (LFUCache/OrderStatisticTree expose none); BST/AVL default comparator (a-b) silently drops strings; height conventions disagree across trees. Write a contracts doc, decide conventions, and migrate structures with deprecation notes where behavior changes. See review section 3, findings H2, 3.3-3.5, 1.3.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Contracts doc added to docs/ covering comparator polarity, duplicates, not-found, size, height
- [x] #2 All heaps share one default polarity or ship explicit Min/Max variants
- [x] #3 get size() everywhere; missing sizes added
- [x] #4 Shared default comparator that works for strings; BST/AVL adopt it
- [x] #5 Behavior changes documented in CHANGELOG
<!-- AC:END -->
