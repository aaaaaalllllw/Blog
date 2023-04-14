var permuteUnique = function (nums) {
  let res = [],
    path = [];
  nums.sort();
  let used = new Array(nums.length).fill(false);
  function backtracing(used) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i - 1] == nums[i] && !used[i - 1]) {
        continue;
      }
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        backtracing(used);
        used[i] = false;
        path.pop();
      }
    }
  }
  backtracing(used);
  return res;
};

console.log(permuteUnique([1, 1, 2]));
