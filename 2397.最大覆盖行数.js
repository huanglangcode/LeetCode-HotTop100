/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 * 数组中有至少一个元素通过回调函数的测试就会返回true；
 * 所有元素都没有通过回调函数的测试返回值才会为false。
 */
var maximumRows = function (matrix, numSelect) {
    const newArr = matrix.filter(ele => ele.some(_ => _ !== 0))
    if (!newArr.length) return matrix.length
    let base = matrix.length - newArr.length
    let res = base, n = newArr[0].length
    const calc = (arr) => {
        let cnt = 0
        loop:
        for (const row of newArr) {
            for (let i = 0; i < row.length; i++) {
                if (row[i] === 1 && arr[i] === 0) continue loop
            }
            cnt++
        }
        return cnt
    }
    const helper = (choice, idx) => {
        if (choice === numSelect) {
            const temp = calc(arr)
            res = Math.max(res, base + temp)
        } else if (choice < numSelect) {
            for (let i = idx; i < n; i++) {
                if (arr[i] === 0) {
                    arr[i] = 1
                    helper(choice + 1, i + 1)
                    arr[i] = 0
                }
            }
        }
    }
    const arr = new Array(newArr[0].length).fill(0)
    helper(0, 0)
    return res
};

//  [1,0,1] [1,0,0]

var mat = [[0]], cols = 1

let res = maximumRows(mat, cols)
console.log('res', res)