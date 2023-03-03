//将正负数，0平分之后的数组重新排序

//暴力解法就是平方之后，调用sort
function sortedSquare(nums) {
  let num2 = nums.map((i) => i * i);
  num2.sort((a, b) => a - b);
  return num2;
}

//双指针,因为最大的数据只会出现在数组左右
//左指针，头指针
//右指针，尾指针，负责安放数据（前后比较，大的放在后面），后面大right先前移动
//正常指针，负责摆放顺序
//当他们相遇，数组摆放好了
let arr = [-4, -1, 0, 3, 10];
function sortedSquares(nums) {
  let num2 = [];
  let left = 0,
    right = nums.length - 1;
  k = nums.length - 1;
  while (left <= right) {
    if (nums[left] * nums[left] < nums[right] * nums[right]) {
      num2[k--] = nums[right] * nums[right];
      right--;
    } else {
      num2[k--] = nums[left] * nums[left];
      left++;
    }
  }
  return num2;
}
console.log(sortedSquares(arr));
