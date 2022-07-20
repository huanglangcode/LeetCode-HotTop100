/*
 * @lc app=leetcode.cn id=731 lang=javascript
 *
 * [731] 我的日程安排表 II
 */

// @lc code=start

class MyCalendarTwo {
    constructor() {
        this.calendar = [];
        this.overlaps = [];
    }
    /**
     * @param {number} start
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        for (let [s, e] of this.overlaps) {
            if (start < e && end > s)
                return false;
        }
        for (let [s, e] of this.calendar) {
            if (start < e && end > s) {
                this.overlaps.push([Math.max(s, start), Math.min(e, end)]);
            }
        }
        this.calendar.push([start, end]);
        return true;
    }
}



/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

c = new MyCalendarTwo();
console.log(c.book(24, 40)); // returns true
console.log(c.book(43, 50)); // returns true
console.log(c.book(27, 43)); // returns false
console.log(c.book(5, 21)) // returns true
console.log(c.book(30, 40)) // returns true
console.log(c.book(14, 29)); // returns true
console.log(c.book(3, 19)); // returns true
console.log(c.book(3, 14)) // returns true
console.log(c.book(25, 39)); // returns true
console.log(c.book(6, 19)); // returns true
// [true,true,true,true,false,false,true,false,false,false]