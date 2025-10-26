import { describe, it, expect } from 'vitest';
import { SkewHeap } from '../../../src/data-structures';

describe('SkewHeap', () => {
  it('acts as a priority queue', () => {
    const h = new SkewHeap<number>((a,b)=>b-a); // min-heap via comparator
    [5,1,9,3,7,2,8,4,6,0].forEach(x=>h.add(x));
    const out: number[] = [];
    for (let i=0;i<10;i++) out.push(h.poll()!);
    expect(out).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });
});
