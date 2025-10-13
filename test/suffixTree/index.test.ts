import { SuffixTree } from '../../src/suffixTree'
import { describe, it, expect } from 'vitest'

describe('SuffixTree', () => {
  it('should create a suffix tree', () => {
    const tree = new SuffixTree('test')
    expect(tree).toBeInstanceOf(SuffixTree)
  })

  it('should find a substring', () => {
    const tree = new SuffixTree('test')
    expect(tree.findSubstring('es')).toBe(1)
  })

  it('should not find a substring that does not exist', () => {
    const tree = new SuffixTree('test')
    expect(tree.findSubstring('foo')).toBe(-1)
  })

  it('should handle an empty string', () => {
    const tree = new SuffixTree('')
    expect(tree.findSubstring('a')).toBe(-1)
  })

  it('should handle a string with repeated characters', () => {
    const tree = new SuffixTree('banana')
    expect(tree.findSubstring('ana')).toBe(1)
  })

  it('should handle multiple strings', () => {
    const tree = new SuffixTree('banana')
    tree.addString('ananas')
    expect(tree.findSubstring('anas')).not.toBe(-1)
  })

  // it('should find all occurrences of a substring', () => {
  //   const tree = new SuffixTree('banana')
  //   const [, , count] = tree.findAllSubstring('ana')
  //   expect(count).toBe(2)
  // })

  it('should find the longest repeated substrings', () => {
    const tree = new SuffixTree('bananapanama')
    const longest = tree.findLongestRepeatedSubstrings(1)
    expect(longest[0]).toBe('ana')
  })

  it('should handle a more complex case', () => {
    const tree = new SuffixTree('mississippi')
    expect(tree.findSubstring('issi')).toBe(1)
    // const [, , count] = tree.findAllSubstring('issi')
    // expect(count).toBe(2)
    const longest = tree.findLongestRepeatedSubstrings(1)
    expect(longest[0]).toBe('issi')
  })
})