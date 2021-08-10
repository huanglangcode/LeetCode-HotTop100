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
//  */
var searchRange = function (nums, target) {
  /**
   * 定义函数分别找到其 左边界 右边界
   * 左边界: 第一个大于等于target的
   * 右边界: 第一个大于target的
   */
  const searchIndex = (arr, target, l) => {
    let r = arr.length - 1;
    while (l < r) {
      const mid = l + (r - l >> 1);
      const curr = arr[mid];
      if (curr < target) {
        l = mid + 1;
      } else if (curr >= target) {
        r = mid;
      }
    }
    console.log('l :>> ', l);
    return l;
  };
  let first = searchIndex(nums, target, 0);
  if (nums[first] !== target) {
    return [-1, -1];
  }
  let second = searchIndex(nums, target + 1, first);
  if (second === nums.length - 1 && nums[first] === nums[second]) {
    second += 1;
  }
  return [first, second - 1];

};
searchRange([5, 7, 7, 8, 8, 10], 8);
// searchRange([2, 2], 2);
// @lc code=end

// var nums = [1, 2, 3, 4, 5, 7, 8, 9, 11, 13, 17, 21, 22, 23, 25, 28, 30, 31, 32, 34, 35, 36];
// var searchRange = function (nums, target) {
//     const searchIndex = (arr, target, l) => {
//         let r = arr.length - 1;
//         while (l < r) {
//             const mid = l + (r - l >> 1);
//             const curr = arr[mid];
//             if (curr < target) {
//                 l = mid + 1;
//             } else if (curr >= target) {
//                 r = mid;
//             }
//         }
//         console.log('l :>> ', l);
//         return l;
//     };
//     let ele1 = searchIndex(nums, target, 0)
//     if (nums[ele1] !== target) {
//         return [-1, -1]
//     }
//     let ele2 = searchIndex(nums, target, ele1)
//     return [ele1, ele2 - 1]
// };