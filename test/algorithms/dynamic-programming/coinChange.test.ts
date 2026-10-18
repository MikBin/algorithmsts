import { describe, it, expect } from 'vitest';
import { CoinChange } from '../../../src/algorithms/dynamic-programming/coinChange';

describe('CoinChange', () => {
  const cc = new CoinChange();

  it('finds min coins and combinations', () => {
    const res = cc.execute({ coins: [1, 2, 5], amount: 11 });
    expect(res.minCoins).toBe(3); // 5 + 5 + 1
    // ways to make 11 from [1,2,5]: multiple
    expect(res.combinations).toBeGreaterThan(0);
  });

  it('returns -1 minCoins if amount cannot be made', () => {
    const res = cc.execute({ coins: [2], amount: 3 });
    expect(res.minCoins).toBe(-1);
    expect(res.combinations).toBe(0);
  });

  it('handles 0 amount', () => {
    const res = cc.execute({ coins: [1, 2], amount: 0 });
    expect(res.minCoins).toBe(0);
    expect(res.combinations).toBe(1);
  });

  it('handles no coins for positive amount', () => {
    const res = cc.execute({ coins: [], amount: 10 });
    expect(res.minCoins).toBe(-1);
    expect(res.combinations).toBe(0);
  });
});
