export function countPositivesSumNegatives(input: number[] | null): number[] {
  
   if ( input===null|| input.length===0){
     return [];
   }
   let positiveCount=0;
   let negativeCount=0;
   for(let i=0;i<input.length;i++){
     if(input[i]>0){
       positiveCount++;
     }
     else if (input[i]<0){
       negativeCount+=input[i];

     }
     }
     
     return[positiveCount, negativeCount]
   
  throw new Error('The method or operation is not implemented.');
}