/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 * 
给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。
你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。

 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    words.sort((a, b) => b.length - a.length)
    let best = 0, bitsets = new Uint32Array(words.length)
    for (let i = 0; i < words.length; i++) {
        let word = words[i], wlen = word.length, bitset = 0
        if (wlen * words[0].length < best)
            return best
        for (let j = 0; j < wlen; j++)
            bitset |= 1 << (word.charCodeAt(j) - 97)
        for (let j = 0; j < i; j++)
            if ((bitsets[j] & bitset) === 0)
                best = Math.max(best, wlen * words[j].length)
        bitsets[i] = bitset
    }
    return best
};
// @lc code=end

var a = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
var b = ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
var c = ["a", "aa", "aaa", "aaaa"]
var d = ["aaaaaaa", "bbbbbbb", "cc", "defgh"]

let res = maxProduct(a)
console.log('res :>> ', res);