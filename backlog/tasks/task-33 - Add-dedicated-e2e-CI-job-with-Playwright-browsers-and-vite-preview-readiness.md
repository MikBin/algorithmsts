---
id: TASK-33
title: Add dedicated e2e CI job with Playwright browsers and vite preview readiness
status: To Do
assignee: []
created_date: '2026-10-16 10:50'
labels:
  - ci e2e
dependencies:
  - TASK-32
references:
  - ARCHITECTURE_REVIEW_JULES.md
  - .github/workflows/ci.yml
priority: medium
type: chore
ordinal: 33000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
PR #152 excluded test/e2e from `test:prod` because CI never installs Playwright browsers and never builds the bundle the e2e suite needs - so e2e now only runs locally and has zero CI coverage. TASK-32 already made the e2e pipeline use a single vite preview server with readiness checks (PR #147). Remaining work: add a separate CI job (or workflow) that runs `npm run pretest:e2e` (build + vite build), installs browsers (`npx playwright install --with-deps chromium`), and runs `npm run test:e2e`, with the preview server readiness handled by the existing setup. Keep it parallel/optional so unit CI stays fast.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 CI runs test/e2e in a dedicated job with Playwright browsers installed
- [ ] #2 Job builds the bundle before e2e (pretest:e2e or equivalent)
- [ ] #3 Job is green on master and does not block the fast unit job
- [ ] #4 Failure output (traces/screenshots) is uploaded as a CI artifact
<!-- AC:END -->
