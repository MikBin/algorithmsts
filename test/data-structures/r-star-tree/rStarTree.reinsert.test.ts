import { describe, it, expect } from 'vitest';
import { RStarTree } from '../../../src/data-structures';

describe('RStarTree reinsertion', () => {
  it('reinsert heuristic maintains search correctness', () => {
    const rt = new RStarTree(4, 0.3);
    for (let i=0;i<40;i++) rt.insert({ x:i, y:0, w:1, h:1 }, i);
    const res = rt.search({ x:10, y:-1, w:5, h:3 });
    expect(res.length).toBeGreaterThan(0);
  });
});
