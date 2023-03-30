var maxArea = function(height) {
   
  if(height.length<=1) return 0;
  //发散从中间发散，找到左边最高，找到右边最高，取较小乘以距离
  let maxLeft=new Array(height.length).map(()=>Array(2).fill(0))
  maxLeft[0]=[0,height[0]]
  for(let i=1;i<height.length;i++){
      let pos=maxLeft[i-1][1]>height[i]?i-1:i
      maxLeft[i]=[pos,Math.max(maxLeft[i-1][1],height[i])]
     // console.log(maxLeft[i])
  }

  let maxRight=new Array(height.length).map(()=>[0,0])
  maxRight[height.length-1]=[height.length-1,height[height.length-1]]
  for(let j=height.length-2;j>=0;j--){
    let pos=maxRight[j+1][1]>height[j]?j-1:j
      maxRight[j]=[pos,Math.max(height[j],maxRight[j+1][1])]
  }
  // console.log(maxLeft)
  // console.log(maxRight)
  let res=0
  for(let i=0;i<height.length;i++){
    // console.log( maxRight[i][0])
    // console.log( maxLeft[i][0])
    // console.log(maxRight[i][0]-maxLeft[i][0])
    // console.log(maxRight[i][0]-maxLeft[i][0])
      let h=Math.min(maxLeft[i][1],maxRight[i][1])*(maxRight[i][0]-maxLeft[i][0])
      // console.log(h)
      if(h>res){
          res=h
      }
  }
  return res
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]))