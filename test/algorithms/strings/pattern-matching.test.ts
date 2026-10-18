import { describe, it, expect } from 'vitest';
import { knuthMorrisPratt, rabinKarp, zAlgorithm, boyerMoore } from '../../../src/algorithms/strings/pattern-matching';

describe('Pattern Matching Algorithms', () => {
  describe('KMP (Knuth-Morris-Pratt)', () => {
    it('should find single occurrence', () => {
      expect(knuthMorrisPratt('ABABDABACDABABCABAB', 'ABABCABAB')).toEqual([10]);
    });

    it('should find multiple occurrences', () => {
      expect(knuthMorrisPratt('AABAACAADAABAABA', 'AABA')).toEqual([0, 9, 12]);
    });

    it('should return empty array if not found', () => {
      expect(knuthMorrisPratt('abcde', 'fgh')).toEqual([]);
    });

    it('should handle empty pattern', () => {
      expect(knuthMorrisPratt('abc', '')).toEqual([]);
    });

    it('should handle empty text', () => {
      expect(knuthMorrisPratt('', 'abc')).toEqual([]);
    });

    it('should handle pattern longer than text', () => {
      expect(knuthMorrisPratt('abc', 'abcd')).toEqual([]);
    });
  });

  describe('Rabin-Karp', () => {
    it('should find single occurrence', () => {
      expect(rabinKarp('ABABDABACDABABCABAB', 'ABABCABAB')).toEqual([10]);
    });

    it('should find multiple occurrences', () => {
      expect(rabinKarp('AABAACAADAABAABA', 'AABA')).toEqual([0, 9, 12]);
    });

    it('should return empty array if not found', () => {
      expect(rabinKarp('abcde', 'fgh')).toEqual([]);
    });

    it('should handle empty pattern', () => {
      expect(rabinKarp('abc', '')).toEqual([]);
    });

    it('should handle empty text', () => {
      expect(rabinKarp('', 'abc')).toEqual([]);
    });

    it('should handle pattern longer than text', () => {
      expect(rabinKarp('abc', 'abcd')).toEqual([]);
    });

    it('should handle collision cases correctly', () => {
        expect(rabinKarp('ccddcddc', 'cdd')).toEqual([1, 4]);
    });
  });

  describe('Z-Algorithm', () => {
    it('should find single occurrence', () => {
      expect(zAlgorithm('ABABDABACDABABCABAB', 'ABABCABAB')).toEqual([10]);
    });

    it('should find multiple occurrences', () => {
      expect(zAlgorithm('AABAACAADAABAABA', 'AABA')).toEqual([0, 9, 12]);
    });

    it('should return empty array if not found', () => {
      expect(zAlgorithm('abcde', 'fgh')).toEqual([]);
    });

    it('should handle empty pattern', () => {
      expect(zAlgorithm('abc', '')).toEqual([]);
    });

    it('should handle empty text', () => {
      expect(zAlgorithm('', 'abc')).toEqual([]);
    });

    it('should handle pattern longer than text', () => {
      expect(zAlgorithm('abc', 'abcd')).toEqual([]);
    });
  });

  describe('Boyer-Moore', () => {
    it('should find single occurrence', () => {
      expect(boyerMoore('ABABDABACDABABCABAB', 'ABABCABAB')).toEqual([10]);
    });

    it('should find multiple occurrences', () => {
      expect(boyerMoore('AABAACAADAABAABA', 'AABA')).toEqual([0, 9, 12]);
    });

    it('should return empty array if not found', () => {
      expect(boyerMoore('abcde', 'fgh')).toEqual([]);
    });

    it('should handle empty pattern', () => {
      expect(boyerMoore('abc', '')).toEqual([]);
    });

    it('should handle empty text', () => {
      expect(boyerMoore('', 'abc')).toEqual([]);
    });

    it('should handle pattern longer than text', () => {
      expect(boyerMoore('abc', 'abcd')).toEqual([]);
    });
  });
});

  describe('Pattern Matching Regression Tests', () => {
    it('zAlgorithm should handle $ characters correctly', () => {
      expect(zAlgorithm('b$$', 'b')).toEqual([0]);
      expect(zAlgorithm('a$a', 'a')).toEqual([0, 2]);
    });

    it('boyerMoore should handle $ characters correctly', () => {
      expect(boyerMoore('b$$', 'b')).toEqual([0]);
      expect(boyerMoore('a$a', 'a')).toEqual([0, 2]);
    });

    it('zAlgorithm overlapping matches', () => {
      expect(zAlgorithm('aaaa', 'aa')).toEqual([0, 1, 2]);
    });

    it('boyerMoore overlapping matches', () => {
      expect(boyerMoore('aaaa', 'aa')).toEqual([0, 1, 2]);
    });
  });
