function vowelIndices(word){
    let newArray=[];
    for (let i=0;i<word.length;i++){
      if (word[i]=="i"|| word[i]=="u"||word[i]=="o"||word[i]=="a"||word[i]=="e"||
         word[i]=="I"|| word[i]=="U"||word[i]=="O"||word[i]=="A"||word[i]=="E"|| word[i]=="y" ||word[i]=="Y"){ 
          newArray.push(i+1);
      }
    }
  return newArray;
  }
  