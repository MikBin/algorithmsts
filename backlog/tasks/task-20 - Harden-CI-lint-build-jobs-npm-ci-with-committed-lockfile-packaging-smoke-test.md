---
id: TASK-20
title: >-
  Harden CI: lint + build jobs, npm ci with committed lockfile, packaging smoke
  test
status: To Do
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
- [ ] #1 CI has a lint job (green per TASK-16) and a build job running npm run build
- [ ] #2 package-lock.json committed and CI uses npm ci
- [ ] #3 Packaging smoke test job resolves every exports entry (import/require/types)
- [ ] #4 CI branch triggers and typedoc gitRevision aligned
- [ ] #5 Actions pinned to specific versions
<!-- AC:END -->
