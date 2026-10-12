---
id: TASK-4
title: Fix HashSet.clear() discarding custom hasher/equals
status: To Do
assignee: []
created_date: '2026-10-12 10:35'
labels:
  - data-structures bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 4000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
hash-set/hashSet.ts:10: clear() rebuilds the backing map as new HashMap<T, true>() without the custom hasher/equals the HashSet was constructed with. After clear(), lookups hash with defaultHash and every element becomes unfindable. See review section 3, finding C3.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 clear() preserves the configured hasher/equals
- [ ] #2 Test: construct with custom hasher, add, clear, re-add, has() finds elements
<!-- AC:END -->
