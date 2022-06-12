/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    const s = num.toString(),
        arr1 = [],
        arr2 = []
    for (let i = 0; i < s.length; i++) {
        if ((+s[i] & 1) === 0) {
            arr1.push(+s[i])
        } else {
            arr2.push(+s[i])
        }
    }
    arr1.sort((a, b) => +b - +a)
    arr2.sort((a, b) => +b - +a)
    let res = ''
    for (let i = 0; i < s.length; i++) {
        if ((+s[i] & 1) === 0) {
            res += arr1.splice(0, 1)
        } else {
            res += arr2.splice(0, 1)
        }
    }
    return parseInt(res)
};

let res = largestInteger(325698751)
console.log('res', res);