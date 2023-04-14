## 474.一和零

给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。

如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

示例 1：

输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3

输出：4

解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。

示例 2：

输入：strs = ["10", "0", "1"], m = 1, n = 1
输出：2
解释：最大的子集是 {"0", "1"} ，所以答案是 2 。

## 思路

**本题中 strs 数组里的元素就是物品，每个物品都是一个**
**而 m 和 n 相当于是一个背包，两个维度的背包**

只不过这个背包有两个维度，一个是 m 一个是 n，而不同长度的字符串就是不同大小的待装物品。

1. 确定 dp 数组以及下标的含义
   dp[i][j]:最多 i 个 0 和 j 个 1 的 strs 的最大子集的大小为 dp[i][j]

2. 确定递推公式
   dp[i][j]可以前一个 strs 里的字符串推导出来，strs 的字符串里面有 zeroNum，oneNum
   dp[i][j] 就可以是 dp[i - zeroNum][j - onenum] + 1。

然后我们在遍历的过程中，取 dp[i][j]的最大值。

所以递推公式：dp[i][j] = max(dp[i][j], dp[i - zeroNum][j - onenum] + 1);
//+1 说明取这个子集

3. dp 数组如何初始化，01 背包初始为 0 就行

4. 三层遍历，第一次层遍历字符串数组，第二层遍历 0 的背包容量，第二层遍历 1 的背包容量

5.

## 代码

```js
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  let dp = new Array(m + 1).fill(0).map((item) => new Array(n + 1).fill(0));
  for (str of strs) {
    let oneNum = 0,
      zeroNum = 0;
    for (s of str) {
      if (s == "0") zeroNum++;
      else oneNum++;
    }
    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
      }
    }
  }
  return dp[m][n];
};
```
