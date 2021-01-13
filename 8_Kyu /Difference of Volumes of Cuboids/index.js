function findDifference(a, b) {
  //loading...
  let multiplya = a.reduce((a, b) => a * b)
  let multiplyb = b.reduce((a, b) => a * b)
  let difference;
  if (multiplyb > multiplya) {
    difference = multiplyb - multiplya

  } else if (multiplya > multiplyb) {
    difference = multiplya - multiplyb
  } else if (multiplya = multiplyb) {
    difference = multiplya - multiplyb
  }
  return difference

}

console.log(findDifference([15, 20, 25], [10, 30, 25]));
