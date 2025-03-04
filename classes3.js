class Cuboid {
    constructor(length, width, height ){
      this.length=length;
        this.width=width;
       this.height=height;
    }
     get surfaceArea ( ){
      return 2*(this.length*this.width + this.width*this.height + this.height* this.length);
    }
    
    get volume(){
      return   this.length*this.width* this.height;
      
    }
    // TODO: Program Me
  }
  class Cube extends Cuboid {
    constructor(length){
      super(length, length, length);
    }
    
   
    
    // Don't forget to make a call to super ;)
  }