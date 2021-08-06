// params: taken in a array
// return: a new array with the even array based on number size

// example
        //[1,2,3,9,8,3,4], 2 => [4,8]

        //create a new newArray
        //loop through the array
        //push to the new array with the size



function evenNumbers(array, number) {
  let newArray = [];
     for(let i = array.length - 1; i >= 0; i--){
           if(array[i] % 2 === 0){
             // check if size is smaller than the number then push as long as it it's smaller
               if(newArray.length < number){
                 newArray.push(array[i])
               }

           }
     }
    let reverse = []
    
    for (let i = newArray.length -1 ; i >=0; i--) {
         reverse.push(newArray[i])
    }
    return reverse
}


console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));//[4, 6, 8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));//[-8, 26]
