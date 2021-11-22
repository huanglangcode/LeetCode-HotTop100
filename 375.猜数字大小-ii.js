/*
 * @lc app=leetcode.cn id=375 lang=javascript
 * [375] 猜数字大小 II
    我们正在玩一个猜数游戏，游戏规则如下：
    我从 1 到 n 之间选择一个数字。
    你来猜我选了哪个数字。
    如果你猜到正确的数字，就会 赢得游戏 。
    如果你猜错了，那么我会告诉你，我选的数字比你的 更大或者更小 ，并且你需要继续猜数。
    每当你猜了数字 x 并且猜错了的时候，你需要支付金额为 x 的现金.
    给你一个特定的数字 n ，返回能够 确保你获胜 的最小现金数。
    1 <= n <= 200
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
   let cache = [...Array(n + 1)].map(_ => Array(n + 1).fill(0))
   const helper = (l, r) => {
      if (r - l === 1) {
         return l
      }
      if (r - l === 2) {
         return r - 1
      }
      if (cache[l][r] !== 0) {
         return cache[l][r]
      }
      let ans = Number.MAX_SAFE_INTEGER
      for (let i = l; i <= r; i++) {
         let left = 0
         let right = 0
         if (l < i - 1) {
            left = helper(l, i - 1)
         }
         if (i + 1 < r) {
            right = helper(i + 1, r)
         }
         let res = Math.max(left, right) + i
         ans = Math.min(ans, res)
      }
      cache[l][r] = ans
      return ans
   }
   return helper(1, n)
};
// @lc code=end
let res = getMoneyAmount(5)
console.log('res :>> ', res);
/**
 1 到 5
 猜 1 且没猜中 1 + fn([], [2,3,4,5])
                        2 + fn([], [3,4,5])
                           4 + fn([3], [5])
                        3 + fn([2], [4,5])
                           4 + fn([], [5])
                        4 + fn([2,3], [5])
                           2 + fn([3], [5])
                        5 + fn([2,3,4], [])
                           3 + fn([2], [4])
 猜 2 且没猜中 2 + fn([1], [3,4,5])
                        4 + fn([3], [5])
 猜 3 且没猜中 3 + fn([1,2], [4,5])
                        1 + fn([], [2])
                        4 + fn([], [5])
 猜 4 且没猜中 4 + fn([1,2,3], [5])
                        2 + fn([1], [3])
 猜 5 且没猜中 5 + fn([1,2,3,4], [])
                        1 + fn([], [2,3,4])
                           3 + fn([2], [4])
                        2 + fn([1], [3,4])
                           3 + fn([], [4])
                        3 + fn([1,2], [4])
                           1 + fn([], [2])
                        4 + fn([1,2,3], [])
                           2 + fn([1], [3])
*/