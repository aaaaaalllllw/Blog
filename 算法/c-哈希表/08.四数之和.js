// 就是三数之和再加一层循环
function fourSum(nums) {
  const len = nums.length;
  if (len < 4) return [];
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < len - 3; i++) {
    // 去重i
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < len - 2; j++) {
      // 去重j
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let l = j + 1,
        r = len - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum < target) {
          l++;
          continue;
        }
        if (sum > target) {
          r--;
          continue;
        }
        res.push([nums[i], nums[j], nums[l], nums[r]]);

        // 对nums[left]和nums[right]去重
        while (l < r && nums[l] === nums[++l]);
        while (l < r && nums[r] === nums[--r]);
      }
    }
  }
  return res;
}
