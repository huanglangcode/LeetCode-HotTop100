/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

注意：解集不能包含重复的组合。 

示例 1:

输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
示例 2:

输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    let hash = Array(candidates.length).fill(false)
    let res = []
    const helper = (idx, remain, curr) => {
        if (remain === 0) {
            res.push(curr)
            return
        }
        for (let i = idx; i < candidates.length; i++) {
            if (i > idx && candidates[i] == candidates[i - 1]) {
                continue;
            }
            if (!hash[i] && remain - candidates[i] >= 0) {
                hash[i] = true
                helper(i + 1, remain - candidates[i], curr.concat(candidates[i]))
                hash[i] = false
            }
        }
    }
    helper(0, target, [])
    return res
};
// @lc code=end

// combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
// combinationSum2([2, 5, 2, 1, 2], 5)
// combinationSum2([1, 1, 1, 3, 3, 5], 8)