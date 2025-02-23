
function nbYear(p0, percent, aug, p) {
    //how much time it will take to grow from the initial population to the target population
    // p0+ (0.02*p0) +50;
    let years=0;
    while (p0<p){
      p0= Math.floor(p0+ ((percent/100)*p0) +aug);
      years++;
    
    }
       return years;
    }
    
    console.log(nbYear(1500, 5, 100, 5000));