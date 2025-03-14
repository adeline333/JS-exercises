//a
function calculateArea(length,width){
  return width*length;
}
let calculatingArea=calculateArea.bind(null,10);
console.log(calculatingArea(5));


//b
//b.
let arrayNum=[34, 12, 57, 28, 91];
function findingMax(nums){
  let max=nums[0];
  for(let i=0;i<nums.length;i++){
    if (nums[i]>max){
        max=nums[i];
    }
  }
  return max;
}

console.log(findingMax.apply(null,[arrayNum]));