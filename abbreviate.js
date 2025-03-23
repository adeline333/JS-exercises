function abbrevName(name){
    let names= name.split(" ");
      let abbName="";
      let name1="";
      let name2="";
      let name11="";
      let name22="";
     let upperName="";
      for(let i=0;i<names.length;i++){
       name1=`${names[i][i]}`;
       name2= `${names[i+1][i]}`;
        name11=name1.toUpperCase();
        name22=name2.toUpperCase();
        abbName=`${name11}.${name22}`;
      //  upperName=abbName.toUpperCase();
        break;
      }
        return abbName;
      
    
    }