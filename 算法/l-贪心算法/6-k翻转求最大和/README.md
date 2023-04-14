## 题目

那么又是一个贪心：局部最优：只找数值最小的正整数进行反转，当前数值和可以达到最大（例如正整数数组{5, 3, 1}，反转 1 得到-1 比 反转 5 得到的-5 大多了），全局最优：整个 数组和 达到最大。

## 思路

贪心算法，局部最优

1. 将数组按照绝对值大小从大到小排列，**注意要按照绝对值的大小**
2. 从前向后遍历，遇到负数将其变为正数，同时 k--
3. 如果 k 还大于 0，那么反复转变数值最小的元素，将 k 用完
4. 求和

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let res = 0;
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1;
      k--;
    }
  }
  if (k % 2 == 1) nums[nums.length - 1] *= -1;
  for (item of nums) {
    //数组in遍历下标，of遍历元素
    // console.log(item)
    res += item;
  }
  return res;
};
```
