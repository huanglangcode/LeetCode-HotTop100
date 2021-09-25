/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true

输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出：false
 */
const isInterleave = (s1, s2, s3) => {
    if (s1.length + s2.length !== s3.length) {
        return false
    }
    let map = {}
    const helper = (si, sj, sk) => {
        let key = `${si}_${sj}_${sk}`
        if (map[key] !== undefined) {
            return map[key]
        }
        if (sk === s3.length) {
            return true
        }
        let res1 = false
        let res2 = false
        if (si < s1.length && s1[si] === s3[sk]) {
            res1 = helper(si + 1, sj, sk + 1)
        }
        if (sj < s2.length && s2[sj] === s3[sk]) {
            res2 = helper(si, sj + 1, sk + 1)
        }
        map[key] = res1 || res2
        return map[key]
    }
    return helper(0, 0, 0)
};
// @lc code=end