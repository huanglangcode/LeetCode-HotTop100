/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {
    let sum = machines.reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)
    let avg = sum / machines.length
    if (!Number.isInteger(avg)) {
        return -1
    }
    let op = new Array(machines.length).fill(0), max = 0
    for (let i = 0; i < machines.length; i++) {
        if (machines[i] < avg) {
            const borrow = avg - machines[i]
            machines[i + 1] -= borrow
            op[i + 1] += borrow
        } else if (machines[i] > avg) {
            const lend = machines[i] - avg
            machines[i + 1] += lend
            op[i] += lend
        }
        max = Math.max(max, op[i])
    }
    return max
};

findMinMoves([3, 0, 3])
findMinMoves([0, 3, 0])
findMinMoves([4, 2, 11, 3, 3, 1])