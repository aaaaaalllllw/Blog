## 941.有效的山脉数组


保证左侧和右侧单调递增

![这是图片](./1.png)


如果left==right说明是山脉


```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length<3) return false
let left=0;right=arr.length-1
while(left<arr.length-1&&arr[left]<arr[left+1]) left++
while(right>=0&&arr[right-1]>arr[right])right--
if(right==left&&left!=0&&right!==arr.length-1){
    return true
}
return false
};
```