import { describe, it, expect } from 'vitest';
import { WAVLTree } from '../../../src/data-structures';

describe('WAVLTree', () => {
  it('inserts, finds, removes, and iterates in order', () => {
    const t = new WAVLTree<number>((a,b)=>a-b);
    [5,3,7,2,4,6,8,1,9,0].forEach(x=>t.add(x));
    expect(t.size).toBe(10);
    expect(t.contains(6)).toBe(true);
    expect(t.toArray()).toEqual([0,1,2,3,4,5,6,7,8,9]);
    expect(t.remove(4)).toBe(true);
    expect(t.contains(4)).toBe(false);
  });
});
