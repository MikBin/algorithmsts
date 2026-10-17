const fs = require('fs');

let content = fs.readFileSync('backlog/tasks/task-26 - Consolidate-duplicated-code-VacuumFilter-dead-graph-files-shared-iterators-hashers-geometry-UnionFind.md', 'utf8');

content = content.replace('status: To Do', 'status: Done');

content = content.replace('- [ ] #1', '- [x] #1');
content = content.replace('- [ ] #2', '- [x] #2');
content = content.replace('- [ ] #3', '- [x] #3');
content = content.replace('- [ ] #4', '- [x] #4');
content = content.replace('- [ ] #5', '- [x] #5');

content += "\n## Progress Notes\n\nAll tasks completed. Removed `VacuumFilter` and its tests, consolidated `ArrayIterator` and `InOrderIterator` under `src/core/iterators`, consolidated hash utility in `src/core/utils/hash.ts` and geometry utils in `src/data-structures/geometry.ts`. `VacuumFilter` was dropped, duplicated graph implementations removed and tests updated (which changes `traversalOrder` to `visited` on output). Note: dead graph files in `src/graphs/` were already deleted in a previous PR.\n";

fs.writeFileSync('backlog/tasks/task-26 - Consolidate-duplicated-code-VacuumFilter-dead-graph-files-shared-iterators-hashers-geometry-UnionFind.md', content);
