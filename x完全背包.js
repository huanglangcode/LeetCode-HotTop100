/**
 * 有 N 件物品和一个容量是 V 的背包。每件物品有且只有一件。

第 i 件物品的体积是 v[i] ，价值是 w[i]。

求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。

示例 1：

输入: N = 3, V = 4, v = [4,2,3], w = [4,2,3]
输出: 4
解释: 只选第一件物品，可使价值最大。
示例 2：

输入: N = 3, V = 5, v = [4,2,3], w = [4,2,3]
输出: 5
解释: 不选第一件物品，选择第二件和第三件物品，可使价值最大。
 */
/**
 * 
 * @param {number} N 
 * @param {number} V 
 * @param {number[]} v 
 * @param {number[]} w 
 */
const maxValue = function (N, V, v, w) {
    return 二维动态规划(N, V, w, v)
}

// 3件物品 塞进容量为5的背包 3件物品分别体积[4,2,3]. 其对应的价值分别为[4,2,3]
let res = maxValue(9, 10, [1, 4, 2, 3, 6, 5, 7, 4, 2], [2, 4, 2, 3, 4, 5, 8, 5, 2])
console.log('res :>> ', res);


function 二维动态规划(N, V, w, v) {
    let dp = [...Array(N + 1)].map(_ => Array(V + 1).fill(0))
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            dp[i][j] = dp[i - 1][j]
            if (j >= v[i - 1]) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - v[i - 1]] + w[i - 1])
            }
        }
    }
    console.log('dp :>> ', dp);
    return dp[N - 1][V]
}

function 一维空间动态规划(V, N, v, w) {
    let dp = Array(V + 1).fill(0)
    for (let i = 0; i < N; i++) { // 有i个物品可选
        for (let j = V; j >= v[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - v[i]] + w[i])
        }
    }
    return dp[V]
}

function DFS(v, w, V) {
    const helper = (capacity, idx, val) => {
        if (capacity === 0) {
            return val
        } else if (capacity < 0 || idx >= v.length) {
            return 0
        } else {
            let currC = v[idx]
            let currV = w[idx]
            let res = Math.max(helper(capacity - currC, idx + 1, val + currV), helper(capacity, idx + 1, val))
            return res
        }
    }
    let res = helper(V, 0, 0)
    return res
}