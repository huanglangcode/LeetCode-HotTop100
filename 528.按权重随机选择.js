/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
给定一个正整数数组 w ，其中 w[i] 代表下标 i 的权重（下标从 0 开始），
请写一个函数 pickIndex ，它可以随机地获取下标 i，选取下标 i 的概率与 w[i] 成正比。
例如，对于 w = [1, 3]，挑选下标 0 的概率为 1 / (1 + 3) = 0.25 （即，25%），而选取下标 1 的概率为 3 / (1 + 3) = 0.75（即，75%）。
也就是说，选取下标 i 的概率为 w[i] / sum(w) 。

输入：
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
输出：
[null,1,1,1,1,0]
解释：
Solution solution = new Solution([1, 3]);
solution.pickIndex(); // 返回 1，返回下标 1，返回该下标概率为 3/4 。
solution.pickIndex(); // 返回 1
solution.pickIndex(); // 返回 1
solution.pickIndex(); // 返回 1
solution.pickIndex(); // 返回 0，返回下标 0，返回该下标概率为 1/4 。

由于这是一个随机问题，允许多个答案，因此下列输出都可以被认为是正确的:
[null,1,1,1,1,0]
[null,1,1,1,1,1]
[null,1,1,1,0,0]
[null,1,1,1,0,1]
[null,1,0,1,0,0]
......
诸若此类。


 */

// @lc code=start
/**
 * @param {number[]} w
 */
class Solution {
    constructor(w) {
        let map = new Map();
        this.sum = 0;
        for (let i = 0; i < w.length; i++) {
            this.sum += w[i]
            map.set(this.sum, i)
        }
        this.preSum = [...map.keys()]
    }
    /**
     * @return {number}
     */
    pickIndex() {
        let ran = getRandomIntInclusive(1, this.sum)
        let l = 0, r = this.preSum.length - 1
        while (l <= r) {
            const mid = r - ((r - l) >> 1)
            if (this.preSum[mid] < ran) {
                l = mid + 1
            } else if (this.preSum[mid] > ran) {
                r = mid - 1
            } else {
                return mid
            }
        }
        return l
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}


/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end