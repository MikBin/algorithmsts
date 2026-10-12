import { KDRangeTree } from './src/data-structures/range-tree/kdRangeTree';
const pts = [[3, 2], [1, 5], [4, 1]];
const orig = [...pts];
new KDRangeTree(pts);
console.log(pts[0], orig[0]);
