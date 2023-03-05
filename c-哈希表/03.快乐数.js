//快乐数
// 输入：19
// 输出：true
// 解释：
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

//每个都要把每个数据地每个位置割离出来，返回这个数组
//算平方知道sum==1，但是如果进入死循环就retunr false

function isHappy(n) {
  function getSum(n) {
    let sum = 0;
    let arry = [];
    while (n) {
      arry.push(n % 10);
      n = Math.floor(n / 10);
    }
    arry.forEach((item) => {
      sum += item * item;
    });
    return sum;
  }
  let sumArray = [];
  while (true) {
    let sum = getSum(n);
    if (sum == 1) {
      return true;
    }
    if (sumArray.includes(sum)) {
      return false;
    }
    sumArray.push(sum);
    n = sum;
  }
}
isHappy(100);
