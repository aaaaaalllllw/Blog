## 完全背包

有 N 件物品和一个最多能背重量为 W 的背包。第 i 件物品的重量是 weight[i]，得到的价值是 value[i] 。每件物品都有无限个（也就是可以放入背包多次），求解将哪些物品装入背包里物品价值总和最大。

**完全背包和 01 背包问题唯一不同的地方就是，每种物品有无限件**

首先回顾下 01 背包的核心代码

背包容量的逆序遍历

```js
for (let i = 0; i < weight.length; i++) {
  for (let j = bagWeight; j >= weight[i]; j--) {
    //遍历背包容量
    dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
  }
}
```

完全背包是可以添加多次，所以要从小到大去遍历

```js
for (let i = 0; i < weight.length; i++) {
  for (let j = weight[i]; j <= bagWeight; j++) {
    dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
  }
}
```

```js
// 先遍历物品，再遍历背包容量
function test_completePack1() {
  let weight = [1, 3, 5];
  let value = [15, 20, 30];
  let bagWeight = 4;
  let dp = new Array(bagWeight + 1).fill(0);
  for (let i = 0; i <= weight.length; i++) {
    for (let j = weight[i]; j <= bagWeight; j++) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  console.log(dp);
}

// 先遍历背包容量，再遍历物品
function test_completePack2() {
  let weight = [1, 3, 5];
  let value = [15, 20, 30];
  let bagWeight = 4;
  let dp = new Array(bagWeight + 1).fill(0);
  for (let j = 0; j <= bagWeight; j++) {
    for (let i = 0; i < weight.length; i++) {
      if (j >= weight[i]) {
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
      }
    }
  }
  console.log(2, dp);
}
```
