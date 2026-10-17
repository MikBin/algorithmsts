---
id: TASK-36
title: >-
  Pre-1.0 cleanup: BST/AVL field encapsulation, AbstractFactory placeholders,
  breaking-change notes
status: Done
assignee: [jules]
created_date: '2026-10-16 10:50'
labels:
  - api contracts
dependencies:
  - TASK-23
  - TASK-24
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: enhancement
ordinal: 36000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Residuals from TASK-23/24 verified 2026-10-16: (1) `BinarySearchTree` still exposes public mutable `root`/`compare` (invariant risk; `size` is already a getter via PR #145) - same audit needed for AVLTree. (2) `AbstractFactory` placeholder methods still throw (now typed `ArgumentError` via PR #154) instead of being implemented or removed before 1.0. (3) Breaking API changes are undocumented for consumers: `BinaryHeap.merge` is now void/destructive (PR #153), deprecated `size()` methods were removed from PriorityQueue/ViolationHeap (PR #149) - capture these in CHANGELOG/release notes and consider a semver minor note for 0.x consumers.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 BST/AVL internal state encapsulated (private fields + accessors; no public mutation of root/compare)
- [x] #2 AbstractFactory placeholders either implemented or removed with a documented migration path
- [x] #3 CHANGELOG documents BinaryHeap.merge void/destructive semantics and the size() removals
- [x] #4 Tests updated for any encapsulation changes; full suite green
<!-- AC:END -->

## Progress Notes
- Encapsulated BST internal state (renamed root/compare to _root/_compare and added getter).
- Encapsulated AVL internal state in the same way.
- Replaced `.getSize()` with `.size` in tests and removed `getSize()` completely.
- Removed AbstractFactory placeholders (`AbstractFactory.ts`, `AbstractFactory.test.ts`, and index exports).
- Documented all breaking changes in `CHANGELOG.md` under the Unreleased section.
