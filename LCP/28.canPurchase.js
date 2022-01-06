

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
小力将 N 个零件的报价存于数组 nums。小力预算为 target，假定小力仅购买两个零件，要求购买零件的花费不超过预算，请问他有多少种采购方案。
注意：答案需要以 1e9 + 7(1000000007) 为底取模，如：计算初始结果为：1000000008，请返回 1
 */

var purchasePlans = function (nums, target) {
    nums.sort((a, b) => a - b) // 1 2 2 9
    let ans = 0
    let i = 0, j = nums.length - 1
    while (i < j) {
        if (nums[i] + nums[j] <= target) {
            ans += j - i
            i++
        } else {
            j--
        }
    }
    return ans % 1000000007
};

let res1 = purchasePlans([2, 5, 3, 5], 6)
let res2 = purchasePlans([2, 2, 1, 9], 10)
console.log('res1 :>> ', res1);
console.log('res2 :>> ', res2);