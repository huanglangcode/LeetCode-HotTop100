/*
 * @lc app=leetcode id=1269 lang=javascript
 *
 * [1269] Number of Ways to Stay in the Same Place After Some Steps
 */

// @lc code=start
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function (steps, arrLen) {

};

numWays(3, 2);
// 第三步需要为0
// 第二步只能存在2种情况
// 1.在 0 处 进行Stay操作 -> 1,2
// 2.在 1 处 进行left操作 -> 1.进行stay操作 
//                          2.由 2 处 进行left操作 
//                          3.由 0 处 进行right操作至1
// .....................................................
// arrLength限制往左或者往右的边界调节
// @lc code=end

