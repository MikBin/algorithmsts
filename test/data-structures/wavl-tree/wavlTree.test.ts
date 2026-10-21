import { describe, it, expect } from 'vitest';
import { WAVLTree } from '../../../src/data-structures';

describe('WAVLTree', () => {
  it('handles empty cases', () => {
    const ds = new WAVLTree<number>((a, b) => a - b);
    expect(ds.size).toBe(0);
    expect(ds.contains(1)).toBe(false);
  });

  it('handles single elements', () => {
    const ds = new WAVLTree<number>((a, b) => a - b);
    ds.add(5);
    expect(ds.size).toBe(1);
    expect(ds.contains(5)).toBe(true);
  });

  it('handles duplicates correctly', () => {
    const ds = new WAVLTree<number>((a, b) => a - b);
    ds.add(5);
    ds.add(5);
    ds.add(10);
    expect(ds.size).toBe(2);
    expect(ds.size).toBe(ds.toArray().length);
    expect(ds.contains(5)).toBe(true);
    expect(ds.contains(10)).toBe(true);
    expect(ds.toArray()).toEqual([5, 10]);
  });

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
