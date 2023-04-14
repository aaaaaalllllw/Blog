function moveZeros(nums){
    //fast，slow，多余slow后面直接赋值为0
    let fast=slow=0
    for(;fast<nums.length;fast++){
        if(nums[fast]!=0){
            nums[slow++]=nums[fast]
            console.log(nums)
        }
    }
    while(slow<nums.length){
        nums[slow++]=0
    }
    return nums
}