import { describe, expect, it } from "vitest";
import {
  NgramSimilarity,
  SplitByUpperCase,
  JaroDistance,
  JaroWinklerDistance,
  LevenshteinDistance,
  SorensenDiceCoefficient,
  TrigramSimilarity,
} from "../../../src/algorithms/strings";

describe("testing string similarities: ", () => {
  const ngramSimilarity = new NgramSimilarity();
  const jaroDistance = new JaroDistance();
  const jaroWinklerDistance = new JaroWinklerDistance();
  const levenshteinDistance = new LevenshteinDistance();
  const sorensenDiceCoefficient = new SorensenDiceCoefficient();
  const trigramSimilarity = new TrigramSimilarity();

  it("returns 1 for same exact string: ", () => {
    const result = ngramSimilarity.execute({ str1: "abcd", str2: "AbCd" });
    expect(result.similarity).toEqual(1);
    /**distance from same base string abcd */
  });

  it("returns jaro distance:", () => {
    const result = jaroDistance.execute({ str1: "martha", str2: "marhta" });
    expect(result.distance).toBeCloseTo(0.9444444444444444);
  });

  it("returns jaro distance for single-character cases", () => {
    expect(jaroDistance.execute({ str1: "a", str2: "a" }).distance).toEqual(1);
    expect(jaroDistance.execute({ str1: "a", str2: "b" }).distance).toEqual(0);
  });

  it("returns jaro winkler distance for edge cases", () => {
    expect(jaroWinklerDistance.execute({ str1: "a", str2: "a" }).distance).toEqual(1);
    expect(jaroWinklerDistance.execute({ str1: "a", str2: "b" }).distance).toEqual(0);
    expect(jaroWinklerDistance.execute({ str1: "", str2: "a" }).distance).toEqual(0);
    expect(jaroWinklerDistance.execute({ str1: "", str2: "" }).distance).toEqual(1);
  });

  it("returns LevenshteinDistance:", () => {
    const result = levenshteinDistance.execute({ str1: "martha", str2: "marhta" });
    expect(result.distance).toBeCloseTo(0.666);
  });

  it("returns similarity for different strings: ", () => {
    const result = ngramSimilarity.execute({ str1: "abcd", str2: "AbCd abcd" });
    expect(result.similarity).toEqual(0.5454545454545454);
    //NB size counts
  });

  it("LevenshteinDistance of completely different string", () => {
    const result = levenshteinDistance.execute({ str1: "robotech", str2: "saluti e baci" });
    expect(result.distance).toBeCloseTo(0.23);
  });

  it("LevenshteinDistance handles empty string edge cases", () => {
    expect(levenshteinDistance.execute({ str1: "", str2: "abc" }).distance).toEqual(0);
    expect(levenshteinDistance.execute({ str1: "abc", str2: "" }).distance).toEqual(0);
    expect(levenshteinDistance.execute({ str1: "", str2: "" }).distance).toEqual(1);
  });

  it("calculates Sørensen-Dice coefficient correctly", () => {
    expect(sorensenDiceCoefficient.execute({ str1: "hello", str2: "helo" }).similarity).toBeCloseTo(
      0.8571,
    );
    expect(sorensenDiceCoefficient.execute({ str1: "world", str2: "word" }).similarity).toBeCloseTo(
      0.5714,
    );
    expect(sorensenDiceCoefficient.execute({ str1: "test", str2: "test" }).similarity).toEqual(1);
    expect(
      sorensenDiceCoefficient.execute({ str1: "apple", str2: "orange" }).similarity,
    ).toBeCloseTo(0);
  });

  it("calculates trigram similarity correctly", () => {
    expect(trigramSimilarity.execute({ str1: "hello", str2: "helo" }).similarity).toBeCloseTo(0.4);
    expect(trigramSimilarity.execute({ str1: "world", str2: "word" }).similarity).toBeCloseTo(0.4);
    expect(trigramSimilarity.execute({ str1: "test", str2: "test" }).similarity).toEqual(1);
    expect(trigramSimilarity.execute({ str1: "apple", str2: "orange" }).similarity).toBeCloseTo(0);
  });

  /** the average distance from same string is the distance from the 2 strings
   * NB the common string have to be of the same length of each of the 2.
   */
});

describe("split by uppercase: ", () => {
  const splitByUpperCase = new SplitByUpperCase();

  it("returns two string from AbaStar", () => {
    const result = splitByUpperCase.execute({ str: "AbaStar" });
    expect(result.parts).toEqual(["aba", "star"]);
  });
});
