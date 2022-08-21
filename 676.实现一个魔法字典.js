/*
 * @lc app=leetcode.cn id=676 lang=javascript
 *
 * [676] 实现一个魔法字典
 */

// @lc code=start

class MagicDictionary {
    constructor() {
        this.dic = []
    }
    /**
     * @param {string[]} dictionary
     * @return {void}
     */
    buildDict(dictionary) {
        this.dic.push(...dictionary)
    }
    /**
     * @param {string} searchWord
     * @return {boolean}
     */
    search(searchWord) {
        for (const word of this.dic) {
            if (word.length !== searchWord.length) continue
            let diff = 0
            inner:
            for (let i = 0; i < searchWord.length; i++) {
                if (searchWord[i] !== word[i]) {
                    diff++
                    if (diff >= 2) continue inner
                }
            }
            if (diff === 1) return true
        }
        return false
    }
}



/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 * ["MagicDictionary", "buildDict", "search", "search", "search", "search"]
[[], [["hello", "leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
输出
[null, null, false, true, false, false]

解释
MagicDictionary magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
magicDictionary.search("hello"); // 返回 False
magicDictionary.search("hhllo"); // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
magicDictionary.search("hell"); // 返回 False
magicDictionary.search("leetcoded"); // 返回 False
 */
// @lc code=end

var magicDictionary = new MagicDictionary()
magicDictionary.buildDict(["hello", "leetcode"])
console.log('object :>> ', magicDictionary.dic);