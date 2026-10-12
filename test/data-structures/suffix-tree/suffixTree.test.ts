import { describe, expect, it } from "vitest";
import { SuffixTree } from "../../../src/data-structures/suffix-tree";
import { SuffixTreeIterator } from "../../../src/data-structures/suffix-tree/iterator";
import { ICollection } from "../../../src/core/interfaces/ICollection";
import { IDataStructure } from "../../../src/core/interfaces/IDataStructure";
import { IIterator } from "../../../src/core/interfaces/IIterator";

describe("suffix tree test: ", () => {
  const bananaTree = new SuffixTree("banana");
  const mississippiTree = new SuffixTree("mississippi");

  it("find substring works. and returns -1 when string is not found", () => {
    expect(bananaTree.findSubstring("nana")).toEqual(2);
    expect(bananaTree.findSubstring("not found")).toEqual(-1);
    expect(bananaTree.findSubstring("ba")).toEqual(0);
    expect(bananaTree.findSubstring("na")).toEqual(2);

    expect(mississippiTree.findSubstring("mis")).toEqual(0);
    expect(mississippiTree.findSubstring("not found")).toEqual(-1);
    expect(mississippiTree.findSubstring("pi")).toEqual(9);
    expect(mississippiTree.findSubstring("ippi")).toEqual(7);
  });

  it("counts all occurences", () => {
    const [, , bres] = bananaTree.findAllSubstring("na");
    const [, , mres] = mississippiTree.findAllSubstring("is");
    expect(bres).toEqual(2);
    expect(mres).toEqual(2);
  });
});
