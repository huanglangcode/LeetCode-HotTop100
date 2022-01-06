/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let array = [] //保存最长不重复子串的数组
  for (let i = 0; i < s.length; i++) {
    let curr = s.charAt(i)
    if (array.indexOf(curr) !== -1) {//当前字符已经有重复的处理
      array = array.slice(array.indexOf(curr) + 1)
      array.push(curr)
    }else{
      array.push(curr)
    }
    max = Math.max(array.length, max)
  }
  return max
}
// lengthOfLongestSubstring('abcabcbb')
