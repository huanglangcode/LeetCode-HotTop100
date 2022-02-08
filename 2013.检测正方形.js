/**
 * 给你一个在 X-Y 平面上的点构成的数据流。设计一个满足下述要求的算法：

添加 一个在数据流中的新点到某个数据结构中。
可以添加 重复 的点，并会视作不同的点进行处理。
给你一个查询点，请你从数据结构中选出三个点，使这三个点和查询点一同构成一个 面积为正 的 轴对齐正方形 ，统计 满足该要求的方案数目。
轴对齐正方形 是一个正方形，除四条边长度相同外，还满足每条边都与 x-轴 或 y-轴 平行或垂直。

实现 DetectSquares 类：
DetectSquares() 使用空数据结构初始化对象
void add(int[] point) 向数据结构添加一个新的点 point = [x, y]
int count(int[] point) 统计按上述方式与点 point = [x, y] 共同构造 轴对齐正方形 的方案数。

输入：
["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]
[[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]
输出：
[null, null, null, null, 1, 0, null, 2]

解释：
DetectSquares detectSquares = new DetectSquares();
detectSquares.add([3, 10]);
detectSquares.add([11, 2]);
detectSquares.add([3, 2]);
detectSquares.count([11, 10]); // 返回 1 。你可以选择：
                               //   - 第一个，第二个，和第三个点
detectSquares.count([14, 8]);  // 返回 0 。查询点无法与数据结构中的这些点构成正方形。
detectSquares.add([11, 2]);    // 允许添加重复的点。
detectSquares.count([11, 10]); // 返回 2 。你可以选择：
                               //   - 第一个，第二个，和第三个点
                               //   - 第一个，第三个，和第四个点
     ************
     ************
     ************
     ***X***X****
     ************
     ************
     ************
     ***X***X****
     ************
     ************

["DetectSquares","add","add","add","count","add","add","add","count","add","add","add","count","add","add","add","count","add","add","add","count","add","add","add","count","add","add","add","count","add","add","add","count","add","add","add","count","add","add","add","count","add","add","add","count"]
[[],     
[[419,351]], 
[[798,351]],
[[798,730]],
[[419,730]],
[[998,1]],[[0,999]],[[998,999]],[[0,1]],[[226,561]],[[269,561]],[[226,604]],[[269,604]],[[200,274]],[[200,793]],[[719,793]],[[719,274]],[[995,99]],[[146,948]],[[146,99]],[[995,948]],[[420,16]],[[962,558]],[[420,558]],[[962,16]],[[217,833]],[[945,105]],[[217,105]],[[945,833]],[[26,977]],[[26,7]],[[996,7]],[[996,977]],[[96,38]],[[96,483]],[[541,483]],[[541,38]],[[38,924]],[[961,1]],[[961,924]],[[38,1]],[[438,609]],[[818,609]],[[818,229]],[[438,229]]]


point.length == 2
0 <= x, y <= 1000
调用 add 和 count 的 总次数 最多为 5000
 */

/**
 * 检测正方形
 */
class DetectSquares {
    constructor() {
        this.pointsMap = new Map()
    }
    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        this.pointsMap.set(point.join(','), this.pointsMap.get(point.join(',')) + 1 || 1)
    }
    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let count = 0
        for (const [pointStr, pointCount] of this.pointsMap.entries()) {
            let curr = pointStr.split(',')
            if ((point[0] - +curr[0]) / (point[1] - +curr[1]) === 1 || (point[0] - +curr[0]) / (point[1] - +curr[1]) === -1) {
                let a = this.pointsMap.get([curr[0], point[1]].join(',')) || 0
                let b = this.pointsMap.get([point[0], curr[1]].join(',')) || 0
                count += a * b * pointCount
            }
        }
        return count
    }
}

let detectSquares = new DetectSquares();
detectSquares.add([419, 351]);
detectSquares.add([798, 351]);
detectSquares.add([798, 730]);
let res1 = detectSquares.count([419, 730]); // 返回 1 。你可以选择： - 第一个，第二个，和第三个点
console.log('res1 :>> ', res1);
// let res2 = detectSquares.count([14, 8]);  // 返回 0 。查询点无法与数据结构中的这些点构成正方形。
// console.log('res2 :>> ', res2);
// detectSquares.add([11, 2]);    // 允许添加重复的点。
// let res3 = detectSquares.count([11, 10]); // 返回 2 。你可以选择：- 第一个，第二个，和第三个点 - 第一个，第三个，和第四个点
// console.log('res3 :>> ', res3);

// detectSquares.add([3, 2]);

// let res4 = detectSquares.count([11, 10]);
// console.log('res3 :>> ', res4);