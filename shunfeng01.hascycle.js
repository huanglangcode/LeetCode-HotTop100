/**
 * @param {string} graph
 * @return {boolean}
 */
var hasCycle = function (graph) {
    let arr = graph.split(',')
    let map = new Map()
    for (const ele of arr) {
        const [from, to] = ele.split('->')
        if (!map.has(from)) {
            map.set(from, [to])
        } else {
            let q = map.get(from)
            map.set(from, q.concat(to))
        }
    }
    const checker = (node, visited) => {
        if (visited.has(node)) {
            return true
        }
        visited.add(node)
        let toArr = map.get(node)
        if (!toArr) {
            visited.delete(node)
            return false
        }
        for (const to of toArr) {
            if (checker(to, visited)) {
                return true
            }
        }
        visited.delete(node)
        return false
    }
    for (const node of map.keys()) {
        if (checker(node, new Set())) {
            return true
        }
    }
    return false
};



var str = "1->4,2->5,3->6,3->7,4->8,5->8,5->9,6->9,6->11,7->11,8->12,9->12,9->13,10->13,10->14,11->10,11->14"

let res = hasCycle(str)
console.log('res :>> ', res);