##

## 每日温度

请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

## 思路

**更直白来说，就是用一个栈来记录我们遍历过的元素**

1. 单调栈里存放的元素是什么?
   单调栈里面需要存放元素的下标 i，如果需要使用对应的元素，直接 T[i]就可以直接获取

2. 单调栈是递增呢?还是递减？
   - 当前遍历的元素 T[i]小于栈顶元素 T[st.top()]的情况
   - 当前遍历元素 T[i]等于栈顶元素 T[st.top()]的情况
   - 当前遍历的元素 T[i]大于栈顶元素 T[st.top()]的情况

T[i]大于栈顶元素
st 弹出，res 要记录值
![这是图片](./1.jpg)

T[i]小于等于栈顶元素，加入 st
![这是图片](./2.jpg)

找一个较大值，就需要不停地比较弹栈
st，res 需要不断赋值

```js
/**
 * @param {number[]} temperaures
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let len = T.length;
  let res = new Array(len).fill(0);
  let st = [];
  st.push(0);
  for (let i = 1; i < len; i++) {
    if (T[i] <= T[st[st.length - 1]]) {
      st.push(i);
    } else {
      while (st.length && T[i] > T[st[st.length - 1]]) {
        res[st[st.length - 1]] = i - st[st.length - 1];
        st.pop();
      }
      st.push(i);
    }
  }
  return res;
};
```
