// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
//就是把target-Map[i],看看里面有没有

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let tmp = map.get(target - nums[i]);
    if (tmp != undefined) {
      return [i, tmp];
    }
    map.set(nums[i], i);
  }
  return [];
}
