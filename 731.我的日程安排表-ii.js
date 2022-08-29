/*
 * @lc app=leetcode.cn id=731 lang=javascript
 *
 * [731] 我的日程安排表 II
 */

// @lc code=start

class MyCalendarTwo {
    constructor() {
        this.calendar = [];
        this.intersection = [];
    }
    /**
     * @param {number} start
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        for (let [s, e] of this.intersection) {
            if (start < e && end > s) // 如果和已经产生过交集的列表还能产生交集.
                return false;
        }
        for (let [s, e] of this.calendar) {
            if (start < e && end > s) { // 把产生过交集的部分保存下来
                this.intersection.push([Math.max(s, start), Math.min(e, end)]);
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