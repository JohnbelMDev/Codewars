function howManydays(month){

  switch (month){
      case 1:
      month = 31;
      break;
       case 2:
      month = 28;
      break;
       case 3:
      month = 31;
      break;
    case 4:
      month = 30;
      break;
    case 5:
      month = 31;
      break;
    case 6:
      month = 30;
      break;
    case 7:
      month = 31;
      break;
    case 8:
      month = 31;
      break;
    case 9:
      month = 30;
      break;
    case 10:
      month = 31;
      break;
    case 11:
      month = 30;
      break;
    case 12:
      month = 31;
      break;
      default:
      month = 'Wrong input'


  }
  return month;
}
