/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function (expression) {
    let arr = expression.split(''),
        length = expression.length
    let min = Number.MAX_SAFE_INTEGER,
        res = ''
    let idx = arr.indexOf("+")
    for (let i = 0; i < idx; i++) {
        i === 0 ? arr.splice(i, 0, '(') : arr.splice(i, 0, '*(')
        for (let j = idx + 1; j < length; j++) {
            j === length - 1 ? arr.splice(j + 2, 0, ')') : arr.splice(j + 2, 0, ')*')
            let temp = eval(arr.join(""))
            if (temp < min) {
                res = arr.join("")
                min = temp
            }
            arr.splice(j + 2, 1)
        }
        arr.splice(i, 1)
    }
    return res.replace(/\*/g, '')
};


var expression = "12+34"

let ans = minimizeResult(expression)
console.log('ans', ans);