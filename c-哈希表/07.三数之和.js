//三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
// 注意： 答案中不可以包含重复的三元组。
// 示例：
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
//三个指针，一个指针正常遍历元素i，头指针从i+1开始，尾指针从length-1开始
//终止条件while(left<right) if=0,就加进去,>0 right--;<0 left++
//坑就是nums[i-1]==nums[i]
function threeSum(nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return result;
    }
    // 正确去重a方法
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] > 0) right--;
      else if (nums[i] + nums[left] + nums[right] < 0) left++;
      else {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;
        right--;
        left++;
      }
    }
  }
  return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
