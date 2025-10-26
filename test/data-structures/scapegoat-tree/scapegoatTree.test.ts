import { describe, it, expect } from 'vitest';
import { ScapegoatTree } from '../../../src/data-structures';

describe('ScapegoatTree', () => {
  it('inserts and finds elements', () => {
    const t = new ScapegoatTree<number>((a,b)=>a-b);
    [5,3,7,2,4,6,8,1,9,0].forEach(x=>t.add(x));
    expect(t.size).toBe(10);
    expect(t.contains(6)).toBe(true);
    expect(t.contains(10)).toBe(false);
    expect(t.toArray()).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });
  it('removes elements and rebalances', () => {
    const t = new ScapegoatTree<number>((a,b)=>a-b);
    for (let i=0;i<100;i++) t.add(i);
    for (let i=0;i<50;i++) expect(t.remove(i)).toBe(true);
    expect(t.size).toBe(50);
    for (let i=0;i<50;i++) expect(t.contains(i)).toBe(false);
    for (let i=50;i<100;i++) expect(t.contains(i)).toBe(true);
  });
});
