//移除元素 一个数组移除重复的元素
//双指针法，fast正常移动，如果不等于val就赋值给slow，slow++，fast++;
//                      如果等于val就fast++,跳过

function removeElement(nums, val) {
  let fast = (slow = 0);
  for (fast; fast < nums.length; fast++) {
    if (nums[fast] != val) {
      nums[slow++] = nums[fast];
    }
  }
  return slow;
}

console.log(removeElement([1, 1, 2, 1, 3], 1));
