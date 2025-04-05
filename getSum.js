function getSum(a, b)
{
  let arr=[a,b];
  let sorted= arr.sort(function sorting(a,b){ return a-b})
  
  let sum=0;
  for(let i=sorted[0];i<=sorted[1];i++){
    sum+=i;
  }
  
  return sum;
}

console.log(getSum(9,2));