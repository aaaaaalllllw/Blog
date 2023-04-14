//但是依然还是要用两个队列来模拟栈，只不过没有输入和输出的关系，而是另一个队列完全用来备份的！
//queue1用于弹栈，queue2用于保存数据（因为stack和queue的方向不同，每次都要重新改换下栈的位置）
//queue1每次要弹出是最后的数据，就把最后前面的数据复制到queue2，每次pop之前还要把queue2清空
//如此反复
//stack先进先出，就是queue的unshift和shift

var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

MyStack.prototype.push = function (x) {
  this.queue1.push(x);
};

MyStack.prototype.pop = function () {
  //减少两个队列的交换次数，只有当queue1为空，交换两个队列
  if (!this.queue1.length) {
    [this.queue1, this.queue2] = [this.queue2, this.queue2];
  }
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  return this.queue1.shift();
};

MyStack.prototype.top = function () {
  const x = this.pop();
  this.queue1.push(x);
  return x;
};
MyStack.prototype.empty = function () {
  return !this.queue1.length && !this.queue2.length;
};
//优化，
// 一个队列在模拟栈弹出元素的时候只要将队列头部的元素（除了最后一个元素外） 重新添加到队列尾部，此时再去弹出元素就是栈的顺序了。

// 使用一个队列实现
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let size = this.queue.length;
  while (size-- > 1) {
    this.queue.push(this.queue.shift());
  }
  return this.queue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  const x = this.pop();
  this.queue.push(x);
  return x;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue.length;
};
