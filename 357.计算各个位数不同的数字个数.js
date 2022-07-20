// const arr = [1,10,91,739,5275, 32491,168571,712891,2345851]
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    const dp = new Array(n)
    dp[0] = 1
    for (let i = 1; i <= n; i++) {
        let temp = 1
        for (let j = 9; j > 10 - i; j--) {
            temp *= j
        }
        dp[i] = dp[i - 1] + 9 * temp
    }
    return dp[n]
};

countNumbersWithUniqueDigits(3)