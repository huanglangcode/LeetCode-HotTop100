/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *class Solution {
    public List<Integer> majorityElement(int[] nums) {
        int n = nums.length;
        int a = 0, b = 0;
        int c1 = 0, c2 = 0;
        for (int i : nums) {
            if (c1 != 0 && a == i) c1++;
            else if (c2 != 0 && b == i) c2++;
            else if (c1 == 0 && ++c1 >= 0) a = i;
            else if (c2 == 0 && ++c2 >= 0) b = i;
            else {
                c1--; c2--;
            }
        }
        c1 = 0; c2 = 0;
        for (int i : nums) {
            if (a == i) c1++;
            else if (b == i) c2++;
        }
        List<Integer> ans = new ArrayList<>();
        if (c1 > n / 3) ans.add(a);
        if (c2 > n / 3) ans.add(b);
        return ans;
    }
}

作者：AC_OIer
链接：https://leetcode-cn.com/problems/majority-element-ii/solution/gong-shui-san-xie-noxiang-xin-ke-xue-xi-ws0rj/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let hash = {}
    for (const num of nums) {
        if (Number.isInteger(hash[num])) {
            hash[num] += 1
        } else {
            hash[num] = 1
        }
    }
    let res = []
    for (const num in hash) {
        const count = hash[num];
        if (count > (nums.length / 3)) {
            res.push(+num)
        }
    }
    return res
};
// @lc code=end

majorityElement([1, 1, 3, 2, 3, 1, 2, 2])