/**
给你一个整数数组 perm ，它是前 n 个正整数的排列，且 n 是个 奇数 。
它被加密成另一个长度为 n - 1 的整数数组 encoded ，满足 encoded[i] = perm[i] XOR perm[i + 1] 。
比方说，如果 perm = [1,3,2] ，那么 encoded = [2,1] 。
给你 encoded 数组，请你返回原始数组 perm 。题目保证答案存在且唯一。

输入：encoded = [3,1]
输出：[1,2,3]
解释：如果 perm = [1,2,3] ，那么 encoded = [1 XOR 2,2 XOR 3] = [3,1]


输入：encoded = [6,5,4,6]
输出：[2,4,1,5,3]
 */
var decode = function (encoded) {
    let ans = new Array(encoded.length + 1);
    // encoded[0] ^ encoded[2] = ans[0] ^ ans[1] ^ ans[2] ^ ans[3]
    // ans[0] 到 ans[ans.length -2] 的值
    let a = 0;
    for (let i = 0; i < encoded.length; i += 2) {
        a ^= encoded[i];
    }
    // 前N个奇数 相异或的结果 ans[0] 到 ans[ans.length -1]
    let b = parseInt(ans.length / 2) % 2 === 0 ? 1 : 0;
    // a = ans[0] ^ ans[1]
    // b = ans[0] ^ ans[1] ^ ans[2]
    // ∴ a ^ b = ans[ans.length -1]
    ans[ans.length - 1] = a ^ b;
    for (let i = ans.length - 2; i >= 0; i--) {
        ans[i] = encoded[i] ^ ans[i + 1];
    }
    return ans;
};

decode([6, 5, 4, 6]);