
/**
 * @param {number[][]} distance
 * @param {number} n
 * @return {boolean}
 */
var isCompliance = function (distance, n) {
    let set = new UnionSet(distance.length)
    for (let i = 0; i < distance.length; i++) {
        for (let j = i + 1; j < distance[i].length; j++) {
            if (i === j) continue
            if (distance[i][j] <= 2) {
                set.merge(i, j)
            }
        }
    }
    return set.size() <= n
};


class UnionSet {
    constructor(n) {
        this.members = new Array(n).fill(0).map((v, idx) => v = idx)
    }
    findParent(x) {
        if (this.members[x] === x) {
            return x
        } else {
            let res = this.findParent(this.members[x])
            this.members[x] = res
            return res
        }
    }
    merge(x, y) {
        let xParent = this.findParent(x)
        let yParent = this.findParent(y)
        if (xParent === yParent) { 
            return
        }
        this.members[xParent] = yParent
    }
    size() {
        let set = new Set()
        for (let i = 0; i < this.members.length; i++) {
            if (this.members[i] === i) {
                set.add(i)
            } else {
                set.add(this.findParent(i))
            }
        }
        return set.size
    }
}

var distance = [[0, 3, 1, 4], [3, 0, 1, 3], [1, 1, 0, 5], [4, 3, 5, 0]]
    , n = 2

let s = isCompliance(distance, n)
console.log('s :>> ', s);