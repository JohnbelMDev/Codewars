// params: A string
// return: sum the integers within the string
//example:
     //I3li12ca3t  => 3 + 1 + 2 + 3 = 9

     // loop through the array
     // identify the intenger inside the array
     // push all the interger into an empty array
     // sum the array

     function sumOfIntegersInString(s) {
       let numberToIntenger = []
       var numbersInString = s.match(/\d+/g);
       if (numbersInString != null) {
         for (var i = 0; i < numbersInString.length; i++) {
           if (!isNaN(numbersInString[i])) {
             numberToIntenger.push(parseInt(numbersInString[i]))
           }
         }
         return numberToIntenger.reduce((a, b) => a + b)
       }
       return 0
     }
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));
console.log(sumOfIntegersInString(""));
