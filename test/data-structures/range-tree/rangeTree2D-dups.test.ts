import { describe, it, expect } from "vitest";
import { RangeTree2D } from "../../../src/data-structures";

describe("RangeTree2D Duplicate Points", () => {
  it("query() returns each point exactly once", () => {
    const pts = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
      { x: 5, y: 5 },
    ];
    const rt = new RangeTree2D(pts);
    const res = rt.query(0, 10, 0, 10);
    expect(res.length).toBe(5);
  });

  it("matches brute-force filter on randomized fixtures", () => {
    for (let i = 0; i < 20; i++) {
      const numPts = Math.floor(Math.random() * 50) + 10;
      const pts = Array.from({ length: numPts }, () => ({
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
      }));
      const rt = new RangeTree2D(pts);

      const x1 = Math.floor(Math.random() * 50);
      const x2 = x1 + Math.floor(Math.random() * 50);
      const y1 = Math.floor(Math.random() * 50);
      const y2 = y1 + Math.floor(Math.random() * 50);

      const res = rt.query(x1, x2, y1, y2);

      const bruteForce = pts.filter((p) => p.x >= x1 && p.x <= x2 && p.y >= y1 && p.y <= y2);

      // Sort to compare arrays regardless of order
      const sortFn = (a: { x: number; y: number }, b: { x: number; y: number }) =>
        a.x === b.x ? a.y - b.y : a.x - b.x;
      const sortedRes = res.slice().sort(sortFn);
      const sortedBrute = bruteForce.slice().sort(sortFn);

      expect(sortedRes).toEqual(sortedBrute);
    }
  });
});
