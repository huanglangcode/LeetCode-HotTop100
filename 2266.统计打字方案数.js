/**
为了 打出 一个字母，Alice 需要 按 对应字母 i 次，i 是该字母在这个按键上所处的位置。
比方说，为了按出字母 's' ，Alice 需要按 '7' 四次。类似的， Alice 需要按 '5' 两次得到字母  'k' 。
注意，数字 '0' 和 '1' 不映射到任何字母，所以 Alice 不 使用它们。
但是，由于传输的错误，Bob 没有收到 Alice 打字的字母信息，反而收到了 按键的字符串信息 。

比方说，Alice 发出的信息为 "bob" ，Bob 将收到字符串 "2266622" 。
给你一个字符串 pressedKeys ，表示 Bob 收到的字符串，请你返回 Alice 总共可能发出多少种文字信息 。

由于答案可能很大，将它对 109 + 7 取余 后返回。
*/
const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
}
const MOD = 1e9 + 7
const originalDp = [1, 2, 4, 8]
/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function (pressedKeys) {
    let n = pressedKeys.length, dp = new Array(n)
    dp[0] = 1
    for (let i = 1; i < n; i++) {
        let lianxuCnt = 1, last = dp[i - 1]
        while (pressedKeys[i] === pressedKeys[i - 1]) {
            lianxuCnt++
            let curr = pressedKeys[i]
            if (curr === '7' || curr === '9') {
                if (lianxuCnt <= 4) {
                    dp[i] = (last * originalDp[lianxuCnt - 1]) % MOD
                } else {
                    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3] + dp[i - 4]) % MOD
                }
            } else {
                if (lianxuCnt <= 3) {
                    dp[i] = (last * originalDp[lianxuCnt - 1]) % MOD
                } else {
                    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % MOD
                }
            }
            i++
        }
        dp[i] = dp[i - 1]
    }
    return dp[dp.length - 1]
};

var pressedKeys = "2222333344444445566778888899"

countTexts(pressedKeys)

/**
 * 2
 * a
 * 
 * 22
 * aa
 * b
 * 
 * 222
 * aaa
 * ab
 * ba
 * c
 * 
 * 2222
 * aaaa
 * aba
 * baa
 * ac
 * bb
 * ca
 * aab
 * 
 * 22222
 * 
 */