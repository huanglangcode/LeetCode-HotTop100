/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
示例 1：
    输入：s = "aa" p = "a"
    输出：false
    解释："a" 无法匹配 "aa" 整个字符串。

示例 2:
    输入：s = "aa" p = "a*"
    输出：true
    解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

示例 3：
    输入：s = "ab" p = ".*"
    输出：true
    解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

示例 4：
    输入：s = "aab" p = "c*a*b"
    输出：true
    解释：因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。

示例 5：
    输入：s = "mississippi" p = "mis*is*p*."
    输出：false
 */
// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const helper = (idx1, idx2) => {
        if (idx1 === s.length && idx2 === p.length) return true
        if (idx1 > s.length) return false
    }
    helper(0, 0)
};
// @lc code=end


var s = "aaaaaab", p = "c*a*b"

isMatch(s, p)


/**
 *var lenS = s.length;
  var lenP = p.length;
  var map = {};

  return check(0, 0);

  function check(idxS, idxP) {
    if (map[idxS + ':' + idxP] !== undefined) return map[idxS + ':' + idxP];
    if (idxS > lenS) return false;
    if (idxS === lenS && idxP === lenP) return true;

    if (p[idxP] === '.' || p[idxP] === s[idxS]) {
      map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
        check(idxS + 1, idxP) || check(idxS, idxP + 2) :
        check(idxS + 1, idxP + 1);
    } else {
      map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
        check(idxS, idxP + 2) : false;
    }
    return map[idxS + ':' + idxP];
  }
 * 
 * 
 */