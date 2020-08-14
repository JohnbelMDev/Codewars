
function areaOrPerimeter(l , w) {
  // checking if the lenght and width are equal to each sides and if they
  // are return it's area
if (l==w){
  var area= l * w
   return area;
  }

// this is met if the condition for the first is not true
var perimeter= (2*l) + (2*w);
 return perimeter;


}
