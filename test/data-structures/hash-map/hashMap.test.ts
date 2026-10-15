import { describe, it, expect } from "vitest";
import { HashMap } from "../../../src/data-structures/hash-map/hashMap";

describe("HashMap", () => {
  it("should support storing undefined values correctly", () => {
    const map = new HashMap<string, unknown>();
    map.set("a", undefined);

    expect(map.has("a")).toBe(true);
    expect(map.get("a")).toBeUndefined();
    expect(map.size).toBe(1);

    expect(map.has("b")).toBe(false);
  });

  it("entries should return copies", () => {
    const map = new HashMap<string, number>();
    map.set("a", 1);
    const entries = map.entries();
    entries[0][1] = 2; // Mutate the entry tuple
    expect(map.get("a")).toBe(1); // Underlying map should be unmodified
  });
});
