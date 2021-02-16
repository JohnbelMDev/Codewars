function gooseFilter (birds) {
  var geese =new Set(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])

  return birds.filter((word) => !geese.has(word))
};
console.log(gooseFilter((["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]));
