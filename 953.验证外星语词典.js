/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let orderMap = { undefined: -1 }
    for (let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i
    }
    const helper = (word1, word2) => {
        for (let i = 0; i < word1.length; i++) {
            if (orderMap[word1[i]] > orderMap[word2[i]]) {
                return false
            } else if (orderMap[word1[i]] < orderMap[word2[i]]) {
                return true
            }
        }
        return true
    }

    for (let i = 0; i < words.length - 1; i++) {
        if (!helper(words[i], words[i + 1])) return false
    }
    return true
};
// @lc code=end

var words = ["app", "apple"], order = "abcdefghijklmnopqrstuvwxyz"


let res = isAlienSorted(words, order)
console.log('res :>> ', res);