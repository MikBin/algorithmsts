/**
 * Knuth-Morris-Pratt (KMP) Pattern Matching Algorithm
 *
 * @param text The text to search in
 * @param pattern The pattern to search for
 * @returns Array of starting indices where pattern is found in text
 */
export function knuthMorrisPratt(text: string, pattern: string): number[] {
  if (pattern.length === 0) return [];
  if (text.length === 0) return [];

  const lps = computeLPSArray(pattern);
  const indices: number[] = [];
  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      j++;
      i++;
    }

    if (j === pattern.length) {
      indices.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return indices;
}

/**
 * Computes the Longest Prefix Suffix (LPS) array for KMP
 *
 * @param pattern The pattern string
 * @returns The LPS array
 */
export function computeLPSArray(pattern: string): number[] {
  const lps = new Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

/**
 * Rabin-Karp Pattern Matching Algorithm
 *
 * @param text The text to search in
 * @param pattern The pattern to search for
 * @returns Array of starting indices where pattern is found in text
 */
export function rabinKarp(text: string, pattern: string): number[] {
  if (pattern.length === 0) return [];
  if (text.length === 0 || text.length < pattern.length) return [];

  const d = 256; // Number of characters in the input alphabet
  const q = 101; // A prime number
  const indices: number[] = [];

  const M = pattern.length;
  const N = text.length;
  let i = 0;
  let j = 0;
  let p = 0; // hash value for pattern
  let t = 0; // hash value for txt
  let h = 1;

  // The value of h would be "pow(d, M-1)%q"
  for (i = 0; i < M - 1; i++) {
    h = (h * d) % q;
  }

  // Calculate the hash value of pattern and first window of text
  for (i = 0; i < M; i++) {
    p = (d * p + pattern.charCodeAt(i)) % q;
    t = (d * t + text.charCodeAt(i)) % q;
  }

  // Slide the pattern over text one by one
  for (i = 0; i <= N - M; i++) {
    // Check the hash values of current window of text and pattern
    // If the hash values match then only check for characters one by one
    if (p === t) {
      // Check for characters one by one
      for (j = 0; j < M; j++) {
        if (text[i + j] !== pattern[j]) {
          break;
        }
      }

      // if p == t and pat[0...M-1] = txt[i, i+1, ...i+M-1]
      if (j === M) {
        indices.push(i);
      }
    }

    // Calculate hash value for next window of text: Remove leading digit,
    // add trailing digit
    if (i < N - M) {
      t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + M)) % q;

      // We might get negative value of t, converting it to positive
      if (t < 0) {
        t = (t + q);
      }
    }
  }

  return indices;
}

/**
 * Z-Algorithm for Pattern Matching
 *
 * Finds all occurrences of a pattern in a text using the Z-algorithm in linear time.
 *
 * @param text The text to search in
 * @param pattern The pattern to search for
 * @returns Array of starting indices where pattern is found in text
 * @complexity Time: O(n + m) where n is text length and m is pattern length | Space: O(n + m) for the Z array and concatenated string
 */
export function zAlgorithm(text: string, pattern: string): number[] {
  if (pattern.length === 0) return [];
  if (text.length === 0 || text.length < pattern.length) return [];

  let separator = "$";
  while (text.includes(separator) || pattern.includes(separator)) {
    separator = String.fromCharCode(separator.charCodeAt(0) + 1);
  }
  const concat = pattern + separator + text;
  const l = concat.length;
  const Z = new Array(l).fill(0);

  let left = 0;
  let right = 0;

  for (let i = 1; i < l; i++) {
    if (i > right) {
      left = right = i;
      while (right < l && concat[right - left] === concat[right]) {
        right++;
      }
      Z[i] = right - left;
      right--;
    } else {
      const k = i - left;
      if (Z[k] < right - i + 1) {
        Z[i] = Z[k];
      } else {
        left = i;
        while (right < l && concat[right - left] === concat[right]) {
          right++;
        }
        Z[i] = right - left;
        right--;
      }
    }
  }

  const indices: number[] = [];
  const m = pattern.length;
  for (let i = m + 1; i < l; i++) {
    if (Z[i] === m) {
      indices.push(i - m - 1);
    }
  }

  return indices;
}

/**
 * Boyer-Moore Pattern Matching Algorithm (with Bad Character Heuristic)
 *
 * @param text The text to search in
 * @param pattern The pattern to search for
 * @returns Array of starting indices where pattern is found in text
 * @complexity Time: O(n + m) best case, O(n * m) worst case (using only bad character rule) | Space: O(1) assuming a fixed alphabet size (or O(k) where k is alphabet size)
 */
export function boyerMoore(text: string, pattern: string): number[] {
  if (pattern.length === 0) return [];
  if (text.length === 0 || text.length < pattern.length) return [];

  const m = pattern.length;
  const n = text.length;
  const badChar = new Map<string, number>();

  for (let i = 0; i < m; i++) {
    badChar.set(pattern[i], i);
  }

  const indices: number[] = [];
  let s = 0;

  while (s <= (n - m)) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }

    if (j < 0) {
      indices.push(s);
      const nextChar = s + m < n ? text[s + m] : "";
      const badCharShift = badChar.has(nextChar) ? badChar.get(nextChar)! : -1;
      s += (s + m < n) ? m - badCharShift : 1;
    } else {
      const badCharShift = badChar.has(text[s + j]) ? badChar.get(text[s + j])! : -1;
      s += Math.max(1, j - badCharShift);
    }
  }

  return indices;
}
