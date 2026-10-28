---
id: TASK-44
title: Harden type-safety and hygiene — no-explicit-any, release tooling, FNV dedup, execute purity
status: Done
assignee: []
created_date: '2026-10-21'
completed_date: '2026-10-28'
labels:
  - tooling
  - tech-debt
dependencies:
  - TASK-16
  - TASK-23
  - TASK-26
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: enhancement
ordinal: 44000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Grouped non-blocking residues (reviewer findings 6, 7, 8, 10): `eslint.config.cjs` has `@typescript-eslint/no-explicit-any: off`; `semantic-release` sits unused next to `release-it`/commitizen (`package.json` B6); FNV-1a `defaultHash` + JSON serializer still redeclared in 7 modules (hyperloglog, hash-map, cuckoo-filter, count-min-sketch, binary-fuse-filter, ribbon-filter, quotient-filter); every `execute()` still wraps work in `PerformanceMonitor.measureExecutionTime` with logger warn (clock is injectable at `src/performance/performance-monitor.ts`, side effect is not).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 `no-explicit-any` enabled (or scoped justification per file); `npm run lint` green in CI
- [x] #2 Unused `semantic-release` devDep removed (single release path documented)
- [x] #3 Single shared FNV-1a hasher in `src/core` used by all 7 modules (no redeclaration)
- [x] #4 `execute()` monitoring/logging injectable or removable (no un-injectable side effect on the algorithm API); purity mandate in AGENTS.md honored
- [x] #5 Full suite + coverage gate green
<!-- AC:END -->

## Progress Notes
- 2026-10-28: merged in PR #192 (SHA e9a71a2) — implemented locally after two Jules attempts stalled (first: no PR; redo: 6h+ rework loops). `no-explicit-any: error` with all 155 sites fixed via concrete types (zero disables); semantic-release removed (package.json 1-line diff); `src/core/utils/HashUtils.ts` adopted bit-identically by 7 modules (+43 tests); 13 `execute()` methods gate on single-read logger (+7 tests). tsc clean, lint exit 0, 1675 passed / 2 pre-existing skips, coverage gate passed; task closed.
