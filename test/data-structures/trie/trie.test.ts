import { beforeAll, describe, expect, it } from 'vitest';
import { Trie } from '../../../src/data-structures/trie';
import { TrieIterator } from '../../../src/data-structures/trie/iterator';
import { ICollection } from '../../../src/core/interfaces/ICollection';
import { IDataStructure } from '../../../src/core/interfaces/IDataStructure';
import { IIterator } from '../../../src/core/interfaces/IIterator';

describe('trie basics functionalities: ', () => {
  const words: Array<string> = ['abc', 'abdec', 'decga', 'abcd']
  const myTrieA: Trie<string> = new Trie()
  const myTrieB: Trie<string> = new Trie()
  words.forEach((w, i) => {
    myTrieB.add(w, w)
  })
  it('works', () => {
    expect(true).toBeTruthy()
  })
})
