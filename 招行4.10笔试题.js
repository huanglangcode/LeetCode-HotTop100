/**
 * 
请你设计一个文本编辑程序，
需要编辑的稿件 article 为仅由大写字母、小写字母与空格组成的字符串（下标从 0 开始），
光标所在字符串下标位置记作 index，程序运行后，若光标停留位置为空格，不作操作，返回原文本；
否则光标所在位置对应的整个单词将被删除，并返回编辑后经过整理空格的文本。

注意：
输入保证字符串不以空格开头和结尾且不包含连续的空格。
返回的字符串不以空格开头和结尾且不包含连续的空格。若删除单词后有多余的空格，需要删除。
示例 1：

输入：article = "Singing dancing in the rain", index = 10

输出："Singing in the rain"

解释：
"Singing dancing in the rain" 光标位于 "dancing" 单词的字符 'n'
删除光标所在的单词 "dancing" 及其前或后的一个空格。

示例 2：

输入：article = "Hello World", index = 2

输出："World"

解释：删除 article[2] 所在的单词 "Hello" 及其后方空格。

示例 3：

输入：article = "Hello World", index = 5

输出："Hello World"

解释：光标位于空格处，不作处理。

提示：

1 <= article.length <= 10^5
0 <= index < article.length
article[i] 仅包含大写字母、小写字母与空格
 */
/**
 * @param {string} article
 * @param {number} index
 * @return {string}
 */
// var deleteText = function (article, index) {
//    if (article[index] === ' ') {
//       return article
//    }
//    const helper = () => {
//       let start = index
//       let end = index
//       while (article[start] !== ' ' && start > 0) {
//          start--
//       }
//       while (article[end] !== ' ' && end < article.length) {
//          end++
//       }
//       return [start, end]
//    }
//    let [start, end] = helper()
//    article = article.slice(0, start) + article.slice(end)
//    return article.split(/\s+/g).join(" ").trim()
// };


// var article = "Singing dancing in the rain", index = 10
// let res = deleteText(article, index)
// console.log('res :>> ', res);

/**
公园规划小组为了让公园景观层次丰富，决定按以下方案对各花坛内的植物进行统一规划：
一条小路两端的花坛不能栽种同一种花
与同一花坛相连的两个花坛也不能栽种同一种花。
已知公园内有编号为 0 ~ num-1的若干花坛，任意两个花坛均可通过小路直接或间接到达。
公园中共有 num-1 条双向小路连接花坛，roads[i] = [x, y] 表示花坛 x 和花坛 y 之间存在小路将二者相连。

请返回这些花坛最少需要几种花。
 */

/**
 *  示例 1：
    输入：roads = [[0,1],[1,3],[1,2]]
    输出：4
    解释：4 个花坛中编号为 1 的花坛与其余花坛均相连，因此至少需要栽种 4 种的花。

    示例 2：
    输入：roads = [[0,1],[0,2],[1,3],[2,5],[3,6],[5,4]]
    输出：3

    提示：
    1 <= roads.length <= 10^5
    0 <= roads[i][0],roads[i][1] <= roads.length
 */

// /**
//  * @param {number[][]} roads
//  * @return {number}
//  */
// var numFlowers = function (roads) {
//    let hash = {}
//    for (const [x, y] of roads) {
//       hash[x] = hash[x] + 1 || 1
//       hash[y] = hash[y] + 1 || 1
//    }
//    let max = 0
//    for (const [_, val] of Object.entries(hash)) {
//       max = Math.max(max, val)
//    }
//    return max + 1
// };


// var roads = [[0, 1], [1, 3], [1, 2]]

// // roads = [[0, 1], [0, 2], [1, 3], [2, 5], [3, 6], [5, 4]]

// numFlowers(roads)


/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
   let set = new Set(nums[0])

   for (let i = 1; i < nums.length; i++) {
      for (const num of set) {
         if (nums[i].indexOf(num) === -1) {
            set.delete(num)
         }
      }
   }
   console.log('set :>> ', set);
   return [...set]
};

var nums = [[25, 44, 47, 42, 43, 10], [40, 10, 8, 30, 5, 23], [36, 10]]
let res = intersection(nums)
console.log('res :>> ', res);