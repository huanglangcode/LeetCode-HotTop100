/*
 * @lc app=leetcode id=752 lang=javascript
 *
 * [752] Open the Lock
 */

// @lc code=start
/**
 * 
你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

function openLock(deadends, target) {
    const dead = new Set(deadends);
    const queue = [['0000', 0]];
    const seen = new Set(['0000']);

    for (let [curr, turns] of queue) {
        if (curr === target) return turns;
        if (dead.has(curr)) continue;
        for (let next of getNextStates(curr)) {
            if (seen.has(next)) continue;
            seen.add(next);
            queue.push([next, turns + 1]);
        }
    }

    return -1;
};

function getNextStates(s = '0000') {
    const ans = [];
    for (let i = 0; i < s.length; i++) {
        ans.push(s.slice(0, i) + ((+s[i] + 1) % 10).toString() + s.slice(i + 1));
        ans.push(s.slice(0, i) + ((+s[i] + 9) % 10).toString() + s.slice(i + 1));
    }
    return ans;
}
// @lc code=end

// "0000"
// Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// Output: 6