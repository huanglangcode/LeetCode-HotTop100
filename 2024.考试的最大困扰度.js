/*
 * @lc app=leetcode.cn id=2024 lang=javascript
 *
 * [2024] 考试的最大困扰度
 * 
一位老师正在出一场由 n 道判断题构成的考试，每道题的答案为 true （用 'T' 表示）或者 false （用 'F' 表示）。老师想增加学生对自己做出答案的不确定性，方法是 最大化 有 连续相同 结果的题数。（也就是连续出现 true 或者连续出现 false）。
给你一个字符串 answerKey ，其中 answerKey[i] 是第 i 个问题的正确结果。除此以外，还给你一个整数 k ，表示你能进行以下操作的最多次数：
每次操作中，将问题的正确答案改为 'T' 或者 'F' （也就是将 answerKey[i] 改为 'T' 或者 'F' ）。
请你返回在不超过 k 次操作的情况下，最大 连续 'T' 或者 'F' 的数目。

示例 1：
输入：answerKey = "TTFF", k = 2
输出：4
解释：我们可以将两个 'F' 都变为 'T' ，得到 answerKey = "TTTT" 。
总共有四个连续的 'T' 。

示例 2：
输入：answerKey = "TFFT", k = 1
输出：3
解释：我们可以将最前面的 'T' 换成 'F' ，得到 answerKey = "FFFT" 。
或者，我们可以将第二个 'T' 换成 'F' ，得到 answerKey = "TFFF" 。
两种情况下，都有三个连续的 'F' 。

示例 3：
输入：answerKey = "TTFTTFTT", k = 1
输出：5
解释：我们可以将第一个 'F' 换成 'T' ，得到 answerKey = "TTTTTFTT" 。
或者我们可以将第二个 'F' 换成 'T' ，得到 answerKey = "TTFTTTTT" 。
两种情况下，都有五个连续的 'T' 。
 

提示：
n == answerKey.length
1 <= n <= 5 * 104
answerKey[i] 要么是 'T' ，要么是 'F'
1 <= k <= n
 */

// @lc code=start
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}

 */
var maxConsecutiveAnswers = function (answerKey, k) {
    if (k * 2 >= answerKey.length) return answerKey.length
    const helper = (char) => {
        // TFTFTTFTT  2
        let ans = 0
        for (let i = 0, j = 0, cnt = 0; i < answerKey.length; i++) {
            if (answerKey[i] === char) {
                cnt++
            }
            while (cnt > k) {
                if (answerKey[j] === char) cnt--
                j++
            }
            ans = Math.max(ans, i - j + 1)
        }
        return ans
    }
    let ans1 = helper('T')
    let ans2 = helper('F')
    if (ans1 > answerKey.length || ans2 > answerKey.length) { return answerKey.length }
    return Math.max(ans1, ans2)
    // Max j - i 
    //尝试最大F
};
// @lc code=end


// """

var answerKey = "FTFFTFTFTTFTTFTTFFTTFFTTTTTFTTTFTFFTTFFFFFTTTTFTTTTTTTTTFTTFFTTFTFFTTTFFFFFTTTFFTTTTFTFTFFTTFTTTTTTF", k = 32
let res = maxConsecutiveAnswers(answerKey, k)
console.log('res === 7 :>> ', res);



/**
等价于求一个包含 'F' 或者 'T' 的个数不超过 kk 的最大长度窗口。
假定存在一个 int getCnt(char c) 函数，返回包含字符 c 数量不超过 k 的最大窗口长度，那么最终 max(getCnt('T'), getCnt('F')) 即是答案。

其中 getCnt 函数的实现可以使用「滑动窗口」：
使用 j 和 i 分别代表窗口的左右端点，
cnt 为区间 [j, i]中的字符 c 的数量，
每次右端点 i 移动时，若满足 s[i] = c，让 cnt 自增，
当 cnt > k时，使左端点 j 往右移动，同时更新 cnt，直到 [j, i] 区间恢复合法性（包含字符 c 的数量 cnt 不超过 k 个）。
    int ans = 0;
    for (int i = 0, j = 0, cnt = 0; i < n; i++) {
        if (s.charAt(i) == c) cnt++;
        while (cnt > k) {
            if (s.charAt(j) == c) cnt--;
            j++;
        }
        ans = Math.max(ans, i - j + 1);
    }
    return ans;

 
求最多不超过包含2个F的字符串
第一轮 T  cnt++  res = 1
第二轮 F  略过
第三轮 T  cnt++  res = 2
第四轮 F  略过
第五轮 T  cnt++ 
 * 
 */