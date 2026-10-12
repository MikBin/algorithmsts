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
  it('reinsert losing child test', () => {
    const rt = new RStarTree(4, 0.3);
    for (let i = 0; i < 100; i++) {
      rt.insert({ x: i, y: i, w: 1, h: 1 }, i);
    }

    for (let i = 0; i < 50; i++) {
      rt.remove({ x: i, y: i, w: 1, h: 1 }, i);
    }

    let found = 0;
    for (let i = 50; i < 100; i++) {
      const res = rt.search({ x: i, y: i, w: 1, h: 1 }) as number[];
      if (res.includes(i)) found++;
    }
    expect(found).toBe(50);
  });
});
