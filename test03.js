

// write a function that takes an positive intengers
// return how many steps that I had to take in order to have 1 as a result
// if numbers is even
      // divide the number by 2
         // increment steps each time we need to apply
 // else
 // multiple by 3 and add 1
     // icrement steps each time we need to apply

 // example
    // 4 / 2 = 2
    // 2 / 2 = 1

// example 3
      // 3 * 3 + 1 = 10;
      // 10 / 2 = 5
      // 5 * 3 + 1 = 16
      // 16 / 2 = 8
      // 8 / 2 = 4
      // 4 / 2 = 2
      // 2 / 2 = 1
// return 7 as steps


function collatzConjecture(n){
  let step = 0
  let even, odd;

  while(n > 1) {
      if(n % 2 === 0){
        n = n / 2
        console.log('even n',n);
        step++
      }
      else {
        n = (n * 3) + 1
        console.log('odd n', n);
        step++
      }
      console.log(n,step);

      if(n == 1){
        return step
      }
    }

// console.log(step);
}

console.log(collatzConjecture(35));
