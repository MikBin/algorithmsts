---
id: TASK-6
title: Fix RStarTree forced reinsert losing child subtrees
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
ordinal: 6000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
r-star-tree/rStarTree.ts:112,141: underflow/forced-reinsert reinserts orphaned internal entries via this._insert(this.root, e.rect, undefined), inserting only the rectangle without e.child, so entire child subtrees silently become unreachable (data loss). Additionally _remove (lines 97-123) reinserts while iterating the node list being mutated, and reinsertion may split the node under iteration. See review section 3, finding C4.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Reinserted internal entries preserve child pointers; all entries remain searchable after remove-heavy workloads
- [ ] #2 No mutation of node.entries while iterating it
- [ ] #3 Tests: insert many rects, remove half, verify every remaining entry found
<!-- AC:END -->
