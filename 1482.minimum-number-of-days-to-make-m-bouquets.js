/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    if (m * k > bloomDay.length) {
        return -1;
    }
    const check = (days) => {
        //  [1,10,2,9,3,8,4,7,5,6]
        // 假设当前是第10天. 需要4束 * 2朵花
        let can = 0;
        let temp = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= days) {
                temp++;
                if (temp === k) { // reach
                    can++;
                    temp = 0;
                    if (can === m) {
                        return true;
                    }
                }
            } else {
                temp = 0;
            }
        }
        return false;
    };
    // 最理想情况下需要 m * k 天. 最坏情况下需要Math.max(...bloomDay)天 
    let left = k;
    let right = 10 ** 9;
    while (left < right) {
        const mid = (right + left) >> 1;
        if (check(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

let bloomDay = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
let m = 4;
let k = 2;

minDays(bloomDay, m, k);