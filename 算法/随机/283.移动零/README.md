## 283.移动零

给定一个数组nums,编写一个函数将所有0移动到数组的末尾，
同时保持非零的相对状态

示例:
输入:[0,1,0,3,12]输出:[1,3,12,0,0]说明
必须在原数组操作，不能拷贝额外的数组。尽量减少操作次数


## 思路

slowIndex碰到0，才会让fastIndex覆盖0
**相当于对整个数组移除元素0，然后slowIndex之后都是移除0的冗余元素,
把这些元素赋值为0就行**
![这是图片](./283.%E7%A7%BB%E5%8A%A8%E9%9B%B6.gif)

遇到0，slow之后都会把fast覆盖上去，多余的slow最后全是0
```js
function moveZeros(nums){
    //fast，slow，多余slow后面直接赋值为0
    let fast=slow=0
    for(;fast<nums.length;fast++){
        if(nums[fast]!=0){
            nums[slow++]=nums[fast]
            console.log(nums)
        }
    }
    while(slow<nums.length){
        nums[slow++]=0
    }
    return nums
}
```