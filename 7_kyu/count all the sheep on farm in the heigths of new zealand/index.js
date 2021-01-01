function lostSheep(friday,saturday,total){
  //your code here
  let fridayresult
  let saturdayresult
  let totalresult = 0
  if (friday.length !== 0 && saturday.length !== 0){
    fridayresult = friday.reduce((a,b) => a + b)
    saturdayresult = saturday.reduce((a,b) => a + b)
    totalresult = fridayresult + saturdayresult
  }
  if (friday.length !== 0 && saturday.length == 0) {
    fridayresult = friday.reduce((a,b) => a + b)
    if(fridayresult !== total){
      total -= fridayresult
      return total
    }
  }
  if (friday.length === 0 && saturday.length !== 0) {
    saturdayresult = saturday.reduce((a,b) => a + b)
    if(saturdayresult !== total){
      total -= saturdayresult
      return total
    }
  }
  if(totalresult !== total){
    total -= totalresult
  }
  return total

}
