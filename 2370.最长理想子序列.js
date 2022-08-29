/**
 * @param {string} s
 * @param {number} k
 * @return {number}
给你一个由小写字母组成的字符串 s ，和一个整数 k.如果满足下述条件，则可以将字符串 t 视作是 理想字符串 ：
    t 是字符串 s 的一个子序列.
    t 中每两个 相邻 字母在字母表中位次的绝对差值小于或等于 k.
返回 最长 理想字符串的长度.
字符串的子序列同样是一个字符串，并且子序列还满足：可以经由其他字符串删除某些字符（也可以不删除）但不改变剩余字符的顺序得到.
注意：字母表顺序不会循环.例如，'a' 和 'z' 在字母表中位次的绝对差值是 25 ，而不是 1.

示例 1：
输入：s = "acfgbd", k = 2
输出：4
解释：最长理想字符串是 "acbd".该字符串长度为 4 ，所以返回 4.
注意 "acfgbd" 不是理想字符串，因为 'c' 和 'f' 的字母表位次差值为 3.

示例 2：
输入：s = "abcd", k = 3
输出：4
解释：最长理想字符串是 "abcd" ，该字符串长度为 4 ，所以返回 4.

如何计算在特定索引i处结束的最长理想子序列?  
你能算出所有位置i的值吗? 
如何使用之前计算的答案来计算下一个位置的答案?
1 <= s.length <= 105
0 <= k <= 25
s 由小写英文字母组成
 */

/*
DP
1.状态定义:f[i]为以s[i]结尾的李理想子序列最大长度
2.状态转移:f[i]可以由前面的状态中转移过来，但是要满足相邻的字母序号相差小于等于k
考虑将前面的每个字母的结尾的最长以字母为分类，依次维护每个字母的最大长度，到时候直接枚举看哪个大就转移哪个
3.初始化:f[0]=1
4.遍历顺序:正序
5.返回形式:max(f[i])
*/

var longestIdealString = function (s, k) {
    let dp = new Array(26).fill(0)
    dp[s.charCodeAt(0) - 'a'.charCodeAt()] = 1
    for (let i = 1; i < s.length; i++) {
        let charCode = s.charCodeAt(i) - 'a'.charCodeAt()
        let max = dp[charCode]
        for (let j = 0; j < 26; j++) {
            if (Math.abs(charCode - j) <= k) {
                max = Math.max(dp[j] + 1, max)
            }
        }
        dp[charCode] = max
    }
    return Math.max(...dp)
};



var s = "acfgbdhijk", k = 2

let r = longestIdealString(s, k)
console.log('r', r)