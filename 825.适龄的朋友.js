/*
 * @lc app=leetcode.cn id=825 lang=javascript
 *
 * [825] 适龄的朋友
    在社交媒体网站上有 n 个用户。给你一个整数数组 ages ，其中 ages[i] 是第 i 个用户的年龄。
    如果下述任意一个条件为真，那么用户 x 将不会向用户 y（x != y）发送好友请求：
    age[y] <= 0.5 * age[x] + 7
    age[y] > age[x]
    age[y] > 100 && age[x] < 100
    否则，x 将会向 y 发送一条好友请求。
    注意，如果 x 向 y 发送一条好友请求，y 不必也向 x 发送一条好友请求。另外，用户不会向自己发送好友请求。
    返回在该社交媒体网站上产生的好友请求总数。

    // 如果我30岁  我会向 23 至 30 岁 发送好友请求
       如果我50岁  我会向 32 至 50 岁 发送好友请求
       如果我15岁  我会向 15 至 15 岁 发送好友请求
       如果我110岁 我会向 63 至 110 岁 发送好友请求
       如果我98岁  我会向 56 至 98 岁 发送好友请求

    // 如何快速计算出 56~98岁区间的人数量
示例 1：
输入：ages = [16,16]
输出：2
解释：2 人互发好友请求。

示例 2：
输入：ages = [16,17,18]
输出：2
解释：产生的好友请求为 17 -> 16 ，18 -> 17 。

示例 3：
输入：ages = [20,30,100,110,120]
输出：3
解释：产生的好友请求为 110 -> 100 ，120 -> 110 ，120 -> 100 。
 
提示：
n == ages.length
1 <= n <= 2 * 104
1 <= ages[i] <= 120
 */

// @lc code=start
/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
    const counts = new Array(121), preSum = new Array(121)
    counts.fill(0)
    preSum.fill(0)
    // 根据年龄计数
    for (const age of ages) {
        counts[age]++
    }
    // 统计 年龄 前缀和.
    for (let i = 1; i < 121; i++) {
        preSum[i] = preSum[i - 1] + counts[i]
    }
    let ans = 0
    // 15岁开始交朋友
    for (let x = 15; x < 121; x++) {
        if (counts[x] > 0) {
            y = (x >> 1) + 7
            ans += (preSum[x] - preSum[y] - 1) * counts[x];
        }
    }
    return ans
};
// @lc code=end

var ages = [15, 15, 16, 17, 18]
let r = numFriendRequests(ages)
console.log('r :>> ', r);