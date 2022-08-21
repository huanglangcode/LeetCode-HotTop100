/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    let lower = new Array(26).fill(0)
    let upper = new Array(26).fill(0)
    for (const char of s) {
        if ((char.charCodeAt() - 'A'.charCodeAt()) >= 0 && (char.charCodeAt() - 'A'.charCodeAt()) < 26) {
            upper[char.charCodeAt() - 'A'.charCodeAt()]++
        }
        if ((char.charCodeAt() - 'a'.charCodeAt()) >= 0 && (char.charCodeAt() - 'a'.charCodeAt()) < 26) {
            lower[char.charCodeAt() - 'a'.charCodeAt()]++
        }
    }
    for (let i = 25; i >= 0; i--) {
        if (lower[i] && upper[i]) {
            return String.fromCharCode(i + 'A'.charCodeAt())
        }
    }
};

var s = 'lEeTcOdEZz'

let res = greatestLetter(s)
console.log('res :>> ', res);