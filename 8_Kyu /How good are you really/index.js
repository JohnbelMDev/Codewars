// calcuate the average and compare my score
// return true if I am better and false if I'm not
// let sum
//use reduce to add the numbers
//divide the average by the total sum

function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((a,b) => a + b)
  let average = sum / classPoints.length
  if(average < yourPoints){
    return true
  }
  return false
}


console.log(betterThanAverage([2, 3],5));
