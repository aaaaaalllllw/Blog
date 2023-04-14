//反转一个单链表:输入1->2->3 输出3->2->1
//只需要改变链表的next指针的指向

//双指针法，cur，pre，只要将cur-next=pre就行
//但是需要继续移动cur，pre，所以事先需要保存好cur->next,让cur，pre更新,
//循环终止条件是cur=null

function reverseList(head) {
  let temp,
    cur = head,
    pre = null;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}
