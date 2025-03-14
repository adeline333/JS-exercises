//a
function calculateArea(length,width){
  return width*length;
}
let calculatingArea=calculateArea.bind(null,10);
console.log(calculatingArea(5));
