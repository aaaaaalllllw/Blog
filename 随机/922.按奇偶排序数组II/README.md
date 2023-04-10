## 按奇偶排序II

给定一个非负数组A，A中一半整数是奇数，一半整数是偶数
对数组进行排序，以便当A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

你可以返回任何满足上述条件的数组作为答案。

## 思路

1. 两个数组even是偶数，odd是奇数数组，两个轮番赋值给新的数组
  - 先分为奇数数组、偶数数组
  - 遍历偶数or奇数数组的任意长度，一个遍历res要赋值两次先偶数再奇数
```js
function sortArrayByParityII(A){
  let even=new Array(A.length/2)
  let odd=new Array(A.length/2)
  let res=[]
  let evenIndex=0,oddIndex=0,resultIndex=0
  for(let i=0;i<A.length;i++){
    if(A[i]%2==0) even[evenIndex++]=A[i]
    else odd[oddIndex++]=A[i]
  }
  for(let i=0;i<even.length;i++){
    res[resultIndex++]=even[i]
    res[resultIndex++]=odd[i]
  }
  return res
}
```

2. 不借用辅助数组，偶数+2，奇数+2实现跳级


