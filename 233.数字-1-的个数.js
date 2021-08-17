/*
 * @lc app=leetcode.cn id=233 lang=javascript
 *
 * [233] 数字 1 的个数
回到本题，我们需要计算 [1, n][1,n] 范围内所有数中 11 出现的次数。
我们可以统计 11 在每一位出现的次数，将其累加起来即是答案。
举个 🌰，对于一个长度为 m 的数字 n，我们可以计算其在「个位（从右起第 1 位）」、「十位（第 2 位）」、「百位（第 3 位）」和「第 m 位」中 1 出现的次数。

假设有 n = abcde, n=abcde，即 m = 5，假设我们需要统计第 3 位中 1 出现的次数，即可统计满足 −−1−− 形式，
同时满足 1 <= --1-- <= abcde 要求的数有多少个，我们称 1 <= --1-- <= abcde 关系为「大小要求」。

我们只需对 c 前后出现的值进行分情况讨论：

当 c 前面的部分 < ab，即范围为 [0, ab)，此时必然满足「大小要求」，因此后面的部分可以任意取，即范围为 [0, 99]。根据「乘法原理」，可得知此时数量为 ab∗100；
当 c 前面的部分 = ab，这时候「大小关系」主要取决于 c：
当 c = 0，必然不满足「大小要求」，数量为 0；
当 c = 1，此时「大小关系」取决于后部分，后面的取值范围为 [0, de]，数量为 1 * (de + 1)；
当 c > 1，必然满足「大小关系」，后面的部分可以任意取，即范围为 [0, 99]，数量为 1 * 100；
当 c 前面的部分 > ab，必然不满足「大小要求」，数量为 0。
其他数位的分析同理。

 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    let s = n.toString()
    let prefixArr = []
    let suffixArr = []
    for (let i = 0; i < s.length; i++) {
        prefixArr[i] = s.slice(0, i)
        suffixArr[i] = s.slice(i + 1, s.length)
    }
    let ans = 0
    let digits = 1
    for (let i = s.length - 1; i >= 0; i--) {
        const curr = +s[i]
        if (curr === 0) {
            ans += (+prefixArr[i]) * digits
        } else if (curr === 1) {
            ans += (+prefixArr[i]) * digits
            ans += (+suffixArr[i] + 1)
        } else {
            ans += (+prefixArr[i] + 1) * digits
        }
        digits *= 10
    }
    return ans
};
// @lc code=end
countDigitOne(1211)

//1111 448
//1211 212 + 200 + 120 + 2 + 122   656 
// 2345 1775


/**
  "prefixArr :>>  [ '', '2', '20', '204' ]
  "suffixArr :>>  [ '045', '45', '5', '' ]
  'digits  1
  'prefixArr[i] :>>  204 1
  'ans  205
  'digits  10
  'prefixArr[i] :>>  20 10
  'ans  415
  'digits  100
  'digits  1000
  'prefixArr[i] :>>   1000
  'ans  1715
  'ans :>>  1715
 *
*/