---
id: TASK-29
title: Clean repository litter and add build clean step
status: Done
completed_date: '2026-10-16 10:50'
assignee: []
created_date: '2026-10-12 10:39'
labels:
  - hygiene
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: low
type: chore
ordinal: 29000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Root-level strays to delete or relocate into docs/: test_dummy.js (d3 scratch), replace_remaining.cjs and replace_remaining2.cjs (one-off codemods), radix.patch (unapplied 444-line diff), benchmark_results.json (unrelated Fastify benchmark output), TODO_NEXT.md (agent session notes), Analysis of Null Similarity Scores.md and any_usage_report.md (move to docs/), empty scripts/ directory, test/data-structures/index.ts and other empty test barrels, dead test/scripts/ runners invoked by nothing, visualization/vector-similarity-analysis scratch in tmp/. Also: dist/ on disk mixes three generations of stale output and nothing cleans it - wire the already-installed rollup-plugin-delete (or a prebuild clean script) and consider extracting visualization/ to its own workspace. Also fill empty package.json description and keywords. See review sections 9 and 6 (B4).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Listed stray files deleted or relocated under docs/
- [x] #2 npm run build starts from a clean dist/ (rollup-plugin-delete or clean script)
- [x] #3 Empty test barrels and dead test/scripts removed
- [x] #4 package.json description and keywords filled
<!-- AC:END -->
