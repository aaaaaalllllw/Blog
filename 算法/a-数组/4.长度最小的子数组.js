// 输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

//暴力解法就是两层遍历
//第一层循环，在遍历元素
//第二层是在找区间，找到之后记录最小的区间一旦找到超过s就可以赋值result比较，跳出这层循环，首先可以让result等于一个极大值

// let s = 7,
//   nums = [2, 3, 1, 2, 4, 3];
// function miniSubArrayLen(s, nums) {
//   let result = Infinity;
//   let sum = 0; //数值之和
//   let subLength = 0; //子数组长度
//   for (let i = 0; i < nums.length; i++) {
//     sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum >= s) {
//         subLength = j - i + 1;
//         result = result > subLength ? subLength : result;
//         break;
//       }
//     }
//   }
//   return result === Infinity ? 0 : result;
// }
// console.log(miniSubArrayLen(s, nums));

//滑动窗口，也是双指针
/*窗口内是什么？
如何移动窗口的起始位置？
如何移动窗口的结束位置？
窗口就是 满足其和 ≥ s 的长度最小的 连续 子数组。

窗口的起始位置如何移动：如果当前窗口的值大于s了，窗口就要向前移动了（也就是该缩小了）。

窗口的结束位置如何移动：窗口的结束位置就是遍历数组的指针，也就是for循环里的索引。*/
//移动后面j，吐出前面的i，i-j区间就是滑动窗口

let s = 7,
  nums = [2, 3, 1, 2, 4, 3];
function miniSubArrayLen(s, nums) {
  let result = Infinity;
  let sum = 0;
  let subLength = 0;
  let i = 0; //窗口的起始位置
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= s) {
      subLength = j - i + 1;
      result = result > subLength ? subLength : result;
      sum -= nums[i++];
    }
  }
  console.log(nums.splice(i - 1, result));
  return result == Infinity ? 0 : result;
}
console.log(miniSubArrayLen(s, nums));
