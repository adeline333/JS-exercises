export const distinct = (a: number[]): number[] => {
  
  let newArray: number[]=[];
 for(let i=0;i<a.length;i++){
   if (!newArray.includes(a[i])){
     newArray.push(a[i])
   }
 }
  
  return newArray;
}