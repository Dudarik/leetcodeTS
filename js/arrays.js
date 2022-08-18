/**1338. Reduce Array Size to The Half */
/**https://leetcode.com/problems/reduce-array-size-to-the-half/ */
export function minSetSize(arr) {
    const halfArrLen = arr.length / 2;
    let result = 0;
    const store = {};
    for (let i = 0; i < arr.length; i++) {
        store[arr[i]] ? store[arr[i]]++ : (store[arr[i]] = 1);
    }
    const resArr = Object.values(store).sort((a, b) => a - b);
    let tSum = 0;
    while (tSum < halfArrLen) {
        tSum += resArr.pop();
        result++;
    }
    return result;
}
