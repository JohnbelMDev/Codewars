// https://www.codewars.com/kata/56e56756404bb1c950000992
// Params: Taking in two a 2d array with pairs
// return the result comparared with product and lcm

// [[2,3], [4,3], [5,4]]
// push product of each pairs into a 1d array

//2 => 2, 4, 6
//3=> 3, 6

// 4 => 4,8,12,16,20
// 3 => 3,6,9,12

// 5=>5,10,15,20
// 4=>4,8,12,16,20
// [6,12,20]

// [6,12,20]







        //create a variable call differences with an empty array
        //for each arrays [[2,3],[4,2]] => get each array [2,3]
              // create a variable call product = array[0] * array[1]
              // create a multiplication table [2,3] => example //multiples of 2:2,4,6,8,10,12
                                                                //multiples of 3:3,6,9
              //how do I know if i have enough multiples and how do I know when to stop.
                  //what are the steps that I need to find lcm of two numbers
                    //

              // create a variable call lcm and store the lcm
              // get the difference of the lcm and  the product 6,5,12
              //push the difference into the differences array
        // sum the differences


function sumDifferencesBetweenProductsAndLCMs(pairs){
  //your code here
  let product = []
  // [[],[],[],[]]
  //  [3,4] <== length of pairs[0] is 2
  //  [2,3] <==
   for (var i = 0; i < pairs.length; i++) {
     console.log('pairs',pairs,i);
     product.push((pairs[i].reduce((a,b) => a * b)))

   }
   // console.log();
   // console.log('',product);
   let num,x,y;
   let lc = []
   for (var i = 0; i < pairs.length; i++) {
     num = pairs[i]
     x = num[0]
     y = num[1]
     lc.push(lcm(x,y))


   }
   console.log('test',product,lc);
   let result = [];
     for (var i = 0; i < product.length; i++) {
       result.push((product[i] - lc[i]))
     }
      // let result;
      // result = (product[0] - lc[0]) + (product[1] - lc[1]) + (product[2] - lc[2])
  return result.reduce((a,b) => a + b)
}


const lcm = (a, b) => {
  // console.log(a,b);
   let min = Math.min(a, b);
   // console.log('min',min);
   let answer;
   while(min >= 2){
     // console.log('min while',min);
     // console.log(min);
      if(a % min === 0 && b % min === 0){
        // console.log('a and b',a ,'',b,min);
        answer = (a*b)/min;
        // console.log('min',min);
        // console.log('answer',answer);
         return answer
      };
      min--;
   };
   let final;
      final = (a*b);
      // console.log('final',final);
   return final
};

// console.log(sumDifferencesBetweenProductsAndLCMs([[15,18], [4,5], [12,60]]
// ));
console.log(sumDifferencesBetweenProductsAndLCMs([[135, 9317]]));
