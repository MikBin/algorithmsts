import { describe, it, expect } from "vitest";
import { DAryHeap } from "../../../src/data-structures/d-ary-heap/dAryHeap";

describe("DAryHeap Extra", () => {
  it("handles empty cases", () => {
    const ds = new DAryHeap<number>((a, b) => a - b, 3);
    expect(ds.size).toBe(0);
    expect(ds.poll()).toBeNull();
  });

  it("handles duplicates", () => {
    const ds = new DAryHeap<number>((a, b) => a - b, 3);
    ds.add(10);
    ds.add(5);
    ds.add(10);
    expect(ds.size).toBe(3);
    expect(ds.poll()).toBe(5);
    expect(ds.poll()).toBe(10);
    expect(ds.poll()).toBe(10);
  });
});
