// taking two intengers that are negative or positive
// return all of the sum that are in between them
//example
//-1,2  -1 + 0 + 1 + 2 = 2

//start with i set to a
//loop as a i < b
//create a variable call sum
// add i and store it into sum

function getSum(a,b )
{
  let sum = 0;
  if ( a < b){
    for (var i = a; i <= b; i++) {
      sum+=i
    }
    return sum
  }
  else {
    for (var i = b; i <= a; i++) {
      sum+=i
    }
    return sum
  }

}

console.log(getSum(0,-1));
