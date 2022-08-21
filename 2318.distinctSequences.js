/**
给你一个整数 n 。你需要掷一个 6 面的骰子 n 次。求出 不同 骰子序列的数目：
请你在满足以下要求的前提下，
序列中任意 相邻 数字的 最大公约数 为 1 。
序列中 相等 的值之间，至少有 2 个其他值的数字。
正式地，如果第 i 次掷骰子的值 等于 第 j 次的值，那么 abs(i - j) > 2 。
请你返回不同序列的 总数目 。
由于答案可能很大，请你将答案对 109 + 7 取余 后返回。
如果两个序列中至少有一个元素不同，那么它们被视为不同的序列。

示例 1：
输入：n = 4
输出：184
解释：一些可行的序列为(1, 2, 3, 4) ，(6, 1, 2, 3) ，(1, 2, 3, 1) 等等。
一些不可行的序列为(1, 2, 1, 3) ，(1, 2, 3, 6) 。
(1, 2, 1, 3) 是不可行的，因为第一个和第三个骰子值相等且 abs(1 - 3) = 2 （下标从 1 开始表示）。
(1, 2, 3, 6) i是不可行的，因为 3 和 6 的最大公约数是 3 。
总共有 184 个不同的可行序列，所以我们返回 184 。

示例 2：
输入：n = 2
输出：22
解释：一些可行的序列为(1, 2) ，(2, 1) ，(3, 2) 。
一些不可行的序列为(3, 6) ，(2, 4) ，因为最大公约数不为 1 。
总共有 22 个不同的可行序列，所以我们返回 22 。
1 <= n <= 104

class Solution {
    static final int MOD = (int) 1e9 + 7, MX = (int) 1e4;
    static final int[][][] f = new int[MX + 1][6][6];

    static {
        for (var i = 0; i < 6; ++i)
            for (var j = 0; j < 6; ++j)
                if (j != i && gcd(j + 1, i + 1) == 1)
                    f[2][i][j] = 1;
        for (var i = 2; i < MX; ++i)
            for (var j = 0; j < 6; ++j)
                for (var last = 0; last < 6; ++last)
                    if (last != j && gcd(last + 1, j + 1) == 1)
                        for (var last2 = 0; last2 < 6; ++last2)
                            if (last2 != j)
                                f[i + 1][j][last] = (f[i + 1][j][last] + f[i][last][last2]) % MOD;
    }

    public int distinctSequences(int n) {
        if (n == 1) return 6;
        var ans = 0;
        for (var i = 0; i < 6; ++i)
            for (var j = 0; j < 6; ++j)
                ans = (ans + f[n][i][j]) % MOD;
        return ans;
    }

    static int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}



 */
/**
 * @param {number} n
 * @return {number}
 */
var distinctSequences = function (n) {
    if (n == 1) return 6;
    const MOD = BigInt(1e9 + 7)
    let dp = [...new Array(n)].map(_ => [...new Array(6)].map(_ => new Array(6).fill(0n)))
    for (let i = 0; i < 6; ++i) {
        for (let j = 0; j < 6; ++j) {
            if (j != i && gcd(j + 1, i + 1) === 1) {
                dp[1][i][j] = 1n;
            }
        }
    }
    for (let i = 2; i < n; i++) {
        for (let j = 0; j < 6; j++) {
            for (let last = 0; last < 6; last++) {
                if (last !== j && gcd(last + 1, j + 1) === 1) {
                    for (let last2 = 0; last2 < 6; last2++) {
                        if (last2 !== j) {
                            dp[i][j][last] += dp[i - 1][last][last2] % MOD;
                        }
                    }
                }
            }
        }
    }

    let ans = 0n;
    for (let i = 0; i < 6; ++i) {
        for (let j = 0; j < 6; ++j) {
            ans = (ans + dp[n - 1][i][j]) % MOD;
        }
    }
    return ans;
};
const gcd = (q, p) => {
    if (p == 0) {
        return q;
    }
    r = q % p;
    return gcd(p, r);
}

var n = 4
// 2 22
// 3 66
// 4 184

let res = distinctSequences(n)

console.log('res :>> ', res);
/**
 * 如果只能掷 1 dp[0] = 1 dp[1]...dp[n] = 0
 * 如果掷 1 和 2 ... dp[0] = 2  dp[1] = 2 dp[2] = 0
 * 如果掷 1 2 3... dp[0] = 3  dp[1] = 6
 * 如果掷 1 2 3 4... dp[0] = 4  dp[1] = 10
 * 
 * 1 1  X
 * 1 2 
 * 1 3
 * 1 4
 * 1 5
 * 1 6   
 * 2 1
 * 2 2  X
 * 2 3 
 * 2 4  X
 * 2 5
 * 2 6  X
 * 3 1
 * 3 2
 * 3 3  X
 * 3 4
 * 3 5
 * 3 6  X
 * 4 1
 * 4 2  X
 * 4 3
 * 4 4  X
 * 4 5 
 * 4 6  X
 * 5 1 
 * 5 2
 * 5 3
 * 5 4
 * 5 5  X
 * 5 6
 * 6 1 
 * 6 2  X
 * 6 3  X
 * 6 4  X
 * 6 5
 * 6 6  X
var distinctSequences = function (n) {
    const MOD = BigInt(1e9 + 7)
    let map = new Map()
    const helper = (leftN, choose) => {
        let key = `${leftN}_${choose.join('_')}`
        if (map.has(key)) {
            return map.get(key)
        }
        if (leftN === 0) {
            map.set(key, 1n)
            return 1n
        } else if (leftN > 0) {
            let res = 0n
            for (let i = 1; i <= 6; i++) {

                if (i === choose[choose.length - 1]) {
                    continue
                }
                if (choose.length && gcd(i, choose[choose.length - 1]) > 1) {
                    continue
                }
                if (choose.length > 1 && i === choose[choose.length - 2]) {
                    continue
                }
                res += helper(leftN - 1, choose.concat(i).slice(choose.length - 1))
            }
            map.set(key, res)
            return res
        }
    }
    return helper(n, []) % MOD
};
 */