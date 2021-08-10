/*
 * @lc app=leetcode id=486 lang=javascript
 *
 * [486] Predict the Winner
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
    if (nums.length < 3) {
        return true;
    }
    let sum = nums.reduce((acc, curr) => {
        acc += curr;
        return acc;
    });
    let hash = new Map();
    const helper = (left, right) => {
        if (left > right) {
            return 0;
        }
        if (left === right) {
            return nums[left];
        }
        let key = `${left}_${right}`;
        if (hash.has(key)) {
            return hash.get(key);
        }
        const score = Math.max(
            nums[left] + Math.min(
                helper(left + 2, right),
                helper(left + 1, right - 1)
            ),
            nums[right] + Math.min(
                helper(left, right - 2),
                helper(left + 1, right - 1)
            )
        );
        hash.set(key, score);
        return score;
    };
    let res = helper(0, nums.length - 1);
    return res >= (sum / 2);
};

// @lc code=end

PredictTheWinner([1, 5, 2, 4, 6]);