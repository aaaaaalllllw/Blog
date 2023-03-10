// 使用栈实现队列的下列操作：
// push(x) -- 将一个元素放入队列的尾部。
// pop() -- 从队列首部移除元素。
// peek() -- 返回队列首部的元素。
// empty() -- 返回队列是否为空。

//用一个入栈，出栈，两个栈来模拟队列
var MyQueue = function () {
  this.stackIn = [];
  this.stackOut = [];
};

MyQueue.prototype.push = function (x) {
  this.stackIn.push(x);
};

MyQueue.prototype.pop = function () {
  if (this.stackOut.length) {
    return this.stackOut.pop();
  }
  while (this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop());
  }
  return this.stackOut.pop();
};
MyQueue.prototype.peek = function () {
  const x = this.pop();
  this.stackOut.push(x);
  return x;
};
MyQueue.prototype.empty = function () {
  return this.stackIn.length == 0 && this.stackOut.length == 0;
};
