/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
        你的算法时间复杂度必须是 O(log n) 级别。
        如果数组中不存在目标值，返回 [-1, -1]。
    示例 1:
        输入: nums = [5,7,7,8,8,10], target = 8
        输出: [3,4]
        
public int bsearch(int[] a, int n, int value) {
  int low = 0;
  int high = n - 1;
  while (low <= high) {
    int mid = low + ((high - low) >> 1);
    if (a[mid] >= value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  if (low < n && a[low]==value) return low;
  else return -1;
}
 */
var searchRange = function (nums, target) {
    let result = [-1, -1]
    if (nums.length === 0) {
        return result
    }
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (nums[mid] > target) {
            high = mid - 1
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            result.fill(mid)
            break
        }
    }
    if (result[0] === -1) {
        return result
    } else {
        while (nums[result[0] - 1] === target) {
            result[0] = result[0] - 1
        }
        while (nums[result[1] + 1] === target) {
            result[1] = result[1] + 1
        }
    }
    return result
};
searchRange([5, 7, 7, 8, 8, 10], 8)
// @lc code=end

