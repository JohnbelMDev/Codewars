// “Abode”
//
// We can consider letter a is in position 1 and b is in position 2.  A and B are also in positions 1 an 2.
//
function solve(arr){
//code
let temp =[]
temp = arr.join('').split('')

for (var i = 0; i < arr.length; i++) {
  temp.push(arr[i].toUpperCase().charCodeAt() - 65)
}
return temp
};

console.log(solve(["abode","ABc","xyzD"]));
