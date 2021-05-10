/*
 * @lc app=leetcode id=403 lang=javascript
 *
 * [403] Frog Jump
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 * 开始时， 青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃一个单位(即只能从单元格1跳至单元格2).
 */
var canCross = function (stones) {
    if (stones[1] - stones[0] > 1) {
        return false;
    }
    const helper = (idx, k) => {
        if (idx >= stones.length) {
            return true;
        }
        if (stones[idx + 1] - stones[idx] > k + 1) {
            return false;
        }
        // 上一步已经跳了k 本步可选为 k - 1; k ; k + 1
        for (let i = k - 1; i <= k + 1; i++) {
            if (i > 0) {
                if (helper(idx + 1, i)) {
                    return true;
                };
            } else {
                continue;
            }
        }
        return false;
    };
    const res = helper(1, 1);
    console.log("res :>> ", res);
};
// @lc code=end

canCross([0, 1, 2, 3, 4, 8, 9, 11]);