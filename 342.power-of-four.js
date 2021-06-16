/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 0) {
        return false;
    }
    let p = n.toString(4);
    if (p[0] !== '1') {
        return false;
    }
    for (let i = p.length - 1; i >= 1; i--) {
        if (p[i] !== '0') {
            return false;
        }
    }
    return true;
};
// @lc code=end
