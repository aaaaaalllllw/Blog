//四数相加，给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0
/**
 输入:

A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]
输出:2
两个元组如下:

1.(0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2.(1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
 */
//记录A，B两个数组相加的结果和次数用map记录
//当C,D两层遍历找到，是否有0-(A+B)==0,如果有count++
function fourSumCount(A, B, C, D) {
  let map = new Map();
  A.forEach((a) => {
    B.forEach((b) => {
      map[a + b] = map[a + b] ? map[a + b] + 1 : 1;
    });
  });
  let count = 0;
  C.forEach((c) => {
    D.forEach((d) => {
      if (map[0 - c - d]) {
        count += map[0 - c - d];
      }
    });
  });
  return count;
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
