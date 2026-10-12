---
id: TASK-14
title: >-
  Validate sorting inputs: RadixSortStrings non-ASCII crash, CountingSort
  non-integers, digitCount/getNthDigit domain
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
ordinal: 14000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
algorithms/sorting: (1) radixSort.ts:186-187 RadixSortStrings throws TypeError on any code unit above 255 (257 buckets, ASCII limit only in a comment); (2) countingSort.ts:72-74 throws RangeError or silently mis-sorts fractional inputs; (3) src/utils/number.ts digitCount/getNthDigit silently truncate non-integers and are fragile near powers of 10 (log10 rounding), feeding wrong pass counts to radix sort. Validate inputs with ArgumentError and document domains. See review section 4, finding A7.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 RadixSortStrings throws ArgumentError for code units > 255 (or gains Unicode support - pick one)
- [ ] #2 CountingSort validates integers or documents/floors explicitly
- [ ] #3 digitCount/getNthDigit documented, validated, and unit-tested in test/utils/
- [ ] #4 No raw TypeError/RangeError escapes the public API for these sorts
<!-- AC:END -->
