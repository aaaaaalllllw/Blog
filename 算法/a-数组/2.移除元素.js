//移除数组重复的指定元素

//暴力算法，两层遍历，第一层遍历元素i，找到之后，第二次元素j,整体向前移动
let arr = [11, 11, 22, 33, 33];
function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      for (let j = i + 1; j < nums.length; j++) {
        nums[j - 1] = nums[j];
      }
      i--; //删除之后，i要回归
    }
  }
  return nums;
}

//快慢指针时间复杂度0(1),通过一个快指针和慢指针在一个for循环下完成两个for循环工作
//快指针:寻找新数组的元素，新数组就是不含有目标数组的元素，fastIndex就是在遍历原数组
//慢指针:就是剔除重复元素的新数组
let arr = [11, 11, 22, 33, 33];
function removeElement(nums, val) {
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== val) nums[slowIndex++] = nums[fastIndex];
  }
  nums.length = slowIndex;
  return nums;
}

console.log(removeElement(arr, 11));
