// @lc code=start
/**
 * @param {string[]} words
 */
class WordFilter {
    /**
     * @param {string[]} words
     */
    constructor(words) {
        this.map = new Map()
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            for (let j = 1; j <= word.length; j++) {
                for (let k = 0; k < word.length; k++) {
                    let key = word.slice(0, j) + "_" + word.slice(k)
                    this.map.set(key, i)
                }
            }
        }
    }
    /**
     * @param {string} pref
     * @param {string} suff
     * @return {number}
     */
    f(pref, suff) {
        const key = `${pref}_${suff}`
        if (!this.map.has(key)) return -1
        return this.map.get(key)
    }
}


/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
// @lc code=end

var words = ["apple", "zopqzxc", "alopez", "wejh", "ae"]
var obj = new WordFilter(words)
var p = obj.f("a", "e")
console.log('p :>> ', p);