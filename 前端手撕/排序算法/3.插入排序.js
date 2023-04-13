//插入排序，前面有序，后面往前插入
//两层i控制每个数据都遍历，j是要插入的数据，开始赋值j=i，然后不断地往前插
//往前插的过程，因为要腾出位置，比target大的不断地后移，while(条件是nums[j-1]比target大，而且j>0),j=0跳出循环，证明target插入头部

function insertSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i,
      target = nums[j];
    while (j > 0 && target < nums[j - 1]) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = target;
  }
  return nums;
}

console.log(insertSort([1, -1, 0]));
