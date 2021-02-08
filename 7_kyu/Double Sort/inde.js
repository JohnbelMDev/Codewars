function dbSort(a){
let numbers = []
let string = [];
for (let i = a.length - 1; i >= 0; i--) {
  if (typeof a[i] === "number") {// modify conditional as needed
    numbers.push(a.splice(i, 1))
  }
  else if (typeof a[i] === 'string') {
      string.push(a.splice(i, 1))
  }
}
let sortNumber = numbers.sort((a,b) => a -b)
let sortString = string.sort()
let flatString = [].concat(...sortString)
let flatNumber = [].concat(...sortNumber)
return [...flatNumber,... flatString]

}

console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));
