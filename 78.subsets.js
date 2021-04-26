/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = []
    let backtracking = (path, index) => {
        res.push(path.slice())
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            backtracking(path, i + 1)
            path.pop()
        }
    }
    backtracking([], 0)
    console.log('res :>> ', res);
    return res
};
// @lc code=end

subsets([1, 2, 3])