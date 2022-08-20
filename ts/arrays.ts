/**1338. Reduce Array Size to The Half */
/**https://leetcode.com/problems/reduce-array-size-to-the-half/ */

export function minSetSize(arr: number[]): number {
  const halfArrLen: number = arr.length / 2;
  let result = 0;

  interface IResObj {
    [char: string]: number;
  }

  const store: IResObj = {};

  for (let i = 0; i < arr.length; i++) {
    store[arr[i]] ? store[arr[i]]++ : (store[arr[i]] = 1);
  }

  const resArr: number[] = Object.values(store).sort((a, b) => a - b);

  let tSum = 0;

  while (tSum < halfArrLen) {
    tSum += resArr.pop()!;
    result++;
  }

  return result;
}

/**659. Split Array into Consecutive Subsequences */
/**https://leetcode.com/problems/split-array-into-consecutive-subsequences/ */

export function isPossible(nums: number[]): boolean {
  const store: Record<string, number> = {};
  const result: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    store[nums[i]] = ++store[nums[i]] || 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (store[nums[i]] === 0) continue;
    // debugger;
    store[nums[i]]--;

    if (result[nums[i] - 1] > 0) {
      result[nums[i] - 1]--;
      result[nums[i]] = ++result[nums[i]] || 1;
    } else if (store[nums[i] + 1] && store[nums[i] + 2]) {
      store[nums[i] + 1]--;
      store[nums[i] + 2]--;
      result[nums[i] + 2] = ++result[nums[i] + 2] || 1;
    } else {
      return false;
    }
  }

  return true;
}

/**871. Minimum Number of Refueling Stops */
/**https://leetcode.com/problems/minimum-number-of-refueling-stops/ */

export function minRefuelStops(
  target: number,
  startFuel: number,
  stations: number[][]
): number {
  const n: number = stations.length;
  let currFuel: number = startFuel,
    i: number = 0;
  let res: number = 0;
  const pq: Array<number> = []; //priority queue - analog :)

  while (currFuel < target) {
    while (i < n && currFuel >= stations[i][0]) {
      pq.push(stations[i][1]);
      pq.sort((a, b) => a - b);
      i++;
    }
    if (pq.length === 0) return -1;

    currFuel += pq.pop()!;

    res++;
  }
  return res;
}
