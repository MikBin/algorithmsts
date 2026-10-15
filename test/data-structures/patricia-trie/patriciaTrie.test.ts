import { describe, it, expect } from "vitest";
import { PatriciaTrie } from "../../../src/data-structures/patricia-trie/patriciaTrie";

describe("PatriciaTrie", () => {
  it("should support storing undefined values correctly", () => {
    const trie = new PatriciaTrie<unknown>();
    trie.set("hello", undefined);

    expect(trie.has("hello")).toBe(true);
    expect(trie.get("hello")).toBeUndefined();

    expect(trie.has("hell")).toBe(false);
    expect(trie.get("hell")).toBeUndefined();
  });
});
