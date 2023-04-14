## 925.长按键入

你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

示例 1:

- 输入:name="alex",typed="aaleex"
- 输出:true
- 解释：'alex' 中的 'a' 和 'e' 被长按

示例 2:

- 输入：name = "saeed", typed = "ssaaedd"
- 输出：false
- 解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。

## 思路是两个数组进行比较

- 如果 name[i]==typed[j],i++,j++
- 如果不相等
  - 如果 j==0 return false
  - 如果不是第一位，type[j]==type[j++],跨过重复项
    - 比较 name[i],type[j]相同继续比较，不相同 return false
- 没有遍历完
  - name 没有遍历完 return false
  - type 没有遍历完，如果是最后一项重复 return ture ，不是 return false

**type[j+1]==type[j],type[j-1]==type[j]**为啥不行，调试过了好像 console.log(isLongPressedName("alex", "aaleexa"));过不去，j 多加了一个

```js
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
	let i = (j = 0);
	for (; i < name.length, j < typed.length; ) {
		if (name[i] == typed[j]) {
			i++;
			j++;
		} else {
			if (j == 0) return false;
			else {
				while (j < typed.length && typed[j] == typed[j + 1]) {
					j++;
				}
				j++;
				if (name[i] == typed[j]) {
					j++;
					i++;
				} else {
					return false;
				}
			}
		}
	}
	if (i < name.length) {
		return false;
	}
	while (j < typed.length) {
		if (typed[j + 1] == typed[j]) j++;
		else return false;
	}
	return true;
};

console.log(isLongPressedName("alex", "aaleexa"));
```

**正确**

```js
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
	let i = (j = 0);
	for (; i < name.length, j < typed.length; ) {
		if (name[i] == typed[j]) {
			i++;
			j++;
		} else {
			if (j == 0) return false;
			else {
				while (j < typed.length && typed[j] == typed[j - 1]) {
					j++;
				}
				if (name[i] == typed[j]) {
					j++;
					i++;
				} else {
					return false;
				}
			}
		}
	}
	if (i < name.length) {
		return false;
	}
	while (j < typed.length) {
		if (typed[j - 1] == typed[j]) j++;
		else return false;
	}
	return true;
};
```
