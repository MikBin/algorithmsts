import { describe, it, expect } from "vitest";
import {
  area,
  union,
  enlarge,
  intersects,
  intersectionArea,
} from "../../../src/data-structures/geometry";

describe("Geometry Utils", () => {
  const r1 = { x: 0, y: 0, w: 10, h: 10 };
  const r2 = { x: 5, y: 5, w: 10, h: 10 };
  const r3 = { x: 20, y: 20, w: 5, h: 5 };
  const r4 = { x: 10, y: 10, w: 5, h: 5 };
  const r5 = { x: 0, y: 20, w: 5, h: 5 };
  const r6 = { x: 20, y: 0, w: 5, h: 5 };

  it("calculates area", () => {
    expect(area(r1)).toBe(100);
  });

  it("calculates union", () => {
    expect(union(r1, r2)).toEqual({ x: 0, y: 0, w: 15, h: 15 });
  });

  it("calculates enlarge", () => {
    expect(enlarge(r1, r2)).toBe(125); // area(union) - area(r1) = 225 - 100
  });

  it("calculates intersects", () => {
    expect(intersects(r1, r2)).toBe(true);
    expect(intersects(r1, r3)).toBe(false);
    expect(intersects(r1, r4)).toBe(false);
    expect(intersects(r1, r5)).toBe(false);
    expect(intersects(r1, r6)).toBe(false);
  });

  it("calculates intersectionArea", () => {
    expect(intersectionArea(r1, r2)).toBe(25); // overlap 5x5
    expect(intersectionArea(r1, r3)).toBe(0);
    expect(intersectionArea(r1, r4)).toBe(0);
    expect(intersectionArea(r1, r5)).toBe(0);
    expect(intersectionArea(r1, r6)).toBe(0);
  });
});
