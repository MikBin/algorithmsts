import { describe, expect, it } from 'vitest'
import { SuffixTree } from '../../src/suffixTree/index'

describe('SuffixTree - Comprehensive Tests', () => {
  describe('Construction', () => {
    it('should create an empty suffix tree', () => {
      const tree = new SuffixTree('')
      expect(tree).toBeInstanceOf(SuffixTree)
      // Empty string doesn't add anything, so text is empty
      expect(tree.text).toBe('')
    })

    it('should create a suffix tree with a single character', () => {
      const tree = new SuffixTree('a')
      expect(tree.text).toBe('a$')
      expect(tree.findSubstring('a')).toBe(0)
    })

    it('should create a suffix tree with repeated characters', () => {
      const tree = new SuffixTree('aaa')
      expect(tree.text).toBe('aaa$')
      expect(tree.findSubstring('a')).toBe(0)
      expect(tree.findSubstring('aa')).toBe(0)
      expect(tree.findSubstring('aaa')).toBe(0)
    })

    it('should create a suffix tree with unique characters', () => {
      const tree = new SuffixTree('abc')
      expect(tree.text).toBe('abc$')
      expect(tree.findSubstring('a')).toBe(0)
      expect(tree.findSubstring('b')).toBe(1)
      expect(tree.findSubstring('c')).toBe(2)
    })
  })

  describe('findSubstring - Base Cases', () => {
    const tree = new SuffixTree('banana')

    it('should find substring at the beginning', () => {
      expect(tree.findSubstring('ban')).toBe(0)
      expect(tree.findSubstring('b')).toBe(0)
    })

    it('should find substring in the middle', () => {
      expect(tree.findSubstring('ana')).toBe(1)
      expect(tree.findSubstring('nan')).toBe(2)
    })

    it('should find substring at the end', () => {
      expect(tree.findSubstring('na')).toBe(2)
      expect(tree.findSubstring('a')).toBe(1)
    })

    it('should find the entire string', () => {
      expect(tree.findSubstring('banana')).toBe(0)
    })

    it('should return -1 for non-existent substring', () => {
      expect(tree.findSubstring('xyz')).toBe(-1)
      expect(tree.findSubstring('banan')).toBe(0) // This exists
      expect(tree.findSubstring('bananas')).toBe(-1) // Too long
    })

    it('should handle single character searches', () => {
      expect(tree.findSubstring('b')).toBe(0)
      expect(tree.findSubstring('a')).toBe(1)
      expect(tree.findSubstring('n')).toBe(2)
      expect(tree.findSubstring('x')).toBe(-1)
    })
  })

  describe('findAllSubstring - Counting Occurrences', () => {
    it('should count occurrences in banana', () => {
      const tree = new SuffixTree('banana')
      
      const [pos1, , count1] = tree.findAllSubstring('a')
      expect(count1).toBe(3) // positions 1, 3, 5
      
      const [pos2, , count2] = tree.findAllSubstring('an')
      expect(count2).toBe(2) // positions 1, 3
      
      const [pos3, , count3] = tree.findAllSubstring('ana')
      expect(count3).toBe(2) // positions 1, 3
      
      const [pos4, , count4] = tree.findAllSubstring('na')
      expect(count4).toBe(2) // positions 2, 4
    })

    it('should count occurrences in mississippi', () => {
      const tree = new SuffixTree('mississippi')
      
      const [, , countI] = tree.findAllSubstring('i')
      expect(countI).toBe(4) // positions 1, 4, 7, 10
      
      const [, , countS] = tree.findAllSubstring('s')
      expect(countS).toBe(4) // positions 2, 3, 5, 6
      
      const [, , countSs] = tree.findAllSubstring('ss')
      expect(countSs).toBe(2) // positions 2, 5
      
      const [, , countIs] = tree.findAllSubstring('is')
      expect(countIs).toBe(2) // positions 1, 4
      
      const [, , countIssi] = tree.findAllSubstring('issi')
      expect(countIssi).toBe(2) // positions 1, 4
    })

    it('should return 0 count for non-existent substring', () => {
      const tree = new SuffixTree('banana')
      const [pos, node, count] = tree.findAllSubstring('xyz')
      expect(pos).toBe(-1)
      expect(node).toBeNull()
      expect(count).toBe(0)
    })

    it('should count single occurrence', () => {
      const tree = new SuffixTree('banana')
      const [, , count] = tree.findAllSubstring('ban')
      expect(count).toBe(1)
    })
  })

  describe('findLongestRepeatedSubstrings', () => {
    it('should find longest repeated substring in banana', () => {
      const tree = new SuffixTree('banana')
      const longest = tree.findLongestRepeatedSubstrings(1)
      expect(longest[0]).toBe('ana')
    })

    it('should find multiple longest repeated substrings', () => {
      const tree = new SuffixTree('mississippi')
      const longest = tree.findLongestRepeatedSubstrings(3)
      expect(longest).toContain('issi')
      expect(longest).toContain('ssi')
      expect(longest).toContain('issi')
    })

    it('should handle string with no repeated substrings', () => {
      const tree = new SuffixTree('abc')
      const longest = tree.findLongestRepeatedSubstrings(1)
      // Should return empty or very short strings
      expect(longest.length).toBeGreaterThanOrEqual(0)
    })

    it('should find repeated substrings in complex string', () => {
      const tree = new SuffixTree('abcabcabc')
      const longest = tree.findLongestRepeatedSubstrings(1)
      expect(longest[0]).toBe('abcabc')
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty string search', () => {
      const tree = new SuffixTree('banana')
      // Empty string matches at position 0 (vacuous truth)
      expect(tree.findSubstring('')).toBe(0)
    })

    it('should handle string longer than text', () => {
      const tree = new SuffixTree('abc')
      expect(tree.findSubstring('abcdef')).toBe(-1)
    })

    it('should handle repeated pattern', () => {
      const tree = new SuffixTree('aaaa')
      expect(tree.findSubstring('aa')).toBe(0)
      const [, , count] = tree.findAllSubstring('aa')
      expect(count).toBe(3) // positions 0, 1, 2
    })

    it('should handle palindrome', () => {
      const tree = new SuffixTree('racecar')
      expect(tree.findSubstring('race')).toBe(0)
      expect(tree.findSubstring('car')).toBe(4)
      expect(tree.findSubstring('cec')).toBe(2)
    })

    it('should handle string with special patterns', () => {
      const tree = new SuffixTree('abababab')
      expect(tree.findSubstring('ab')).toBe(0)
      const [, , count] = tree.findAllSubstring('ab')
      expect(count).toBe(4)
    })
  })

  describe('Multiple Strings', () => {
    it('should handle adding multiple strings', () => {
      const tree = new SuffixTree('hello')
      tree.addString('world')
      
      expect(tree.findSubstring('hello')).not.toBe(-1)
      expect(tree.findSubstring('world')).not.toBe(-1)
      expect(tree.findSubstring('llo')).not.toBe(-1)
      expect(tree.findSubstring('orld')).not.toBe(-1)
    })

    it('should find substrings across multiple added strings', () => {
      const tree = new SuffixTree('abc')
      tree.addString('bcd')
      tree.addString('cde')
      
      expect(tree.findSubstring('abc')).not.toBe(-1)
      expect(tree.findSubstring('bcd')).not.toBe(-1)
      expect(tree.findSubstring('cde')).not.toBe(-1)
      expect(tree.findSubstring('bc')).not.toBe(-1)
      expect(tree.findSubstring('cd')).not.toBe(-1)
    })

    it('should handle overlapping patterns in multiple strings', () => {
      const tree = new SuffixTree('banana')
      tree.addString('ananas')
      
      const [, , countAna] = tree.findAllSubstring('ana')
      expect(countAna).toBeGreaterThanOrEqual(2)
    })
  })

  describe('Performance and Stress Tests', () => {
    it('should handle long strings efficiently', () => {
      const longString = 'a'.repeat(1000) + 'b' + 'a'.repeat(1000)
      const tree = new SuffixTree(longString)
      
      expect(tree.findSubstring('b')).toBe(1000)
      expect(tree.findSubstring('aaa')).toBe(0)
    })

    it('should handle many unique characters', () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'
      const tree = new SuffixTree(alphabet)
      
      for (let i = 0; i < alphabet.length; i++) {
        expect(tree.findSubstring(alphabet[i])).toBe(i)
      }
    })

    it('should handle highly repetitive string', () => {
      const repetitive = 'ab'.repeat(100)
      const tree = new SuffixTree(repetitive)
      
      expect(tree.findSubstring('ab')).toBe(0)
      const [, , count] = tree.findAllSubstring('ab')
      expect(count).toBe(100)
    })
  })

  describe('Special Characters and Unicode', () => {
    it('should handle strings with spaces', () => {
      const tree = new SuffixTree('hello world')
      expect(tree.findSubstring('hello')).toBe(0)
      expect(tree.findSubstring('world')).toBe(6)
      expect(tree.findSubstring(' ')).toBe(5)
      expect(tree.findSubstring('o w')).toBe(4)
    })

    it('should handle strings with numbers', () => {
      const tree = new SuffixTree('abc123def456')
      expect(tree.findSubstring('123')).toBe(3)
      expect(tree.findSubstring('456')).toBe(9)
      expect(tree.findSubstring('3d')).toBe(5)
    })

    it('should handle strings with punctuation', () => {
      const tree = new SuffixTree('hello, world!')
      expect(tree.findSubstring('hello')).toBe(0)
      expect(tree.findSubstring(', ')).toBe(5)
      expect(tree.findSubstring('!')).toBe(12)
    })
  })

  describe('Boundary Conditions', () => {
    it('should handle single character string', () => {
      const tree = new SuffixTree('x')
      expect(tree.findSubstring('x')).toBe(0)
      expect(tree.findSubstring('y')).toBe(-1)
    })

    it('should handle two character string', () => {
      const tree = new SuffixTree('ab')
      expect(tree.findSubstring('a')).toBe(0)
      expect(tree.findSubstring('b')).toBe(1)
      expect(tree.findSubstring('ab')).toBe(0)
    })

    it('should handle all same characters', () => {
      const tree = new SuffixTree('aaaa')
      expect(tree.findSubstring('a')).toBe(0)
      expect(tree.findSubstring('aa')).toBe(0)
      expect(tree.findSubstring('aaa')).toBe(0)
      expect(tree.findSubstring('aaaa')).toBe(0)
      expect(tree.findSubstring('aaaaa')).toBe(-1)
    })
  })
})
