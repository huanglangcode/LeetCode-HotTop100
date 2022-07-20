/*
 * @lc app=leetcode.cn id=871 lang=javascript
 *
 * [871] 最低加油次数
 * 
汽车从起点出发驶向目的地，该目的地位于出发位置东面 target 英里处。
沿途有加油站，每个 station[i] 代表一个加油站，它位于出发位置东面 station[i][0] 英里处，并且有 station[i][1] 升汽油。
假设汽车油箱的容量是无限的，其中最初有 startFuel 升燃料。它每行驶 1 英里就会用掉 1 升汽油。
当汽车到达加油站时，它可能停下来加油，将所有汽油从加油站转移到汽车中。
为了到达目的地，汽车所必要的最低加油次数是多少？如果无法到达目的地，则返回 -1 。
注意：如果汽车到达加油站时剩余燃料为 0，它仍然可以在那里加油。如果汽车到达目的地时剩余燃料为 0，仍然认为它已经到达目的地。

 */

class PriorityQueue {
    constructor(compare = (a, b) => a[0] - b[0] < 0) {
        this.data = []
        this.size = 0
        this.compare = compare
    }

    peek() {
        return this.size === 0 ? null : this.data[0]
    }

    offer(val) {
        this.data.push(val)
        this._shifUp(this.size++)
    }

    poll() {
        if (this.size === 0) { return null }
        this._swap(0, --this.size)
        this._shifDown(0)
        return this.data.pop()
    }

    _parent(index) {
        return index - 1 >> 1
    }

    _child(index) {
        return (index << 1) + 1
    }

    _shifDown(index) {
        while (this._child(index) < this.size) {
            let child = this._child(index)
            if (child + 1 < this.size
                && this.compare(this.data[child + 1], this.data[child])) {
                child = child + 1
            }
            if (this.compare(this.data[index], this.data[child])) {
                break
            }
            this._swap(index, child)
            index = child
        }
    }

    _shifUp(index) {
        while (this._parent(index) >= 0 && this.compare(this.data[index], this.data[this._parent(index)])) {
            this._swap(index, this._parent(index))
            index = this._parent(index)
        }
    }

    _swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
}
// @lc code=start
/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
    if (startFuel >= target) return 0
    if (!stations.length || startFuel < stations[0][0]) return -1
    let remainFuel = startFuel
    let cnt = 0
    const pq = new PriorityQueue((a, b) => b - a < 0)
    let i = 0
    while (remainFuel < target) {
        for (; i < stations.length && stations[i][0] <= remainFuel; i++) {
            pq.offer(stations[i][1])
        }
        const choose = pq.poll()
        if (!choose) return -1
        remainFuel += choose
        cnt++
    }
    return cnt
};
// @lc code=end

var target = 1000000000,
    startFuel = 145267354,
    stations = [
        [5510987, 84329695],
        [10682248, 76273791],
        [56227783, 136858069],
        [91710087, 18854476],
        [111148380, 127134059],
        [165982642, 122930004],
        [184216180, 124802819],
        [217578071, 7123113],
        [233719001, 95862544],
        [339631786, 7676497],
        [349762649, 136128214],
        [403119403, 21487501],
        [423890164, 61095325],
        [424072629, 50415446],
        [572994480, 13561367],
        [609623597, 69207102],
        [662818314, 84432133],
        [678679727, 20403175],
        [682325369, 14288077],
        [702137485, 6426204],
        [716318901, 47662322],
        [738137702, 129579140],
        [761962118, 23765733],
        [820353983, 70497719],
        [895811889, 75533360]
    ]

target = 100, startFuel = 10, stations = [[10, 60], [20, 30], [30, 30], [60, 40]]
// target = 100000,
//     startFuel = 3,
//     stations =  [[1, 50000], [2, 50001], [30, 64], [60, 4], [99, 1]]

let res = minRefuelStops(target, startFuel, stations)
console.log('res :>> ', res);


