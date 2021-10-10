import { StringNumberArrayMap } from "../interfaces";



/* global exports, Map */
/**
 * Calculate similarity between two strings
 * @param {string} str1 First string to match
 * @param {string} str2 Second string to match
 * @param {number} [substringLength=2] Optional. Length of substring to be used in calculating similarity. Default 2.
 * @param {boolean} [caseSensitive=false] Optional. Whether you want to consider case in string matching. Default false;
 * @returns Number between 0 and 1, with 0 being a low match score.
 */
//call it ngram similarity   ...move case sensitive outside
export const ngramSimilarity = (str1: string, str2: string, substringLength: number = 2, caseSensitive: boolean = false): number => {
  if (!caseSensitive) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  }

  if (str1.length < substringLength || str2.length < substringLength)
    return 0;

  const map = new Map();
  for (let i = 0; i < str1.length - (substringLength - 1); i++) {
    const substr1 = str1.substr(i, substringLength);
    map.set(substr1, map.has(substr1) ? map.get(substr1) + 1 : 1);
  }

  let match = 0;
  for (let j = 0; j < str2.length - (substringLength - 1); j++) {
    const substr2 = str2.substr(j, substringLength);
    const count = map.has(substr2) ? map.get(substr2) : 0;
    if (count > 0) {
      map.set(substr2, count - 1);
      match++;
    }
  }

  return (match * 2) / (str1.length + str2.length - ((substringLength - 1) * 2));
};

/**
 * from english dictionary split a phrase in know words by splitting spaces or by UPPERCASE
 * if some word is not found try to split by '  then look for very high similarity
 */
/**@TODO implement: 
 * https://github.com/stephenjjbrown/string-similarity-js   --soersen coefficent
 * https://github.com/aceakash/string-similarity  --dice coefficent (NB should be the same as soersen!!!)
 * https://en.wikipedia.org/wiki/Category:String_similarity_measures
 * trigram
 * define a string to use as common distance ex (ABCD) short enough to be repeated and cover most words.
 *  must be random enough to not overlap any english word
 * 
 * 
 */

const UPPERCASES: { [s: string]: string } = { "A": "a", "B": "b", "C": "c", "D": "d", "E": "e", "F": "f", "G": "g", "H": "h", "I": "i", "J": "j", "K": "k", "L": "l", "M": "m", "N": "n", "O": "o", "P": "p", "Q": "q", "R": "r", "S": "s", "T": "t", "U": "u", "V": "v", "W": "w", "X": "x", "Y": "y", "Z": "z" };

/**
* UnCamelCase string
* @param {string} str First string to match
* @returns Array of strings splitted by uppercase.
*/
export const splitByUpperCase = (str: string): Array<string> => {
  let splitted: string[] = [];
  let currentIdx: number = -1;
  for (let i = 0; i < str.length; i++) {
    if (UPPERCASES[str[i]]) {
      splitted.push("");
      currentIdx++;
      splitted[currentIdx] = UPPERCASES[str[i]];
    } else {
      splitted[currentIdx] += str[i];
    }
  }
  return splitted;
};

/**
* Calculate similarity between two strings
* @param {string} str1 First string to match
* @param {string} str2 First string to match
* @returns number representing jaroDistance.
*/
export const jaroDistance = (str1: string, str2: string): number => {
  let l1: number = str1.length;
  let l2: number = str2.length;
  const normalizer = 3;
  let charsAndPosition: StringNumberArrayMap = {};
  let matchingChars: number = 0;
  let transpositions: number = 0;
  let maxDist: number = Math.max(l1, l2) / 2 - 1;
  for (let i = 0; i < l1; i++) {
    let c = str1[i];
    if (charsAndPosition[c]) {
      charsAndPosition[c].push(i);
    } else {
      charsAndPosition[c] = [i];
    }
  }
  for (let i = 0; i < l2; i++) {
    let c = str2[i];
    if (charsAndPosition[c]) {
      let k = 0;
      let distance = l1;
      while (k < charsAndPosition[c].length) {
        distance = Math.min(distance, Math.abs(charsAndPosition[c][k] - i));
        if (distance == 0) k = l1;//force exit
        else k++;
      }
      if (distance < maxDist) {
        matchingChars++;
        distance > 0 ? transpositions++ : null;
      }
    }
  }
  transpositions /= 2;
  let DJ: number = (matchingChars * (1 / l1 + 1 / l2) + (matchingChars - transpositions) / matchingChars) / normalizer;
  return DJ || 0;
};

export const jaroWinklerDistance = (str1: string, str2: string, p: number = 0.1, L: number = 4): number => {
  //check commong substring in first 4 chars:
  let beginningMatch: number = 0;
  while (beginningMatch < L && str1[beginningMatch] == str2[beginningMatch]) {
    beginningMatch++;
  }
  let JD = jaroDistance(str1, str2);
  return JD + L * p * (1 - JD);
};
/**
 * 
 * https://en.wikipedia.org/wiki/Longest_common_substring_problem
 */

export const LevenshteinDistance = (A: string, B: string): number => {
  let t: Array<number> = [], u: Array<number> = [], i: number, j: number, m: number = A.length, n: number = B.length;
  if (!m) { return n; }
  if (!n) { return m; }
  for (j = 0; j <= n; j++) { t[j] = j; }
  for (i = 1; i <= m; i++) {
    for (u = [i], j = 1; j <= n; j++) {
      u[j] = A[i - 1] === B[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
    } t = u;
  } return 1 - u[n] / Math.max(m, n);

}

//numeric regex
//https://digitalfortress.tech/js/top-15-commonly-used-regex/
//https://projects.lukehaas.me/regexhub/
//https://www.hongkiat.com/blog/regex-web-developers/
//https://levelup.gitconnected.com/extremely-useful-regular-expression-examples-for-real-world-applications-567e844a0822
//look for regex for currencies and for dates
//use string similarities for adpating to tables differences
//add all these routines in algorithms ts or auxil...