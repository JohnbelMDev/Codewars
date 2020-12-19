//  each day you rent the car it cost $40 for each day
// If you rent the for 7 days or more days you get $50 of

function rentalCarCost(d) {
  let total = 0;
  for (var i = 1; i <= d; i++) {
    total += 40;
    if (d === 1) {
      total = 40;
      return total
    } else if (d === 2) {
      total += 40;
      return total;
    }

  }
  if (d >= 3 && d <= 6) {
    total = total - 20
    return total
  } else if (d >= 7 || d <= 10) {
    total = total - 50
    return total
  }
}



console.log(rentalCarCost(2));
