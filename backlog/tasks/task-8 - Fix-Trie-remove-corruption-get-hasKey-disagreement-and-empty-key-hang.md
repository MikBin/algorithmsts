---
id: TASK-8
title: 'Fix Trie remove corruption, get/hasKey disagreement, and empty-key hang'
status: To Do
assignee: []
created_date: '2026-10-12 10:36'
labels:
  - data-structures bug
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: bug
ordinal: 8000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
trie/trie.ts three bugs: (1) remove() at 196-204 finds the node via getNode without checking terminal, so removing a non-terminal prefix returns true, decrements _size, and leaves the real key intact; (2) get() at 174-177 ignores terminal so a removed key still returns its value while hasKey says false; (3) add('') at 98-112 recurses forever because charAt(0) of '' is '' and the end check 0 === key.length - 1 is never true. See review section 3, finding C7.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 remove(prefix-of-existing-key) returns false and does not change size
- [ ] #2 get() returns undefined for removed keys, consistent with hasKey
- [ ] #3 add('') terminates: either stores a value at root or throws ArgumentError, documented
- [ ] #4 Tests for all three cases
<!-- AC:END -->
