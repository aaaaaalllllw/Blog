//删除链表的倒数N个节点
//双指针，fast从n+1开始，slow从0
//开始这样当fast指向空的时候，slow正好n的上一个节点
//怎么使fast到合适的位置，n--，初始fast=dym，fast=fast.next

function removeNtFormEnd(head, n) {
  let dym = new ListNode(null, head);
  let fast = dym,
    slow = dym;
  while (n-- && fast != null) {
    fast = fast.next;
  }
  fast = fast.next; //fast到n+1
  while (n-- && fast != null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dym.next;
}
