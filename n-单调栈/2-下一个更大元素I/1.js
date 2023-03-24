function nextGreaterELement(nums1, nums2) {
  let st = []; //nums2的栈
  let map = new Map(); //num1的映射
  let len1 = nums1.length,
    len2 = nums2.length;
  let res = new Array(len1).fill(-1);
  for (let i = 0; i < len1; i++) {
    // map[nums1[i]] = i;
    map.set(nums1[i], i);
  }
  st.push(0); //nums2压入第一个
  let top = st.length - 1; //栈顶元素
  for (let i = 1; i < len2; i++) {
    if (nums2[i] <= nums2[st[top]]) {
      st.push(i);
      top = st.length - 1;
    } else {
      //找到右边第一个大的元素
      while (st.length && nums2[i] > nums2[st[top]]) {
        // console.log(map.has(nums2[st[top]]));
        if (map.has(nums2[st[top]])) {
          //nums1有nums2数值映射
          let index = map.get(nums2[st[top]]);
          res[index] = nums2[i];
        }
        st.pop();
        top = st.length - 1;
      }
      st.push(i);
      top = st.length - 1;
    }
  }
  return res;
}

console.log(nextGreaterELement([1, 2], [1, 2, 3]));
