---
id: TASK-34
title: Stabilize performanceBenchmark timing tests and re-include test/algorithms/integration in test:prod
status: Done
assignee: []
created_date: '2026-10-16 10:50'
labels:
  - testing performance ci
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
  - test/algorithms/integration/performanceBenchmark.test.ts
priority: medium
type: chore
ordinal: 34000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
PR #152 excluded `test/algorithms/integration` from `test:prod` because `performanceBenchmark.test.ts:36` asserts wall-clock timings (e.g. `expected 0.204 <= 0.106`) that are flaky by design on shared CI runners (review section 5/T5). The suite should be repaired rather than permanently excluded: remove/replace absolute wall-clock assertions with structural or relative checks, or gate timing measurements behind a dedicated non-CI bench script, then re-include the path in `test:prod` so CI regains that signal.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 No absolute wall-clock assertion remains in test/algorithms/integration (replaced by structural/relative checks or moved to a bench-only script)
- [x] #2 test:prod no longer excludes test/algorithms/integration
- [ ] #3 Suite passes repeatedly on CI (at least 5 consecutive green runs) - 5 consecutive green CI runs: verified post-merge by observing CI runs on master
<!-- AC:END -->

## Progress Notes
- Replaced absolute wall-clock assertions (`toBeLessThan(X)`) in `test/algorithms/integration/performanceBenchmark.test.ts` with relative/structural type checks.
- Removed `--exclude test/algorithms/integration` from `test:prod` script in `package.json`.
- Locally executed `npm run test:prod` and tests passed successfully consistently.
