/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class Trie {
    constructor() {
        this.root = {}
    }
    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root
        // node = {}
        for (const c of word) {
            if (node[c] == null) {
                node[c] = {}
                // root.a = {}
                // root.a.p = {}
            }
            node = node[c]
            // node = root.a = {}
            // node = root.a.p = {}
        }
        node.isWord = true
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


var obj = new Trie()
console.log('obj :>> ', JSON.stringify(obj));
obj.insert("apple")
obj.insert("application")
console.log('obj :>> ', JSON.stringify(obj));
var param_2 = obj.search("apple")
console.log('param_2 :>> ', param_2);
var param_3 = obj.startsWith("ap")
console.log('param_3 :>> ', param_3);


/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

