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
              // create a variable call lcm and store the lcm
              // get the difference of the lcm and  the product 6,5,12
              //push the difference into the differences array
        // sum the differences

// 
function sumDifferencesBetweenProductsAndLCMs(pairs){
  //your code here
  let product = []
   for (var i = 0; i <= pairs[0].length; i++) {
     product.push((pairs[i].reduce((a,b) => a * b)))
     // console.log(pairs[i].reduce((a,b) => a * b));
   }
   console.log(product);
}

console.log(sumDifferencesBetweenProductsAndLCMs([[15,18], [4,5], [12,60]]
));
