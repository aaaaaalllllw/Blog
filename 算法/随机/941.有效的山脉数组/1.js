/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if(arr.length<3) return false
let left=0;right=arr.length-1
while(left<arr.length-1&&arr[left]<arr[left+1]) left++
while(right>=0&&arr[right-1]>arr[right])right--
if(right==left&&left!=0&&right!==arr.length-1){
  return true
}
return false
};