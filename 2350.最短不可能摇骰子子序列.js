/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
var shortestSequence = function (rolls, k) {
    let res = 1
    let set = new Set()
    for (const roll of rolls) {
        if (set.has(roll)) continue
        set.add(roll)
        if (set.size === k) {
            set.clear()
            res++
        }
    }
    return res
};

var rolls = [1, 1, 2, 2, 1, 4, 3, 1, 4, 3, 2, 1, 1, 1, 1, 1, 3, 3, 4, 1, 3, 4, 1, 1, 3, 2, 4, 4, 1, 3, 1, 2, 2, 1, 1, 1, 3, 3, 2, 1, 2, 4, 2, 4, 2, 4, 4, 3, 3], k = 4

let res = shortestSequence(rolls, k)
console.log('res :>> ', res);