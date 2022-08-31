/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {

    function helper(node) {
        let map = new Map(), dis1 = 0;
        map.set(node, dis1)
        while (edges[node] !== -1 && !map.has(edges[node])) {
            map.set(edges[node], ++dis1);
            node = edges[node];
        }
        return map
    }
    let map1 = helper(node1);
    let map2 = helper(node2);
    let res = Infinity, minDis = Infinity
    for (const [idx, dis1] of map1.entries()) {
        if (map2.has(idx)) {
            let dis2 = map2.get(idx)
            const tempMax = Math.max(dis1, dis2)
            if (tempMax < minDis) {
                res = idx
                minDis = tempMax
            } else if (tempMax === minDis && idx < res) {
                res = idx
            }
        }
    }
    return res === Infinity ? -1 : res
};

var edges = [-1, 7, 15, 15, -1, 4, 16, 2, 16, 7, 11, 6, 10, 4, 9, 1, 14, -1], node1 = 1, node2 = 6

let r = closestMeetingNode(edges, node1, node2)
console.log('r', r)