/**
 * 动态规划，下一次的结果，依赖上一次的结果
 * @param{array} arr
 */
function permutate(arr) {
    //第一次的结果就是二维数组的第0项
    let res = arr[0].slice()//当数组只有一项的时候
    
    //从数组第二项开始
    for (let i = 1; i < arr.length; i++){
        const pre = res.slice()//保存上一个
        res = [];//当前清空

        //pre当前的和arr[i]之前相加到一起
        pre.forEach(item => {
            arr[i].forEach(curr => {
                res.push(item+curr)
            })
        });
    }
    console.log(res)
    return res
}

console.log(permutate([['A','B'], ['a','b'], [1, 2]]))


