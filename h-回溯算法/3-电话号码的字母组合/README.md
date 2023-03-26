## 17.电话号码的字母组合

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

![这是图片](./1.png)

- 输入:'23'
- 输出:["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

## 思路

### 数字和字母映射

```js
const letterMap[10]=[
  "", // 0
    "", // 1
    "abc", // 2
    "def", // 3
    "ghi", // 4
    "jkl", // 5
    "mno", // 6
    "pqrs", // 7
    "tuv", // 8
    "wxyz", // 9
]

```

![这是图片](./2.png)

### 确定回溯三部曲

1. 确定回溯函数参数
   首先需要一个字符串 s 来收集叶子节点的结果，然后用一个字符串数组 result 保存起来，这两个变量我依然定义为全局。

digits 输入数字数组，index 深度

2. 确定终止条件

如果 index 等于数字个数就返回

```js
if (index == digits.length) {
  res.push(s);
  return;
}
```

3. 确定单层遍历逻辑

```js
let digit = digit[index];
let letters = letterMap[digit];
for (let i = 0; i < letters.length; i++) {
  s.push(letters[i]);
  backtracing(digits, index);
  s.push();
}
```

## 代码

```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const k = digits.length;
  const map = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  if (!k) return [];
  if (k === 1) return map[digits].split("");
  let path = [],
    res = [];

  function backtracing(digits, n) {
    if (path.length == digits.length) {
      res.push(path.join(""));
      return;
    }
    let digit = digits[n];
    let letter = map[digit];
    for (let i of letter) {
      path.push(i);
      backtracing(digits, n + 1);
      path.pop();
    }
  }
  backtracing(digits, 0);
  return res;
};
```
