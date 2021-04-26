/*
 * @lc app=leetcode id=1006 lang=javascript
 *
 * [1006] Clumsy Factorial
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
    let round = Math.floor(N / 4)
    let P = N
    let calc = (x) => {
        switch (x) {
            case 1:
                return x
            case 2:
                return x * (x - 1)
            case 3:
                return Math.floor(x * (x - 1) / (x - 2))
            case P:
                return Math.floor(x * (x - 1) / (x - 2)) + (x - 3)
            default:
                return Math.floor(x * (x - 1) / (x - 2)) - (x - 3)
        }
    }
    let res = calc(N)
    N -= 4
    while (N > 0 && round > 0) {
        res -= calc(N)
        N -= 4
        round--
    }
    return res
};
// @lc code=end
clumsy(4)
