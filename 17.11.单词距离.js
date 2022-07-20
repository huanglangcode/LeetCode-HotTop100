/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
    let hash = {}
    for (let i = 0; i < words.length; i++) {
        hash[words[i]] = !!hash[words[i]] ? hash[words[i]].concat(i) : [i]
    }
    let word1Arr = hash[word1]
    let word2Arr = hash[word2]
    const helper = (arr1, arr2) => {
        let i = 0, j = 0, res = 1e6
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                res = Math.min(arr2[j] - arr1[i], res)
                i++
            } else if (arr1[i] > arr2[j]) {
                res = Math.min(arr1[i] - arr2[j], res)
                j++
            }
        }
        return res
    }
    return helper(word1Arr, word2Arr)
};


var words = ["I", "am", "a", 'hello', "student", 'in', "from", "a", "university", "in", "a", "student"], word1 = "a", word2 = "student"


let res = findClosest(words, word1, word2)
console.log('res :>> ', res);