/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * int[] size = uf.size();
        // 记录所有分支的大小
        List<Integer> list = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < n; i++) {
            // 找到节点 i 的根节点
            // 注意：只有每个连通分量的根节点的 size[] 才可以代表该连通分量中的节点数
            int p = uf.find(i);
            // 已经加入 list 的节点直接跳过
            if (!set.contains(p)) list.add(size[p]);
            set.add(p);
        }
        long ans = 0;
        // 计算结果
        for (int sz : list) ans += (long) sz * (n - sz);
        // 注意 ➗ 2
        return ans / 2;
 */
var countPairs = function (n, edges) {
    const uSet = new UnionSet(n)
    for (const [from, to] of edges) {
        uSet.merge(from, to)
    }
    let set = new Set(), arr = []
    for (let i = 0; i < n; i++) {
        let p = uSet.find(i)
        if (!set.has(p)) {
            arr.push(uSet.pCnt[p])
        }
        set.add(p)
    }
    let res = 0
    for (const cnt of arr) {
        res += (n - cnt) * cnt
    }
    return res / 2
};

class UnionSet {
    constructor(n) {
        this.arr = new Array(n).fill(0).map((val, idx) => val = idx)
        this.size = new Array(n).fill(1)
    }

    find(x) {
        if (this.arr[x] !== x) {
            this.arr[x] = this.find(this.arr[x])
        }
        return this.arr[x]
    }

    merge(x, y) {
        const xParent = this.find(x)
        const yParent = this.find(y)
        if (xParent === yParent) return
        this.arr[xParent] = yParent
        this.size[yParent] += this.size[xParent]
    }

    get pCnt() {
        return this.size
    }

}


var n = 7, edges = [[0, 2], [0, 5], [2, 4], [1, 6], [5, 4]]

// 一共7个点 0号可以抵达 2 5 4.
//          1号可以抵达 6
//          3号哪里都去不了
// 即 缺少   0-> 1 3 6
//          1-> 0 2 3 4 5
//          3-> 0 1 2 4 5 6

let res = countPairs(n, edges)
console.log('res :>> ', res);