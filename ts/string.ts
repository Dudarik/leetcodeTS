/**30. Substring with Concatenation of All Words */
/**https://leetcode.com/problems/substring-with-concatenation-of-all-words/ */

export function findSubstring(s: string, words: string[]): number[] {
  const chunkSize: number = words[0].length;
  const numChunks: number = words.length;
  const concatLength: number = chunkSize * numChunks;
  const result: number[] = [];
  const wordMap: Map<string, number> = new Map();

  words.forEach((word) => {
    if (!wordMap.get(word)) wordMap.set(word, 0);
    wordMap.set(word, wordMap.get(word)! + 1);
  });

  const idxLimit: number = s.length - concatLength;

  for (let i: number = 0; i <= idxLimit; i++) {
    const map: Map<string, number> = new Map(wordMap);

    for (let x: number = 0; x < numChunks; x++) {
      const startIndex: number = i + x * chunkSize;
      const endIndex: number = startIndex + chunkSize;
      const substring: string = s.slice(startIndex, endIndex);

      const numOccurrences: number | undefined = map.get(substring);
      if (!numOccurrences) break;

      map.set(substring, numOccurrences - 1);

      if (x === numChunks - 1) result.push(i);
    }
  }
  return result;
}

/**13. Roman to Integer */
/**https://leetcode.com/problems/roman-to-integer/ */

export function romanToInt(s: string): number | null {
  if (s.length < 1 || s.length > 15) return null;
  const sArr: string[] = s.split("");

  interface ISybToDec {
    [char: string]: number;
  }

  const symbolToDec: ISybToDec = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum: number = 0,
    i: number = 0;

  while (i < sArr.length) {
    const curr: string = sArr[i],
      next: string = sArr[i + 1];

    if (next && symbolToDec[curr] < symbolToDec[next]) {
      sum += symbolToDec[next] - symbolToDec[curr];
      i += 2;
      continue;
    }

    sum += symbolToDec[curr];
    i++;
  }

  return sum;
}

/**387. First Unique Character in a String */
/**https://leetcode.com/problems/first-unique-character-in-a-string/ */

export function firstUniqChar(s: string): number {
  interface IResObj {
    [char: string]: number;
  }

  const resObj: IResObj = {};

  for (let i: number = 0; i < s.length; i++) {
    resObj[s[i]] ? resObj[s[i]]++ : (resObj[s[i]] = 1);
  }

  for (const key in resObj) {
    if (resObj[key] < 2) return s.indexOf(key);
  }

  return -1;
}
