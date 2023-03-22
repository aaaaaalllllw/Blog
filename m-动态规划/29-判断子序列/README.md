## 392.判断子序列

给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例 1： 输入：s = "abc", t = "ahbgdc" 输出：true

示例 2： 输入：s = "axc", t = "ahbgdc" 输出：false

## 动态规划

1. 确定 dp 数组(dp table)以及下标的含义

**dp[i][j]表示下标 i-1 为结尾的字符串 s，和下标 j-1 为结尾的字符串 t，相同子序列的长度为 dp[i][j]**

2. 确定递推公式

- if(s[i-1]==t[i-1]) 当前匹配
  dp[i][j]=dp[i-1][j-1]+1
- if(s[i-1]!==t[j-1]) 当前不匹配\
  回退到的 j-1,dp[i][j]=dp[i][j-1]

3. dp 数组如何初始化

从递推公式可以看出 dp[i][j]都是依赖于 dp[i-1][j-1]和 dp[i][j-1],所以 dp[0][0]和 dp[i][0]一定要初始化
![这是图片](./1.png)

4. 确定遍历顺序
   从左到右

5. 举例
   ![这是图片](1.jpg)

## 代码

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let dp = new Array(s.length + 1)
    .fill(0)
    .map(() => new Array(t.length + 1).fill(0));
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = 1; j < t.length + 1; j++) {
      if (s[i - 1] == t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  if (dp[s.length][t.length] == s.length) return true;
  else return false;
};
```
