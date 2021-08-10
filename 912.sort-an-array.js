/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    // quickSort(nums, 0, nums.length - 1);
    return mergeSort(nums);
};

var mergeSort = (nums) => {
    if (nums.length < 2) {
        return nums;
    }
    let mid = nums.length >> 1;
    let leftArr = nums.slice(0, mid);
    let rightArr = nums.slice(mid);
    let res = merge(mergeSort(leftArr), mergeSort(rightArr));
    return res;
};

var merge = (leftArr, rightArr) => {
    let temp = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            temp.push(leftArr.shift());
        } else {
            temp.push(rightArr.shift());
        }
    }
    while (leftArr.length) {
        temp.push(leftArr.shift());
    }
    while (rightArr.length) {
        temp.push(rightArr.shift());
    }
    return temp;
};
var quickSort = (nums, left, right) => {
    left = left > nums.length - 1 ? nums.length - 1 : left;
    right = right < 0 ? 0 : right;
    if (left < right) {
        let p = partition(nums, left, right);
        quickSort(nums, left, p - 1);
        quickSort(nums, p + 1, right);
    }
};


var partition = (nums, left, right) => {
    let pivot = left;
    let idx = left + 1;
    for (let i = idx; i <= right; i++) {
        if (nums[i] < nums[pivot]) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            idx++;
        }
    }
    [nums[idx - 1], nums[pivot]] = [nums[pivot], nums[idx - 1]];
    return idx - 1;
};
// @lc code=end

sortArray([6, 3, 1, 4, 2, 5, 7, 8, 9]);

// 7 -> 6 3 1 4 2 5  7  8 9
// 6 -> 3 1 4 2 5  6    8 -> 8  9
// 3 -> 1 2  3  4 5   
// 1 -> 1  2    4 -> 4  5
// 1 2 3 4 5 6 7 8 9
