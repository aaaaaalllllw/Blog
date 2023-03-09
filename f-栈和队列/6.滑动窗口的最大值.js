//滑动窗口的最大值
//[7,2,4,-1,0,0] k=3
//7，2，4-》7
//2，4，-1=》4
//4，-1，0=》4
//-1，0，0=》0

//每个窗口只要记录最大值
//需要一个队列，向滑动窗口添加，弹出，返回最大值
//这样队列称为单调函数其实队列没有必要维护窗口里的所有元素，只需要维护有可能成为窗口里最大值的元素就可以了，同时保证队列里的元素数值是由大到小的。
// 那么这个维护元素单调递减的队列就叫做单调队列，即单调递减或单调递增的队列。C++中没有直接支持单调队列，需要我们自己来实现一个单调队列
// 不要以为实现的单调队列就是 对窗口里面的数进行排序，如果排序的话，那和优先级队列又有什么区别了呢。
//从大到下front-》back
// pop(value)：如果窗口移除的元素value等于单调队列的出口元素，那么队列弹出元素，否则不用任何操作
// push(value)：如果push的元素value大于入口元素的数值，那么就将队列入口的元素弹出，直到push元素的数值小于等于队列入口元素的数值为止
//双指针，i头指针，j是滑动窗口尾指针
function maxSlidingWindow(nums, k) {
  class MonoQueue {
    queue;
    constructor() {
      this.queue = [];
    }
    //返回最大
    front() {
      return this.queue[0];
    }
    //把后面下的都不要
    enqueue(value) {
      let back = this.queue[this.queue.length - 1];
      while (back != value && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }
    //如果value===front前面最大的替换
    dequeue(value) {
      let fornt = this.front();
      if (fornt === value) {
        this.queue.shift();
      }
    }
  }
  let queue = new MonoQueue();
  let i = (j = 0),
    result = [];
  while (j < k) {
    queue.enqueue(nums[j++]);
  }
  result.push(queue.front());
  while (j < nums.length) {
    queue.enqueue(nums[j++]);
    queue.dequeue(nums[i++]);
    result.push(queue.front());
  }
  return result;
}
