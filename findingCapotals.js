var capitals = function (word) {

    let newArray=[];
    for(let i=0;i<word.length;i++){
      if(word[i]==word[i].toUpperCase()){
        newArray.push(i);
      }
    }
    return newArray;
  };