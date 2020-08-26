// late.
//
// Our function will take three parameters:
//
// last - The Date object with the date of the last period
//
// today - The Date object with the date of the check
//
// cycleLength - Integer representing the length of the cycle in days
//
// If the today is later from last than the cycleLength, the function should return true. We consider it to be late if the number of passed days is larger than the cycleLength. Otherwise return false.
//
//


function periodIsLate(last, today, cycleLength)
// creating a placeholder for calculation to compare
  let temp;
  temp=  Math.floor(today.getTime() - last.getTime()) / 86400000
  if(temp > cycleLength){
    return true;
  }
  else{
  return false;
  }
}
