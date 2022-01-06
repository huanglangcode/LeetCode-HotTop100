/*
 * @lc app=leetcode.cn id=423 lang=javascript
 *
 * [423] 从英文中重建数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * 
输入：s = "owoztneoer"
输出："012"
["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"]
输入：s = "fviefuro"
输出："45"
 */
const NUMBER_MAP = {
    e: 4,
    g: 6,
    f: 5,
    i: 8,
    h: 7,
    o: 14,
    n: 13,
    s: 18,
    r: 17,
    u: 20,
    t: 19,
    w: 22,
    v: 21,
    x: 23,
    z: 25,
}

var originalDigits = function (s) {
    let hash = Array(26).fill(0)
    let numberHash = Array(10).fill(0)
    for (let i = 0; i < s.length; i++) {
        hash[s[i].charCodeAt() - 97]++
    }
    // zero
    if (hash[NUMBER_MAP.z]) {
        let count = hash[NUMBER_MAP.z]
        numberHash[0] = count
        hash[NUMBER_MAP.z] -= count
        hash[NUMBER_MAP.e] -= count
        hash[NUMBER_MAP.r] -= count
        hash[NUMBER_MAP.o] -= count
    }
    // two
    if (hash[NUMBER_MAP.w]) {
        let count = hash[NUMBER_MAP.w]
        numberHash[2] = count
        hash[NUMBER_MAP.t] -= count
        hash[NUMBER_MAP.w] -= count
        hash[NUMBER_MAP.o] -= count
    }
    // four
    if (hash[NUMBER_MAP.u]) {
        let count = hash[NUMBER_MAP.u]
        numberHash[4] = count
        hash[NUMBER_MAP.f] -= count
        hash[NUMBER_MAP.o] -= count
        hash[NUMBER_MAP.u] -= count
        hash[NUMBER_MAP.r] -= count
    }
    // six
    if (hash[NUMBER_MAP.x]) {
        let count = hash[NUMBER_MAP.x]
        numberHash[6] = count
        hash[NUMBER_MAP.s] -= count
        hash[NUMBER_MAP.i] -= count
        hash[NUMBER_MAP.x] -= count
    }
    // three 
    if (hash[NUMBER_MAP.r]) {
        let count = hash[NUMBER_MAP.r]
        numberHash[3] = count
        hash[NUMBER_MAP.t] -= count
        hash[NUMBER_MAP.h] -= count
        hash[NUMBER_MAP.r] -= count
        hash[NUMBER_MAP.e] -= count * 2
    }
    // seven 
    if (hash[NUMBER_MAP.s]) {
        let count = hash[NUMBER_MAP.s]
        numberHash[7] = count
        hash[NUMBER_MAP.s] -= count
        hash[NUMBER_MAP.v] -= count
        hash[NUMBER_MAP.n] -= count
        hash[NUMBER_MAP.e] -= count * 2
    }
    // five
    if (hash[NUMBER_MAP.v]) {
        let count = hash[NUMBER_MAP.v]
        numberHash[5] = count
        hash[NUMBER_MAP.f] -= count
        hash[NUMBER_MAP.i] -= count
        hash[NUMBER_MAP.v] -= count
        hash[NUMBER_MAP.e] -= count
    }
    // eight 
    if (hash[NUMBER_MAP.g]) {
        let count = hash[NUMBER_MAP.g]
        numberHash[8] = count
        hash[NUMBER_MAP.e] -= count
        hash[NUMBER_MAP.i] -= count
        hash[NUMBER_MAP.g] -= count
        hash[NUMBER_MAP.h] -= count
        hash[NUMBER_MAP.t] -= count
    }
    // one 
    if (hash[NUMBER_MAP.o]) {
        let count = hash[NUMBER_MAP.o]
        numberHash[1] = count
        hash[NUMBER_MAP.o] -= count
        hash[NUMBER_MAP.n] -= count
        hash[NUMBER_MAP.e] -= count
    }
    // nine
    if (hash[NUMBER_MAP.i]) {
        let count = hash[NUMBER_MAP.i]
        numberHash[9] = count
        hash[NUMBER_MAP.n] -= count * 2
        hash[NUMBER_MAP.i] -= count
        hash[NUMBER_MAP.e] -= count
    }
    let res = ''
    for (let i = 0; i < numberHash.length; i++) {
        let temp = ''
        res += temp.padStart(numberHash[i], i)
    }
    return res
};
// @lc code=end

let res = originalDigits("owoztneoerowozonetwothreefourfivesixseveneightninetneoerowoztneoerowoztneoerowoztneoerowoztneoerowoztneoerowoztneoerowoztneoerowoztneoereightseven")
console.log('res ===  :>> ', res === "00000000001111111111122222222222345677889");
// "000000000011111111111222222222223456788"