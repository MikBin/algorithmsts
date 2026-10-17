---
id: TASK-16
title: Fix 92 lint errors and enforce @typescript-eslint/recommended
status: In Progress
assignee: []
created_date: '2026-10-12 10:37'
labels:
  - lint hygiene
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: chore
ordinal: 16000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
npm run lint currently fails with 92 errors (unused vars, no-undef on performance, etc.). Additionally eslint.config.cjs (the live flat config) does not extend plugin:@typescript-eslint/recommended, while the dead legacy .eslintrc.json does; lint covers only src/; ecmaVersion 6 is anachronistic vs ES2020 target. See review sections 9 and 11.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 npm run lint passes with zero errors (Note: Almost done, only performance-monitor.ts Console no-undef remains)
- [x] #2 Flat config extends @typescript-eslint/recommended
- [x] #3 Legacy .eslintrc.json deleted
- [x] #4 ecmaVersion and parserOptions aligned with tsconfig (ES2020)
- [ ] #5 Lint script extended to test/ and tools/ (or scoped deliberately and documented) - Deferred to Part 2
<!-- AC:END -->

## Progress Notes
2026-10-16: Configured ESLint with recommended settings and deleted legacy config. Fixed almost all src lint errors. Deferring final test/tools lint coverage to Part 2.
