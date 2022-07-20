/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
    let cnt = 0
    for (let i = 0; i <= total; i += cost1) {
        cnt += (Math.floor((total - i) / cost2) + 1)
    }
    return cnt
};

var total = 1000000, cost1 = 1, cost2 = 1

total = 5, cost1 = 10, cost2 = 10
let res = waysToBuyPensPencils(total, cost1, cost2)
console.log('res :>> ', res);