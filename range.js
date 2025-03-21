Array.range = (start, count) => {
    let values=[];
   
for(let i=0;i<count;i++){
   
   
    values.push(start+i);
  }
    return values;
  }


Array.prototype.sum = function() {
  let sum=0;
  
    for(let i=0;i<this.length;i++){
    
        sum+=this[i];
        
    }
    return sum;
}
