//有序数组的平方，给数组平方之后再排序
//用双指针，平方之后，最大最小的位于数组两侧，用头尾指针进行交换
//如果是头指针较大，就交换，头指针++
//如果是尾指针较大，就交换，尾指针--
//循环条件是left<=right,等于是有意义因为要赋值

function sortedSquare(A) {
  let r = (k = A.length - 1),
    l = 0;
  let result = [];
  result.length = A.length;
  while (l <= r) {
    if (A[l] * A[l] > A[r] * A[r]) {
      result[k--] = A[l] * A[l];
      l++;
    } else {
      result[k--] = A[r] * A[r];
      r--;
    }
  }
  return result;
}

console.log(sortedSquare([-2, 0, 1]));
