/*
 * @lc app=leetcode.cn id=522 lang=javascript
 *
 * [522] 最长特殊序列 II
给定字符串列表 strs ，返回其中 最长的特殊序列 。
如果最长特殊序列不存在，返回 -1 。


特殊序列 定义如下：
该序列为某字符串 独有的子序列（即不能是其他字符串的子序列）。
 s 的 子序列可以通过删去字符串 s 中的某些字符实现。
例如，"abc" 是 "aebdc" 的子序列，因为您可以删除"aebdc"中的下划线字符来得到 "abc" 。"aebdc"的子序列还包括"aebdc"、 "aeb" 和 "" (空字符串)。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
    strs.sort((a, b) => b.length - a.length)
    let strMap = {}
    for (const str of strs) {
        strMap[str] = strMap[str] + 1 || 1
    }
    const checker = (idx) => {
        // 该str不是其他str的子序列即符合条件
        const curr = strs[idx]
        for (let i = 0; i < strs.length; i++) {
            if (idx === i) continue
            let c = strs[i]
            if (curr.length > c.length) return true
            // curr = 'aabbcc'  c = 'cb'
            let p = 0
            for (let q = 0; q < c.length; q++) {
                if (c[q] === curr[p]) {
                    p++
                }
            }
            return p !== curr.length
        }
        return true
    }
    for (let i = 0; i < strs.length; i++) {
        if (strMap[strs[i]] > 1) continue
        if (checker(i)) return strs[i].length
    }
    return -1
};
// @lc code=end

var strs = ["aabbcc", "aabbcc", "c", "e", "aabbcd"]

let res = findLUSlength(strs)
console.log('res :>> ', res);