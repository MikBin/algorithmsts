import { describe, it, expect } from 'vitest';
import { IntervalHeap } from '../../../src/data-structures';

describe('IntervalHeap', () => {
  it('supports min and max operations', () => {
    const h = new IntervalHeap<number>((a,b)=>a-b);
    [5,1,9,3,7,2,8,4,6,0].forEach(x=>h.add(x));
    expect(h.peekMin()).toBe(0);
    expect(h.peekMax()).toBe(9);
    const outMin: number[] = [];
    while (!h.isEmpty()) outMin.push(h.pollMin()!);
    expect(outMin).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });
});
