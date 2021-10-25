/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
  请注意，返回的 规范路径 必须遵循下述格式：
    始终以斜杠 '/' 开头。
    两个目录名之间必须只有一个斜杠 '/' 。
    最后一个目录名（如果存在）不能 以 '/' 结尾。
    此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
    返回简化后得到的 规范路径 。
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    path = path.replace(/\/{2,}/g, "/")
    let levels = path.split("/")
    let realLevel = []
    for (const symbol of levels) {
        if (symbol === '.' || symbol === '') {
            continue
        } else if (symbol === "..") {
            realLevel.pop()
        } else {
            realLevel.push(symbol)
        }
    }
    return `/${realLevel.join("/")}`
};
// @lc code=end

const path = "/a/./b/../../c/"
simplifyPath(path)

const path1 = "/home/"
simplifyPath(path1)
const path2 = "/../"
simplifyPath(path2)
const path3 = "/home//foo/"
simplifyPath(path3)