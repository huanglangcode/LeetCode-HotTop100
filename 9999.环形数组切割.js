
const minDiff = (arr) => {
    let preSumArr = new Array(arr.length + 1).fill(0)
    for (let i = 0; i < arr.length; i++) {
        preSumArr[i + 1] = preSumArr[i] + arr[i]
    }
    let sum = preSumArr[preSumArr.length - 1]
    let half = sum >> 1, res = Number.MAX_SAFE_INTEGER, i = 0, j = 1
    while (i < j && j < arr.length) {
        const windowSum = preSumArr[j] - preSumArr[i]
        if (windowSum === half) {
            return sum & 1
        } else if (windowSum > half) {
            i++
            j = i + 1
        } else {
            j++
        }
        res = Math.min(res, Math.abs(sum - 2 * windowSum))
    }
    return res;
}

// let res = minDiff([1, 2, 3, 4])
// let res2 = minDiff([10, 2, 8, 3])
let res3 = minDiff([10, 2, 8, 6, 5, 3])
// console.log('res :>> ', res);
// console.log('res2 :>> ', res2);
console.log('res3 :>> ', res3);