/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * @param {number[]} nums 
 * @returns {number[][]}
 */
var permute = function (s) {
    let res = [];
    let hash = new Array(s.length).fill(false);
    const helper = (subStr) => {
        if (subStr.length === s.length) {
            res.push(Array.from(subStr));
            return;
        }
        for (let i = 0; i < s.length; i++) {
            if (hash[i]) {
                continue;
            }
            subStr.push(s[i]);
            hash[i] = true;
            helper(subStr);
            subStr.pop();
            hash[i] = false;
        }
    };
    helper([]);
    return res;
};

permute([1, 2, 3]);
// @lc code=end

