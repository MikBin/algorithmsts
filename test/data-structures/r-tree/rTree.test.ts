import { describe, it, expect } from 'vitest';
import { RTree } from '../../../src/data-structures';

describe('RTree', () => {
  it('inserts and searches rectangles', () => {
    const rt = new RTree(4);
    for (let i=0;i<20;i++) rt.insert({ x:i*10, y:i*5, w:5, h:5 }, i);
    const res = rt.search({ x:30, y:15, w:20, h:10 });
    expect(res.length).toBeGreaterThan(0);
  });
});
