function countBy(x, n) {
  let multiples = []
  let num = 1;
   for (var i = 1; i <= n ; i++) {
     num = x * i
     multiples.push(num)
   }
  return multiples;
}

console.log(countBy(2,5));
