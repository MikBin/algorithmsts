import { SuffixTree } from '../../src/suffixTree/index'

describe('suffix tree setup: ', () => {
  const text = 'banana'
  const myTree = new SuffixTree(text)

  it('works', () => {
    expect(true).toBeTruthy()
  })
})
