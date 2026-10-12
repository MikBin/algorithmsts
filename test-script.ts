import { HashMap } from './src/data-structures/hash-map/hashMap';

const map = new HashMap<string, string | undefined>();
map.set('a', undefined);
console.log('map.has("a"):', map.has('a'));
