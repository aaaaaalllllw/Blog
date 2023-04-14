function searchInsert(nums,target){
  let n=nums.length

  let left=0,right=n-1
  if(target<=nums[0]) return 0
  while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(nums[mid]>target){
     right=mid-1
    }else if(nums[mid]<target){
      left=mid+1
    }else{
      return mid
    }
  }
  //分别如下四种情况
  //1. target在所有数组元素之前return 0
  //2. target==数组某个元素 return mid
  //3. target位于数值[left,right]中间，[1,4,6]
      //要放个5此时left==2,right==1 return right+1

  //4 .target大于所有数组元素，return right+1
  return right+1
}