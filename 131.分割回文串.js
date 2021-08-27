/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。
返回 s 所有可能的分割方案。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    if (s.length === 1) {
        return [[s]]
    }
    let res = []
    const backtracking = (arr, curr) => {
        if (!curr.length) {
            res.push([...arr])
            return
        }
        for (let i = 1; i <= s.length; i++) { // 切割力度 1 到 s.length -1
            if (curr.length < i) { continue }
            let ele = curr.substr(0, i)
            if (checkPalindrome(ele)) {
                backtracking(arr.concat(ele), curr.slice(i))
            }
        }
    }
    backtracking([], s)
    console.log('res :>> ', res);
    return res
};


var checkPalindrome = (s) => {
    let l = 0, r = s.length - 1
    while (l < r) {
        if (s[l] !== s[r]) {
            return false
        }
        l++
        r--
    }
    return true
}
// @lc code=end

partition('bb')
// 输入：s = "aabbc"
// 输出：[["a","a","b","b","c"],["a","a","bb","c"],["aa","b","b","c"],["aa","bb","c"]]