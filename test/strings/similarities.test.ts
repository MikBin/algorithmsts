import { ngramSimilarity, splitByUpperCase, jaroDistance, LevenshteinDistance } from "../../src/strings/similarities";

describe("testing string similiarites: ", () => {
  it("returns 1 for same exact string: ", () => {
    expect(ngramSimilarity("abcd", "AbCd")).toEqual(1);
    /**distance from same base string abcd */

  });

  it("returns jaro distance:", () => {
    expect(jaroDistance("martha", "marhta")).toBeCloseTo(0.9444444444444444);
  });

  it("returns LevenshteinDistance:", () => {
    expect(LevenshteinDistance("martha", "marhta")).toBeCloseTo(0.666);
  });

  it("returns 1 for same exact string: ", () => {
    expect(ngramSimilarity("abcd", "AbCd abcd")).toEqual(0.5454545454545454);
    //NB size counts
  });

  it("LevenshteinDistance of completely different string", () => {
    expect(LevenshteinDistance("robotech", "saluti e baci")).toBeCloseTo(0.230);
  });

  console.log(jaroDistance("ciao bambino", "abcdabcdab"), jaroDistance("orsetto lavatore", "abcdabcdabcdabcd"), jaroDistance("ciao bambino", "orsetto lavatore"));
  /** the average distance from same string is the distance from the 2 strings
   * NB the common string have to be of the same length of each of the 2. 
   */
  console.log(jaroDistance("ciao bambino", "abcdabcdab"), jaroDistance("cioa bambano", "abcdabcdabcdabcd"), jaroDistance("ciao bambino", "cioa bambano"));

});

describe("split by uppercase: ", () => {
  it("returns two string from AbaStar", () => {
    expect(splitByUpperCase("AbaStar")).toEqual(["aba", "star"]);
  });

});
