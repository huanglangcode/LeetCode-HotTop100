let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]

const helper = (arr) => {
    let map = new Map()
    let root
    for (const item of arr) {
        let node = { ...item, children: [] }
        if (item.pid === 0) root = node
        if (map.has(item.pid)) {
            map.get(item.pid).push(node)
        } else {
            map.set(item.pid, [node])
        }
    }
    let queue = [root], idx = 0
    while (idx < queue.length) {
        let curr = queue[idx++]
        if (map.has(curr.id)) {
            let arr = map.get(curr.id)
            curr.children.push(...arr)
            queue.push(...arr)
        }
    }
    return root
}

let root = helper(arr)
