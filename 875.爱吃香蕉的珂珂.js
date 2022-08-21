/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。
珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。
如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  
珂珂会在警卫回来前吃掉所有的香蕉。
返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

示例 1：
输入：piles = [3,6,7,11], h = 8
输出：4

示例 2：
输入：piles = [30,11,23,4,20], h = 5
输出：30

示例 3：
输入：piles = [30,11,23,4,20], h = 6
输出：23

提示：
1 <= piles.length <= 1e4
piles.length <= h <= 1e9
1 <= piles[i] <= 1e9

 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let l = 1, r = Math.max(...piles)
    const helper = (k) => {
        let sum = 0
        for (const pile of piles) {
            sum += Math.ceil(pile / k)
        }
        return sum
    }
    while (l < r) {
        let mid = (l + r) >> 1
        let used = helper(mid)
        if (used === h) {
            r = mid
        } else if (used > h) {
            l = mid + 1
        } else if (used < h) {
            r = mid
        }
    }
    return l
};
// @lc code=end
var piles = [3, 6, 7, 11], h = 8

let r = minEatingSpeed(piles, h)
console.log('r :>> ', r);