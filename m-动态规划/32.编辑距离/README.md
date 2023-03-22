## 编辑距离（不需要考虑别只需要考虑操作数,管它增删改)

给你两个单词 word1 和 word2,请计算 word1 转换成 word2 所使用最少操作数

可以对一个单词进行

- 插入一个字符
- 删除一个字符
- 替换一个字符

实例 1：输入 word1="horse",word2="ros"
解释： horse -> rorse (将 'h' q 替换为 'r') rorse -> rose (删除 'r') rose -> ros (删除 'e')

## 思路

1. 确定 dp[i][j],word1 转化为 word2 最少操作数

2. 确定递推方程

- 如果(word1[i-1]==word2[j-1])不做操作 dp[i][j]=dp[i-1][j-1]

- 如果不相等
  - wordl 删除,dp[i-1][j]+1
  - word1 增加，word1 删除，把 word1 和 word2 调换一下，本来是 word1 要增加，现在变得 word2 要删除操作是一样，dp[i][j-1]+1
  - word1 替换，dp[i-1][j-1]+1
    Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+1)

3. 初始
   i=0，word1 长度为 0，dp[0][j]=j
   j=0,word2 长度为 0，dp[i][0]=i

4.从上到下，从左到右

5.

## 代码

```js
var minDistance = function (word1, word2) {
  let len1 = word1.length,
    len2 = word2.length;
  let dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
  for (let i = 0; i <= len1; i++) dp[i][0] = i;
  for (let j = 0; j <= len2; j++) dp[0][j] = j;
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }
  return dp[len1][len2];
};
```
