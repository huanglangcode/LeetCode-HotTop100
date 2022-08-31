/*
 * @lc app=leetcode.cn id=926 lang=javascript
 *
 * [926] 将字符串翻转到单调递增
public int minFlipsMonoIncr(String s) {
        int n = s.length();
        //多加一列初始状态
        int[][] dp = new int[n + 1][2];
        //初始状态都是0
        dp[0][0] = 0;
        dp[0][1] = 0;
        char[] chars = s.toCharArray();
        //计算变换次数
        for (int i = 0; i < n; i++) {
            //把第i个字符变成0
            dp[i + 1][0] = dp[i][0] + (chars[i] == '1' ? 1 : 0);
            //把第i个字符变成1
            dp[i + 1][1] = Math.min(dp[i][0], dp[i][1]) + (chars[i] == '0' ? 1 : 0);
        }
        return Math.min(dp[n][0], dp[n][1]);
    }
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
    const n = s.length
    let dp0 = new Array(n + 1)  // 全是0
    dp0[0] = 0
    let dp1 = new Array(n + 1)  // 保证右边全是1即可
    dp1[0] = 0
    for (let i = 0; i < n; i++) {
        let curr = s[i]
        dp0[i + 1] = dp0[i] + (curr === '1' ? 1 : 0)
        dp1[i + 1] = Math.min(dp1[i], dp0[i]) + (curr === '1' ? 0 : 1)
    }
    return Math.min(dp0[n], dp1[n])
};
// @lc code=end


var s = "00110"

let r = minFlipsMonoIncr(s)
console.log('r :>> ', r);