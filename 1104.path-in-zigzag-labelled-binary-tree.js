/*
 * @lc app=leetcode id=1104 lang=javascript
 *
 * [1104] Path In Zigzag Labelled Binary Tree
 * 
 * Input: label = 14
 * Output: [1,3,4,14]
 */

// @lc code=start
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
    if (label === 1) {
        return [1];
    }
    let n = Math.floor(Math.log2(label)) + 1;
    let ans = new Array(n);
    ans[n - 1] = label;
    let curr = label;
    let idx = n - 1;
    while (idx) {
        let sum = (1 << (idx - 1)) + ((1 << idx) - 1);
        curr = sum - Math.floor(curr / 2);
        ans[idx - 1] = curr;
        idx--;
    }
    return ans;
};
// @lc code=end

pathInZigZagTree(5);