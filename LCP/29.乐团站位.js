// 某乐团的演出场地可视作 num * num 的二维矩阵 grid
// （左上角坐标为 [0,0])，每个位置站有一位成员。
// 乐团共有 9 种乐器，乐器编号为 1~9，每位成员持有 1 个乐器。
// 为保证声乐混合效果，成员站位规则为：自 grid 左上角开始顺时针螺旋形向内循环以 1，2，...，9 循环重复排列。
// idx  0 1 2 3 4 5 6 7 8 9 x 1 2 3 4 5 6 7
// 
// 0    1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9
// 1    5 6 7 8 9 1 2 3 4 5 6 7 8 9 1 2 3 1
// 2    4 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 4 2
// 3    3 1 9 1 2 3 4 5 6 7 8 9 1 2 3 8 5 3
// 4    2 9 8 8 9 1 2 3 4 5 6 7 8 9 4 9 6 4
// 5    1 8 7 7 8 9 1 2 3 4 5 6 7 1 5 1 7 5
// 6    9 7 6 6 7 9 1 2 3 4 5 6 8 2 6 2 8 6
// 7    8 6 5 5 6 8 2 3 4 5 6 7 9 3 7 3 9 7
// 8    7 5 4 4 5 7 1 5 6 7 7 8 1 4 8 4 1 8
// 9    6 4 3 3 4 6 9 4 9 8 8 9 2 5 9 5 2 9
// x    5 3 2 2 3 5 8 3 2 1 9 1 3 6 1 6 3 1
// 1    4 2 1 1 2 4 7 6 5 4 3 2 4 7 2 7 4 2
// 2    3 1 9 9 1 3 2 1 9 8 7 6 5 8 3 8 5 3
// 3    2 9 8 8 9 8 7 6 5 4 3 2 1 9 4 9 6 4
// 4    1 8 7 7 6 5 4 3 2 1 9 8 7 6 5 1 7 5
// 5    9 7 6 5 4 3 2 1 9 8 7 6 5 4 3 2 8 6
// 6    8 6 5 4 3 2 1 9 8 7 6 5 4 3 2 1 9 7
// 7    7 6 5 4 3 2 1 9 8 7 6 5 4 3 2 1 9 8

/**
// 0层的数字共有(num - 1) * 4
// 1层的数字共有(num - 3) * 4 , 前两层(2 * num - 2 * 2) * 4
// 2层的数字共有(num - 5) * 4 , 前三层(3 * num - 3 * 3) * 4
// ...... 依此类推
// L层 开始的数字应该是 (L * num - L * L) * 4 + 1
// 再判断给定坐标是在四条边的哪一条边上a
 * @param {number} num
 * @param {number} xPos
 * @param {number} yPos
 * @return {number}
    long pre = (num * l - l * l) * 4 % 9;
    long ans = 0;
    if(xPos == l){
        ans = pre + (yPos - l + 1);
        ans %= 9;
    }else if(num - 1 - yPos == l){
        ans = pre + num - (l * 2) - 1 + (xPos - l + 1);
        ans %= 9;
    }else if(num - 1 - xPos == l){
        ans = pre + (num - (l * 2) - 1) * 2 + (num - l - yPos);
        ans %= 9;
    }else{
        ans = pre + (num - (l * 2) - 1) * 3 + (num - l - xPos);
        ans %= 9;
    }
    return ans == 0 ? 9 : ans;
 */
var orchestraLayout = function (num, xPos, yPos) {
    //计算出第I层 I从0开始
    let I = Math.min(xPos, yPos, num - xPos - 1, num - yPos - 1)
    // 第6层. 前五层总共使用了  (18-1) * 4 + (18-3) * 4 +(18-5) * 4 + (18-7) * 4 +(18-9) * 4 = (5*18 - ) * 4 个数字
    let startsFrom = (I * (num - I) * 4 + 1) % 9
    let idx = 0
    //   每条边有 num - 1 - 2 * I 个数组
    let sideLength = num - 1 - 2 * I
    console.log('startsFrom :>> ', startsFrom);
    console.log('sideLength :>> ', sideLength);
    if (I === xPos) { // 第一条边上
        idx = startsFrom + yPos - I
    } else if (I === num - yPos - 1) { //第2条边上
        idx = startsFrom + sideLength + xPos - I
    } else if (I === num - xPos - 1) { //第3条边上
        idx = startsFrom + 2 * sideLength + num - yPos - 1 - I
    } else if (I === yPos) { //第4条边上
        idx = startsFrom + 3 * sideLength + num - xPos - 1 - I
    };
    idx %= 9
    return idx == 0 ? 9 : idx;
}
let res = orchestraLayout(
    971131546,
    966980466,
    531910024
)
// let res2 = orchestraLayout(18, 11, 9)
console.log(`${res} === 2 :>> `, res === 2);
