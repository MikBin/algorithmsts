---
id: TASK-40
title: Fix AA-tree and WAVL-tree size corruption on duplicate adds (H1)
status: Done
assignee: []
created_date: '2026-10-21'
completed_date: '2026-10-21'
labels:
  - data-structures bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 40000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
`src/data-structures/aa-tree/aaTree.ts:52-54` (`add()` increments `_size` unconditionally) while `_insert` at `:62` ignores duplicates; same pattern in `src/data-structures/wavl-tree/wavlTree.ts:78-80`. Runtime: `AA size 2 array [1]` on duplicate adds — `size` and `toArray().length` diverge. Never covered by TASK-24 acceptance criteria.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 `_size` increments only when insertion actually creates a node (both AA-tree and WAVL-tree)
- [x] #2 Regression test: duplicate adds leave `size === toArray().length`
- [x] #3 Full suite + coverage gate green
<!-- AC:END -->

## Progress Notes
- 2026-10-21: merged in PR #186 (SHA 80e1196) — `_insert` returns creation flag, both trees fixed, regression tests asserting `size === toArray().length`; task closed.
