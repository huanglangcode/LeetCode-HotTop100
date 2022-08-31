/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
    let res = 1, set = new Set([0, ...restricted])
    let arr = [...new Array(n)].map(_ => new Array())
    for (const [a, b] of edges) {
        arr[a].push(b)
        arr[b].push(a)
    }
    let queue = [arr[0]]
    while (queue.length) {
        let curr = queue.pop()
        for (const idx of curr) {
            if (set.has(idx)) continue
            set.add(idx)
            res++
            if (arr[idx].length) queue.unshift(arr[idx])
        }
    }
    return res
};


var n = 7, edges = [[0, 1], [0, 2], [0, 5], [0, 4], [3, 2], [6, 5]], restricted = [4, 2, 1]

let res = reachableNodes(n, edges, restricted)
console.log('res', res)