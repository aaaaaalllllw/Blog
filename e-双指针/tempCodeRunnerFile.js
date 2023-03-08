function sortedSquare(A) {
  let r = (k = A.length - 1),
    l = 0;
  let result = [];
  result.length = A.length;
  while (l < r) {
    if (A[l] * A[l] > A[r] * A[r]) {
      result[k--] = A[l] * A[l];
      l++;
    } else {
      result[k--] = A[r] * A[r];
    }
  }
  return result;
}

console.log(sortedSquare([-2, 0, 1]));