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
/**659. Split Array into Consecutive Subsequences */
/**https://leetcode.com/problems/split-array-into-consecutive-subsequences/ */
export function isPossible(nums) {
    const store = {};
    const result = {};
    for (let i = 0; i < nums.length; i++) {
        store[nums[i]] = ++store[nums[i]] || 1;
    }
    console.log(store);
    for (let i = 0; i < nums.length; i++) {
        if (store[nums[i]] === 0)
            continue;
        // debugger;
        store[nums[i]]--;
        if (result[nums[i] - 1] > 0) {
            result[nums[i] - 1]--;
            result[nums[i]] = ++result[nums[i]] || 1;
        }
        else if (store[nums[i] + 1] && store[nums[i] + 2]) {
            store[nums[i] + 1]--;
            store[nums[i] + 2]--;
            result[nums[i] + 2] = ++result[nums[i] + 2] || 1;
        }
        else {
            return false;
        }
    }
    return true;
}