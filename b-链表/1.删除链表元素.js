//删除链表中等于给定值val的所有节点
//示例:head=[1,2,6,6] val=6

//使用原来的头节点进行移除，如果头节点也是要删除的，只要把头节点往后移动
//一开始就判断head.val是否满足条件
//cur=head，让cur取遍历当cur是最后一个节点，cur.next==null

//循环里面竟然判断的是cur.next.val,cur!=null防止空头节点，cur.next!=null循环结束

function removeElement(head, val) {
  //删除头节点
  while (head != null && head.val == val) {
    head = head.next;
  }
  let cur = head;
  while (cur != null && cur.next != null) {
    if (cur.next.val == val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}

//虚拟头节点成为新的head，就可以不要判断
// Definition for singly-linked list.
class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElement(head, val) {
  let dym = new ListNode(null, head);
  let cur = dym;
  while (cur.next != null) {
    if (cur.next == val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return dym.next;
}
