---
id: TASK-41
title: Rewrite README stale algorithm APIs to real .execute() contract (TASK-22 follow-up)
status: Done
assignee: []
created_date: '2026-10-21'
completed_date: '2026-10-21'
labels:
  - docs
dependencies:
  - TASK-22
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: docs
ordinal: 41000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
TASK-22 is marked Done but README still teaches non-existent APIs (reviewer finding 2, Jules item g): `BinarySearch.search`, `BinarySearch.closestSearch`, `CountingSort.sort`, `RadixSortNumbers.sort`, `NgramSimilarity/JaroDistance/LevenshteinDistance.calculate`, `new Trie<string, number>()` + `trie.insert(...)`, `@mikbin80/algorithmsts/compatibility`, `new AlgorithmSelector()`. Root import example is wrong (`main` points at algorithms module, no `"."` export). No un-skipped doc-example suite catches it.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Every README algorithm example uses the real instance-based `.execute({...})` API and `Trie.add`; `./compatibility` and `new AlgorithmSelector()` examples removed/corrected
- [x] #2 Root import example aligned with actual exports (or `"."` export added — coordinate with TASK-42)
- [x] #3 Un-skipped runnable doc-example test covering every README snippet (no `describe.skip`/`it.skip` hiding ReferenceErrors)
- [x] #4 Full suite + coverage gate green
<!-- AC:END -->

## Progress Notes
- 2026-10-21: merged in PR #190 (SHA 5d94c54) — README rewritten to `.execute()`, `Trie.add`, root `"."` imports; doc-example suite un-skipped with 0 skips; task closed. Note: `Trie.startsWith()` examples were changed to `.contains()` — flagged for a future review pass.
