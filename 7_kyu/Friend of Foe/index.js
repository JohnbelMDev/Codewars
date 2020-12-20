function friend(friends){
  //your code here

  const filtered=  friends.filter( function (value){
      return value.length == 4
    })
    return filtered
}


console.log(friend( ["Ryan", "Kieran", "Mark"]));
