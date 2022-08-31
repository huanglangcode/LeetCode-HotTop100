/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countExcellentPairs = function (nums, k) {
    let set2 = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set2.has(nums[i])) {
            nums[i] = -1
        } else {
            set2.add(nums[i])
        }
    }
    let res = 0
    function cnt(num1, num2) {
        let cnt = 0
        let and = (num1 & num2).toString(2)
        let or = (num1 | num2).toString(2)
        for (let i = 0; i < and.length; i++) {
            if (and[i] === '1') cnt++
        }
        for (let i = 0; i < or.length; i++) {
            if (or[i] === '1') cnt++
        }
        return cnt
    }
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === -1) continue
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === -1) continue
            if (cnt(nums[i], nums[j]) >= k) {
                set.add([i, j])
                res++
            }
        }
    }
    return res
};


var nums = [1, 2, 3, 1], k = 3
countExcellentPairs(nums, k)