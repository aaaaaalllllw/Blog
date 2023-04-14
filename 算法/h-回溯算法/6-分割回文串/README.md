## 131.回文串

- 组合问题：选取一个 a 后，在 bcdef 再去选取第二个，选取 b 之后在 cdef 中再选取第三个

- 切割问题:切割一个 a，在 bcdef 再去切割第二段，切割 b 之后在 cdef 切割第三段

![这是图片](./1.jpg)

## 回溯三部曲

- 递归函数参数

- 递归函数终止条件
  ![这是图片](1.jpg)

```js
function backtracing(s, startIndex) {
  //如果起始位置大于s的大小，说明找到了一组分割方案
  if (startIndex >= s.length) {
    result.push(path);
    return;
  }
}
```

- 单层遍历的逻辑

  1. 截取子串

  ```js
  path.push(s.slice(startIndex, i + 1));
  ```

  2. 判断是不是回文

  ```js
  const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }
    return true;
  };
  ```

## 代码

```js
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [],
    path = [],
    len = s.length;
  function backtracing(startIndex) {
    if (startIndex >= len) {
      res.push([...path]);
    }
    for (let i = startIndex; i < len; i++) {
      if (isPalidrome(s, startIndex, i)) {
        path.push(s.slice(startIndex, i + 1));
        backtracing(i + 1);
        path.pop();
      }
    }
  }

  function isPalidrome(s, l, r) {
    for (; l < r; l++, r--) {
      if (s[l] != s[r]) return false;
    }
    return true;
  }
  backtracing(0);
  return res;
};
```
