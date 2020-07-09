/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  //一次遍历哈希解法
  const result = hashTwoSum(nums, target)
  return result
}

//思路: [2,8,11,7] 9  遍历数据 计算每个当前数字与target的差值并记录下标
// 得出如:{7(9-2): 0, 1:1, -2:2, 2:3}的hash 只要当前被遍历到的数字已经在hash中存在.即可轻松求出答案
// 时间复杂度O(n), 空间复杂度O(n)
var hashTwoSum = (nums, target) => {
  let needed = {}
  for (let i = 0; i < nums.length; i++) {
    //注意0为false
    if (Number.isInteger(needed[nums[i]])) {
      return [needed[nums[i]], i]
    }
    needed[target - nums[i]] = i
  }
}

module.exports = twoSum
