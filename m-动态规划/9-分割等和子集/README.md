## 416.分割等和子集

给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

注意: 每个数组中的元素不会超过 100 数组的大小不会超过 200

示例 1:

输入: [1, 5, 11, 5]
输出: true
解释: 数组可以分割成 [1, 5, 5] 和 [11].
示例 2:

输入: [1, 2, 3, 5]
输出: false
解释: 数组不能分割成两个元素和相等的子集.

## 思路

### 背包问题

**即一个商品如果可以重复多次放入是完全背包,而只能放入一次 01 背包，写法还是不一样的，要明确本题中使用是 01 背包，因为元素我们只能使用一次**

只有确定了如下四点，才能把 01 背包问题套到本题上

- 背包的体积为 sum/2
- 背包要放入的商品(集合里的元素)重量为元素的数值，价值为元素的数值
- 背包如果正好装满，说明找到总和为 sum/2 的子集
- 背包中每一个元素都是不可重复投放的

物品的 value 相加是否等于 sum/2,且背包的容量也是 target

动态规划五部曲如下

1. 确定 dp 数组以及下标的含义

**套本题，dp[j]表示背包总容量(能装的总重量)是 j，放入物品后，背的最大重量是 dp[j]**

2. 确定递推公式

01 背包的递推公式为：dp[j] = max(dp[j], dp[j - weight[i]] + value[i]);

本题，相当于背包里放入数值，那么物品 i 的重量是 nums[i]，其价值也是 nums[i]。

所以递推公式：dp[j] = max(dp[j], dp[j - nums[i]] + nums[i]);

3. 初始化都为 0

4. 遍历顺序，物品外层是正序遍历，容量里层是倒序遍历

```js
for (let i = 0; i < weight.lenght; i++) {
  for (let j = target; j >= nums[i]; j--) {
    dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
  }
}
```

5. 举例推导 dp 数组
   **dp[j]==j，说明集合中子集总和正好可以凑成总和 j,理解这一点很重要**

## 代码

```js
var canPartition = function (nums) {
  const sum = nums.reduce((p, v) => p + v);
  if (sum % 2 == 1) return false;
  let target = sum / 2;
  let dp = new Array(target + 1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j++) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  return dp[target] === target;
};
```
