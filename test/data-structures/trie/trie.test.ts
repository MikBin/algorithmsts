import { beforeAll, describe, expect, it } from 'vitest';
import { Trie } from '../../../src/data-structures/trie';
import { ArgumentError } from '../../../src/core/validation/ArgumentError';

describe('trie basics functionalities: ', () => {
  let myTrieA: Trie<string>;

  beforeAll(() => {
    myTrieA = new Trie();
  });

  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('remove(prefix) returns false, no size change', () => {
    myTrieA.add('abc', 'abc');
    const sizeBefore = myTrieA.size;
    const result = myTrieA.remove('ab');

    expect(result).toBe(false);
    expect(myTrieA.size).toBe(sizeBefore);
  });

  it('get() returns undefined for removed keys, consistent with hasKey', () => {
    myTrieA.add('test', 'test-value');
    myTrieA.remove('test');

    expect(myTrieA.hasKey('test')).toBe(false);
    expect(myTrieA.get('test')).toBeUndefined();
  });

  it('add(\'\') throws ArgumentError', () => {
    expect(() => myTrieA.add('', 'empty')).toThrow(ArgumentError);
  });
});
