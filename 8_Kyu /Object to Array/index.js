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
  let repeateValues = []
  let answer = []
  // console.log('propertie',propertie);
  for (let i = 0; i < propertie.length; i++) {
    value = obj[propertie[i]]
      for (let x = 0; x < value; x++) {
             answer.push(propertie[i])
             console.log(answer);
        }

  }
 }

// console.log(arrayToObject([1, 1, 2, 2, 3, 3]));
console.log(objectToArray({'a':3, '19':2}));
