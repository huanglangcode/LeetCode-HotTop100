/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。
请你实现 Trie 类：

Trie() 初始化前缀树对象。
void insert(String word) 向前缀树中插入字符串 word 。
boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class Trie {
    constructor() {
        this.root = {};
    }
    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (const c of word) {
            if (node[c] == null) {
                node[c] = {};
            }
            node = node[c];
        }
        node.isWord = true;
    }
    traverse(word) {
        let node = this.root;
        for (let c of word) {
            node = node[c];
            if (node == null) return null;
        }
        return node;
    }
    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const node = this.traverse(word);
        return node != null && node.isWord === true;
    }
    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.traverse(prefix) != null;
    }
}


var obj = new Trie();
obj.insert("apple");
obj.insert("application");
console.log('obj :>> ', JSON.stringify(obj));
var param_2 = obj.search("apple");
console.log('param_2 :>> ', param_2);
var param_3 = obj.startsWith("ap");
console.log('param_3 :>> ', param_3);
var param_4 = obj.search("app");
console.log('param_4 :>> ', param_4);

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

