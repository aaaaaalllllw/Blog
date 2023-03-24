## 下一个更大元素

nums1 是 nums2 的子集，遍历 nums1,然后再去 nums2 找到合适的位置，从位置右边找下一个
第一个数组的位置还要从第二个数组里面找

示例 1:
输入:nums1=[4,1,2],nums2=[1,3,4,2]
输出:[-1,3,-1]

## 思路

**注意题目中说是两个没有重复元素的数组 nums1 和 nums2**
没有重复元素，我们就可以用 map 来做映射，根据数值快速找到下标，还可以判断 nums2[i]是否在
nums1 中出现过
**遍历 nums1 短的做映射**

**单调递增栈**

### 分析

1. 情况一：当前遍历的元素 T[i]小于栈顶元素 T[st.top()]的情况
   此时满足递增栈(栈头到栈底的顺序)，所以直接入栈
2. 情况二：当前遍历的元素 T[i]等于栈顶元素 T[st.top()]的情况
   如果相等的话，已让直接入栈
3. 情况三：当前遍历的元素 T[i]大于栈顶元素 T[st.top()]的情况
   此时不满足递增栈，**这也是找到右边第一个比自己大的元素的时候**
   判断栈顶元素是否在 nums1 里出现过，(注意栈里元素是 nums2 的元素)，如果出现过，开始记录结果

   ```js
   while (st.length && nums2[i] > nums2[st.top()]) {
     if (看map是否存在这个元素) {
       //根据map找到nums2数值找到在nums1的位置
       //给 res赋值
     }
     //弹出
   }
   //压入
   ```

## 代码

```js
function nextGreaterELement(nums1, nums2) {
  let st = []; //nums2的栈
  let map = new Map(); //num1的映射
  let len1 = nums1.length,
    len2 = nums2.length;
  let res = new Array(len1).fill(-1);
  for (let i = 0; i < len1; i++) {
    // map[nums1[i]] = i;
    map.set(nums1[i], i);
  }
  st.push(0); //nums2压入第一个
  let top = st.length - 1; //栈顶元素
  for (let i = 1; i < len2; i++) {
    if (nums2[i] <= nums2[st[top]]) {
      st.push(i);
      top = st.length - 1;
    } else {
      //找到右边第一个大的元素
      while (st.length && nums2[i] > nums2[st[top]]) {
        // console.log(map.has(nums2[st[top]]));
        if (map.has(nums2[st[top]])) {
          //nums1有nums2数值映射
          let index = map.get(nums2[st[top]]);
          res[index] = nums2[i];
        }
        st.pop();
        top = st.length - 1;
      }
      st.push(i);
      top = st.length - 1;
    }
  }
  return res;
}

console.log(nextGreaterELement([1, 2], [1, 2, 3]));
```
