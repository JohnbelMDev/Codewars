

// function compare (a,b){
//   if(a>b) return 1;
//   if(a==b)return 0;
//   if (a<b) return -1;
// }

function test(array){
let sum =0
 array.sort((a,b) => a-b);
 array.shift()
 array.pop();
 for (var i = 0; i < array.length; i++) {
   let temp = array[i]
   sum +=temp
 }
 // let result = array.reduce((sum, current) => sum + current)
 return sum;

}
console.log(test([2,1,5,9]));


// let string = "Iwantcake"
// let stringtwo = "with sugar"
//
// console.log(string.replace(/wantcake/," like dominoes"));
