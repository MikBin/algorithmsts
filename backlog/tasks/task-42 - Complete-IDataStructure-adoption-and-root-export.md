---
id: TASK-42
title: Complete data-structure contracts — IDataStructure adoption and root export (H4 follow-up)
status: Done
assignee: []
created_date: '2026-10-21'
completed_date: '2026-10-21'
labels:
  - data-structures api
dependencies:
  - TASK-24
  - TASK-27
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: enhancement
ordinal: 42000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Only ~15 of ~74 structures extend `BaseDataStructure`, so the advertised `IDataStructure` contract (`size`/`isEmpty`/`clear`/`iterator`/`contains`) covers a minority of the library (reviewer finding 4). Residual from §1: root `main`/`module`/`types` (`package.json:6-9`) still point at only the algorithms module with no `"."` export, so `require('@mikbin80/algorithmsts')` is a partial surface.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Either adopt `IDataStructure` broadly or narrow the advertised contract in docs (no false promise)
- [x] #2 Root `"."` export added (or `main` documented as algorithms-only); packaging smoke test covers it
- [x] #3 CHANGELOG documents any behavior change; full suite green
<!-- AC:END -->

## Progress Notes
- 2026-10-21: merged in PR #189 (SHA 5e747ff) — contract narrowed in docs (existing `docs/data-structure-contracts.md` confirmed current), root `"."` export added via `src/index.ts` + rollup, `test-exports.cjs` extended, CHANGELOG updated; task closed.
