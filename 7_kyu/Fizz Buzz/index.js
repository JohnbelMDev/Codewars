// Return an array

function fizzbuzz(n)
{
    let fizzBuzz = []
     for (var i = 1; i <= n; i++) {
        if(i % 3 == 0 && i % 5 == 0){
         fizzBuzz.push("FizzBuzz")
       }
        else if( i % 3 == 0){
          fizzBuzz.push("Fizz")
        }else if (i % 5 == 0) {
            fizzBuzz.push("Buzz")
        }
         else {
           fizzBuzz.push(i)
         }
     }
     return fizzBuzz
  //
}


console.log(fizzbuzz(30));
