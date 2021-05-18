// params: array
// check to see if all values are below or equal the limit if they are return true
// example
    // [1,2,3],3  return true



function smallEnough(a, limit){
  // const isBelowThreshold = (currentValue) => currentValue < limit;
     return a.every(currentValue => currentValue <= limit)

}

console.log(smallEnough([66, 101], 200));
