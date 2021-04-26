/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b)
    let res = []
    let backtracking = (path, index) => {
        res.push(path)
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue
            }
            // path.push(nums[i])
            backtracking([...path, nums[i]], i + 1)
            // path.pop()
        }
    }
    backtracking([], 0)
    console.log('res :>> ', res);
    return res
};


subsetsWithDup([4, 4, 4, 1, 4])
// @lc code=end

