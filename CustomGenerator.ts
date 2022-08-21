export class CycloneExcel {
    obj: Excel
    idx: number = 0
    data: any
    constructor(obj: Excel) {
        this.obj = obj;
    }

    public async getData(start: number, end: number) {
        this.data = await this.obj.getData(start, end)
    }

    async *[Symbol.asyncIterator]() {
        const data = this.data
        let idx = 0
        console.log('data111 :>> ', data);
        while (idx < data.length) {
            yield data[idx];
            idx++
        }
    }
}

class Excel {
    public id: number
    constructor(id: number) {
        this.id = id
    }
    private data: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    public async getData(start = 0, end = 3): Promise<number[][]> {
        return this.data.slice(start, end)
    }
}

(async () => {
    const ex = new Excel(1)
    const ce = new CycloneExcel(ex);
    await ce.getData(0, 3)
    for await (const value of ce) {
        console.log('value :>> ', value);
    }
})()