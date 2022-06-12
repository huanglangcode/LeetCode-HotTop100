/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    const helper = (str) => {
        let arr = new Array(26).fill(0)
        for (const char of str) {
            arr[char.charCodeAt() - 'a'.charCodeAt()]++
        }
        return arr.join('')
    }
    for (let i = words.length - 1; i > 0; i--) {
        if (helper(words[i - 1]) === helper(words[i])) {
            words.splice(i, 1)
        }
    }
    return words
};


var words = ["abba", "baba", "bbaa", "cd", "cd"]

removeAnagrams(words)