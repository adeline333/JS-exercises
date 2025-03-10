
function findUniq(arr) {
   arr.sort(function ar(a,b){
     return a-b;
   })
  
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==arr[i+1]){
      return arr[i];
    }
    else 
      return arr[arr.length-1];
  }

}

// function findUniq(arr) {

//   let num=0;
//   let newArr=[];
  
  
//   for(let i=0;i<arr.length;i++){
//     let count=0;
//         num=arr[i];
//       for(let j=0;j<arr.length;j++){
//         if (num==arr[j]){
//           count+=1;
//         } 
        
//     }
  
//     if (count==1){
//      return arr[i];
      
//     }
//     }
 


// }
