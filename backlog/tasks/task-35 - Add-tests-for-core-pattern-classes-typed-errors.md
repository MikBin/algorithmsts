---
id: TASK-35
title: Add tests for core pattern classes (AbstractFactory, StrategyContext, TemplateMethod typed errors)
status: To Do
assignee: []
created_date: '2026-10-16 10:50'
labels:
  - testing core
dependencies:
  - TASK-23
references:
  - src/core/patterns
priority: low
type: test
ordinal: 35000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
PR #154 retyped the throws in `src/core/patterns` (AbstractFactory, StrategyContext, TemplateMethod.validateInput -> ArgumentError) but no tests cover those classes - there are no pattern tests in the repo, and the 100% coverage gate in vitest.config.ts is scoped to src/vector-similarity only. Add minimal unit tests asserting the typed errors and basic behavior for these classes (and the constrained sort strategies from Strategy.ts) in test/core/patterns/ mirroring src.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Unit tests exist for AbstractFactory placeholder methods (typed error assertions)
- [ ] #2 Unit tests exist for StrategyContext and the constrained sort strategies
- [ ] #3 Unit tests exist for TemplateMethod validateInput (typed error path) and the search/sort template behavior
- [ ] #4 Tests run green in CI (included in test:prod scope)
<!-- AC:END -->
