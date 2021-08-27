/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */

//  输入：chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
//  输出：返回 4 ，输入数组的前 4 个字符应该是：["a","b","1","2"]。
//  解释：
//  由于字符 "a" 不重复，所以不会被压缩。"bbbbbbbbbbbb" 被 “b12” 替代。
//  注意每个数字在数组中都有它自己的位置。

var compress = function (chars) {
    let i = 0, j = 1
    while (i < j && j < chars.length) {
        let curr = chars[i]
        let count = 1
        while (chars[j] === curr) {
            j++
            count++
        }
        if (count > 1) {
            chars.splice(i + 1, count - 1, ...count.toString().split(''))
            i = i + 1 + count.toString().length
            j = i + 1
        } else {
            i++
            j = i + 1
        }
    }
    return chars.length
};
// @lc code=end
