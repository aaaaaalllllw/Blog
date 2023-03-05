//快速排序，分而治之，本质的思想中间一个基本点，小的放左边，大的放右边
//试想length长度为3的数组，[3,2,1],小的放左边，大的放右边
//如果是length长度为2，[2,1],mid=Math.floor(num.length/2)从数组取出来1，2就自然放到左边
//如果是length长度为1，就不需要排序。

//这题用到了递归，递归三部曲
//确定终止条件，nums.length<=1
//确定参数和返回值，参数是数组，返回值还是数组
//单层逻辑是找到中间值，遍历剔除中间值的数组，大的放右边，小的放左边

function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2); //偶数就是个数组
  let base = nums.splice(mid, 1);
  let left = [],
    right = [];
  nums.forEach((item) => {
    if (item <= base) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  //   right.concat
  return quickSort(left).concat(mid, quickSort(right));
}

console.log(quickSort([1, 2, 2, 1]));
