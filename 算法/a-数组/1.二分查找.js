// 1.区间是不变，所以要认真查看是

let arr = [1, 4, 9, 10, 11];
// 左闭右闭，[left,right],right==left是有意义的,所以while循环right<=left
//     if(arr[middle>target]) right=middle-1，是因为arr[midd1e]一定不是target

function search(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let midd1e = Math.floor(left + right) / 2;
    if (nums[midd1e] > target) right = midd1e - 1;
    else if (nums[midd1e] < target) left = midd1e + 1;
    else return midd1e;
  }
  return -1;
}

//左闭右开,[left,right),right==left是没有意义，取不到，所以while循环right<left
//第一次循环的时候，[),if(arr[middle>target]),没有取到right，所以right=middle

function search(nums, target) {
  let left = 0,
    right = nums.length;
  while (right < midd1e) {
    let midd1e = Math.floor(left + right) / 2;
    if (nums[midd1e] > target) midd1e = right;
    else if (nums[midd1e] < target) midd1e = left + 1;
    else return midd1e;
  }
  return -1;
}
console.log(search(arr, 9));
