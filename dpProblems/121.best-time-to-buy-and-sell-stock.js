/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

 /** 暴力解法
  let res = 0
  for (let i = 0; i < prices.length; i++) {
    let buyAmount = prices[i]
    for (let j = i + 1; j < prices.length; j++) {
      let sellAmount = prices[j]
      if (sellAmount <= buyAmount) {
        continue
      }
      res = Math.max(res, sellAmount - buyAmount)
    }
  }
  return res
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * b[i] = 0, when i == 0
     b[i] = a[i] - a[i - 1], when i != 0
   * b3 = a3 - a2
     b4 = a4 - a3
     b5 = a5 - a4
     b6 = a6 - a5
     adding all these, all the middle terms will cancel out except two. if max = a6 - a2
     b3 + b4 + b5 + b6 = a6 - a2 
   */
  let res = 0
  let cur = 0
  for (let i = 1; i < prices.length; i++) {
    let temp = prices[i] - prices[i - 1]
    cur = Math.max(cur += temp, 0)
    res = Math.max(res, cur)
  }
  return res
};
// @lc code=end

