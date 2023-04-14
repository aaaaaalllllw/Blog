//螺旋矩阵

//n如果是奇数层，中间就要嵌入一个数据;如果是偶数层，中间还是螺旋矩阵
//loop循环层数=Math.floor(n/2),n%2==1，嵌入数据，n%2==0，再循环

//画边的时候，每条区间都要明确，左闭右开，n=3，就只能画2两个格子
//从左往右就是x不变，j++，要小于边的长度
//从上到下，j初始等于上次画j的长度，i++,小于边的长度
//从右到左，i初始等于上次画的长度，j--，大于初始位置
//从下到上，j初始等于上画的长度，i--，大于初始值
//如果进循环，startX+1，startY+1，边+1，开始循环

//奇数的话中间再放一个值

function generateMatrix(n) {
  let result = Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));
  let loop = Math.floor(n / 2); //循环次数
  let startX = 0,
    startY = 0; //开始位置
  let mid = Math.floor(n / 2); //中间位置
  let count = 1; //赋值
  let offset = 1; //收缩边长
  while (loop--) {
    let i = startX,
      j = startY;
    for (j = startY; j < n - offset; j++) {
      result[i][j] = count++;
    }
    for (; i < n - offset; i++) {
      result[i][j] = count++;
    }
    for (; j > startY; j--) {
      result[i][j] = count++;
    }
    for (; i > startX; i--) {
      result[i][j] = count++;
    }
    startX++;
    startY++;
    offset++;
  }
  if (n % 2 == 1) {
    result[mid][mid] = count++;
  }
  return result;
}

console.log(generateMatrix(4));
