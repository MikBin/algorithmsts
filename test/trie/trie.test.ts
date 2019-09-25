import { Trie } from '../../src/trie/trie'

describe('trie basics functionalities: ', () => {
  const words: Array<string> = ['abc', 'abdec', 'decga', 'abcd']
  const myTrieA: Trie<string> = new Trie()
  const myTrieB: Trie<string> = new Trie()
  words.forEach((w, i) => {
    myTrieB.add(w, w)
  })
  console.log(myTrieA, myTrieB)
  it('works', () => {
    expect(true).toBeTruthy()
  })
})
