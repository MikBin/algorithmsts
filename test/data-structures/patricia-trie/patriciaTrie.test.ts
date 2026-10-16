import { describe, it, expect } from 'vitest';
import { PatriciaTrie } from '../../../src/data-structures/patricia-trie/patriciaTrie';

describe('PatriciaTrie', () => {
  it('should support undefined values correctly', () => {
    const trie = new PatriciaTrie<number | undefined>();
    trie.set('hello', 1);
    trie.set('world', undefined);

    expect(trie.has('hello')).toBe(true);
    expect(trie.has('world')).toBe(true);
    expect(trie.has('missing')).toBe(false);

    expect(trie.get('hello')).toBe(1);
    expect(trie.get('world')).toBeUndefined();
    expect(trie.get('missing')).toBeUndefined();
  });
});
