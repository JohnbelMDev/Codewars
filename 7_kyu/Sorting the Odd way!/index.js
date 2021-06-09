// params: array of numbers
// return the array of odd numbers in ascending(smallest to largest) numbers and even numbers
// in descending order (largest to smallest)
// https://www.codewars.com/kata/57fb79784e2d0639c9000066/train/javascript





function sortItOut(array){
//Write your own code!
let answer = []
let odd
let even = []
  for (var i = 0; i < array.length; i++) {
 odd = array[i]
    if( array[i] % 2 === 0){
        let even = array[i]
        answer.push(even)
        answer.sort((a,b) => b - a)
        console.log("hello",answer);

    }
    if(array[i] % 2 !== 0){
      even.push(array[i])
      even.sort((a,b) => a - b)

    }

  }
  console.log('heell',even);
  // answer.push(odd)
  return even.concat(answer)
  console.log('tee',even.concat(answer));

}

console.log(sortItOut([1,2,3,4,5,6,7,8,9] ));
