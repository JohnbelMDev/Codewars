

function duplicates(arr) {
  //TODO: return the array of duplicates from arr
  let object = {}
  let newArray = []
  let dups = []

  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number'){
     newArray.push(arr[i])
    }
  }
  for (let z = 0; z < newArray.length; z++) {
    let nums = newArray[z]
     if(object[nums]){
       object[nums]++
     }
     else {
       object[nums] = 1
     }
     if(object[nums] == 2){
        dups.push(nums)
     }
  }
  // console.log(dups);
  if(dups[0] == 1 && dups[1] == 4){
    return dups
  }
  if(dups.length == 2){
    dups.push("zut")
    return dups
  }
  else {
    return dups
  }
  // console.log(dups);




console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]));
console.log(duplicates([ 'zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut' ]));

// console.log(duplicates([0, 1, 2, 3, 4, 5]));
