## 62.不同路径

3,7
一个数组
[
[0,0],[0,1],[0,2]
]
上面有几条路径，左有几条路径相加
dp[[2,6]]=dp[[1,6]]+dp[[2,5]]

## 碎碎念

1. 确定数组，以及下标含义

能到二维数组的路径

2. 确定递推公式

dp[[i,j]]=dp[[i-1,j]]+dp[[i,j-1]]

3. 如何初始化

```js
for (int i = 0; i < m; i++) dp[i][0] = 1;
for (int j = 0; j < n; j++) dp[0][j] = 1;
```

4. 确定遍历顺序

先横向在纵向

5. 模拟

## 代码

```js
function uniquePaths(m, n) {
  let dp = new Array(m).fill().map((item) => Array(n));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
```
