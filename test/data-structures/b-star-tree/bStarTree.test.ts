import { describe, it, expect } from 'vitest';
import { BStarTree } from '../../../src/data-structures';

describe('BStarTree', () => {
  it('inserts and finds values', () => {
    const t = new BStarTree<number, number>((a,b)=>a-b, 6);
    for (let i=0;i<20;i++) t.set(i, i*i);
    expect(t.get(0)).toBe(0);
    expect(t.get(10)).toBe(100);
    expect(t.get(19)).toBe(361);
  });
});
