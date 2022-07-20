/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
    let graph = new Map()
    for (const word of words) {
        for (const c of word) {
            graph.set(c.charAt(), [])
        }
    }
    let inDegree = new Array(26).fill(0)
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i]
        const word2 = words[i + 1]
        const minL = Math.min(word1.length, word2.length)
        let j = 0
        while (j < minL) {
            if (word1.charAt(j) !== word2.charAt(j)) {
                graph.set(word1.charAt(j), graph.get(word1.charAt(j)).concat(word2.charAt(j)))
                inDegree[word2.charCodeAt(j) - 'a'.charCodeAt()]++
                break;
            }
            j++
            // 未按题目要求排序 ['abc','ac']
            if (j === minL && word1.length > word2.length) return ""
        }
    }
    let res = ""
    let queue = []
    for (const key of graph.keys()) {
        if (inDegree[key.charCodeAt() - 'a'.charCodeAt()] === 0) {
            queue.push(key)
        }
    }
    while (queue.length) {
        let curr = queue.shift()
        res += curr
        let set = graph.get(curr)
        if (!set) break
        for (const nxt of set) {
            if (--inDegree[nxt.charCodeAt() - 'a'.charCodeAt()] === 0) {
                queue.push(nxt)
            }
        }
    }
    // 判断环(如果还有边没被用过.)
    return res.length === graph.size ? res : ""
};