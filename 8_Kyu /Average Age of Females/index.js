function averageFemale(list){
  //code here
  let total = 0;
  let array = []
  let number;
  let one = []
  for(let i = 0; i < list.length; i++){
    if(list[i].gender == 'female'){
      array.push(list[i].age)
       total += array[i]
    }

  }
  if(array.length == 1 ){
    number = array[0]
    return number
  }
  else if (array.length === 0) {
 return 0
  }
  else {
    return array.reduce((a,b) => a + b) / array.length
  }


}

console.log(averageFemale([{name:'Sarah', gender:'femafle', age:25}, {name:'Tom', gender:'male', age:18}, {name:'Tim', gender:'male', age:65}, {name:'Kim', gender:'femdale', age:58}]));
