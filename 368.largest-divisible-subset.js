/*
 * @lc app=leetcode id=368 lang=javascript
 *  给你一个由 无重复 正整数组成的集合 nums ，
    请你找出并返回其中最大的整除子集 answer ，
    子集中每一元素对 (answer[i], answer[j]) 都应当满足：
        answer[i] % answer[j] == 0 ，或
        answer[j] % answer[i] == 0
 * [368] Largest Divisible Subset
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b);
    let dp = new Array(nums.length);
    dp[0] = {
        maxValue: nums[0],
        res: [nums[0]]
    };
    let res = dp[0].res;
    for (let i = 1; i < nums.length; i++) {
        const ele = nums[i];
        dp[i] = {
            maxValue: ele,
            res: [ele]
        };
        for (let j = i - 1; j >= 0; j--) {
            if (ele % dp[j].maxValue === 0) {
                if (dp[i] && dp[i].res.length > dp[j].res.length + 1) {
                    continue;
                } else {
                    dp[i] = {
                        maxValue: ele,
                        res: dp[j].res.concat(ele)
                    };
                }
                if (dp[i].res.length > res.length) {
                    res = dp[i].res;
                }
            }
        }
    }
    return res;
};

largestDivisibleSubset([1, 2, 3, 4, 6, 8, 9, 12, 16, 24, 32]);
largestDivisibleSubset([2, 3, 4, 5, 6, 8, 9, 10, 12, 16, 24, 32]);
largestDivisibleSubset([4, 8, 10, 240]);
largestDivisibleSubset([2, 3, 8, 9, 27]);
largestDivisibleSubset([3, 4, 6, 8, 12, 16, 32]);
largestDivisibleSubset([2, 3, 4, 9, 8]);
// @lc code=end

