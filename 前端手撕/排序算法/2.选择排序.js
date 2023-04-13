//选择排序，每次找到较小值,把当前所在位置和适合数据的位置进行交换
//两层循环，i控制每个数据都遍历同时记录着合适数据的位置，j第二层循环找到较小者初始值i+1，j是当前数据位置
//如何保存较小者，index=i，如果nums[j]<nums[index],index=j,如果遍历
//加一个判断如果所在位置和适合位置重合不必交换

function selectSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[index]) {
        index = j;
      }
    }
    if (index != i) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  }
  return nums;
}

console.log(selectSort([1, 1, 19, 1, 2]));
