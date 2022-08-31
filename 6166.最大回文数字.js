/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
    let arr = new Array(10).fill(0)
    for (const char of num) {
        arr[char]++
    }
    let res = "", maxSingle = ""
    for (let i = 0; i <= arr.length - 1; i++) {
        const cnt = arr[i]
        if (cnt >= 2) {
            let half = "".padStart(cnt >> 1, i)
            res = half + res + half
        }
        if (cnt > 0 && (cnt % 2) !== 0) {
            maxSingle = i
        }
    }
    if (res.startsWith("0")) {
        res = res.replace(/0/g, "")
    }
    const arr2 = res.split("")
    arr2.splice(res.length / 2, 0, maxSingle)
    res = arr2.join("")
    return res === "" ? "0" : res
};

var num = "03000"

let r = largestPalindromic(num)
console.log('r', r)