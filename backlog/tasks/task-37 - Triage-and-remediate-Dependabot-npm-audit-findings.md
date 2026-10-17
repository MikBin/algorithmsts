---
id: TASK-37
title: "Triage and remediate npm audit / Dependabot findings"
status: Done
assignee: []
created_date: '2026-10-16'
labels:
  - security dependencies
dependencies:
  - TASK-20
references: []
priority: high
type: chore
ordinal: 37000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
GitHub Dependabot reports 5 findings on master as of 2026-10-16 (1 critical, 1 high, 3 moderate). The executing session must enumerate them via `npm audit` / `npm audit fix --dry-run`, upgrade affected direct or transitive dependencies within semver-compatible ranges (major bumps only with justification + full test verification), verify with `npm run lint`, `npx tsc --noEmit`, `npm test` and `npm run build`, and keep package-lock.json committed and consistent.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 `npm audit` reports no critical or high findings (or documented exceptions with rationale)
- [x] #2 moderate findings triaged (fixed or documented)
- [x] #3 full suite green after upgrades
- [x] #4 lockfile committed and CI uses it
<!-- AC:END -->

## Progress Notes
- Initial audit showed 59 vulnerabilities (5 critical, 39 high, 13 moderate, 2 low).
- Targeted fixes applied using safe overrides for deep dependencies like `basic-ftp`, `tinypool`, `tmp`, `ip-address`, `picomatch`, `postcss-selector-parser`, reducing findings to 51 vulnerabilities (4 critical, 34 high, 13 moderate).
- Production dependencies are completely clean (`npm audit --omit=dev` reports 0 vulnerabilities).
- All remaining vulnerabilities are restricted strictly to the dev tooling chain (not shipped or exercised on untrusted inputs) and require major bumps (e.g., `vitest` to v5, `release-it` to v21, `semantic-release` to v25) that either fail peer dependencies (breaking `npm ci`) or are incompatible with the strict Node 22 environment (yielding `EBADENGINE`).
- Given the CI stability constraints, the toolchain is fully functioning and green using these secured versions, and these dev-only vulnerabilities have been documented as exceptions in accordance with the AC criteria.
