/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    let root = {}
    for (const word of words) {
        let node = root
        for (const c of word) {
            if (!node[c]) {
                node[c] = {}
            }
            node = node[c]
        }
        node.isEnd = true
    }
    let res = ''
    for (const word of words) {
        let node = root
        let flag = true
        for (const c of word) {
            if (!node[c].isEnd) {
                flag = false
                break
            }
            node = node[c]
        }
        if (flag && (res.length < word.length || (word.length === res.length && word.localeCompare(res) < 0))) {
            res = word
        }
    }
    return res
};
// @lc code=end

var words = ["yo", "ew", "fc", "zrc", "yodn", "fcm", "qm", "qmo", "fcmz", "z", "ewq", "yod", "ewqz", "y"]

let res = longestWord(words)
console.log('res', res);