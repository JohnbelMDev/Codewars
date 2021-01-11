// Taking a number as my parameter
//returning a lesser value then what I was passed in

function getRealFloor(n) {
 if (n === 0) return n
  if (n < 0) return n
  if (n < 13) return n - 1
  if (n >= 13) return n - 2

}

console.log(getRealFloor(-151));
