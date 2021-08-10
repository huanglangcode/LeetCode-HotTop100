/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
    this.map = new Map();
};

TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, []);
    this.map.get(key)[timestamp] = value;
};

TimeMap.prototype.get = function (key, timestamp) {
    if (!this.map.has(key)) return '';
    const item = this.map.get(key);
    if (item[timestamp]) return item[timestamp];
    while (timestamp-- > -1) {
        if (item[timestamp]) return item[timestamp];
    }
    return '';
};

let map = new TimeMap();
map.set("foo", "bar", 1);
// console.log('map :>> ', map);
let val = map.get("foo", 1);
console.log('val :>> ', val);

val = map.get("foo", 3);
console.log('val :>> ', val);

map.set("foo", "bar2", 4);

val = map.get("foo", 4);
console.log('val :>> ', val);

val = map.get("foo", 5);
console.log('val :>> ', val);
/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 * 创建一个基于时间的键值存储类 TimeMap，它支持下面两个操作：

1. set(string key, string value, int timestamp)
    存储键 key、值 value，以及给定的时间戳 timestamp。
2. get(string key, int timestamp)
    返回先前调用 set(key, value, timestamp_prev) 所存储的值，其中 timestamp_prev <= timestamp。
    如果有多个这样的值，则返回对应最大的  timestamp_prev 的那个值。
    如果没有值，则返回空字符串（""）。
 * Input
["TimeMap",   "set",           "get",     "get",           "set",         "get",      "get"]
[   [],  ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[  null,      null,            "bar",     "bar",            null,         "bar2",    "bar2"]
 */
// @lc code=end

