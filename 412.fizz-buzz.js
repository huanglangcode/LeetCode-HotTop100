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
var fizzBuzz = function (n) {
  let result = []
  for (let i = 0; i < n; i++) {
    if ((i+1) % 15 === 0) {
      result[i] = 'FizzBuzz'
    } else if ((i+1) % 5 === 0) {
      result[i] = 'Buzz'
    } else if ((i+1) % 3 === 0) {
      result[i] = 'Fizz'
    } else {
      result[i] = '' + (i + 1)
    }
  }
  return result
};
fizzBuzz(15)
// @lc code=end

