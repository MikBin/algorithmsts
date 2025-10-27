import { describe, it, expect } from 'vitest';
import { KDTree } from '../../../src/data-structures';

describe('KDTree nearest', () => {
  it('returns nearest point', () => {
    const kd = new KDTree(2);
    [[0,0],[5,0],[10,0],[15,0]].forEach(p=>kd.insert(p));
    const r = kd.nearest([9.2, 0])!;
    expect(r.point).toEqual([10,0]);
    expect(r.dist).toBeGreaterThan(0);
  });
});
