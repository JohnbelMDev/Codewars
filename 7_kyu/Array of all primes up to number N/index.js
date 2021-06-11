// prime number
var primeArray = function(n) {
  var primeArray = [], sieve = [], i, j;
  for (i = 2; i <= n; ++i) {
      if (!sieve[i]) {
          primeArray.push(i);
              for (j = i << 1; j <= n; j += i) {
                  sieve[j] = true;
            }
        }
    }

  return primeArray;
}


console.log(primeArray(4));
console.log(primeArray(2));
