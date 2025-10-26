import { describe, it, expect } from 'vitest';
import { RangeTree2D } from '../../../src/data-structures';

describe('RangeTree2D', () => {
  it('queries points in rectangle', () => {
    const pts = Array.from({length: 50}, (_,i)=>({ x: i, y: (i*3)%50 }));
    const rt = new RangeTree2D(pts);
    const res = rt.query(10, 20, 0, 30);
    expect(res.every(p=>p.x>=10 && p.x<=20 && p.y>=0 && p.y<=30)).toBe(true);
  });
});
