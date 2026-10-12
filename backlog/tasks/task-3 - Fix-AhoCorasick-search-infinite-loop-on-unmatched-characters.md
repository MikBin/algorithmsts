---
id: TASK-3
title: Fix AhoCorasick search infinite loop on unmatched characters
status: To Do
assignee: []
created_date: '2026-10-12 10:35'
labels:
  - data-structures bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 3000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
aho-corasick/ahoCorasick.ts:43: while (node && !node.children.has(ch)) node = node.fail ?? this.root; At the root, fail is null so node is reassigned to this.root forever. Any input character that does not start a pattern hangs the process. Guard must be node !== this.root. Verified by trace. See review section 3, finding C2.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 search() terminates on arbitrary text containing characters absent from all patterns
- [ ] #2 Match positions still correct for texts with matches
- [ ] #3 Regression test with unmatched characters added
<!-- AC:END -->
