---
id: TASK-15
title: Fix committed merge-conflict markers in .gitignore
status: Done
completed_date: '2026-10-16 10:50'
assignee: []
created_date: '2026-10-12 10:37'
labels:
  - hygiene git
dependencies: []
references:
  - ARCHITECTURE_REVIEW_JULES.md
priority: high
type: chore
ordinal: 15000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
.gitignore lines 14-18 contain literal conflict markers (<<<<<<< HEAD / ======= / >>>>>>> origin/master) around the assets rules. The file is corrupt and parse behavior of subsequent rules is undefined. Resolve to the intended rule set (assets + !visualization/assets/) and verify with git check-ignore. See review section 9.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 No conflict markers remain in .gitignore
- [x] #2 Intended rules preserved (assets ignored, visualization/assets not)
- [x] #3 git check-ignore sanity check passes for representative paths
<!-- AC:END -->
