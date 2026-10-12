import { PatriciaTrie } from './src/data-structures/patricia-trie/patriciaTrie';

const trie = new PatriciaTrie<string | undefined>();
trie.set('hello', undefined);
console.log('trie.has("hello"):', trie.has('hello'));
