/*
 * @lc app=leetcode.cn id=1705 lang=javascript
 *
 * [1705] 吃苹果的最大数目
有一棵特殊的苹果树，一连 n 天，每天都可以长出若干个苹果。
在第 i 天，树上会长出 apples[i] 个苹果，
这些苹果将会在 days[i] 天后（也就是说，第 i + days[i] 天时）腐烂，变得无法食用。
也可能有那么几天，树上不会长出新的苹果，此时用 apples[i] == 0 且 days[i] == 0 表示。
你打算每天 最多 吃一个苹果来保证营养均衡。注意，你可以在这 n 天之后继续吃苹果。
给你两个长度为 n 的整数数组 days 和 apples ，返回你可以吃掉的苹果的最大数目。


示例 1：
输入：apples = [1,2,3,5,2], days = [3,2,1,4,2]
输出：7
解释：你可以吃掉 7 个苹果：
- 第一天，你吃掉第一天长出来的苹果。
- 第二天，你吃掉一个第二天长出来的苹果。
- 第三天，你吃掉一个第二天长出来的苹果。过了这一天，第三天长出来的苹果就已经腐烂了。
- 第四天到第七天，你吃的都是第四天长出来的苹果。

示例 2：
输入：apples = [3,0,0,0,0,2], days = [3,0,0,0,0,2]

输出：5
解释：你可以吃掉 5 个苹果：
- 第一天到第三天，你吃的都是第一天长出来的苹果。
- 第四天和第五天不吃苹果。
- 第六天和第七天，你吃的都是第六天长出来的苹果。
 
提示：
apples.length == n
days.length == n
1 <= n <= 20000
0 <= apples[i], days[i] <= 20000
只有在 apples[i] = 0 时，days[i] = 0 才成立

 */

// @lc code=start
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
    let res = 0
    let pq = new PriorQueue()
    let i = 0
    for (; i < days.length; i++) {
        let apple = apples[i]
        let persist = days[i]
        while (pq.length && pq.top().day <= i) {
            pq.shift()
        }
        if (apple > 0) {
            pq.push({ day: persist + i, apple })
        }
        if (pq.length) {
            res++
            if (--pq.top().apple <= 0) {
                pq.shift()
            }
        }
    }
    while (pq.length) {
        const nearExpiration = pq.shift()
        let shouldAdd = Math.min(nearExpiration.day - i, nearExpiration.apple)
        i += shouldAdd
        res += shouldAdd
        while (pq.length && pq.top().day <= i) {
            pq.shift()
        }
    }
    return res
};
// @lc code=end
class PriorQueue {
    constructor() {
        this.queue = [];
    }
    /**
     * @param {Object{过期日期, 余量苹果}} element 
     * @returns 
     */
    push(element) {
        if (!this.queue.length || element.day <= this.queue[0].day) {
            this.queue.unshift(element);
            return;
        }
        if (element.day > this.queue[this.queue.length - 1].day) {
            this.queue.push(element);
            return;
        }
        let l = 0, r = this.queue.length - 1
        while (l <= r) {
            const mid = r - ((r - l) >> 1)
            if (this.queue[mid].day <= element.day) {
                l = mid + 1
            } else if (this.queue[mid].day > element.day) {
                r = mid - 1
            }
        }
        this.queue.splice(l, 0, element)
    }

    top() {
        return this.queue[0]
    }

    shift() {
        return this.queue.shift()
    }

    get length() {
        return this.queue.length
    }
}

var apples = [1, 10, 17, 10, 12, 6, 20, 8, 8, 22, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 23]
var daysss = [19999, 11, 18, 22, 5, 2, 14, 5, 20, 7, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 1, 4, 2, 7, 0, 0, 0, 0, 0, 0, 1]

let r = eatenApples(apples, daysss)
console.log('r :>> ', r);


