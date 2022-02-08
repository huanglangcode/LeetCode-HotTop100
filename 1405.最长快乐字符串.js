/*
 * @lc app=leetcode.cn id=1405 lang=javascript
 *
 * [1405] 最长快乐字符串
如果字符串中不含有任何 'aaa'，'bbb' 或 'ccc' 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。
给你三个整数 a，b ，c，请你返回 任意一个 满足下列全部条件的字符串 s：

s 是一个尽可能长的快乐字符串。
s 中 最多 有a 个字母 'a'、b 个字母 'b'、c 个字母 'c' 。
s 中只含有 'a'、'b' 、'c' 三种字母。
如果不存在这样的字符串 s ，请返回一个空字符串 ""。

示例 1：
输入：a = 1, b = 1, c = 7
输出："ccaccbcc"
解释："ccbccacc" 也是一种正确答案。

示例 2：
输入：a = 2, b = 2, c = 1
输出："aabbc"

示例 3：
输入：a = 7, b = 1, c = 0
输出："aabaa"
解释：这是该测试用例的唯一正确答案。
 

提示：

0 <= a, b, c <= 100
a + b + c > 0
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    let arr = [[a, 'a'], [b, 'b'], [c, 'c']]
    arr.sort((a, b) => b[0] - a[0])
    let ans = ""
    let last = ""
    let i = 0
    while (arr[i][0] > 0 && arr[i][1] !== last) {
        const [cnt, ele] = arr[i]
        if (cnt > 1) {
            if (i === 1 && arr[0][0] > arr[1][0]) {
                ans += `${ele}`
                arr[i][0] -= 1
            } else {
                ans += `${ele}${ele}`
                arr[i][0] -= 2
            }
        } else if (cnt === 1) {
            ans += `${ele}`
            arr[i][0] -= 1
        }
        last = ele
        if ((++i & 1) === 0) {
            arr.sort((a, b) => b[0] - a[0])
            i = 0
        }
    }
    return ans
};
// @lc code=end

var a = 0, b = 4, c = 7
let ans = longestDiverseString(a, b, c)
console.log('ans :>> ', ans);