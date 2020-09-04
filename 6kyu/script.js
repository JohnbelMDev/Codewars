multiplicationTable = function(size) {
  // insert code here
    var table = [];
  for (i = 1; i <= size; i++){
    var row = [];
    for (k = 1; k <= size; k++) row.push(i * k);
      table.push(row);
    }
  return table;
}
