import { describe, it, expect } from "vitest";
import { PatriciaTrie } from "../../../src/data-structures/patricia-trie/patriciaTrie";

describe("PatriciaTrie Extra", () => {
  it("handles empty cases", () => {
    const ds = new PatriciaTrie<number>();

    expect(ds.has("test")).toBe(false);
  });

  it("handles duplicates and updates", () => {
    const ds = new PatriciaTrie<number>();
    ds.set("test", 1);
    ds.set("test", 2);

    expect(ds.get("test")).toBe(2);
  });
});
