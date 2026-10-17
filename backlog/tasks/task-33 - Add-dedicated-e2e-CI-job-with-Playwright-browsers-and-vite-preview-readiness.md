---
id: TASK-33
title: Add dedicated e2e CI job with Playwright browsers and vite preview readiness
status: Done
assignee: []
created_date: '2026-10-16 10:50'
updated_date: 2026-10-17
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
- [x] #1 CI runs test/e2e in a dedicated job with Playwright browsers installed
- [x] #2 Job builds the bundle before e2e (pretest:e2e or equivalent)
- [ ] #3 Job is green on master and does not block the fast unit job (note: Green verified by CI run 39045538985 on ec61133 (e2e, lint, build, packaging all success; e2e is a separate parallel job and does not gate the unit job).)
- [x] #4 Failure output (traces/screenshots) is uploaded as a CI artifact
<!-- AC:END -->

## Progress Notes
- Added an independent `e2e` job to `.github/workflows/ci.yml`.
- This job checks out the repo, sets up Node.js 22.x, runs `npm ci`, and installs Chromium with dependencies (`npx playwright install --with-deps chromium`).
- Runs `npm run pretest:e2e` to build the required bundles for the visualizer.
- Runs `npm run test:e2e` for the e2e testing.
- Includes artifact upload using `actions/upload-artifact@v4` on failure for `playwright-report/` and `test-results/`.
- Fixed 404 error during CI E2E runs caused by Vite preview root vs outDir misalignment on Linux. The previous `vite preview --outDir dist/visualization` command was resolving against the config `root: 'visualization'` to a nonexistent path. This was fixed by using `vite preview dist/visualization/ --outDir .` in both the vitest test harness and the playwright config, returning valid HTTP 200 responses.
- Verified cleanly via an E2E run against a clean rebuild.
