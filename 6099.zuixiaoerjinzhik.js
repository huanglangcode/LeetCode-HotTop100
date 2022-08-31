/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
    if (Number.parseInt(s, 2) <= k) return s.length
    let arr = s.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '1') {
            arr.splice(i, 1)
            let deleted = arr.join("")
            if (Number.parseInt(deleted, 2) <= k) {
                return arr.length
            }
            i -= 1
        }
    }
};

var s = "00101001", k = 1

let q = longestSubsequence(s, k)
console.log('q :>> ', q);