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
