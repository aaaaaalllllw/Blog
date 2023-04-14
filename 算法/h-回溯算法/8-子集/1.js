var subsets = function (nums) {
  let res = [],
    path = [];
  function backtracing(startIndex) {
    res.push([...path]);
    if (startIndex >= nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracing(i + 1);
      path.pop();
    }
  }
  backtracing(0);
  return res;
};

console.log(subsets([1, 2, 3]));
