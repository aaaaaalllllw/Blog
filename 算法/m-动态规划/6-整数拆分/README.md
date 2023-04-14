## 343.整数拆分

给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

示例 1:

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
说明: 你可以假设 n 不小于 2 且不大于 58。

## 思路

是减一个还是减-2
m，m-1,1
还是
m， m-4,2,2
减的数量也不确定
dp[i]=i
dp[i]=Math.max(dp[i-1],dp[i-2]*2,dp[i-3]*3),或者(i-1)*1,(i-2)*2
dp[i]=Math.max((i-j)\*j)

1. 确定数组，以及下标

i 数，dp[i]最大乘积

2. 确定递推方程

```js
dp[i] = Math.max(dp[i], Math.max((i - j) * j, dp[i - j] * j));
```

3. 初始化
   dp[1]=1,dp[2]=2

4. 遍历顺序
   i,从 3 开始，j 从 1 开始，j<i-1

5. 模拟

```js
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n <= 1) return 0;
  let dp = new Array(n + 1).fill(0);
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), dp[i - j] * j);
    }
  }
  return dp[n];
};
```
