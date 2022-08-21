/**
给定一个正整数 n，返回 连续正整数满足所有数字之和为 n 的组数 。 
示例 1:
输入: n = 5
输出: 2
解释: 5 = 2 + 3，共有两组连续整数([5],[2,3])求和后为 5。

示例 2:
输入: n = 9
输出: 3
解释: 9 = 4 + 5 = 2 + 3 + 4

示例 3:
输入: n = 15
输出: 4
解释: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5

提示:
1 <= n <= 109
 */

/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
    let max = Math.floor((Math.sqrt(8 * n + 1) - 1) / 2)
    console.log('max :>> ', max);
    let res = 0
    for (let i = 1; i <= max; i++) {
        
    }
};


consecutiveNumbersSum(100000000)


/**
    10
    1 2 3 4 5 6 7 8 9 10
    1 3 6 10 15 21 28 36 45 55
        
    ???至多被拆成多少个连续数字的和?


    n(n+1)/2


*/