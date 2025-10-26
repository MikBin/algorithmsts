import { describe, it, expect } from 'vitest';
import { Octree } from '../../../src/data-structures';

describe('Octree', () => {
  it('inserts and queries points', () => {
    const ot = new Octree(0,0,0,100,100,100,4);
    for (let i=0;i<20;i++) ot.insert({ x: i*3, y: i*2, z: i*4 });
    const res = ot.query(0,0,0,50,50,50);
    expect(res.length).toBeGreaterThan(0);
    expect(res.every(p=>p.x>=0 && p.x<50 && p.y>=0 && p.y<50 && p.z>=0 && p.z<50)).toBe(true);
  });
});
