import { SplayTree } from './src/data-structures/splay-tree/splayTree';

const tree = new SplayTree<number>((a, b) => a - b);
tree.add(10);
tree.add(20);
tree.add(30);

const origRoot = (tree as any).root.key;
tree.contains(10);
const newRoot = (tree as any).root.key;

console.log('origRoot:', origRoot);
console.log('newRoot:', newRoot);
