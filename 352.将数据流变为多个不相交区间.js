/*
 * @lc app=leetcode.cn id=352 lang=javascript
 *
 * [352] 将数据流变为多个不相交区间
 */

// @lc code=start

class SummaryRanges {

    constructor() {
        this.arr = Array(10001).fill(false)
        this.min = 10001
        this.max = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addNum(val) {
        this.arr[val] = true
        if (val < this.min) {
            this.min = val
        }
        if (val > this.max) {
            this.max = val
        }
    }

    /**
     * @return {number[][]}
     */
    getIntervals() {
        let res = []
        for (let i = this.min; i <= this.max; i++) {
            if (!this.arr[i]) { continue }
            let end = i
            while (this.arr[end]) {
                end++
            }
            res.push([i, end - 1])
            i = end - 1
        }
        return res
    }
}

// @lc code=end
var summaryRanges = new SummaryRanges()
summaryRanges.addNum(1);      // arr = [1]
summaryRanges.getIntervals(); // 返回 [[1, 1]]
summaryRanges.addNum(3);      // arr = [1, 3]
summaryRanges.getIntervals(); // 返回 [[1, 1], [3, 3]]
summaryRanges.addNum(7);      // arr = [1, 3, 7]
summaryRanges.getIntervals(); // 返回 [[1, 1], [3, 3], [7, 7]]
summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
summaryRanges.getIntervals(); // 返回 [[1, 3], [7, 7]]
summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
let res = summaryRanges.getIntervals(); // 返回 [[1, 3], [6, 7]]
console.log('summaryRanges :>> ', summaryRanges);
console.log('res :>> ', res);
