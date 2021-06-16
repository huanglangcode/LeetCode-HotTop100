/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
interface TrieNode {
}
class Trie {
    public root: TrieNode;
    constructor() {
        this.root = {
        };
    }
    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
    }
    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return false;
    }
    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        return false;
    }
}


var obj = new Trie();
console.log("obj :>> ", JSON.stringify(obj));
obj.insert("apple");
obj.insert("application");
console.log("obj :>> ", JSON.stringify(obj));
var param_2 = obj.search("apple");
console.log("param_2 :>> ", param_2);
var param_3 = obj.startsWith("ap");
console.log("param_3 :>> ", param_3);


/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

