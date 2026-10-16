---
id: TASK-32
title: >-
  Fix e2e pipeline: single server strategy, readiness checks, no python3,
  vendored chart.js
status: Done
completed_date: '2026-10-16 10:50'
assignee: []
created_date: '2026-10-12 10:39'
labels:
  - testing e2e
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: medium
type: bug
ordinal: 32000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
test:e2e is fragile and silently green: pretest:e2e builds a production bundle that only the vitest e2e file consumes, served via python3 -m http.server (absent on Windows) with a fixed 2s sleep; playwright.config.ts:68-71 boots a vite dev server on port 8080 with no strictPort/url/baseURL so port contention silently drifts or times out; visualization pages load chart.js from a CDN (offline = 30s selector timeouts); missing browsers are swallowed into ctx.skip() so runs pass with zero verification; test:e2e chains vitest && playwright so a vitest failure skips playwright entirely. Pick one artifact (vite preview of the built bundle), use webServer url readiness + strictPort + baseURL, replace python3 with a Node static server, vendor chart.js locally, and fail loudly when browsers are missing. See review section 9.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 One server strategy: Playwright serves the built bundle via vite preview with readiness url and strictPort
- [x] #2 baseURL configured; specs use relative URLs
- [x] #3 No python3 dependency; Node-based static server for any vitest e2e serving
- [x] #4 chart.js served locally, no CDN dependency in tests
- [x] #5 Missing browser install fails the run instead of skipping
- [x] #6 npm run test:e2e green locally end to end
<!-- AC:END -->
