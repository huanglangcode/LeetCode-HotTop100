/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */


/**
 * 
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。找到所有在 [1, n] 范围之间没有出现在数组中的数字。
// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
示例:
输入:
[4,3,2,7,8,2,3,1]
输出:
[5,6]
*/
var findDisappearedNumbers = function(nums) {
    let res = []
    nums.forEach((val, ind, arr) => {
        let tmp = Math.abs(arr[ind]) - 1;
        console.log('tmp :>> ', tmp);
        if (arr[tmp] > 0)
            arr[tmp] *= -1;
            console.log('arr :>> ', arr);
    })
    nums.forEach((val, ind) => {
        if (val > 0)
            res.push(ind + 1)
    })
    return res
};
// @lc code=end

findDisappearedNumbers([4,3,2,7,8,2,3,1])