/*
 * @lc app=leetcode.cn id=655 lang=javascript
给你一棵二叉树的根节点 root ，请你构造一个下标从 0 开始、大小为 m x n 的字符串矩阵 res ，用以表示树的 格式化布局 。构造此格式化布局矩阵需要遵循以下规则：
树的 高度 为 height ，矩阵的行数 m 应该等于 height + 1 。
矩阵的列数 n 应该等于 2height+1 - 1 。
根节点 需要放置在 顶行 的 正中间 ，对应位置为 res[0][(n-1)/2] 。
对于放置在矩阵中的每个节点，设对应位置为 res[r][c] ，将其左子节点放置在 res[r+1][c-2height-r-1] ，右子节点放置在 res[r+1][c+2height-r-1] 。
继续这一过程，直到树中的所有节点都妥善放置。
任意空单元格都应该包含空字符串 "" 。
返回构造得到的矩阵 res 。
 * [655] 输出二叉树
 */

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
    let queue = [root], idx = 0, height = 0
    while (idx < queue.length) {
        let tempIdx = idx, length = queue.length
        while (tempIdx < length) {
            tempIdx++
            const curr = queue[idx++]
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        height++
    }
    let width = 2 ** height - 1
    const res = [...new Array(height)].map(_ => new Array(width).fill(""))
    queue = [[root, [0, (width - 1) >> 1]]]
    while (queue.length) {
        let length = queue.length
        while (length--) {
            let [curr, [x, y]] = queue.pop()
            res[x][y] = `${curr.val}`
            if (curr.left) queue.unshift([curr.left, [x + 1, y - 2 ** (height - x - 2)]])
            if (curr.right) queue.unshift([curr.right, [x + 1, y + 2 ** (height - x - 2)]])
        }
    }
    return res
};
// @lc code=end

var root = [1, 2, 3, null, 4]
root = [1, 2]
//[["", "", "", "1", "", "", ""],
// ["", "2", "", "", "", "3", ""],
// ["", "", "4", "", "", "", ""]]

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const buildTree = (arr) => {
    const set = new Set()
    let root = new TreeNode(+arr[0])
    set.add(0)
    const queue = [root]
    let idx = 0
    while (queue.length) {
        let length = queue.length
        while (length--) {
            let curr = queue.pop()
            if (arr[idx * 2 + 1] !== null && Number.isInteger(+arr[idx * 2 + 1]) && !set.has(idx * 2 + 1)) {
                set.add(idx * 2 + 1)
                curr.left = new TreeNode(+arr[idx * 2 + 1])
                queue.unshift(curr.left)
            }
            if (arr[idx * 2 + 2] !== null && Number.isInteger(+arr[idx * 2 + 2]) && !set.has(idx * 2 + 2)) {
                set.add(idx * 2 + 2)
                curr.right = new TreeNode(+arr[idx * 2 + 2])
                queue.unshift(curr.right)
            }
            idx++
        }
    }
    return root
}

const tree = buildTree(root)
let res = printTree(tree)
console.log('res', res)