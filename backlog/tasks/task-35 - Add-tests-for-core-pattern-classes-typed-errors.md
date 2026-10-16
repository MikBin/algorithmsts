---
id: TASK-35
title: Add tests for core pattern classes (AbstractFactory, StrategyContext, TemplateMethod typed errors)
status: Done
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
- [x] #1 Unit tests exist for AbstractFactory placeholder methods (typed error assertions)
- [x] #2 Unit tests exist for StrategyContext and the constrained sort strategies
- [x] #3 Unit tests exist for TemplateMethod validateInput (typed error path) and the search/sort template behavior
- [x] #4 Tests run green in CI (included in test:prod scope)
<!-- AC:END -->

## Progress Notes
- Added tests for `AbstractFactory` (ListFactory, TreeFactory, FactoryCreator) with ArgumentError checks.
- Added tests for `Strategy` (StrategyContext, BubbleSortStrategy, QuickSortStrategy, LinearSearchStrategy, BinarySearchStrategy).
- Added tests for `TemplateMethod` (SortingAlgorithm, SearchAlgorithm, DataProcessingAlgorithm) with ArgumentError checks for validateInput.
- Verified unit tests pass successfully, type checking completes without errors, and no strict TS or unused vars violations occurred in the created tests.
