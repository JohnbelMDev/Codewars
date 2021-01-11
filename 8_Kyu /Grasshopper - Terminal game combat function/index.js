function combat(health, damage) {
  // Write your code here
  let difference = health - damage
  if (difference < 0 ) return 0
  return difference
}


console.log(combat(100,5));
