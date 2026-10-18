import { describe, it, expect } from 'vitest';
import { BallTree } from '../../../src/data-structures';

describe('BallTree', () => {
  it('range queries points within tau', () => {
    const pts = Array.from({length: 50}, (_,i)=>({ p: [i, 0] }));
    const bt = new BallTree(pts);
    const res = bt.rangeQuery([10,0], 5);
    expect(res.every(({p})=>Math.abs(p[0]-10)<=5)).toBe(true);
  });

  it('prevents infinite recursion on identical points', () => {
    const pts = Array.from({length: 20}, () => ({ p: [10, 10] }));
    const bt = new BallTree(pts);
    const res = bt.rangeQuery([10, 10], 0);
    expect(res.length).toBe(20);
  });
});
