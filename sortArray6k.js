function sortArray(array) { 

    let odds=[];
    for (let i=0;i<array.length;i++){
        if (array[i]%2!==0){
            odds.push(array[i]);
        }
    }

    odds.sort(function sorting(a,b){
        return a-b;
    });
  
    let indexes=0;
    let result=[];
  
    for (let i=0;i<array.length;i++){
    if(array[i]%2==0){
        result.push(array[i]);
    }
    else {
        result.push(odds[indexes]);
        indexes++;
    }
}
return result;

}
