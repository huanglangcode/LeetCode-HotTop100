
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
    if (!root) return 0
    let res = 0

    const helper = (node) => {
        if (!node) return [0, 0]
        let res1 = helper(node.left)
        let res2 = helper(node.right)
        let sum = (res1[0] + res2[0] + node.val), nodeNum = (res1[1] + res2[1] + 1), avg = Math.floor(sum / nodeNum);
        if (avg === node.val) res++
        return [sum, nodeNum]
    }
    helper(root)
    return res
};



/**
 * private int[] dfs(TreeNode root) {
    if (root == null) return new int[]{0, 0};

    int[] l = dfs(root.left);
    int[] r = dfs(root.right);
    int sum = (l[0] + r[0] + root.val), nodeNum = (l[1] + r[1] + 1), avg = sum / nodeNum;
    if (avg == root.val) cnt++;
    return new int[]{sum, nodeNum};
  }
 */

// [4, 8, 5, 0, 1, null, 6]

let root = new TreeNode(4)
root.left = new TreeNode(8)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(1)
root.right = new TreeNode(5)
root.right.right = new TreeNode(6)

let res = averageOfSubtree(root)
console.log('res :>> ', res);