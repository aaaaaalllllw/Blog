## 746.使用最小花费爬楼梯

![这是图片](./1.png)

Math.min(dp[cost[i-1]],dp[cost[i-2]])+cost[i]**错误了**

## 思路

1. 确定数组以及下标的含义

**使用动态规划，就要有一个数组来记录
dp[i]的定义:到达第 i 台阶花费的最少体力 dp[i],对于 dp 数组的定义，一定要清晰**

2. 确定递推公式

**可以有两个途径得到 dp[i],一个是 dp[i-1],一个是 dp[i-2]**

dp[i-1]跳到 dp[i]需要花费 dp[i-1]+cost[i-1]
dp[i-2]跳到 dp[i]需要花费 dp[i-2]+cost[i-2]

这两个取最小值

3. dp 如何初始化

最麻烦的 dp[0]和 dp[1]
新题目描述中明确说了 “你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。” 也就是说 从 到达 第 0 个台阶是不花费的，但从 第 0 个台阶 往上跳的话，需要花费 cost[0]。

所以初始化 dp[0] = 0，dp[1] = 0

4. 确定遍历顺序

从前到后

5. 举例推导 dp 数组

![这是图片](./1.png)

## 代码 dp 数组会多一个，需要到达数组最后，再越一个台阶

```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = [];
  (dp[0] = 0), (dp[1] = 0);
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[cost.length];
};
```

记录先两位

```js
var minCostClimbingStairs = function (cost) {
  let dp0 = 0,
    dp1 = 0;
  for (let i = 2; i <= cost.length; i++) {
    let dpi = Math.min(dp1 + cost[i - 1], dp0 + cost[i - 2]);
    dp0 = dp1;
    dp1 = dpi;
  }
  return dp1;
};
```
