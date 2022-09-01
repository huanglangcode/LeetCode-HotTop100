/*
有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
现在要求你戳破所有的气球。
戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 
这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。
如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。
求所能获得硬币的最大数量。

输入：nums = [3,1,5,8]
输出：167
解释：
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167

输入：nums = [1,5]
输出：10

n == nums.length
1 <= n <= 500
0 <= nums[i] <= 100
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    const vals = [1, ...nums, 1];
    const n = nums.length;
    const dp = [...Array(n + 2)].map(() => Array(n + 2).fill(0));
    const helper = (i, j) => {
        // if (i === j) dp[i][j] = vals[i - 1] * vals[i] * vals[i + 1];
        if (dp[i][j] > 0) return dp[i][j]
        for (let k = i + 1; k < j; k++) {
            const left = k >= i ? helper(i, k) : 0
            const right = j >= k ? helper(k, j) : 0
            const temp = vals[i] * vals[k] * vals[j];
            dp[i][j] = Math.max(dp[i][j], left + right + temp)
        }
        return dp[i][j]
    }
    return helper(0, n + 1)
};
// @lc code=end

var nums = [8, 2, 6, 8, 9, 8, 1, 4, 1, 5, 3, 0, 7, 7, 0, 4, 2, 2, 5]
// nums = [3, 1, 5, 8]
let res = maxCoins(nums) // 2925
console.log('res', res)

// 以两个数作为左右端点，找出最优解中它们中间那个戳破的气球，中间这个气球把整个队列分为了2部分.
// 要想让中间这个气球和2个端点靠在一起，就需要先把分开的2部分的气球戳破。
// dp[i][j]表示i~j最大值，i，j不戳破。
// 比如k气球在i,j之间时(i,k,j)被戳破，那么要先戳破i,k、k,j之间的气球，所以 dp[i][j]= dp[i][k] + dp[k][j] + (nums[i] * nums[k] * nums[j])