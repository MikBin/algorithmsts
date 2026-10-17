---
id: TASK-17
title: Expand vitest coverage gate from vector-similarity to all of src/
status: Done
assignee: []
created_date: '2026-10-12 10:38'
updated_date: '2026-10-17 10:55'
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
- Measured baseline coverage for `src/**` (Provider: v8, Date: 2026-10-17):
  - Lines: 86.08% (worst-case Node 24: 86.07%) -> Floor threshold set to 85
  - Statements: 86.08% -> Floor threshold set to 85
  - Branches: 91.52% (worst-case Node 24: 91.40%) -> Floor threshold set to 90
  - Functions: 81.92% (worst-case Node 24: 80.31%) -> Floor threshold set to 80
- Updated vitest.config.ts with the new thresholds (with margin), excluded types to avoid 0/0 entries, and broadened include.
- Removed `@vitest/coverage-istanbul` from `devDependencies`.
- Updated package-lock.json using npm@10.
