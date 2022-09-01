/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
输入：prices = [8,4,6,2,3]
输出：[4,2,4,2,3]
解释：
商品 0 的价格为 price[0]=8 ，你将得到 prices[1]=4 的折扣，所以最终价格为 8 - 4 = 4 。
商品 1 的价格为 price[1]=4 ，你将得到 prices[3]=2 的折扣，所以最终价格为 4 - 2 = 2 。
商品 2 的价格为 price[2]=6 ，你将得到 prices[3]=2 的折扣，所以最终价格为 6 - 2 = 4 。
商品 3 和 4 都没有折扣。

输入：prices = [1,2,3,4,5]
输出：[1,2,3,4,5]
解释：在这个例子中，所有商品都没有折扣。

输入：prices = [10,1,1,6]
输出：[9,0,1,6]
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    const ans = new Array(prices.length).fill(0), stack = new Array()
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i]
        while (stack.length && stack[stack.length - 1][0] >= price) {
            const [p, idx] = stack.pop()
            ans[idx] = p - price
        }
        stack.push([price, i])
    }
    for (const [p, idx] of stack) {
        ans[idx] = p
    }
    return ans
};
// @lc code=end

var prices = [10, 1, 1, 6]
let res = finalPrices(prices)
console.log('res', res)