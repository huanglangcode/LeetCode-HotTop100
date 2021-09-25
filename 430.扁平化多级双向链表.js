/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 输入: [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// 输出：[1,2,3,7,8,11,12,9,10,4,5,6]
var flatten1 = function (head) {
    if (!head) return null
    let node = head
    let pre = head
    let stack = []
    while (node) {
        if (node.child) {
            let next = node.next
            if (next) {
                stack.push(next)
            }
            let child = node.child
            child.prev = node
            node.next = child
            node.child = null
        }
        pre = node
        node = node.next
    }
    while (stack.length) {
        let next = stack.pop()
        next.prev = pre
        pre.next = next

        let temp = next
        while (temp.next) {
            temp = temp.next
        }
        pre = temp
    }
    return head
};

var flatten2 = function (head) {
    if (!head) return null;
    let dummyHead = new Node(0, null, head, null);

    let stack = [head];
    let current = dummyHead;
    let prev = null;

    while (stack.length != 0) {
        current = stack.pop();

        if (prev) {
            current.prev = prev;
            prev.next = current;
        }

        if (current.next != null) stack.push(current.next);
        if (current.child != null) { // has a child
            stack.push(current.child);
            current.child = null; // remove child reference
        }

        prev = current;
    }

    return dummyHead.next
};
// @lc code=end

function Node(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
}

let head = new Node(1)
head.next = new Node(2)
head.next.prev = head
head.next.next = new Node(3)
head.next.next.prev = head.next
head.next.next.next = new Node(4)
head.next.next.next.prev = head.next.next
head.next.next.next.next = new Node(5)
head.next.next.next.next.prev = head.next.next.next
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.prev = head.next.next.next.next

head.next.next.child = new Node(7)
head.next.next.child.next = new Node(8)
head.next.next.child.next.prev = head.next.next.child
head.next.next.child.next.next = new Node(9)
head.next.next.child.next.next.prev = head.next.next.child.next
head.next.next.child.next.next.next = new Node(10)
head.next.next.child.next.next.next.prev = head.next.next.child.next.next


head.next.next.child.next.child = new Node(11)
head.next.next.child.next.child.next = new Node(12)
head.next.next.child.next.child.next.prev = head.next.next.child.next.child

let p1 = flatten1(head)
let p2 = flatten2(head)
console.log('p1===p2 :>> ', p1 === p2);