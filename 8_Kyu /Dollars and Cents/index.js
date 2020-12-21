function formatMoney(amount){
  // your formatting code here
  let round = '$' +amount.toFixed(2)
  return round
}


console.log(formatMoney(39.99));
console.log(formatMoney(3.1));
