
let array = [1, 2, 3];
var sum = array.reduce(function(a, b) { return a + b; });
console.log('sum: ', sum);
var words = ['hello', 'johnbel', 'from', 'mike'];
var concatenated = words.reduce(function(a, b) { return a + ' ' + b; }, '');
console.log('concatenated:', concatenated);
var empty = [];
var sumOfEmpty = empty.reduce(function(a, b) { return a + b; }, 0);
console.log('sumOfEmpty:', sumOfEmpty);
var sumWithLargeInitialValue = array.reduce(function(a, b) { return a + b; }, 1000);
console.log('sumWithLargeInitialValue:', sumWithLargeInitialValue);
var multiplication = array.reduce(function(a, b) { return a * b; });
console.log('multiplication:', multiplication);
var multiplicationWithZeroInitialValue = array.reduce(function(a, b) { return a * b; }, 0);
console.log('multiplicationWithZeroInitialValue:', multiplicationWithZeroInitialValue);
var multiplicationWithOneInitialValue = array.reduce(function(a, b) { return a * b; }, 1);
console.log('multiplicationWithOneInitialValue:', multiplicationWithOneInitialValue);
