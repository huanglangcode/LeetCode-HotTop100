/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

class WordDictionary {
    constructor() {
        this.wordsTrie = {}
    }
    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.wordsTrie
        for (const c of word) {
            if (!node[c]) {
                node[c] = {}
            }
            node = node[c]
        }
        node.isEnd = true
    }
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let toBeFind = this.wordsTrie
        for (const c of word) {
            if (c === '.') {
                const next = Object.values(toBeFind)
                if (!next.length) {
                    return false
                }
                toBeFind = Object.assign({}, ...next)
            } else {
                toBeFind = toBeFind[c]
                if (!toBeFind) {
                    return false
                }
            }
        }
        return !!toBeFind.isEnd
    }
}

var wordDictionary = new WordDictionary();
wordDictionary.addWord("ran");
wordDictionary.addWord("rune");
wordDictionary.addWord("runner");
wordDictionary.addWord("runs");
wordDictionary.addWord("rup");
wordDictionary.addWord("rups");
wordDictionary.addWord("add");
wordDictionary.addWord("adds");
wordDictionary.addWord("adder");
wordDictionary.addWord("addee");
console.log('wordDictionary :>> ', JSON.stringify(wordDictionary.wordsTrie));
console.log(wordDictionary.search("r.n")); // return true
// console.log(wordDictionary.search("a")); // return true
// console.log(wordDictionary.search("aa")); // return false
// console.log(wordDictionary.search("a")); // return True
// console.log(wordDictionary.search(".a")); // return false
// console.log(wordDictionary.search("a.")); // return false
// console.log(wordDictionary.wordsTrie)

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

