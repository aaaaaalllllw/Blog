// var longestPalindrome = function(s) {
 
//   let left=0
//   let res=0
//   let maxLeft=0,maxRight=0
//   for(let i=0;i<s.length;i++){
//     //不满足left++
//     if(!isPalidrome(s,left,i)){
//       left++
//     }
//    if(i-left+1>res){
//     maxLeft=left
//     maxRight=i
//    }
//   }
//   function isPalidrome(s, l, r) {
//     for (; l < r; l++, r--) {
//       if (s[l] != s[r]) return false;
//     }
//     return true;
//   }
//   return s.slice(maxLeft,maxLeft+1)
// };

//暴力解法
// var longestPalindrome = function(s) {
 
//   let maxLeft=0,maxLen=0
//   for(let i=0;i<s.length;i++){
//    for(let j=i+1;j<s.length;j++){
//     if(isPalidrome(s,i,j)&&(j-i+1)>maxLen){
//       maxLen=j-i+1
//       maxLeft=i
//     }
//    }
//   }
//   function isPalidrome(s, l, r) {
//     for (; l < r; l++, r--) {
//       if (s[l] != s[r]) return false;
//     }
//     return true;
//   }
//   return s.substring(maxLeft,maxLeft+maxLen)
// };


//中心拓展
var longestPalindrome = function(s) {
 
  if(s.length<=1) return s
  let maxLeft=0,maxLen=0,curLen=0
  for(let i=0;i<s.length-1;i++){
   let oddLen=expandAroundCenter(i,i)
   let evenLen=expandAroundCenter(i,i+1)
   curLen=Math.max(oddLen,evenLen)
   if(curLen>maxLen){
    maxLen=curLen
    maxLeft=i-Math.floor((maxLen-1)/2)
   }

  }
  function expandAroundCenter(left,right){
    let len=s.length
    while(left>=0&&right<len&&s.charAt(left)==s.charAt(right)){
     
        left--
        right++

      }
      return j-i-1
    }
  
  return s.substring(maxLeft,maxLeft+maxLen)
};
