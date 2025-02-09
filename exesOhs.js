


function XO(str) {
    let xnum=0;
        let onum=0;
    for(let i=0;i<str.length;i++){
      if (str[i].toUpperCase()=='X'){    
        xnum+=1; 
      }
       
      else if(str[i].toUpperCase()=='O'){
        onum+=1;
      }
        
    }

    if(xnum==onum){
 return true
    }
    else if (xnum!==onum){
    return false;
    }
  else{
    return false;
  }

  
}