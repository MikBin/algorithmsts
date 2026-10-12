---
id: TASK-10
title: >-
  Fix string similarity edge cases: inverted Levenshtein empty-string return and
  Jaro single-char match window
status: To Do
assignee: []
created_date: '2026-10-12 10:37'
labels:
  - algorithms bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 10000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
algorithms/strings/similarities.ts: (1) lines 489-496: main path returns similarity (1 - d/maxLen) but early returns give 1 when exactly one string is empty, so execute({str1:'',str2:'abc'}) reports a perfect match where similarity is 0; (2) line 300: Jaro maxDist = floor(max(1,1)/2)-1 = -1 makes the match window empty, so JaroDistance('a','a') returns 0; JaroWinkler inherits both. See review section 4, findings A1 and A6.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Levenshtein similarity with one empty string returns 0, both empty returns 1
- [ ] #2 JaroDistance('a','a') returns 1; window clamped with Math.max(0, ...)
- [ ] #3 JaroWinkler tests cover single-character and empty-string cases
<!-- AC:END -->
