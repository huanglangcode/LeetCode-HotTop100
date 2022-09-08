/*
Companies
给你两个整数 n 和 k ，请你构造一个答案列表 answer ，该列表应当包含从 1 到 n 的 n 个不同正整数，并同时满足下述条件：
假设该列表是 answer = [a1, a2, a3, ... , an] ，那么列表 [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] 中应该有且仅有 k 个不同整数。
返回列表 answer 。如果存在多种答案，只需返回其中 任意一种 。

输入：n = 3, k = 1
输出：[1, 2, 3]
解释：[1, 2, 3] 包含 3 个范围在 1-3 的不同整数，并且 [1, 1] 中有且仅有 1 个不同整数：1

输入：n = 3, k = 2
输出：[1, 3, 2]
解释：[1, 3, 2] 包含 3 个范围在 1-3 的不同整数，并且 [2, 1] 中有且仅有 2 个不同整数：1 和 2
 
1 <= k < n <= 1e4
*/
/*n = 5
  默认 k = 1
  [1,2,3,4,5]
  k = 2
  [1,3,2,4,5]
  k = 3
  [1,4,2,3,5]
  k = 4
  [1,5,2,4,3]
*  
*/

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
    let res = [1], flag = true
    for (let i = 0; i < n - 1 && k > 0; i++) {
        let curr = res[res.length - 1]
        res.push(flag ? curr + k : curr - k)
        flag = !flag
        k--
    }
    let l = res.length
    while (res.length < n) {
        res.push(l + 1)
        l++
    }
    return res
};
// @lc code=end

var n = 5, k = 4
let res = constructArray(n, k)
console.log('res', res)



