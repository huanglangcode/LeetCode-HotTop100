/*
 * @lc app=leetcode id=1818 lang=javascript
 *
 * [1818] Minimum Absolute Sum Difference
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
class Solution {
    int mod = (int)1e9+7;
    public int minAbsoluteSumDiff(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int[] sorted = nums1.clone();
        Arrays.sort(sorted);
        long sum = 0, max = 0;
        for (int i = 0; i < n; i++) {
            int a = nums1[i], b = nums2[i];
            if (a == b) continue;
            int x = Math.abs(a - b);
            sum += x;
            int l = 0, r = n - 1;
            while (l < r) {
                int mid = l + r + 1 >> 1;
                if (sorted[mid] <= b) l = mid;
                else r = mid - 1;
            }
            int nd = Math.abs(sorted[r] - b);
            if (r + 1 < n) nd = Math.min(nd, Math.abs(sorted[r + 1] - b));
            if (nd < x) max = Math.max(max, x - nd);
        }
        return (int)((sum - max) % mod);
    }
}
 *
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
    let n = nums1.length;
    let sortedNums1 = Array.from(nums1).sort((a, b) => a - b);
    let sum = 0;
    let fixDiff = -1e5;
    for (let i = 0; i < n; i++) {
        let diff = Math.abs(nums1[i] - nums2[i]);
        // 差异和累加
        sum += diff;
        // 在此时找到最接近 nums2[i] 的nums1[x] 如果abs(nums2[i] - nums1[x]) < abs(nums1[i] - nums2[i])
        // 那么本轮可改善 abs(nums1[i] - nums2[i]) - abs(nums2[i] - nums1[x])  记录下最大的那轮 得到结果
        let l = 0, r = n - 1;
        while (l < r) {
            let mid = r - ((r - l) >> 1);
            if (sortedNums1[mid] <= nums2[i]) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        let closest = Math.abs(sortedNums1[r] - nums2[i]);
        if (r + 1 < n) {
            closest = Math.min(closest, Math.abs(sortedNums1[r + 1] - nums2[i]));
        }
        if (closest < diff) {
            fixDiff = Math.max(fixDiff, diff - closest);
        }
    }
    if (sum === 0) {
        return 0;
    }
    if (sum > 1e9 + 7) {
        sum %= 1e9 + 7;
    }
    return sum - fixDiff;
};

// @lc code=end
// Input: nums1 = [1,10,4,4,2,7], nums2 = [9,3,5,1,7,4]
var nums1 = [86, 27, 43, 69, 74, 75, 43, 62, 90, 37, 39, 94, 64, 55, 59, 8, 7, 39, 43, 81, 22, 19, 50, 30, 63, 15, 38, 30, 61, 50, 69, 34, 83, 9, 87, 83, 14, 6, 41, 64, 38, 75, 23, 32, 49, 89, 15, 97, 23, 49, 20, 36, 85, 58, 37, 10, 39, 69, 11, 62, 30, 16, 2, 96, 98, 84, 29, 68, 64, 42, 29, 81, 45, 65, 58, 47, 89, 55, 10, 97, 30, 56, 8, 71, 71, 74, 18, 61, 25, 80, 95, 11, 45, 14, 58, 27, 35, 22, 57, 6]
    , nums2 = [13, 32, 9, 62, 52, 36, 42, 16, 8, 56, 52, 69, 52, 28, 18, 60, 59, 66, 73, 87, 97, 31, 13, 22, 42, 92, 70, 73, 68, 62, 11, 25, 68, 79, 78, 100, 48, 66, 6, 81, 76, 47, 12, 80, 20, 84, 91, 100, 68, 61, 47, 3, 21, 77, 58, 73, 33, 55, 58, 61, 6, 26, 28, 47, 79, 61, 45, 77, 18, 20, 15, 46, 65, 73, 29, 65, 45, 100, 80, 35, 54, 43, 14, 33, 81, 2, 72, 52, 20, 9, 55, 73, 90, 41, 78, 32, 36, 27, 13, 89]
    ;
minAbsoluteSumDiff(nums1, nums2);
