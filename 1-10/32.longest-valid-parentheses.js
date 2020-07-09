/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 */

//暴力解法. 超时
var bf = (s) => {
  let maxLength = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      for (let j = i + 2; j <= s.length; j += 2) {
        if (isValid(s.substring(i, j))) {
          maxLength = Math.max(maxLength, j - i)
        }
      }
    }
  }
  return maxLength
}

var isValid = (subStr) => { // ')()('
  let count = 0
  for (let i = 0; i < subStr.length; i++) {
    if (subStr[i] == '(') {
      count++
    } else if (subStr[i] === ')' && count > 0) {
      count--
    } else if (subStr[i] === ')' && count <= 0) {
      return false
    }
  }
  return count === 0
}

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  // let maxLength = bf(s)
  let maxLength = dp(s)
  // console.log('maxLength :>> ', maxLength)
  return maxLength
}

var dp = (s) => {
  let maxLength = 0
  //如果是类似 ()() dp[i] = dp[i-2] + 2
  //如果是类似 ()(()) dp[i] = dp[i-1] + 2 + dp[i - dp[i - 1] - 2] 即dp[5] = dp[4] + 2 + dp[5-2-2] = 2 + 2 + 2
  //注意边界条件
  let dp = Array(s.length).fill(0)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (i - 2 >= 0 ? dp[i - 2] : 0) + 2
      } else if (s[i - 1] === ')' && i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === '(') {
        dp[i] = (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0) + dp[i - 1] + 2
      }
    }
    maxLength = Math.max(dp[i], maxLength)
  }
  return maxLength
}
// longestValidParentheses(')()(()))(')

// @lc code=end

