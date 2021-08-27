/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */

class MedianFinder {
    constructor() {
        this.p = new PriorQueue()
    }
    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.p.push(num)
    }
    /**
     * @return {number}
     */
    findMedian() {
        let midIdx = this.p.queue.length >> 1
        if ((this.p.queue.length & 1) === 0) {
            return (this.p.queue[midIdx] + this.p.queue[midIdx - 1]) / 2
        } else {
            return this.p.queue[midIdx]
        }
    }
}

class PriorQueue {
    constructor() {
        this.queue = [];
    }
    push(val) {
        if (val <= this.queue[0] || !this.queue.length) {
            this.queue.unshift(val);
            return;
        }
        if (val > this.queue[this.queue.length - 1]) {
            this.queue.push(val);
            return;
        }
        let l = 0, r = this.queue.length - 1
        while (l <= r) {
            const mid = r - ((r - l) >> 1)
            if (this.queue[mid] <= val) {
                l = mid + 1
            } else if (this.queue[mid] > val) {
                r = mid - 1
            }
        }
        this.queue.splice(l, 0, val)
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
