## 494 目标和

给点一个非负整数数组,a1,a2,……an 和一个目标数 S。现在有两个符号+和-
对于数组中任意一个整数，都可以从+或-中选择一个符号加在前面

返回可以使最终数组和为目标数 S 的所有添加符号的方法数

示例

- 输入:nums:[1,1,1,1,1] ,S:3

解释:

- -1+1+1+1+1 = 3
- +1-1+1+1+1 = 3
- +1+1-1+1+1 = 3
- +1+1+1-1+1 = 3
- +1+1+1+1-1 = 3

一共有 5 种方法让最终目标和为 3

## 思路

既然为 target,那么就一定有 left 组合-right 组合=target
left+right=sum，而 sum 是固定的。right=sum-left
公式来了,left-(sum-left)=target 推导出 left=(targte+sum)/2
此时问头就是在集合 nums 找出和为 left 的组合

## 回溯算法

```js

```

## 动态规划

如何转化为 01 背包问题
假设加法的总和 x，那么减法对应的总和就是 sum-x
x-(sum-x)=target
x=(target+sum)/2
**此时问就转化为，装满容量为 x 的背包,有几种方法**

这里的 x，就是 bagSize，也就是我们后面要求的背包容量
(target+sum)/2 应该担心计算的过程向下取整有没有影响

```js
if ((s + Sum) % 2 == 1) return 0; //此时没有方案
```

如果 S 的绝对值已经大于 sum，那么也是没有方案的

```js
if (Math.abs(S) > sum) return 0; //此时没有方案
```

1. 确定 dp 数组以及下标的含义
   **dp[j]表示:填满 j 包括(j)这么大容积的包，dp[j]方法**

2. 确定递归公式
   例如：dp[j]，j 为 5，

已经有一个 1（nums[i]） 的话，有 dp[4]种方法 凑成 容量为 5 的背包。
已经有一个 2（nums[i]） 的话，有 dp[3]种方法 凑成 容量为 5 的背包。
已经有一个 3（nums[i]） 的话，有 dp[2]中方法 凑成 容量为 5 的背包
已经有一个 4（nums[i]） 的话，有 dp[1]中方法 凑成 容量为 5 的背包
已经有一个 5 （nums[i]）的话，有 dp[0]中方法 凑成 容量为 5 的背包

```js
dp[j] += dp[j - nums[i]];
```

3. dp 数组如何初始化
   如果数组[0] ，target = 0，那么 bagSize = (target + sum) / 2 = 0。 dp[0]也应该是 1， 也就是说给数组里的元素 0 前面无论放加法还是减法，都是 1 种方法。

所以本题我们应该初始化 dp[0] 为 1

4. 老样子

5. 举例推导 dp 数组
   输入：nums: [1, 1, 1, 1, 1], S: 3

bagSize = (S + sum) / 2 = (3 + 5) / 2 = 4

![这是图片](./1.jpg)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum = nums.reduce((p, v) => p + v);
  if (Math.abs(target) > sum) return 0;
  if ((sum + target) % 2 == 1) return 0;
  let bagSize = (sum + target) / 2;
  let dp = new Array(bagSize + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[bagSize];
};
```

## 一般递推公式

**dp[j] += dp[j - nums[i]]**
