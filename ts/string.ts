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
