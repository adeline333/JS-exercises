function isTriangle(a,b,c){
  
    if((a>0 && b>0 && c>0) && ((a+b)>c) && ((a+c)>b) && ((b+c)>a)){
        
      console.log("It is a triangle");
          
      return true;
    
      }
      
   
    else {
        return false;

    }

    
  }
