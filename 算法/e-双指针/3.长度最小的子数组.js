//长度最小的子数组
//给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0
//滑动窗口，吞吐量，i正常遍历数组，头尾指针控制窗口大小
//初始先设置数组长度为一个极大值，l=i，r=nums.length-1
//开始，如果[l,r]加的>val,就尾指针--，吐一个
//如果[l,r]加的<val,就头指针++
//如果相等就记录现在长度，如果长度<初始的极大值，就赋值

function minSubArrayLen(s, nums) {
  let result = Infinity; //返回的长度
  let sum = 0; //滑动窗口之和
  let i = 0; //头指针
  let j = 0; //尾指针
  let subLength = 0; //暂存滑动窗口的大小
  for (; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= s) {
      subLength = j - i + 1;
      result = result < subLength ? subLength : result;
      sum -= nums[i++];
    }
  }
  return (result = result == Infinity ? 0 : result);
}
