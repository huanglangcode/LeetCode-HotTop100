/*
 * @lc app=leetcode.cn id=385 lang=javascript
 *
 * [385] 迷你语法分析器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
	if (s[0] !== '[') return new NestedInteger(s);

	const stack = [];
	let start = 0;
	const process = {
		'['(index) {
			stack.push(new NestedInteger());
			start = index + 1;
		},
		','(index) {
			if (index > start) {
				const value = s.slice(start, index);
				stack[stack.length - 1].add(new NestedInteger(value));
			}
			start = index + 1;
		},
		']'(index) {
			this[','](index);
			if (stack.length < 2) return;
			const last = stack.pop();
			stack[stack.length - 1].add(last);
		}
	};

	[...s].forEach((current, index) => process[current]?.(index));

	return stack[0];
};
// @lc code=end

