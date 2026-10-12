---
id: TASK-7
title: Fix SuffixTree permanently broken after clear()
status: To Do
assignee: []
created_date: '2026-10-12 10:36'
labels:
  - data-structures bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 7000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
suffix-tree/suffixTree.ts:62-68 and 440-446: clear() replaces this.root, but UkkonenAlgorithm captured this.tree.root once at construction and keeps bottom/activeNode linked to the old tree. After clear(), addString builds into the dead root while findSubstring searches the new empty one. Reinitialize the algorithm state on clear. See review section 3, finding C6.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 clear() followed by addString + findSubstring works correctly
- [ ] #2 Regression test: build, clear, rebuild, search round-trip
<!-- AC:END -->
