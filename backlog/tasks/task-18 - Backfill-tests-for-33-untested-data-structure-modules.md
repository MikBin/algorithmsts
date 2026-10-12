---
id: TASK-18
title: Backfill tests for 33 untested data-structure modules
status: To Do
assignee: []
created_date: '2026-10-12 10:38'
labels:
  - testing data-structures
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: task
ordinal: 18000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Roughly 33 of 74 exported data structures have zero test references anywhere in test/, violating the AGENTS.md full-coverage mandate. This is where the critical bugs (TASK-2..TASK-8) shipped. Modules: aa-tree, aho-corasick, binomial-heap, bitset, bk-tree, circular-buffer, count-min-sketch, d-ary-heap, deque, disjoint-set, dynamic-array, fenwick-tree, hash-map, hash-set, hyperloglog, leftist-heap, lfu-cache, lru-cache, min-max-heap, monotonic-queue, monotonic-stack, order-statistic-tree, pairing-heap, patricia-trie, priority-queue, queue, sparse-set, splay-tree, stack, suffix-array, suffix-automaton, treap, vp-tree. Prioritize modules with known bugs first. See review section 5, finding T1/H3.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Every exported data structure has a test file in test/ mirroring src/
- [ ] #2 Tests cover normal, edge (empty/single/duplicate), and invalid-input cases per AGENTS.md
- [ ] #3 Modules with known bug fixes (TASK-2..TASK-8) tested first
- [ ] #4 Move the three test files co-located in src/ to test/
<!-- AC:END -->
