/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function (n) {
    let a = 1n, b = 2n
    for (let i = 2; i <= n; i++) {
        [b, a] = [a + b, b]
    }
    return (b * b) % BigInt(1e9 + 7)
};

var n = 3

let res = countHousePlacements(n)
console.log('res :>> ', res);