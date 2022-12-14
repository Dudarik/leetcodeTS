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
/**13. Roman to Integer */
/**https://leetcode.com/problems/roman-to-integer/ */
export function romanToInt(s) {
    if (s.length < 1 || s.length > 15)
        return null;
    const sArr = s.split("");
    const symbolToDec = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let sum = 0, i = 0;
    while (i < sArr.length) {
        const curr = sArr[i], next = sArr[i + 1];
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
export function firstUniqChar(s) {
    const resObj = {};
    for (let i = 0; i < s.length; i++) {
        resObj[s[i]] ? resObj[s[i]]++ : (resObj[s[i]] = 1);
    }
    for (const key in resObj) {
        if (resObj[key] < 2)
            return s.indexOf(key);
    }
    return -1;
}
