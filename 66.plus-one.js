/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 * Input: [1,9,9,9]
 * Output: [2,0,0,0]
 */
var plusOne = function (digits) {
  let i = digits.length - 1
  do {
    digits[i] = digits[i] + 1
    if (digits[i] === 10) {
      digits[i] = 0
      if(digits[i - 1]){
        i--
      }else{
        digits.unshift(1)
        break
      }
    } else {
      break
    }
  } while (digits[i] !== 0)
}
plusOne([9])
// @lc code=end

