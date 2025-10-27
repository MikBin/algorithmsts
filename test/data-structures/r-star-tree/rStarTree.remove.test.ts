import { describe, it, expect } from 'vitest';
import { RStarTree } from '../../../src/data-structures';

describe('RStarTree remove', () => {
  it('removes exact rectangle', () => {
    const rt = new RStarTree(4);
    rt.insert({ x:0, y:0, w:5, h:5 }, 'A');
    rt.insert({ x:10, y:0, w:5, h:5 }, 'B');
    expect(rt.search({ x:0, y:0, w:5, h:5 })).toContain('A');
    expect(rt.remove({ x:0, y:0, w:5, h:5 }, 'A')).toBe(true);
    expect(rt.search({ x:0, y:0, w:5, h:5 })).not.toContain('A');
  });
});
