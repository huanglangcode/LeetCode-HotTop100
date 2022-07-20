/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。
若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。

示例 1：
输入：words = ["w","wo","wor","worl", "world"]
输出："world"
解释： 单词"world"可由"w", "wo", "wor", 和 "worl"逐步添加一个字母组成。

示例 2：
输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
输出："apple"
解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply" 
 
提示：
1 <= words.length <= 1000
1 <= words[i].length <= 30
所有输入的字符串 words[i] 都只包含小写字母。 
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

const words = ["yo", "ew", "fc", "zrc", "yodn", "fcm", "qm", "qmo", "fcmz", "z", "ewq", "yod", "ewqz", "y"]
longestWord(words)