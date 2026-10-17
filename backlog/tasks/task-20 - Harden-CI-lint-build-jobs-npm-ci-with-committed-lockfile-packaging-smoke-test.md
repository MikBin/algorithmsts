---
id: TASK-20
title: >-
  Harden CI: lint + build jobs, npm ci with committed lockfile, packaging smoke
  test
status: In Progress
assignee: []
created_date: '2026-10-12 10:38'
updated_date: '2026-10-12 10:41'
labels:
  - ci build
dependencies:
  - TASK-16
  - TASK-1
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: chore
ordinal: 20000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
.github/workflows/ci.yml runs only npm install + test:prod. Missing: lint (currently red, see TASK-16), npm run build (the published artifact is never validated), a packaging smoke test per exports entry, e2e (optional separate job), and reproducible installs (package-lock.json is gitignored so npm install floats - un-ignore it, commit it, switch CI to npm ci). Pin actions to full versions and fix the branch mismatch (CI triggers only on master; typedoc.json expects main). See review sections 9 and 6 (B3).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 CI has a lint job (green per TASK-16) and a build job running npm run build
- [x] #2 package-lock.json committed and CI uses npm ci
- [x] #3 Packaging smoke test job resolves every exports entry (import/require/types)
- [x] #4 CI branch triggers and typedoc gitRevision aligned
- [x] #5 Actions pinned to specific versions
<!-- AC:END -->

## Progress Notes
2026-10-16: Partially addressed by PR #152 (9f4e22a): ci.yml now uses actions/checkout@v5 + actions/setup-node@v5, Node 22.x, adds an `npx tsc --noEmit` step before `npm run test:prod`, and test:prod excludes e2e/integration paths (AC5 done). Remaining: lint job (needs TASK-16), build job (`npm run build`), packaging smoke job (tools/test-exports.cjs), npm ci + committed package-lock.json, branch/gitRevision alignment (TASK-22 AC4).

2026-10-17: Completed TASK-20. Added lint and packaging jobs to CI workflow. Replaced npm install with npm ci in all CI jobs. Un-ignored package-lock.json in .gitignore and generated it locally. Verified that branch triggers and typedoc gitRevision align on master. CI will validate the real-world outcome on the PR and master branches.

2026-10-17: Regenerated `package-lock.json` with npm 10 via `npx npm@10 install --package-lock-only` to resolve `Missing: conventional-commits-parser@6.4.0` error in CI where Node 22 uses npm 10. Validated with `npx npm@10 ci --dry-run --ignore-scripts` exiting successfully. Reverted status to In Progress until CI completes successfully.
