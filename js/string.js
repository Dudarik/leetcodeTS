/**30. Substring with Concatenation of All Words */
/**https://leetcode.com/problems/substring-with-concatenation-of-all-words/ */
export function findSubstring(s, words) {
    const chunkSize = words[0].length;
    const numChunks = words.length;
    const concatLength = chunkSize * numChunks;
    const result = [];
    const wordMap = new Map();
    words.forEach((word) => {
        if (!wordMap.get(word))
            wordMap.set(word, 0);
        wordMap.set(word, wordMap.get(word) + 1);
    });
    const idxLimit = s.length - concatLength;
    for (let i = 0; i <= idxLimit; i++) {
        const map = new Map(wordMap);
        for (let x = 0; x < numChunks; x++) {
            const startIndex = i + x * chunkSize;
            const endIndex = startIndex + chunkSize;
            const substring = s.slice(startIndex, endIndex);
            const numOccurrences = map.get(substring);
            if (!numOccurrences)
                break;
            map.set(substring, numOccurrences - 1);
            if (x === numChunks - 1)
                result.push(i);
        }
    }
    return result;
}
