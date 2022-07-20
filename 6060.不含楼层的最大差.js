/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function (bottom, top, special) {
    special.push(bottom - 1)
    special.push(top + 1)
    special.sort((a, b) => a - b)
    let res = 0
    for (let i = 0; i < special.length - 1; i++) {
        res = Math.max(res, special[i + 1] - special[i] - 1)
    }
    return res
};

var bottom = 2, top = 9, special = [4, 6]

let res = maxConsecutive(bottom, top, special)
console.log('res :>> ', res);