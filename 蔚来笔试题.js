/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
    let n = pattern.length + 1, arr = new Array(n).fill(0).map((v, idx) => v = idx + 1)
    let needReversed = []
    for (let i = 0; i < n; i++) {
        if (pattern[i] === 'D') {
            let j = i
            while (pattern[j] === 'D') {
                j++
            }
            needReversed.push([i, j + 1])
            i = j
        }
    }
    for (const [start, end] of needReversed) {
        let reversed = arr.slice(start, end).reverse()
        arr.splice(start, end - start, ...reversed)
    }
    return arr.join("")
};


var pattern = "DDDD"
// 123549876
let res = smallestNumber(pattern)
console.log('res', res)