/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 0) {
        return false;
    }
    let p = n.toString(2);
    for (let i = p.length - 1; i >= 1; i--) {
        if (p[i] !== '0') {
            return false;
        }
    }
    return true;
};
// @lc code=end

isPowerOfTwo(1);
isPowerOfTwo(2);
isPowerOfTwo(3);
isPowerOfTwo(4);
isPowerOfTwo(5);