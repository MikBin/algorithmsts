import { describe, it, expect } from 'vitest';
import { knuthMorrisPratt, rabinKarp } from '../../../src/algorithms/strings/pattern-matching';

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
        // Rabin-Karp relies on hash verification. This test ensures that even if hashes theoretically collide (or just matching hashes), it verifies content.
        // Hard to force collision with random prime without analysis, but basic correctness is key.
        expect(rabinKarp('ccddcddc', 'cdd')).toEqual([1, 4]);
    });
  });
});
