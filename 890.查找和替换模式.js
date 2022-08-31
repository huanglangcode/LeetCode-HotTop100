/*
 * @lc app=leetcode.cn id=890 lang=javascript
 *
 * [890] 查找和替换模式
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    let hash = {}
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i]
        hash[char] = !!hash[char] ? hash[char].concat(i) : [i]
    }
    console.log('hash :>> ', hash);
    const checker = (word) => {
        let hash2 = {}
        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            hash2[char] = !!hash2[char] ? hash2[char].concat(i) : [i]
        }
        let obj1 = Object.entries(hash).sort((a, b) => a[1].length - b[1].length)
        let obj2 = Object.entries(hash2).sort((a, b) => a[1].length - b[1].length)
        if (obj1.length !== obj2.length) return false
        for (let i = 0; i < obj1.length; i++) {
            let val1 = obj1[i]
            let val2 = obj2[i]
            if (val1[1].length !== val2[1].length) return false
            for (let j = 0; j < val1[1].length; j++) {
                if (val1[1][j] !== val2[1][j]) return false
            }
        }
        return true
    }
    return words.filter(ele => checker(ele))
};
// @lc code=end


var words = ["badc", "abab", "dddd", "dede", "yyxx"], pattern = "baba"

let res = findAndReplacePattern(words, pattern)
console.log('res :>> ', res);