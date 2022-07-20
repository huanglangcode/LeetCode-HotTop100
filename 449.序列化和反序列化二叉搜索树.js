// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const helper = (node) => {
        if (!node) return
        result.push(node.val)
        helper(node.left)
        helper(node.right)
    }
    let result = []
    helper(root)
    return result.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data === "") return null
    const dataArr = data.split(",").map(ele => +ele)
    const helper = (arr) => {
        if (!arr.length) return null
        const curr = arr[0]
        const leftArr = arr.filter(ele => ele < arr[0])
        const rightArr = arr.filter(ele => ele > arr[0])
        let root = new TreeNode(curr)
        root.left = helper(leftArr)
        root.right = helper(rightArr)
        return root
    }
    return helper(dataArr)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

let root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)

let res1 = serialize(root)
console.log('res1 :>> ', res1);

let res2 = deserialize(res1)
console.log('res2 :>> ', JSON.stringify(res2));

// root {"val":2,"left":{"val":1,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}}
// data {"val":2,"left":{"val":1,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}}