/*
 * @lc app=leetcode id=815 lang=javascript
 *
 * [815] Bus Routes
 */

// @lc code=start
/**
 * Example 1:
Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
Output: 2
Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
Example 2:

Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
Output: -1
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if (source === target) {
        return 0;
    }
    let hash = {
        usedRoutes: 0,
        usedArray: new Array(routes.length).fill(false)
    };
    let firstNode = new ListNode(1);
    for (let i = 0; i < routes.length; i++) {
        let curr = routes[i];
        if (curr.indexOf(source) !== -1) {
            hash.usedRoutes++;
            hash.usedArray[i] = true;
            for (let j = 0; j < curr.length; j++) {
                firstNode.friends.add(curr[j]);
            }
        }
    }
    if (firstNode.friends.has(target)) {
        return firstNode.level;
    }
    let node = firstNode;
    while (hash.usedRoutes < routes.length) {
        let used = hash.usedRoutes;
        node.next = new ListNode(node.level + 1);
        for (const ele of node.friends) {
            for (let i = 0; i < routes.length; i++) {
                if (hash.usedArray[i]) {
                    continue;
                }
                let curr = routes[i];
                if (curr.indexOf(ele) !== -1) {
                    hash.usedRoutes++;
                    hash.usedArray[i] = true;
                    for (let j = 0; j < curr.length; j++) {
                        if (curr[j] !== ele) {
                            node.next.friends.add(curr[j]);
                        }
                    }
                }
            }
        }
        if (used === hash.usedRoutes) {
            return -1;
        }
        node = node.next;
    }
    while (firstNode) {
        if (firstNode.friends.has(target)) {
            return firstNode.level;
        }
        firstNode = firstNode.next;
    }
};

function ListNode(level) {
    this.level = level;
    this.friends = new Set();
    this.next = null;
}
// @lc code=end

numBusesToDestination([[0, 4, 15], [17, 20], [4, 11, 14, 16, 23], [1, 12, 15, 16], [0, 6, 8, 10]]
    , 10
    , 0);
// numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12);