/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量

有 n 个城市，其中一些彼此相连，另一些没有相连。
如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
给你一个 n x n 的矩阵 isConnected ，
其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。
返回矩阵中 省份 的数量。
输入：isConnected = [
    [1,1,0],
    [1,1,0],
    [0,0,1]
]
输出：2

输入：isConnected = [
    [1,0,0],
    [0,1,0],
    [0,0,1]
]
输出：3

提示：
1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] 为 1 或 0
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let total = isConnected.length
    let visited = new Set()
    const helper = (idx) => {
        for (let j = 0; j < total; j++) {
            if (isConnected[idx][j] === 1 && !visited.has(j)) {
                visited.add(j);
                helper(j);
            }
        }
    }

    let size = 0
    for (let i = 0; i < total; i++) {
        if (!visited.has(i)) {
            size++
            helper(i)
        }
    }
    return size
};
// @lc code=end

class UnionFindSet {
    constructor(mCount) {
        this.members = new Array(mCount)
        for (let i = 0; i < mCount; i++) {
            this.members[i] = i
        }
    }

    find(x) {
        if (x === this.members[x]) {
            return x
        } else {
            const res = this.find(this.members[x])
            this.members[x] = res
            return res
        }
    }

    merge(x, y) {
        this.members[this.find(y)] = this.find(x)
    }
}

var isConnected = [
    [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
]
let res = findCircleNum(isConnected)
console.log('res :>> ', res);

// 0 1  3  4 5 6 7 8 9 10 11 13  14
// 2
// 12