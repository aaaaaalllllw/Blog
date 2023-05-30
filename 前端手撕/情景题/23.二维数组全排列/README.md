# 第1题：不定长二维数组的全排列

给定任意二维数组，输出所有的排列组合项

比如[['A','B'],['a','b'],[1,2]],输出['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2']


```js

function premutate(arr){
    //记录第一次结果
    let res=arr[0].slice()
    for(let i=1;i<arr.length;i++){
        const pre=res.slice();
        res=[];
        pre.forEach((item)=>{
            arr.forEach((cur)=>{
                res.push(item+cur)
            })
        })
    }
    return res
}
```

采用动态规划的方式，下一次的结果，依赖上一次的结果。比如第一次的结果是 ['A', 'B'],下一个增加了 ['a', 'b'] 就可以在上一次的基础上变为 ['Aa', 'Ab', 'Ba', 'Bb']，依次类推