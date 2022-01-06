/**
 * @param {number[]} nums
 * @return {number}
 
给你一个 下标从 0 开始 的整数数组 nums ，返回满足下述条件的 不同 四元组 (a, b, c, d) 的 数目 ：
nums[a] + nums[b] + nums[c] == nums[d] ，且
a < b < c < d

nums[a] + nums[b] = nums[d] - nums[c] 


示例 1：
输入：nums = [1,2,3,6]
输出：1
解释：满足要求的唯一一个四元组是 (0, 1, 2, 3) 因为 1 + 2 + 3 == 6 。

示例 2：
输入：nums = [3,3,6,4,5]
输出：0
解释：[3,3,6,4,5] 中不存在满足要求的四元组。

示例 3：
输入：nums = [1,1,1,3,5]
输出：4
解释：满足要求的 4 个四元组如下：
- (0, 1, 2, 3): 1 + 1 + 1 == 3
- (0, 1, 3, 4): 1 + 1 + 3 == 5
- (0, 2, 3, 4): 1 + 1 + 3 == 5
- (1, 2, 3, 4): 1 + 1 + 3 == 5

提示：
4 <= nums.length <= 50
1 <= nums[i] <= 100
 */
var countQuadruplets = function (nums) {
    let res = 0
    res = n2V2(nums);
    return res
};
// 8 9 11 28 52 73 92
// 8 + 9 + 11 = 28
// 8 + 11 + 73 = 92
console.log('countQuadruplets :>> ', countQuadruplets([8, 73, 11, 9, 28, 92, 52]));

function bf(nums) {
    let res = 0;
    for (let a = 0; a < nums.length - 3; a++) {
        for (let b = a + 1; b < nums.length - 2; b++) {
            for (let c = b + 1; c < nums.length - 1; c++) {
                for (let d = c + 1; d < nums.length; d++) {
                    if (nums[a] + nums[b] + nums[c] === nums[d]) {
                        res++;
                    }
                }
            }
        }
    }
    return res;
}

function n3(nums) {
    let res = 0;
    let hash = {};
    // 如果已知 hash[d] = x
    // hash[a + b + c]
    for (let c = nums.length - 2; c >= 2; c--) {
        hash[nums[c + 1]] = hash[nums[c + 1]] + 1 || 1;
        for (let a = 0; a < c - 1; a++) {
            for (let b = a + 1; b < c; b++) {
                res += hash[nums[a] + nums[b] + nums[c]] || 0;
            }
        }
    }
    return res;
}

function n3V2(nums) {
    let res = 0;
    let hash = new Array(301).fill(0)
    for (let c = nums.length - 2; c >= 2; c--) {
        hash[nums[c + 1]]++
        for (let a = 0; a < c - 1; a++) {
            for (let b = a + 1; b < c; b++) {
                res += hash[nums[a] + nums[b] + nums[c]];
            }
        }
    }
    return res;
}

/**
我们将数组拆成红线分界的两个部分，左边包含a，b；右边包含c，d；
我们直接遍历(a,b)，将产生n^2的复杂度；而对于c，d的差，我们不再继续叠加循环遍历；而是直接记录每一个可能的c，d的差的个数。
每个遍历的b的位置都对应着上图中的一条分界线；c和d一定再右边；我们需要求的就是右边的区间里 d-c = a+b 的个数。

这个区间个数怎么求呢？我们可以用map来计数统计每个不同的cd之差对应的区间个数。
如果我们遍历b的顺序是从右往左，则b每往左边移动一位，c就多出一个选择；所以我们只要让c成为b+1；从b+2位置往后遍历d的可能性，将不同的差枚举，并累计到差的计数map中即可。

总体来说就是用O(n^2)O(n 2)的复杂度分别对ab之和还有dc之差做枚举；累加相等的数量。
 */

function n2(nums) {
    let res = 0;
    // a + b + c = d -> a + b = d - c 
    // 1 1 1 2 3 4 5 6
    let hash = Array(301).fill(0);
    for (let b = nums.length - 3; b >= 1; b--) {
        let c = b + 1;
        for (let d = c + 1; d < nums.length; d++) { // 可能出现 d - c < 0. 统一加100
            hash[nums[d] - nums[c] + 100]++;
        }
        for (let a = 0; a < b; a++) {
            res += hash[nums[a] + nums[b] + 100];
        }
    }
    return res;
}

function n2V2(nums) {
    let res = 0
    let hash = Array(301).fill(0);
    for (let c = nums.length - 2; c >= 2; c--) {
        for (let d = c + 1; d < nums.length; d++) {
            hash[nums[d] - nums[c] + 100]++;
        }
        let b = c - 1;
        for (let a = c - 2; a >= 0; a--) {
            res += hash[nums[a] + nums[b] + 100];
        }
    }
    return res;
}

function dp(nums) {
    const dp = Array.from(new Array(4), () => new Array(101).fill(0))
    dp[0][0] = 1
    let res = 0
    for (const num of nums) {
        res += dp[3][num]
        for (let i = dp.length - 1; i > 0; i--) {
            for (let j = num; j < dp[0].length; j++) {
                dp[i][j] += dp[i - 1][j - num]
            }
        }
    }
    return res
}