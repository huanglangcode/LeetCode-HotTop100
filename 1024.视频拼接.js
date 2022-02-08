/*
 * @lc app=leetcode.cn id=1024 lang=javascript
 *
 * [1024] 视频拼接
你将会获得一系列视频片段，这些片段来自于一项持续时长为 time 秒的体育赛事。
这些片段可能有所重叠，也可能长度不一。
使用数组 clips 描述所有的视频片段，其中 clips[i] = [starti, endi] 表示：
某个视频片段开始于 starti 并于 endi 结束。

甚至可以对这些片段自由地再剪辑：

例如，片段 [0, 7] 可以剪切成 [0, 1] + [1, 3] + [3, 7] 三部分。

我们需要将这些片段进行再剪辑，并将剪辑后的内容拼接成覆盖整个运动过程的片段（[0, time]）。
返回所需片段的最小数目，如果无法完成该任务，则返回 -1 。

 

示例 1：
输入：clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], time = 10
输出：3
解释：
选中 [0,2], [8,10], [1,9] 这三个片段。
然后，按下面的方案重制比赛片段：
将 [1,9] 再剪辑为 [1,2] + [2,8] + [8,9] 。
现在手上的片段为 [0,2] + [2,8] + [8,10]，而这些覆盖了整场比赛 [0, 10]。

示例 2：
输入：clips = [[0,1],[1,2]], time = 5
输出：-1
解释：
无法只用 [0,1] 和 [1,2] 覆盖 [0,5] 的整个过程。

示例 3：
输入：clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], time = 9
输出：3
解释： 
选取片段 [0,4], [4,7] 和 [6,9] 。

示例 4：
输入：clips = [[0,4],[2,8]], time = 5
输出：2
解释：
注意，你可能录制超过比赛结束时间的视频。

1 <= clips.length <= 100
0 <= starti <= endi <= 100
1 <= time <= 100

What if we sort the intervals? 
Considering the sorted intervals, how can we solve the problem with dynamic programming?
Let's consider a DP(pos, limit) where pos represents the position of the current interval we are gonna take the decision 
and limit is the current covered area from [0 - limit]. 
This DP returns the minimum number of taken intervals or infinite if it's not possible to cover the [0 - T] section.
 */

// @lc code=start
/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
    clips.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let set = new Set()
    let filterClips = new Array()
    for (let i = 0; i < clips.length; i++) {
        let [from,] = clips[i]
        if (!set.has(from)) {
            filterClips.push(clips[i])
            set.add(from)
        }
    }
    set.clear()
    for (let i = filterClips.length - 1; i > 0; i--) {
        if (filterClips[i][1] <= filterClips[i - 1][1]) {
            filterClips.splice(i, 1)
            i -= 1
        }
    }
    console.log('filterClips :>> ', filterClips);
    let hash = filterClips.reduce((acc, curr) => {
        acc[curr[0]] = curr[1]
        return acc
    }, {})
    console.log('hash :>> ', hash);
    let from = filterClips[0][0]
    let to = filterClips[0][1]
    let idx = 0
    while (to < time && idx < filterClips.length) {
        let thisRoundMax = to
        for (let i = from; i <= to; i++) {
            if (hash[i]) {
                if (hash[i] > thisRoundMax) {
                    thisRoundMax = hash[i]
                    idx = i
                    from = i
                    to = hash[i]
                }
            }
        }
    }
};
// @lc code=end
var clips = [[0, 1], [6, 8], [0, 2], [5, 6], [0, 4], [0, 3], [6, 7], [1, 3], [4, 7], [1, 4], [2, 5], [2, 6], [3, 4], [4, 5], [5, 7], [6, 9]], time = 9
// 选取片段 [0,4], [4,7] 和 [6,9] 。
let res = videoStitching(clips, time)
console.log('res :>> ', res);