import { describe, it, expect } from 'vitest';
import { TwoThreeTree } from '../../../src/data-structures';

describe('TwoThreeTree', () => {
  it('inserts and iterates in order', () => {
    const t = new TwoThreeTree<number>((a,b)=>a-b);
    [5,1,9,3,7,2,8,4,6,0].forEach(x=>t.add(x));
    expect(t.contains(6)).toBe(true);
    expect(t.toArray()).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });
});
