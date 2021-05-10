/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = 0;
    while (x !== 0) {
        let curr = x % 10;
        result *= 10;
        result = result + curr;
        if (result < (-2) ** 31 || result > (2 ** 31 - 1)) {
            return 0;
        }
        x = Number.parseInt(x / 10);
    }
    return result;
};


// reverse(9007199254740999);
// @lc code=end

