import { beforeAll, describe, expect, it } from 'vitest';
import {
  NgramSimilarity,
  SplitByUpperCase,
  JaroDistance,
  LevenshteinDistance,
  SorensenDiceCoefficient,
  TrigramSimilarity,
} from "../../../src/algorithms/strings";

describe("testing string similarities: ", () => {
  const ngramSimilarity = new NgramSimilarity();
  const jaroDistance = new JaroDistance();
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
    expect(result.distance).toBeCloseTo(0.230);
  });

  it("calculates Sørensen-Dice coefficient correctly", () => {
    expect(sorensenDiceCoefficient.execute({ str1: "hello", str2: "helo" }).similarity).toBeCloseTo(0.8571);
    expect(sorensenDiceCoefficient.execute({ str1: "world", str2: "word" }).similarity).toBeCloseTo(0.5714);
    expect(sorensenDiceCoefficient.execute({ str1: "test", str2: "test" }).similarity).toEqual(1);
    expect(sorensenDiceCoefficient.execute({ str1: "apple", str2: "orange" }).similarity).toBeCloseTo(0);
  });

  it("calculates trigram similarity correctly", () => {
    expect(trigramSimilarity.execute({ str1: "hello", str2: "helo" }).similarity).toBeCloseTo(0.4);
    expect(trigramSimilarity.execute({ str1: "world", str2: "word" }).similarity).toBeCloseTo(0.4);
    expect(trigramSimilarity.execute({ str1: "test", str2: "test" }).similarity).toEqual(1);
    expect(trigramSimilarity.execute({ str1: "apple", str2: "orange" }).similarity).toBeCloseTo(0);
  });

  console.log(jaroDistance.execute({ str1: "ciao bambino", str2: "abcdabcdab" }).distance, jaroDistance.execute({ str1: "orsetto lavatore", str2: "abcdabcdabcdabcd" }).distance, jaroDistance.execute({ str1: "ciao bambino", str2: "orsetto lavatore" }).distance);
  /** the average distance from same string is the distance from the 2 strings
   * NB the common string have to be of the same length of each of the 2.
   */
  console.log(jaroDistance.execute({ str1: "ciao bambino", str2: "abcdabcdab" }).distance, jaroDistance.execute({ str1: "cioa bambano", str2: "abcdabcdabcdabcd" }).distance, jaroDistance.execute({ str1: "ciao bambino", str2: "cioa bambano" }).distance);

});

describe("split by uppercase: ", () => {
  const splitByUpperCase = new SplitByUpperCase();

  it("returns two string from AbaStar", () => {
    const result = splitByUpperCase.execute({ str: "AbaStar" });
    expect(result.parts).toEqual(["aba", "star"]);
  });

});
