/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var minimumNumbers = function (num, k) {
    if (num === 0) return 0
    if (num % 2 !== 0 && k % 2 === 0) return -1
    const numStr = num.toString()
    let p = 0, i = 1, flag = true
    for (; i <= 10; i++) {
        p = i * k
        let str = p.toString()
        if (str[str.length - 1] === numStr[numStr.length - 1]) {
            flag = false
            break
        }
    }
    if (flag) return -1
    if (i * k > num) return -1
    return i
};


var num = 10, k = 1

let res = minimumNumbers(num, k)
console.log('res :>> ', res);