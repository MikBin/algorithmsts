import { describe, it, expect } from 'vitest';
import { WeakHeap } from '../../../src/data-structures';

describe('WeakHeap', () => {
  it('acts as a min-priority queue', () => {
    const h = new WeakHeap<number>((a,b)=>a-b);
    [5,1,9,3,7,2,8,4,6,0].forEach(x=>h.add(x));
    const out: number[] = [];
    while(!h.isEmpty()) out.push(h.poll()!);
    expect(out).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });
});
