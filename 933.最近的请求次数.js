/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

class RecentCounter {
    constructor() {
        this.queue = new Array()
    }
    /**
     * @param {number} t
     * @return {number}
     */
    ping(t) {
        while (this.queue.length > 0 && this.queue[0] < t - 3000) {
            this.queue.shift()
        }
        this.queue.push(t);
        return this.queue.length;
    }
}


/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

var recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // requests = [1]，范围是 [-2999,1]，返回 1
console.log(recentCounter.ping(100));   // requests = [1, 100]，范围是 [-2900,100]，返回 2
console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3