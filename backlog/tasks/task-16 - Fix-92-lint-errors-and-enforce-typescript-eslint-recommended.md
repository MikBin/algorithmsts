---
id: TASK-16
title: Fix 92 lint errors and enforce @typescript-eslint/recommended
status: To Do
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
- [ ] #1 npm run lint passes with zero errors
- [ ] #2 Flat config extends @typescript-eslint/recommended
- [ ] #3 Legacy .eslintrc.json deleted
- [ ] #4 ecmaVersion and parserOptions aligned with tsconfig (ES2020)
- [ ] #5 Lint script extended to test/ and tools/ (or scoped deliberately and documented)
<!-- AC:END -->

## Progress Notes
2026-10-16: Not started. Notes from the campaign: `src/data-structures/patricia-trie/patriciaTrie.ts:43,47` uses `hasOwnProperty` which `js.configs.recommended` (`no-prototype-builtins`) will flag - prefer `Object.hasOwn`. Also lint is still absent from CI (see TASK-20).
