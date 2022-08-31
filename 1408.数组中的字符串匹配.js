/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    words.sort((a, b) => a.length - b.length)
    let ans = []
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].indexOf(words[i]) !== -1) {
                ans.push(words[i])
                break
            }
        }
    }
    return ans
};
// @lc code=end

var words = ["leetcoder", "leetcode", "od", "hamlet", "am"]

let r = stringMatching(words)
console.log('r', r)