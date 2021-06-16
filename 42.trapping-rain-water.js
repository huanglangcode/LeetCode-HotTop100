/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

/**
 *     int sum = 0;
    int[] max_left = new int[height.length];
    int[] max_right = new int[height.length];
    
    for (int i = 1; i < height.length - 1; i++) {
        max_left[i] = Math.max(max_left[i - 1], height[i - 1]);
    }
    for (int i = height.length - 2; i >= 0; i--) {
        max_right[i] = Math.max(max_right[i + 1], height[i + 1]);
    }
    for (int i = 1; i < height.length - 1; i++) {
        int min = Math.min(max_left[i], max_right[i]);
        if (min > height[i]) {
            sum = sum + (min - height[i]);
        }
    }
    return sum;
 */
var trap = function (height) {
    let sum = 0;
    let maxLeft = new Array(height.length);
    maxLeft[0] = height[0];
    // 核心思路: 找到当前要计算的列 的最大左值和最大右值 . 取其小值和当前值求差
    for (let i = 1; i < height.length; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
    }
    // console.log(maxLeft);
    let maxRight = new Array(height.length);
    maxRight[height.length - 1] = height[height.length - 1];
    for (let i = maxRight.length - 2; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
    }
    // console.log(maxRight);
    for (let i = 1; i < height.length; i++) {
        let min = Math.min(maxLeft[i], maxRight[i]);
        if (min > height[i]) {
            sum += (min - height[i]);
        }
    }
    return sum;
};
// @lc code=end

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
trap([4, 2, 0, 3, 2, 5]);
trap([4, 2, 3]);
trap([6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3]);


/**
 while (height[i] > height[j] && j < height.length) {
                tempRes += height[i] - height[j];
                j++;
            }
            if (j < height.length) {
                res += tempRes;
                i = j;
                j = i + 1;
            } else {
                i++;
                j = i + 1;
            }
            */