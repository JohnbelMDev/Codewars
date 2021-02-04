function convertToNumber (string){
let splitstring = string.split(',').join('')
// console.log(splitstring);

let number = 1;
let factor = 1;
let newNumber;
// console.log(splitstring.length - 1);

for (let i = splitstring.length - 1 ; i >= 0; i--){
   newNumber = splitstring[i] * factor
  factor = factor * 10
  // console.log(newNumber);
   number+=newNumber;
}
console.dir(number)
return number -1

}


console.log(convertToNumber('1,23420001'));
