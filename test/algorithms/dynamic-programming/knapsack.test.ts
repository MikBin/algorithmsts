import { describe, it, expect } from 'vitest';
import { Knapsack } from '../../../src/algorithms/dynamic-programming/knapsack';

describe('Knapsack', () => {
  const ks = new Knapsack();

  it('solves normal knapsack problem', () => {
    const items = [
      { weight: 1, value: 60 },
      { weight: 2, value: 100 },
      { weight: 3, value: 120 }
    ];
    const res = ks.execute({ capacity: 5, items });
    expect(res.maxValue).toBe(220); // 100 + 120
    expect(res.selectedItems).toEqual([
      { weight: 2, value: 100 },
      { weight: 3, value: 120 }
    ]);
  });

  it('handles 0 capacity', () => {
    const items = [{ weight: 1, value: 10 }];
    const res = ks.execute({ capacity: 0, items });
    expect(res.maxValue).toBe(0);
    expect(res.selectedItems).toEqual([]);
  });

  it('handles empty items list', () => {
    const res = ks.execute({ capacity: 10, items: [] });
    expect(res.maxValue).toBe(0);
    expect(res.selectedItems).toEqual([]);
  });

  it('handles all items too heavy', () => {
    const items = [{ weight: 11, value: 10 }, { weight: 12, value: 20 }];
    const res = ks.execute({ capacity: 10, items });
    expect(res.maxValue).toBe(0);
    expect(res.selectedItems).toEqual([]);
  });
});
