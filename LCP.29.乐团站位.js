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
 * @param {number} num
 * @param {number} xPos
 * @param {number} yPos
 * @return {number}
 */
const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

var orchestraLayout = function (num, xPos, yPos) {

};

let res = orchestraLayout(18, 7, 6)
// let res2 = orchestraLayout(18, 11, 9)
console.log('res === 2 :>> ', res === 2);
// console.log('res2 === 4 :>> ', res2 === 4);

class A {
    expiredCodeIds = [];
    savingQueue = new FunctionQueue(async (codeStr) =>
        writeFile(this.entryFile.diskPath, codeStr)
    )

    HasChanged() {
        return this.currentCode !== this.savedCode;
    }

    /**
     * 保存当前编辑中的code
     */
    async Save() {
        // if (!this.HasChanged()) {
        //     return true;
        // }
        this.codes.saved = this.currentCode;
        const [, key] = Package.getCustomerIdAndPassword();
        await this.CleanBackup();
        return new Promise < boolean > (async (resolve) => {
            this.savingQueue.Flush(
                await FlowFile.encryptCode(this.currentCode.GetCode(), key),
                () => resolve(true),
                (err) => {
                    log.error(err);
                    resolve(false);
                }
            );
        });
    }
}