import { describe, it, expect } from 'vitest';
import { CoverTree } from '../../../src/data-structures';

describe('CoverTree', () => {
  it('finds nearest neighbors', () => {
    const ct = new CoverTree();
    for (let i=0;i<20;i++) ct.add([i, 0], i);
    const nn = ct.nearest([10.2, 0])!;
    expect(nn.p[0]).toBe(10);
    const k = ct.kNearest([10.2, 0], 3).map(x=>x.p[0]);
    expect(k).toEqual([10,11,9]);
  });
});
