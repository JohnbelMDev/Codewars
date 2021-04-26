// If a number is divisible by 3, return Fizz
// If it is divisible by 5, return Buzz
// If it is divisible by both 3 and 5, return FizzBuzz
// If it is not divisible by 3 or 5, return the number itself


const fizzBuzz = n => {
  var fizz = (n % 3 === 0 && n % 5 === 0) ? "FizzBuzz"
                 :(n % 3 === 0) ? "Fizz"
                  :(n % 5 === 0) ? "Buzz"
                   :n
return fizz
};

console.log(fizzBuzz(30));
