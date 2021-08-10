/*
 * @lc app=leetcode id=1838 lang=javascript
 *
 * [1838] Frequency of the Most Frequent Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    nums.sort((a, b) => a - b);
    let i = 0, j = 1;
    let frequence = 1;
    while (i < j && j < nums.length) {
        k -= ((nums[j] - nums[j - 1]) * (j - i));
        if (k < 0) {
            k += nums[j] - nums[i++];
        } else {
            frequence = Math.max(frequence, j - i + 1);
        }
        j++;
    }
    return frequence;
};
// @lc code=end

// Input: nums = [1,4,8,13], k = 5

maxFrequency([1, 4, 8, 13], 5);
maxFrequency([3, 9, 6], 2);
maxFrequency([1, 2, 4], 5);