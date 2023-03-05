//两两交换，要改变三个节点的next值，node1，node2要两两交换。
//1.先要改变node1前面节点的next的值
//2.改变node1的next指向node2.next值
//3.改变node2.next指向node1
//而且因为要控制遍历改变之前需要记录node1和node2的位置，遍历是从虚拟头节点开始，每次移动两个

function swapPairs(head) {
  let dym = new ListNode(null, head);
  let cur = dym;
  while (cur.next != null && cur.next.next != null) {
    let node1 = cur.next;
    let node2 = cur.next.next;
    cur.next = cur.next.next;
    node1.next = node2.next;
    node2.next = node1;
    cur = cur.next.next;
  }
  return dym.next;
}
