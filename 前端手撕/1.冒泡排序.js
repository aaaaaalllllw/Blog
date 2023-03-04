//冒泡排序，每一轮找到最大的数据,两两比较，每次找到未排序的较大者，放置到合适的位置(稳定排序)
//两层循环，i(正常遍历，控制每个数据都排序过)，j初始值为0,最终值为nums.length-i-1(就是最后数据要摆放的位置)//最后的索引就是[length-1]
//为什么是j+1而不是j-1，因为j<nums.length-1
//最里层就是两两比较，交换位置

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    // console.log(i); //区间就是[0,length-1]
  }
  return nums;
}

console.log(bubbleSort([1, 4, 2, 19, 10, 19]));
