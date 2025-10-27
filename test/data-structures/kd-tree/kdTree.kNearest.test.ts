import { describe, it, expect } from 'vitest';
import { KDTree } from '../../../src/data-structures';

describe('KDTree kNearest', () => {
  it('returns k nearest points', () => {
    const kd = new KDTree(2);
    [[0,0],[5,0],[10,0],[15,0]].forEach(p=>kd.insert(p));
    const res = kd.kNearest([9.2, 0], 2);
    expect(res.map(r=>r.point)).toEqual([[10,0],[5,0]]);
  });
});
