/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    const arr = s.split("")
    let queue1 = []
    let deletedArr = new Set()
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === '*') {
            queue1.push(i)
        } else {
            if (queue1.length) {
                let p = queue1.pop()
                deletedArr.add(p)
                deletedArr.add(i)
            } else {
                continue
            }
        }
    }
    let res = ""
    for (let i = 0; i < s.length; i++) {
        if (deletedArr.has(i)) continue
        res += s[i]
    }
    return res
};

var s = "leet**cod*e"

let res = removeStars(s)
console.log('res', res)