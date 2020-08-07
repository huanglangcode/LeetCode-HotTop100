/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let isPrim = new Array(n).fill(true)
  for (let i = 2; i * i < n; i++) {
    if (isPrim[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrim[j] = false
      }
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrim[i]) {
      count++
    }
  }
  return count;
};

countPrimes(10)
// @lc code=end

