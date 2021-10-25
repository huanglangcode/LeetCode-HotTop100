/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let n = digits.length - 1
  let carry = 1
  while (carry) {
    digits[n] += 1
    if (digits[n] === 10) {
      digits[n] = 0
      carry = 1
      n--
    } else {
      break
    }
    if (n < 0 && carry) {
      digits.unshift(carry)
      break
    }
  }
  return digits
}
let res = plusOne([9])
console.log('digits :>> ', res);
// @lc code=end

