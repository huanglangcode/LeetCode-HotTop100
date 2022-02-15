/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，
在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。
返回所有这些可能的句子。

说明：
分隔时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。

示例 1：
输入:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
输出:
[
  "cats and dog",
  "cat sand dog"
]

示例 2：
输入:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
输出:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
解释: 注意你可以重复使用字典中的单词。

示例 3：
输入:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
输出:
[]

 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    let set = new Set(wordDict)
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            // if (!dp[j]) continue
            let curr = s.slice(j, i)
            if (dp[j] && set.has(curr)) {
                console.log('j,i,curr :>> ', j, i, curr);
                dp[i] = true
            }
        }
    }
    if (dp[dp.length - 1]) {
        let ans = []
        // for (const [] of possible) {

        // }
    }
};
// @lc code=end

var s = "pineapplepenapple",
    wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]

let ans = wordBreak(s, wordDict)
console.log('ans :>> ', ans);
