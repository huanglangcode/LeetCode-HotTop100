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
        return this.match(word, this.wordsTrie, 0);
    }

    match(word, node, idx) {
        if (!node) return false;
        if (idx == word.length) return !!node.isEnd;
        const c = word[idx]
        if (c != '.') {
            return this.match(word, node[c], idx + 1);
        } else {
            for (const child of Object.values(node)) {
                if (this.match(word, child, idx + 1))
                    return true;
            }
        }
        return false;
    }
}


// ["WordDictionary","addWord","addWord","addWord","addWord","search","search","addWord","search","search","search","search","search","search"]
// [[],["at"],["and"],["an"],["add"],["a"],[".at"],["bat"],[".at"],["an."],["a.d."],["b."],["a.d"],["."]]
var wordDictionary = new WordDictionary();
wordDictionary.addWord("at");
wordDictionary.addWord("and");
wordDictionary.addWord("an");
wordDictionary.addWord("add");
// wordDictionary.addWord("rup");
// wordDictionary.addWord("rups");
// wordDictionary.addWord("add");
// wordDictionary.addWord("adds");
// wordDictionary.addWord("adder");
// wordDictionary.addWord("addee");
console.log('wordDictionary :>> ', JSON.stringify(wordDictionary.wordsTrie));
console.log(wordDictionary.search("a")); // return true
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

