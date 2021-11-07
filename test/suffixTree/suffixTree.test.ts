import { SuffixTree } from '../../src/suffixTree/index'

describe('suffix tree test: ', () => {
  const bananTree = new SuffixTree('banana')
  const mississippiTree = new SuffixTree('mississippi')

  it('find substring works. and returns -1 when string is not found', () => {
    expect(bananTree.findSubstring('nana')).toEqual(2)
    expect(bananTree.findSubstring('not found')).toEqual(-1)
    expect(bananTree.findSubstring('ba')).toEqual(0)
    expect(bananTree.findSubstring('na')).toEqual(2)

    expect(mississippiTree.findSubstring('mis')).toEqual(0)
    expect(mississippiTree.findSubstring('not found')).toEqual(-1)
    expect(mississippiTree.findSubstring('pi')).toEqual(9)
    expect(mississippiTree.findSubstring('ippi')).toEqual(7)
  })

  it('counts all occurences', () => {
    /**@TODO add 1 to count when node is terminal too */
    expect(bananTree.findAllSubstring('na')[2]).toEqual(2)
    expect(mississippiTree.findAllSubstring('is')[2]).toEqual(2)
  })
})
