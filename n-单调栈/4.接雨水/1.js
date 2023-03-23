// var trap = function (height) {
//   let sum = 0;
//   for (let i = 0; i < height.length; i++) {
//     if (i == 0 || i == height.length - 1) continue;
//     let rHeight = height[i]; //记录右边柱子的最高
//     let lHeight = height[i]; //记录左边柱子的最高
//     for (let j = i + 1; j < height.length; j++) {
//       if (height[j] > rHeight) rHeight = height[j];
//     }
//     for (let r = i - 1; r >= 0; r--) {
//       if (height[r] > lHeight) lHeight = height[r];
//     }
//     let h = Math.min(rHeight, lHeight) - height[i];
//     if (h > 0) sum += h;
//   }
//   return sum;
// };

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

var trap = function (height) {
  if (height.length <= 2) return 0;
  let maxLeft = new Array(height.length).fill(0);
  let maxRight = new Array(height.length).fill(0);
  let size = height.length;
  //记录每个柱子左边柱子最大高度
  maxLeft[0] = height[0];
  for (let i = 0; i < size; i++) {
    maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
  }
  maxRight[size - 1] = height[size - 1];
  for (let i = size - 2; i >= 0; i--) {
    maxRight[i] = Math.max(height[i], maxRight[i + 1]);
  }
  let sum = 0;
  for (let i = 0; i < size; i++) {
    let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
    if (count > 0) sum += count;
  }
  return sum;
};
