##

## 844.比较含退格的字符串

给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，
如果两者相等，返回 true 。# 代表退格字符。

示例

> 输入：s="ab#c",t="ad#c"
>
> 输出：true
>
> s 和 t 都会变成"ac"

> 输入：s = "ab##", t = "c#d#"
>
> 输出：true
>
> 解释：s 和 t 都会变成 ""。

## 思路

1. 利用栈的思维，遍历字符串遇到#就要弹栈，不是就正常压栈

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
	//加上去，如果遇到#就栈就pop
	let sr = (tr = "");
	for (let str of s) {
		if (str != "#") sr += str;
		else if (sr.length) {
			sr = sr.slice(0, -1);
		}
	}
	for (let str of t) {
		if (str != "#") tr += str;
		else if (tr.length) {
			tr = tr.slice(0, -1);
		}
	}
	return sr == tr ? true : false;
};
```

2.
