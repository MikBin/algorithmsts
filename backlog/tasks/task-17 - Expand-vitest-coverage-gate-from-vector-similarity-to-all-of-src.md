---
id: TASK-17
title: Expand vitest coverage gate from vector-similarity to all of src/
status: Done
assignee: []
created_date: '2026-10-12 10:38'
updated_date: '2026-10-12 10:41'
labels:
  - testing ci
dependencies:
  - TASK-18
  - TASK-19
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: task
ordinal: 17000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
vitest.config.ts:11-17 scopes coverage.include to src/vector-similarity/** only (100% thresholds there), so the ~45 untested modules never enter coverage accounting and CI stays green regardless. Expand include to src/** with realistic initial thresholds derived from the measured baseline, then ratchet upward. Remove the stale comment at line 7 (coverage-v8 IS installed) and keep a single coverage provider (@vitest/coverage-v8) - drop the duplicate istanbul provider. Sequence after the test backfill tasks so thresholds are meaningful. See review section 5, finding T2.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 coverage.include covers src/**
- [x] #2 Initial thresholds set from measured baseline and documented in config
- [x] #3 Only one coverage provider remains in devDependencies
- [x] #4 Stale comment removed; CI enforces the gate
<!-- AC:END -->

## Progress Notes
- Measured baseline coverage for `src/**`:
  - Lines: 86.28% -> Floor threshold set to 86
  - Statements: 83.93% -> Floor threshold set to 83
  - Branches: 76.17% -> Floor threshold set to 76
  - Functions: 79.93% -> Floor threshold set to 79
- Updated vitest.config.ts with the new thresholds and broadened include.
- Removed `@vitest/coverage-istanbul` from `devDependencies`.
- Updated package-lock.json using npm@10.
