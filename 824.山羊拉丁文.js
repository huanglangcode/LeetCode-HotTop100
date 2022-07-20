/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    return sentence.split(" ").map((val, idx) => { if (!set.has(val[0])) { val = val.slice(1) + val.slice(0, 1) } return val + 'ma' + ''.padStart(idx + 1, 'a') }).join(" ")
};
// @lc code=end

var sentence = "The quick brown fox jumped over the lazy dog"
sentence = "I speak Goat Latin"

let res = toGoatLatin(sentence)
console.log('res :>> ', res);