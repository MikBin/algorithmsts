---
id: TASK-37
title: "Triage and remediate npm audit / Dependabot findings"
status: To Do
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
- [ ] #1 `npm audit` reports no critical or high findings (or documented exceptions with rationale)
- [ ] #2 moderate findings triaged (fixed or documented)
- [ ] #3 full suite green after upgrades
- [ ] #4 lockfile committed and CI uses it
<!-- AC:END -->
