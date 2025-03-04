// Go ahead and define your class :
class Cube{
    constructor(length){
      this.length=length;
       }
    
    get surfaceArea( ){
      return 6*(this.length*this.length);  
    }
     get volume( ){
      return this.length*this.length*this.length;
    }
     set surfaceArea(area ){
     this.length=Math.sqrt(area/6)
    }
     set volume(volume){
       this.length=Math.cbrt(volume);
       
    }
    
  }