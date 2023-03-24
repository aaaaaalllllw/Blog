function nextGreaterElements(nums) {
  let len = nums.length;
  let res = new Array(len).fill(-1);
  let stack = [];
  stack.push(0);
  for (let i = 1; i < len * 2; i++) {
    //模拟遍历两边nums,i%nums.length
    if (nums[i % len] <= nums[stack[stack.length - 1]]) stack.push(i % len);
    else {
      while (stack.length && nums[i % len] > nums[stack[stack.length - 1]]) {
        res[stack[stack.length - 1]] = nums[i % len];
        stack.pop();
      }
      stack.push(i % len);
    }
  }
  return res;
}

console.log(nextGreaterElements([1, 2, 1]));
