import { describe, it, expect } from 'vitest';
import { KDRangeTree } from '../../../src/data-structures';

describe('KDRangeTree', () => {
  it('performs orthogonal range queries in k-d', () => {
    const pts = Array.from({length: 100}, (_,i)=>[i%10, Math.floor(i/10)]);
    const rt = new KDRangeTree(pts);
    const res = rt.rangeQuery([[2,5],[3,7]]);
    expect(res.every(([x,y])=>x>=2 && x<=5 && y>=3 && y<=7)).toBe(true);
  });
});
