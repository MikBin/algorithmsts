---
id: TASK-22
title: Repair documentation pipeline and README examples
status: In Progress
assignee: []
created_date: '2026-10-12 10:38'
labels:
  - docs
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: docs
ordinal: 22000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
README.md documents APIs that do not exist: BinarySearch.search/closestSearch, CountingSort.sort, RadixSortNumbers.sort, NgramSimilarity.calculate are all instance-based .execute({}) in reality, and new AlgorithmSelector() is wrong (static class). The suite meant to catch this (test/e2e/documentationExamples.test.ts) has describe.skip blocks, one hiding an actual ReferenceError (line 34 declares comparisonFn but uses compareFn). Also: package.json build:docs runs node tools/build-and-docs.ts which plain Node cannot execute (use tsx); tools/gh-pages-publish.ts requires absent shelljs; typedoc.json omits vector-similarity and interfaces entry points and pins gitRevision main while CI runs on master; docs/ is gitignored so generated docs can never be committed. See review sections 7 and 6 (B5).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 All README algorithm examples use the real .execute() API and run green
- [ ] #2 documentationExamples tests un-skipped and fixed (no ReferenceError)
- [x] #3 npm run build:docs executes successfully
- [ ] #4 typedoc includes all 8 entry points; gitRevision matches the CI branch
- [ ] #5 docs publish path decided and documented (or gh-pages tooling removed)
<!-- AC:END -->

## Progress Notes
2026-10-16: PR #143 (484c4a9) repaired the pipeline and README examples (AC1) and build:docs now runs via tsx (AC3); the ReferenceError in documentationExamples.test.ts is fixed. Residual: one `it.skip` remains at test/e2e/documentationExamples.test.ts:300 (AC2); typedoc.json still pins `gitRevision: "main"` while CI runs on master (AC4); docs publish path (docs/ untracked) not yet decided (AC5).
