import { describe, it, expect } from 'vitest';
import { LongestCommonSubsequence } from '../../../src/algorithms/dynamic-programming/longestCommonSubsequence';

describe('LongestCommonSubsequence', () => {
  const lcs = new LongestCommonSubsequence();

  it('finds LCS for normal strings', () => {
    const res = lcs.execute({ str1: 'ABCBDAB', str2: 'BDCAB' });
    // BDAB
    expect(res.length).toBe(4);
    expect(res.subsequence).toBe('BDAB');
  });

  it('returns 0 for no common subsequence', () => {
    const res = lcs.execute({ str1: 'ABC', str2: 'DEF' });
    expect(res.length).toBe(0);
    expect(res.subsequence).toBe('');
  });

  it('handles empty strings', () => {
    const res1 = lcs.execute({ str1: '', str2: 'A' });
    expect(res1.length).toBe(0);
    expect(res1.subsequence).toBe('');

    const res2 = lcs.execute({ str1: 'A', str2: '' });
    expect(res2.length).toBe(0);
  });

  it('handles completely matching strings', () => {
    const res = lcs.execute({ str1: 'ABCD', str2: 'ABCD' });
    expect(res.length).toBe(4);
    expect(res.subsequence).toBe('ABCD');
  });
});
