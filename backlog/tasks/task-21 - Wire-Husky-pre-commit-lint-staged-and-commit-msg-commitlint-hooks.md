---
id: TASK-21
title: Wire Husky pre-commit (lint-staged) and commit-msg (commitlint) hooks
status: To Do
assignee: []
created_date: '2026-10-12 10:38'
labels:
  - tooling git
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: chore
ordinal: 21000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
AGENTS.md claims commitlint + Husky + commitizen enforcement but .husky/ contains only the generated runtime dir with no hook files, there is no commitlint config anywhere, and lint-staged has no config - all inert. Add .husky/pre-commit (npx lint-staged) and .husky/commit-msg (npx commitlint), add a commitlint.config.cjs extending @commitlint/config-conventional, and add lint-staged config (eslint+prettier on staged TS). Verify hooks fire on a real commit. See review section 9.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 .husky/pre-commit runs lint-staged successfully
- [ ] #2 .husky/commit-msg runs commitlint successfully
- [ ] #3 commitlint.config.cjs exists and extends @commitlint/config-conventional
- [ ] #4 lint-staged configured for staged TS files
- [ ] #5 Hooks verified end-to-end with a test commit
<!-- AC:END -->
