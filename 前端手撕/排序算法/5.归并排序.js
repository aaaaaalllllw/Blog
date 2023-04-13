//归并排序，本质还是递归，分成两个数组，左右数组，一个数组，
//你比我下，你就放进，你也++，谁多了直接加入数组
//当数组长度为1，不需要排序直接返回
//当数组长度为2，[2,1],mid=Math.floor(nums/2)左数组[0,mid-1],右数组[mid,length]
//取第一个数据，2和1，1比2小，进入新数组，左数组++空了，右数组直接进去

//递归三部曲
//1:终止条件:nums.length<=1
//2.参数：nums，返回值左右数组合并的result
//3.单层逻辑：id=Math.floor(nums/2)左数组[0,mid-1],右数组[mid,length]
//取第一个数据，2和1，1比2小，进入新数组，左数组++空了，右数组直接进去

function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let result = [];
  let mid = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, mid)),
    right = mergeSort(nums.slice(mid, nums.length));
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  result.concat(left.slice(i, left.length));
  result.concat(right.slice(j, right.length));
  return result;
}
console.log(mergeSort([2, 2, 1, 1]));
