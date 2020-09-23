// global is inside a variable
for (var name in global) {
//   checking if the type is a number
  if (typeof this[name] === 'number') {
//accesing the bomb object
    Bomb.CutTheWire(this[name]);
  }
}
