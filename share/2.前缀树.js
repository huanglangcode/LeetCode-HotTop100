/**
    var a = 'apple'
    var b = 'applepen'
    let root = {}

    let node = root
    for (let i = 0; i < a.length; i++) {
        if (!node[a[i]]) {
            node[a[i]] = {}
        }
        node = node[a[i]]
    }
    node.isEnd = true

    let node1 = root
    for (let i = 0; i < b.length; i++) {
        if (!node1[b[i]]) {
            node1[b[i]] = {}
        }
        node1 = node1[b[i]]
    }
    node1.isEnd = true

    console.log('root :>> ', JSON.stringify(root));
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
            if (node[c] === null) {
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
            if (node === null) return null;
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
        return this.traverse(prefix) !== null;
    }
}


class Trie2 {
    constructor() {
        this.children = new Array(26);
        this.isWord = false
    }
    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this
        for (let i = 0; i < word.length; i++) {
            const idx = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (node.children[idx] === undefined)
                node.children[idx] = new Trie2()
            node = node.children[idx]
        }
        node.isWord = true
    }
    traverse(word) {
        let node = this
        for (let i = 0; i < word.length; i++) {
            const idx = word.charCodeAt(i) - 'a'.charCodeAt(0)
            if (node.children[idx] === undefined) {
                return false
            }
            node = node.children[idx]
        }
        return node
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
        return this.traverse(prefix) !== null;
    }
}

var obj = new Trie2();
obj.insert("apple");
obj.insert("application");
console.log('obj :>> ', JSON.stringify(obj));
var param_2 = obj.search("apple");
console.log('param_2 :>> ', param_2);
var param_3 = obj.startsWith("ap");
console.log('param_3 :>> ', param_3);
var param_4 = obj.search("app");
console.log('param_4 :>> ', param_4);