//寻找数组合集本质还是indexOf,从较短里面遍历，找到重合地
function insertsection(nums1, nums2) {
  if (nums1.length < nums2.length) {
    let _ = nums1;
    nums1 = nums2;
    nums2 = _;
  }
  let num1Set = new Set(nums1);
  let resultSet = new Set();

  for (let i = 0; i < nums2.length; i++) {
    num1Set.has(nums2[i]) && resultSet.add(nums2[i]);
  }
  return Array.from(resultSet);
}
