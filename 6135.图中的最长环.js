/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
    let n = edges.length,
        visited = new Array(n).fill(0)
    let res = -Infinity
    function helper(idx) {
        let map = new Map(), dis = 0;
        map.set(idx, dis)
        while (idx !== -1) {
            if (visited[idx]) {
                if (map.has(idx)) {
                    res = Math.max(dis - map.get(idx) + 1, res)
                }
                break
            }
            visited[idx] = 1
            map.set(idx, ++dis);
            idx = edges[idx];
        }
    }
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue
        helper(i)
    }
    return res === -Infinity ? -1 : res
};

var edges = [3, 3, 4, 2, 3]

let res = longestCycle(edges)
console.log('res', res)