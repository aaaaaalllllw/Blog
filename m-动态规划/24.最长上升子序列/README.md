## 300.最长上升子序列

i 正常遍历数组，j 从 i 的前面找最长递增子序列

给你一个整数数组 nums,找到其中最长严格递增子序列的长度

示例
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

## 思路

1. dp 的定义
   **dp[i]表示 i 之前包括 i 以 nums[i]结尾的最长递增子序列的长度**

2. 状态转移方程
   if(nums[i]>nums[j]) dp[i]=Math.max(dp[i],dp[j]+1)

3. dp 的初始化
   dp[i]至少是 1

4. 遍历顺序
   i 一定是从前往后遍历

5. 验证

## 代码

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length <= 1) return 1;
  let res = 1;
  let dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};
```
