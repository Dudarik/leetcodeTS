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
/**871. Minimum Number of Refueling Stops */
/**https://leetcode.com/problems/minimum-number-of-refueling-stops/ */
export function minRefuelStops(target, startFuel, stations) {
    const n = stations.length;
    let currFuel = startFuel, i = 0;
    let res = 0;
    const pq = []; //priority queue - analog :)
    while (currFuel < target) {
        while (i < n && currFuel >= stations[i][0]) {
            pq.push(stations[i][1]);
            pq.sort((a, b) => a - b);
            i++;
        }
        if (pq.length === 0)
            return -1;
        currFuel += pq.pop();
        res++;
    }
    return res;
}
/**1329. Sort the Matrix Diagonally */
/**https://leetcode.com/problems/sort-the-matrix-diagonally/ */
export function diagonalSort(mat) {
    const diagonals = {};
    const row = mat[0].length, col = mat.length;
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            const dia = i - j;
            diagonals[dia]
                ? diagonals[dia].push(mat[i][j])
                : (diagonals[dia] = [mat[i][j]]);
        }
    }
    Object.keys(diagonals).forEach((key) => diagonals[+key].sort((a, b) => b - a));
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            const dia = i - j;
            mat[i][j] = diagonals[dia].pop();
        }
    }
    return mat;
    // let n = mat.length,
    //   m = mat[0].length;
    // for (let i = 0; i < n; i++) {
    //   let row = i,
    //     col = 0;
    //   const tArr: number[] = [];
    //   while (row < n && col < m) {
    //     tArr.push(mat[row][col]);
    //     row++;
    //     col++;
    //   }
    //   tArr.sort((a, b) => a - b);
    //   row--;
    //   col--;
    //   while (row >= 0 && col >= 0) {
    //     const t = tArr.pop();
    //     if (t !== undefined) mat[row][col] = t;
    //     row--;
    //     col--;
    //   }
    // }
    // for (let i = 1; i < m; i++) {
    //   let row = 0,
    //     col = i;
    //   const tArr: number[] = [];
    //   while (row < n && col < m) {
    //     tArr.push(mat[row][col]);
    //     row++;
    //     col++;
    //   }
    //   tArr.sort((a, b) => a - b);
    //   row--;
    //   col--;
    //   while (row >= 0 && col >= 0) {
    //     const t = tArr.pop();
    //     if (t !== undefined) mat[row][col] = t;
    //     row--;
    //     col--;
    //   }
    // }
    // return mat;
}
/**48. Rotate Image */
/**https://leetcode.com/problems/rotate-image/ */
/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix) {
    const n = matrix.length;
    const m = n - 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m - i; j++) {
            [matrix[i][j], matrix[m - j][m - i]] = [
                matrix[m - j][m - i],
                matrix[i][j],
            ];
        }
    }
    matrix.reverse();
    // const len = matrix.length;
    // for (let i = 0; i < Math.trunc((len + 1) / 2); i++) {
    //   for (let j = 0; j < Math.trunc(len / 2); j++) {
    //     const t = matrix[len - 1 - j][i];
    //     matrix[len - 1 - j][i] = matrix[len - 1 - i][len - j - 1];
    //     matrix[len - 1 - i][len - j - 1] = matrix[j][len - 1 - i];
    //     matrix[j][len - 1 - i] = matrix[i][j];
    //     matrix[i][j] = t;
    //   }
    // }
}
