// 23,45
// write a funcion that will take an array of number
// the funcion will return the numbers of times the number of time 23 and 45 appear inside the array
// example [12,21,23,45,23,1,23,45,45] //return  6

// first loop through the array
// declare
// have a condition that will check the wheter or not 23, and 45 is in the array
// increment each time the numbers are shown
function frequency(array){
    let stringArray = array.toString()

    let count = 0;

    for (let i = 0; i < array.length; i++){
      if (array[i] === 23 || array[i] === 45){
        count++
      }
    }
    return count
}

console.log(frequency([12,21,23,45,23,1,23,45,45]));
// confirm with interview to make changes
// sunday 11:00am

// Monday mock with Michael Kazin
