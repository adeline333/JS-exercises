function openOrSenior(data){
    // ...
    let age=0;
    let handicap=0;
    let newArray=[];
    for(let i=0;i<data.length;i++){
        age= data[i][0];
        handicap=data[i][1];

        if(age>=55 && handicap>7){
                newArray.push("Senior");
        }
        else {
            newArray.push("Open");
        }



  }
  return newArray;
}
  