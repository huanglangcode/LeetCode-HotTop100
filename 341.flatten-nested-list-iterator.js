/*
 * @lc app=leetcode id=341 lang=javascript
 *
 * [341] Flatten Nested List Iterator
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
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
 class NestedIterator {
    constructor(nestedList) {
        this.list = nestedList;
    }
    hasNext() {
        while (this.list.length != 0) {
            if (this.list[0].isInteger()) {
                return true;
            } else {
                let cur = this.list[0].getList();
                this.list.shift();
                this.list.unshift(...cur);
            }
        }

    }
    next() {
        return this.list.shift().getInteger();
    }
}





let iter = new NestedIterator([[1, 1], 2, [1, 1]])
console.log('iter.realArr :>> ', iter.realArr);
const aaa = iter.next()
console.log('aaa :>> ', aaa);


/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// @lc code=end

