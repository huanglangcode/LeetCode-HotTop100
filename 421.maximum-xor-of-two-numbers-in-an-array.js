/* eslint-disable no-mixed-operators */
/*
 * @lc app=leetcode id=421 lang=javascript
 *
 * [421] Maximum XOR of Two Numbers in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: nums = [3,10,5,25,2,8]
//  00011
//  01010
//  00101
//  11001
//  00010
//  01000
var initTrie = (nums, length) => {
    let root = {};
    for (const num of nums) {
        // 此时node为root的内存地址
        let node = root;
        for (let i = length - 1; i >= 0; i--) {
            const currBin = num >> i & 1;
            if (!node[currBin]) {
                // 将 root 改变为{1: {}}
                node[currBin] = {};
            }
            // 将node改为刚新建的{}的内存地址, 下一轮会改变root的值
            node = node[currBin];
        }
        node = undefined;
    }
    return root;
};
var findMaximumXOR = function (nums) {
    let max = Math.max(...nums);
    const length = max.toString(2).length;
    const tree = initTrie(nums, length);
    let ans = 0;
    for (const num of nums) {
        let temp = 0;
        let curr = tree;
        for (let i = length - 1; i >= 0; i--) {
            const bin = num >> i & 1;
            // 比如当前是 8  -> 1000 最好找到每一位都不一致的 0111
            if (curr[1 - bin]) {
                temp = (temp << 1) + 1;
                curr = curr[1 - bin];
            } else {
                temp = (temp << 1);
                curr = curr[bin];
            }
        }
        ans = Math.max(ans, temp);
    }
    return ans;
};

findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]);
// @lc code=end