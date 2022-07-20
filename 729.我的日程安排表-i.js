/*
 * @lc app=leetcode.cn id=729 lang=javascript
 *
 * [729] 我的日程安排表 I
输入：
["MyCalendar", "book", "book", "book"]
[[], [10, 20], [15, 25], [20, 30]]
输出：
[null, true, false, true]
解释：
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20); // return True
myCalendar.book(15, 25); // return False ，这个日程安排不能添加到日历中，因为时间 15 已经被另一个日程安排预订了。
myCalendar.book(20, 30); // return True ，这个日程安排可以添加到日历中，因为第一个日程安排预订的每个时间都小于 20 ，且不包含时间 20 。
 */
class PQ {
    constructor() {
        this.queue = []
    }

    offer(element) {
        if (!this.queue.length || element[0] < this.queue[0][0]) {
            this.queue.unshift(element)
            return
        }
        if (element[0] > this.queue[this.queue.length - 1][0]) {
            this.queue.push(element);
            return;
        }
        let l = 0, r = this.queue.length - 1
        while (l <= r) {
            const mid = r - ((r - l) >> 1)
            if (this.queue[mid][0] <= element[0]) {
                l = mid + 1
            } else if (this.queue[mid][0] > element[0]) {
                r = mid - 1
            }
        }
        this.queue.splice(l, 0, element)
    }

    poll() {
        return this.queue.shift()
    }

    get length() {
        return this.queue.length
    }
}
// @lc code=start

class MyCalendar {
    constructor() {
        this.pq = new PQ()
    }
    /**
     * @param {number} start
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        if (!this.pq.length) {
            this.pq.offer([start, end])
            return true
        }
        // 找到第一小于start的pq元素. 
        let l = 0, r = this.pq.length - 1
        while (l <= r) {
            let mid = l + ((r - l) >> 1)
            if (this.pq.queue[mid][0] < start) {
                l = mid + 1
            } else if (this.pq.queue[mid][0] === start) {
                r = mid - 1
            } else if (this.pq.queue[mid][0] > start) {
                r = mid - 1
            }
        }

    }
}


/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

// [10, 20], [15, 25], [20, 30]
var obj = new MyCalendar()
obj.book(10, 20)
obj.book(20, 30)
obj.book(15, 25)
obj.book(12, 25)
obj.book(9, 16)
obj.book(18, 30)