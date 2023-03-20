## 198.打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。 偷窃到的最高金额 = 1 + 3 = 4 。

示例 2：
输入：[2,7,9,3,1]
输出：12 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
提示：

0 <= nums.length <= 100
0 <= nums[i] <= 400

## 思路

1.  确定 dp 数组以及下标的含义
    **dp[i]:考虑下标 i(包括 i)以内的房屋，最多可以偷窃的金额为 dp[i]**

2.  确定递推公式，可以有个选择 if，else;求其中的最大
    如果偷第 i 房间，dp[i]=dp[i-2]+num[i]
    如果不偷第 i 房间，dp[i]=dp[i-1]

3.  dp 数组如何初始化
    从递推公式 dp[i]=max(dp[i-2]+nums[i],dp[i-1])，可以看出，递推公式的基础就是
    dp[0]和 dp[1],从 dp[i]的定义讲,dp[0]一定是 nums[0],dp[1]就是 nums[0]和 nums[1]
    的最大值 dp[1]=max(nums[0],nums[1])

4.  确定遍历顺序

5.

## 代码

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==0) return 0
    if(nums.length==1) return nums[0]
    let dp=new  Array(nums.length).fill(0)
    dp[0]=nums[0]
    dp[1]=Math.max(nums[0],nums[1])
    for(let i=2;i<nums.length;i++){
        dp[i]=Math.max(dp[i-2]+nums[i],dp[i-1])
    }
    return dp[nums.length-1]

```
