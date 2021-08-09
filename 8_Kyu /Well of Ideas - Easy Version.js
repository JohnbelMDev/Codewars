// taken an array as a parameter
// return publish if there are one or two good ideas
// and if there more than two return 'I mell a series'
// if there a no good ideas return 'Fail'
// example
     //['good','bad','bad'] return publish

     // create a goodCounter
     // loop through the array
     // check if how many goods are there

function well(x){
  let count = 0;

   for(let i = 0; i < x.length; i++){
     if(x[i] === 'good'){
       count++
     }
   }
   if(count === 1 || count == 2 ){
     return 'Publish!'
   }
   else if (count > 2) {
     return 'I smell a series!'
   }
   else if (count == 0) {
      return "Fail!"
   }
}

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
