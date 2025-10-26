import { describe, it, expect } from 'vitest';
import { BPlusTree } from '../../../src/data-structures';

describe('BPlusTree', () => {
  it('inserts, gets, and iterates via leaves', () => {
    const t = new BPlusTree<number, number>((a,b)=>a-b, 4);
    for (let i=0;i<20;i++) t.set(i, i*i);
    expect(t.get(0)).toBe(0);
    expect(t.get(19)).toBe(361);
    const arr = t.toArray();
    expect(arr.length).toBe(20);
    expect(arr[0]).toEqual({ key: 0, value: 0 });
    expect(arr[19]).toEqual({ key: 19, value: 361 });
  });
});
