/**342. Power of Four */
/**https://leetcode.com/problems/power-of-four/ */
export function isPowerOfFour(n) {
    if (n === 0)
        return false;
    let res = Math.log(n) / Math.log(4);
    if (Math.ceil(res) === Math.floor(res))
        return true;
    return false;
}
