/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    let used = 0
    let i = 0
    let j = 0
    let count = 0
    let result = 0
    while (i < A.length && j < A.length && used <= K) {
        if (A[j] === 1) {
            count++
            console.log('count', count)
        } else {
            if (used === K) {
                console.log('binggo', result, count)
                result = Math.max(result, count)
                used = 0
                count = 0
                i++
                j = i
                console.log('next round', i , j)
            } else {
                used++
                count++
                console.log('used', used, 'count', count)
            }
        }
        j++
    }
    return Math.max(result, count)
};


longestOnes([0,0,0,1], 4)