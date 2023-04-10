// function sortArrayByParityII(A){
//   let even=new Array(A.length/2)
//   let odd=new Array(A.length/2)
//   let res=[]
//   let evenIndex=0,oddIndex=0,resultIndex=0
//   for(let i=0;i<A.length;i++){
//     if(A[i]%2==0) even[evenIndex++]=A[i]
//     else odd[oddIndex++]=A[i]
//   }
//   for(let i=0;i<even.length;i++){
//     res[resultIndex++]=even[i]
//     res[resultIndex++]=odd[i]
//   }
//   return res
// }


function sortArrayByParityII(A){
  let evenIndex=0,oddIndex=1
  let res=new Array(A.lenght)
  for(let i=0;i<A.length;i++){
    if(A[i]%2==0){
      res[evenIndex]=A[i]
      evenIndex+=2
    }else{
      res[oddIndex]=A[i]
      oddIndex+=2
    }
  }
return res

}