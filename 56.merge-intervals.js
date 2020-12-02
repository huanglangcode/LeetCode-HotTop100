/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    if (intervals.length === 0) {
        return []
    }
    intervals.sort(((a, b) => a[0] - b[0]));
    let ans = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i]
        if (ans[ans.length - 1][1] < curr[0]) {
            ans.push(curr)
        } else {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], curr[1])
        }
    }
    return ans;
};

// intervals = [[1,3],[2,6],[8,10],[15,18]]
// merge([[1, 3], [1, 2], [8, 10], [15, 18]])