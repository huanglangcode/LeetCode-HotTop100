/**
 * @param {number[]} amount
 * @return {number}
可以装满 2 杯 不同 类型的水或者 1 杯任意类型的水。
给你一个下标从 0 开始、长度为 3 的整数数组 amount ，其中 amount[0]、amount[1] 和 amount[2] 分别表示需要装满冷水、温水和热水的杯子数量。返回装满所有杯子所需的 最少 秒数。
 */
var fillCups = function (amount) {
    let max = amount[0]
    let sum = amount.reduce((acc, curr) => {
        acc += curr
        max = Math.max(max, curr)
        return acc
    }, 0)
    return Math.max(max, Math.ceil(sum / 2))
};

let res = fillCups([0, 2, 4])
console.log('res :>> ', res);


// [1,4,2]