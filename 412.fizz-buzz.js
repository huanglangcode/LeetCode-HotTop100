/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

var find132pattern = function (nums) {
  if (nums.length < 3) {
    return false
  }
  let next = Number.MIN_SAFE_INTEGER
  let stack = []
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < next) {
      return true
    }
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      next = stack.pop()
    }
    stack.push(nums[i])
  }
  return false
};

let res = find132pattern([3, 5, 0, 3, 4])
console.log('res :>> ', res);