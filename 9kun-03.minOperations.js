
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minOperations = function (numbers) {
    let maxCd = numbers[0]
    for (const num of numbers) {
        maxCd = gcd(maxCd, num)
    }
    let map2 = new Map(), map3 = new Map(),
        max2 = 0, max3 = 0
    for (let i = 0; i < numbers.length; i++) {
        let curr = numbers[i] / maxCd
        if (curr % 2 === 0) {
            while (curr % 2 === 0) {
                map2.set(i, map2.get(i) + 1 || 1)
                curr /= 2
            }
        }
        if (curr % 3 === 0) {
            while (curr % 3 === 0) {
                map3.set(i, map3.get(i) + 1 || 1)
                curr /= 3
            }
        }
        if (curr !== 1) return -1
        max2 = Math.max(max2, map2.get(i) ?? 0)
        max3 = Math.max(max3, map3.get(i) ?? 0)
    }
    let cnt = 0
    for (let i = 0; i < numbers.length; i++) {
        cnt += max2 - (map2.get(i) ?? 0) + max3 - (map3.get(i) ?? 0)
    }
    return cnt
};

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

var numbers = [5]

let res = minOperations(numbers)
console.log('res', res)