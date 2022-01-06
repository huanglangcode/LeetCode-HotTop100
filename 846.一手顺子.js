/*
 * @lc app=leetcode.cn id=846 lang=javascript
 *
 * [846] 一手顺子
Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。
给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。如果她可能重新排列这些牌，返回 true ；否则，返回 false 。

示例 1：
输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
输出：true
解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。

示例 2：
输入：hand = [1,2,3,4,5], groupSize = 4
输出：false
解释：Alice 手中的牌无法被重新排列成几个大小为 4 的组。
 
提示：
1 <= hand.length <= 104
0 <= hand[i] <= 109
1 <= groupSize <= hand.length
 */

// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false
    }
    let n = hand.length / groupSize
    hand.sort((a, b) => a - b)
    let map = new Map()
    for (let i = 0; i < hand.length; i++) {
        map.set(hand[i], !!map.get(hand[i]) ? map.get(hand[i]) + 1 : 1)
    }
    let keyArr = [...map.keys()].sort((a, b) => a - b)
    let start = 0
    for (let i = 0; i < n; i++) {
        let from = keyArr[start]
        let to = groupSize + keyArr[start]
        for (let j = from; j < to; j++) {
            if (!map.get(j)) { return false }
            let cnt = map.get(j)
            if (cnt - 1 <= 0) {
                map.delete(j)
                start++
            } else {
                map.set(j, --cnt)
            }
        }
    }
    return true
};
// @lc code=end

let r = isNStraightHand([9, 10, 11, 1, 2, 3, 6, 2, 3, 4, 7, 8], 2)
console.log('r :>> ', r);