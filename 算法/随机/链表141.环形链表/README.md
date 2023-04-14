## 141.环形链表

给定一个链表，判断链表中是否有环
！[这是图片](./1.gif)

## 思路

.next.next 还要判断.next!=null

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	let slow = (fast = head);
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
		if (fast == slow) return true;
	}
	return false;
};
```
