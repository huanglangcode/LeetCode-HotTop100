/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class Trie {
    constructor() {
        this.tree = {}
    }
    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.tree
        for (const char of word) {
            if (!node[char]) {
                node[char] = {}
            }
            node = node[char]
        }
        node.isEnd = true
    }
    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.tree
        for (const char of word) {
            if (!node[char]) {
                return false
            }
            node = node[char]
        }
        return !!node.isEnd
    }
    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.tree
        for (const char of prefix) {
            if (!node[char]) {
                return false
            }
            node = node[char]
        }
        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

