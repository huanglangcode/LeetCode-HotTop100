/**
给你一个下标从 0 开始的数组 nums ，
数组中的元素都是 正 整数。请你选出两个下标 i 和 j（i != j），
且 nums[i] 的数位和 与  nums[j] 的数位和相等。
请你找出所有满足条件的下标 i 和 j ，找出并返回 nums[i] + nums[j] 可以得到的 最大值 。

示例 1：
输入：nums = [18,43,36,13,7]
输出：54
解释：满足条件的数对 (i, j) 为：
- (0, 2) ，两个数字的数位和都是 9 ，相加得到 18 + 36 = 54 。
- (1, 4) ，两个数字的数位和都是 7 ，相加得到 43 + 7 = 50 。
所以可以获得的最大和是 54 。

示例 2：
输入：nums = [10,12,19,14]
输出：-1
解释：不存在满足条件的数对，返回 -1 。

提示：
1 <= nums.length <= 105
1 <= nums[i] <= 109
*/
class PriorityQueue {
    constructor(
        compare = (a, b) => a[0] - b[0] < 0
    ) {
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
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    let map = new Map()
    let ans = -1
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i].toString().split('').reduce((sum, curr) => sum += +curr, 0)
        if (map.has(sum)) {
            map.get(sum).offer(nums[i])
        } else {
            let pq = new PriorityQueue((a, b) => b - a < 0)
            pq.offer(nums[i])
            map.set(sum, pq)
        }
    }
    for (const pq of map.values()) {
        if (pq.size < 2) continue
        let num1 = pq.poll()
        let num2 = pq.poll()
        ans = Math.max(ans, num1 + num2)
    }
    return ans
};


var nums = [229, 398, 269, 317, 420, 464, 491, 218, 439, 153, 482, 169, 411, 93, 147, 50, 347, 210, 251, 366, 401]

let res = maximumSum(nums)
console.log('res :>> ', res);