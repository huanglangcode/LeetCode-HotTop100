/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

var numDistinct = function (s, t) {
    let dp = [...Array(2)].map(_ => Array(t.length + 1).fill(0))
    dp[0][0] = 1
    dp[1][0] = 1
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            dp[i & 1][j] = dp[(i - 1) & 1][j]
            if (s[i - 1] === t[j - 1]) {
                dp[i & 1][j] += dp[(i - 1) & 1][j - 1]
            }
        }
    }
    return dp[s.length & 1][t.length]
};
// @lc code=end
// let s = "xslledayhxhadmctrliaxqpokyezcfhzaskeykchkmhpyjipxtsuljkwkovmvelvwxzwieeuqnjozrfwmzsylcwvsthnxujvrkszqwtglewkycikdaiocglwzukwovsghkhyidevhbgffoqkpabthmqihcfxxzdejletqjoxmwftlxfcxgxgvpperwbqvhxgsbbkmphyomtbjzdjhcrcsggleiczpbfjcgtpycpmrjnckslrwduqlccqmgrdhxolfjafmsrfdghnatexyanldrdpxvvgujsztuffoymrfteholgonuaqndinadtumnuhkboyzaqguwqijwxxszngextfcozpetyownmyneehdwqmtpjloztswmzzdzqhuoxrblppqvyvsqhnhryvqsqogpnlqfulurexdtovqpqkfxxnqykgscxaskmksivoazlducanrqxynxlgvwonalpsyddqmaemcrrwvrjmjjnygyebwtqxehrclwsxzylbqexnxjcgspeynlbmetlkacnnbhmaizbadynajpibepbuacggxrqavfnwpcwxbzxfymhjcslghmajrirqzjqxpgtgisfjreqrqabssobbadmtmdknmakdigjqyqcruujlwmfoagrckdwyiglviyyrekjealvvigiesnvuumxgsveadrxlpwetioxibtdjblowblqvzpbrmhupyrdophjxvhgzclidzybajuxllacyhyphssvhcffxonysahvzhzbttyeeyiefhunbokiqrpqfcoxdxvefugapeevdoakxwzykmhbdytjbhigffkmbqmqxsoaiomgmmgwapzdosorcxxhejvgajyzdmzlcntqbapbpofdjtulstuzdrffafedufqwsknumcxbschdybosxkrabyfdejgyozwillcxpcaiehlelczioskqtptzaczobvyojdlyflilvwqgyrqmjaeepydrcchfyftjighntqzoo",
// t = "rwmimatmhydhbujebqehjprrwfkoebcxxqfktayaaeheys"
// 700531452
// let s = "rabbbit", t = "rabbit"
let s = "babgbag", t = "bag"
numDistinct(s, t)
/** babgbag
 *  ba
    ba g
    ba    g
    b    ag
      b  ag
        bag
 */
/**
 * dp[i][j] = dp[i-1][j]
 * if(s[i] === t[j]){
 *     dp[i][j] += dp[i-1][j-1]
 * }
 *   " b a g
 * " 1
 * b 1 1
 * a 1 1 1
 * b 1 2 1
 * g 1 2 1 1
 * b   3 1 1
 * a     4 1
 * g       5
 */