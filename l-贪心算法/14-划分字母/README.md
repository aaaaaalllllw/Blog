## 763.划分字母区间

字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

示例：

输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8] 解释： 划分结果为 "ababcbaca", "defegde", "hijhklij"。 每个字母最多出现在一个片段中。 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
提示：

S 的长度在[1, 500]之间。
S 只包含小写字母 'a' 到 'z' 。

## 思路

**找到每个字母的边界,如果当前索引等于字母边界就是分割点**

- 统计每一个字符最后出现的位置
- 从头遍历字符，并更新字符的最远出现的下标,如果找到字符最远出现位置下标和当前下标相等，
  则找到分割点

![这是图片](./1.png)

```js
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  //记录每个相同字符最后出现的位置
  let hash = {},
    res = [];
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }
  let left = 0; //区间左边距
  let right = 0; //区间的右边距
  for (let i = 0; i < s.length; i++) {
    //直接瞬移到左边界
    right = Math.max(right, hash[s[i]]);
    if (right == i) {
      res.push(right - left + 1);
      left = right + 1;
    }
  }
  return res;
};
```
