import { describe, it, expect } from 'vitest';
import { Quadtree } from '../../../src/data-structures';

describe('Quadtree', () => {
  it('inserts and queries points', () => {
    const qt = new Quadtree(0,0,100,100,4);
    for (let i=0;i<20;i++) qt.insert({ x: i*5, y: i*5 });
    const res = qt.query(0,0,50,50);
    expect(res.length).toBeGreaterThan(0);
    expect(res.every(p=>p.x>=0 && p.x<50 && p.y>=0 && p.y<50)).toBe(true);
  });
});
