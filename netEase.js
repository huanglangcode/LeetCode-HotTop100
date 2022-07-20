/**
一、打怪
你在玩儿游戏打怪兽，现在有两个怪兽，生命值分别是a和b，你有两个技能，一个是单体攻击技能，伤害是x。一个是群体攻击技能，伤害是y，给定a,b,x,y求使用最少几个技能可以杀死两个怪兽。
输入5 3 3 2
输出3

四、走出地图的最短时间
给你两个整数m,n，表示有m行n列组成的地图，地图中有0和1，其中0表示土地，1表示沼泽，从土地移动到土地耗时为1，从沼泽移动到沼泽耗时为1，从土地移动到沼泽耗时为2，从沼泽移动到土地耗时为。也就是相同的耗时为1，不同的耗时为2。每次只能向下，向左，向右移动，求从左上角移动到右下角需要的最少的时间
输入
3 3
1 0 0
1 1 1
0 0 1
输出 4 沿着1一直走 */

function killMonster(a, b, x, y) {
    if (a <= 0 && b <= 0) { return 0 }
    if (x <= y) {
        return Math.ceil(Math.max(a, b) / y)
    } else if (x >= y * 2) {
        // 单体攻击很强力的话 先把每个怪的血量都打到<=y 然后一个群攻解决
        let res = 0
        while (a > y) {
            a -= x
            res++
        }
        while (b > y) {
            b -= x
            res++
        }
        if (a > 0 || b > 0) {
            res += 1;
        }
        return res
    } else {
        let res = 0
        // x > y && x < 2 * y  形如 5 3 先群攻死一个 再单攻剩余的一个
        while (a > 0 && b > 0) {
            a -= y
            b -= y
            res++
        }
        while (a > 0) {
            a -= x
            res++
        }
        while (b > 0) {
            b -= x
            res++
        }
        return res
    }
}

/**
 * 二、求字符串的最大分数
    给定一个全是小写字母的字符串，
    如果字符串中相邻的 两个字母相等 或者 在字母表中的位置相邻，
    那么他们两个可以贡献分数。其中'a'贡献1分，'b'贡献2分.....'z'贡献26分。每个字母只能使用一次。
    输入 "aca" 输出0 因为相邻的字母没有在字母表中相邻 也不相等
    输入 "abb" 输出4 因为ab分值是3，bb分值是4，但是每个字母只能使用一次，因此选择bb
 * @param {string} s 
 */
function calcMaxScore(s) {
    if (s.length < 2) return 0
    let dp = new Array(s.length).fill(0)
    dp[1] = getScore(0, 1)
    for (let i = 1; i < s.length - 1; i++) {
        let score = getScore(i, i + 1)
        if (score) {
            dp[i + 1] = Math.max(dp[i - 1] + score, dp[i])
        }
    }
    console.log('dp :>> ', dp);
    return dp[dp.length - 1]
}

function getScore(i, j) {
    return s[i] === s[j] ? (score(s[i]) * 2) : (Math.abs(score(s[i]) - score(s[j])) === 1 ? score(s[i]) + score(s[j]) : 0)
}

function score(char) {
    return char.charCodeAt() - 96
}
var s = 'abbccddeefffff'
let res = calcMaxScore(s)
console.log('res :>> ', res);

/**
    三、构造完全二叉树
    给你一个整数n，使用1，2，3...n这n个数构造完全二叉树，满足所有节点和父节点的乘积是偶数(根节点除外，因为他没有父节点)，输出构造的二叉树层序遍历的结果。答案不唯一。
    输入 4 输出 1 2 4 3
 */
//  1 2 4 3 5 