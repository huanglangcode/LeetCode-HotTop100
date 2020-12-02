/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/** 
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。 
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
示例 2：

输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
*/



var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  let result = []
  let temp = []
  findWay(candidates, target, 0, temp, result)
  return result
};

var findWay = (arr, target, index, temp, result) => {
  if (target === 0) {
    let innerResult = temp.slice(0)
    result.push(innerResult)
    return
  }

  for (let i = index; i < arr.length; i++) {
    if (target - arr[i] < 0) { break; }
    temp.push(arr[i])
    findWay(arr, target - arr[i], i, temp, result)
    temp.pop()
  }
}
// @lc code=end

