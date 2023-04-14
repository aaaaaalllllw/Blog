## 2.两数相加

## 思路

![这是图片](./1.jpg)

一个个按位运算就行，算出来的结果用 sum 连起来，如果有进位保留，每次都要重新更新进位

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = new ListNode(0);
  let head = sum;
  let adOne = 0; //进位
  while (l1 || l2 || adOne) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let add = val1 + val2 + adOne;
    adOne = add >= 10 ? 1 : 0;
    sum.next = new ListNode(add % 10);
    sum = sum.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return head.next;
};
```
