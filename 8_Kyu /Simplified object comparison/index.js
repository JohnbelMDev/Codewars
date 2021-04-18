function compareObjects(objectA, objectB) {
  // console.log('k');
  // console.log(objectA);
  let objectLengthA = Object.keys(objectA).length
  let objectLengthB = Object.keys(objectB).length
 if (objectLengthA !== objectLengthB) {
   return false
 }


  var keyA = Object.keys(objectA);
  if (keyA.every(k => objectA[k] == objectB[k])) {
    return true;
  } else{
    return false;
  }

};

console.log(compareObjects({ a: 2, b: 2 },{ a: 2, b: 2 }));
