//pass in a object and an array
// return from object to array, return array to object

// function arrayToObject(arr){
//   let object = {};
//   let count = 0;
//   for (var i = 0; i < arr.length; i++) {
//     let num = arr[i]
//         if(object[num]){
//            object[num]++
//         }
//         else {
//           object[num] = 1
//         }
//   }
//   return object
// }

function objectToArray(obj){
  let propertie = Object.keys(obj)
  let value;
  console.log(propertie);

  let answer = []
  // console.log('propertie',propertie);
  for (let i = 0; i < propertie.length; i++) {
    // console.log(propertie);
    value = obj[propertie[i]]
    // console.log('value',value);
      for (let x = 0; x < value; x++) {
        // console.log(propertie[i]);
                // answer.push(propertie[i])

             if(!isNaN(propertie[i])){ //this means it is a number
               answer.push(parseInt(propertie[i]))
               // console.log(answer);
           }
           else {
             answer.push((propertie[i]))

           }

        }

  }
  return answer
 }

// console.log(arrayToObject([1, 1, 2, 2, 3, 3]));
console.log(objectToArray({4:3, 19:2}));
