/*
 * @lc app=leetcode.cn id=552 lang=javascript
 *
 * [552] 学生出勤记录 II

可以用字符串表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：
'A'：Absent，缺勤
'L'：Late，迟到
'P'：Present，到场
如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：

按 总出勤 计，学生缺勤（'A'）严格 少于两天。
学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
给你一个整数 n ，表示出勤记录的长度（次数）。请你返回记录长度为 n 时，可能获得出勤奖励的记录情况 数量 。答案可能很大，所以返回对 109 + 7 取余 的结果。

示例 1：
输入：n = 2
输出：8
解释：
有 8 种长度为 2 的记录将被视为可奖励：
"PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL" 
只有"AA"不会被视为可奖励，因为缺勤次数为 2 次（需要少于 2 次）。

 * @param u 当前还剩下多少位需要决策
 * @param acnt 当前方案中 A 的总出现次数
 * @param lcnt 当前方案中结尾 L 的连续出现次数
通过记忆化搜索的分析我们发现，当我们在决策下一位是什么的时候，依赖于前面已经填入的 A 的个数以及当前结尾处的 L 的连续出现次数。
也就说是，状态 f[u][[acnt][lcnt] 必然被某些特定状态所更新，或者说由 f[u][[acnt][lcnt] 出发，所能更新的状态是固定的。
因此这其实是一个状态机模型的 DP 问题。
根据「更新 f[u][[acnt][lcnt] 需要哪些状态值」还是「从 f[u][[acnt][lcnt] 出发，能够更新哪些状态」，我们能够写出两种方式（方向）的 DP 代码：
一类是从 f[u][[acnt][lcnt] 往回找所依赖的状态；
一类是从 f[u][[acnt][lcnt] 出发往前去更新所能更新的状态值。
无论是何种方式（方向）的 DP 实现都只需搞清楚「当前位的选择对 acnt​ 和 lcnt​ 的影响」即可。

n = 3 ans = 19
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
    let mod = 1e9 + 7
    let dp = [...Array(2)].map(_ => [...Array(2)].map(_ => [...Array(3)].fill(0)))
    // dp定义为 当出勤天数为i. 缺勤0 | 1天 连续迟到0 | 1 | 2天 能获得奖励的记录数
    dp[0][0][0] = 1
    dp[0][1][0] = 1
    dp[0][0][1] = 1
    for (let i = 1; i < n; i++) {
        //在第i天时 不逃课 不迟到   前一天所有可允许的非逃课  
        dp[i & 1][0][0] = (dp[(i - 1) & 1][0][0] + dp[(i - 1) & 1][0][1] + dp[(i - 1) & 1][0][2]) % mod
        //在第i天时 不逃课 连续迟到 1 次  那么前一天必然不逃课 迟到 0次 
        dp[i & 1][0][1] = dp[(i - 1) & 1][0][0] % mod
        //在第i天时 不逃课 连续迟到 2 次  那么前一天必然不逃课 迟到 1次
        dp[i & 1][0][2] = dp[(i - 1) & 1][0][1] % mod

        //在第i天时 逃课 1次, 连续迟到 0次. 
        dp[i & 1][1][0] = (dp[(i - 1) & 1][0][0] + dp[(i - 1) & 1][0][1] + dp[(i - 1) & 1][0][2] + dp[(i - 1) & 1][1][0] + dp[(i - 1) & 1][1][1] + dp[(i - 1) & 1][1][2]) % mod
        dp[i & 1][1][1] = dp[(i - 1) & 1][1][0] % mod
        dp[i & 1][1][2] = dp[(i - 1) & 1][1][1] % mod
    }
    let ans = 0;
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 3; k++) {
            ans += dp[(n - 1) & 1][j][k]
            ans %= mod
        }
    }
    return ans
}

// var checkRecord = function (n) {
//     let mod = 1e9 + 7
//     let validChar = ['A', 'L', 'P']
//     let hash = [...Array(n)].map(_ => [...Array(2)].map(_ => [...Array(3)]))
//     const helper = (left, acount, lcount) => {
//         if (Number.isInteger(hash[left][acount][lcount])) {
//             return hash[left][acount][lcount]
//         }
//         if (left <= 0) {
//             return 1
//         }
//         let ans = 0
//         for (let i = 0; i < validChar.length; i++) {
//             let char = validChar[i]
//             let nextA = acount + (char === 'A' ? 1 : 0)
//             let nextL = (char === 'L' ? lcount + 1 : 0)
//             if (nextA < 2 && nextL < 3) {
//                 let temp = helper(left - 1, nextA, nextL) % mod
//                 ans = (ans + temp) % mod
//             }
//         }
//         hash[left][acount][lcount] = ans
//         return ans
//     }
//     return helper(n, 0, 0)
// };

checkRecord(10000)
// @lc code=end

