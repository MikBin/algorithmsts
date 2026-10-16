---
id: TASK-1
title: >-
  Fix npm packaging: emit vector-similarity ESM/CJS and fix declaration output
  paths
status: Done
assignee: []
created_date: '2026-10-12 10:35'
labels:
  - packaging build
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 1000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
package.json exports ./vector-similarity to dist/vector-similarity/index.js|index.cjs but rollup.config.ts:186-200 only emits vector-similarity.umd.js, so the import fails at runtime. Also tsconfig.json:18-19 (rootDir '.', outDir './dist') puts declarations under dist/src/** while every exports entry points at dist/types/**, so all types conditions are broken. Nothing catches this because CI never builds. See ARCHITECTURE_REVIEW_JULES.md sections 1 and 6 (B1, B2).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Rollup emits dist/vector-similarity/index.js and index.cjs (or exports are re-pointed and documented)
- [x] #2 dist/types/<module>/index.d.ts exists for every entry in the exports map after npm run build
- [x] #3 Smoke test resolves every exports condition (import + require + types) for all 8 entry points
- [ ] #4 Packaging smoke test runs in CI (tracked and implemented under TASK-20)
<!-- AC:END -->

## Progress Notes
2026-10-16: AC1-3 done via PR #137 (0a10a0e) - rollup emits vector-similarity ESM/CJS, tsconfig emitDeclarationOnly -> dist/types, tools/test-exports.cjs wired as `npm run test:packaging`. AC4 (run smoke test in CI) deferred to TASK-20.
2026-10-16: Task closed. AC1-3 verified on master (PR #137). AC4 formally tracked under TASK-20 (CI packaging smoke test job).
