/*
 * @lc app=leetcode.cn id=1455 lang=javascript
 *
 * [1455] 检查单词是否为句中其他单词的前缀
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    return sentence.split(" ").findIndex((ele) => ele.startsWith(searchWord)) + 1 || -1
};
// @lc code=end

var sentence = "this problem is an easy problem", searchWord = "pro"

let r = isPrefixOfWord(sentence, searchWord)
console.log('r', r)