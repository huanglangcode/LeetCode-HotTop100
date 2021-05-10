/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        //统计第i位中1的个数
        let oneCount = 0;
        for (let j = 0; j < nums.length; j++) {
            oneCount += (nums[j] >>> i) & 1;
        }
        //如果1的个数不是3的倍数，说明那个只出现一次的数字的二进制位中在这一位是1
        if (oneCount % 3 === 1) {
            res |= 1 << i;
        }
    }
    return res;
};
// @lc code=end

singleNumber([0, 1, 0, 1, 0, 1, 99]);