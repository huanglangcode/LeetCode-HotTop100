/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]

/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    let arr = [...Array(m)].map(_ => Array(n).fill(-100))
    let idx = 1
    let i = 0, j = 0
    let nextDir = 0
    let node = head
    while (idx <= m * n) {
        arr[i][j] = node ? node.val : -1
        let nextI = i + direction[nextDir % 4][0]
        let nextJ = j + direction[nextDir % 4][1]
        if (nextI < 0 || nextJ < 0 || nextI >= m || nextJ >= n || arr[nextI][nextJ] !== -100) {
            nextDir++
            nextI = i + direction[nextDir % 4][0]
            nextJ = j + direction[nextDir % 4][1]
        }
        i = nextI
        j = nextJ
        idx++
        node = node ? node.next : null
    }
    return arr
};

var m = 3, n = 5, head = [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var buildList = (arr) => {
    let head = new ListNode()
    let node = head
    while (arr.length) {
        let ele = arr.shift()
        node.next = new ListNode(ele)
        node = node.next
    }
    return head.next
}
let root = buildList(head)

let arr = spiralMatrix(m, n, root)
console.log('arr :>> ', arr);