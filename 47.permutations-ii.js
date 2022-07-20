/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let hash = new Array(nums.length).fill(0);
    let ans = [];
    const helper = (subArr) => {
        if (subArr.length === nums.length) {
            ans.push([...subArr]);
            return;
        }
        let set = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (hash[i] || set.has(nums[i])) {
                continue;
            }
            subArr.push(nums[i]);
            set.add(nums[i]);
            hash[i] = 1;
            helper(subArr);
            subArr.pop(nums[i]);
            hash[i] = 0;
        }
    };
    helper([]);
    return ans;
};
// @lc code=end

let res = permuteUnique([1, 2, 3]);
console.log('res :>> ', res);