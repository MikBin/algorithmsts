import { describe, it, expect } from 'vitest';
import { BStarTree } from '../../../src/data-structures';

describe('BStarTree', () => {
  it('inserts and finds values', () => {
    const t = new BStarTree<number, number>((a,b)=>a-b, 6);
    for (let i=0;i<50;i++) t.set(i, i*i);
    expect(t.get(0)).toBe(0);
    expect(t.get(49)).toBe(2401);
    expect(t.get(100)).toBeUndefined();
  });
});
