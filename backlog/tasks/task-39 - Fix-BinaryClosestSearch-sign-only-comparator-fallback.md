---
id: TASK-39
title: Fix BinaryClosestSearch distance semantics for sign-only comparators
status: Done
assignee: []
created_date: '2026-10-21'
completed_date: '2026-10-21'
labels:
  - algorithms bug
dependencies:
  - TASK-13
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 39000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
TASK-13 is marked Done but verification (independent reviewer + Jules session 302286986830966497 + local check) shows A5 is only mitigated, not fixed. `src/algorithms/searching/binary-search/binarySearch.ts:176-184` still falls back to `Math.abs(compareFn(...))` as distance when no `distanceFn` is given. For any sign-only comparator (-1/0/1, localeCompare) every distance is 1, the tie branch fires, and the result is arbitrary. `test/algorithms/searching/binary-search/binarySearch.test.ts:82` even asserts the wrong index and labels it "legacy fallback".
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 `distanceFn` is required for closest semantics, or distance is derived from actual values (not comparator magnitude); `Math.abs(compareFn)` fallback removed
- [x] #2 Sign-only (-1/0/1) and localeCompare comparators return the correct closest element
- [x] #3 Test at binarySearch.test.ts:82 updated to assert the correct element (no "legacy fallback" label)
- [x] #4 Full suite + coverage gate green
<!-- AC:END -->

## Progress Notes
- 2026-10-21: merged in PR #187 (SHA 0b1249e) — `distanceFn` required, fallback removed, legacy-fallback test corrected, sign-only/localeCompare regression coverage added; task closed.
