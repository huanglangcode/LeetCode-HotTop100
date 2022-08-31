
/**
 * 输入：n = 6, delay = 2, forget = 4
输出：5
解释：
第 1 天：假设第一个人叫 A 。（一个人知道秘密）
第 2 天：A 是唯一一个知道秘密的人。（一个人知道秘密）
第 3 天：A 把秘密分享给 B 。（两个人知道秘密）
第 4 天：A 把秘密分享给一个新的人 C 。（三个人知道秘密）
第 5 天：A 忘记了秘密，B 把秘密分享给一个新的人 D 。（三个人知道秘密）
第 6 天：B 把秘密分享给 E，C 把秘密分享给 F 。（五个人知道秘密）
        B忘记了. C 分享G D 分享 H 
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
    let MOD = BigInt(1e9 + 7)
    let dp = new Array(n.length)
    for (let i = 0; i < n; i++) {
        if (i < delay) {
            dp[i] = 1
        } else if (i >= delay && i < forget) {
            dp[i] = dp[i - 1] + dp[i - delay]
        } else {
            dp[i] = dp[i - 1] + dp[i - delay] - dp[i - forget] * 2 - 
        }
    }
    console.log('dp :>> ', dp);
    return BigInt(dp[n - 1]) % MOD
};


var n = 6, delay = 2, forget = 4

let r = peopleAwareOfSecret(n, delay, forget)
console.log('r :>> ', r);