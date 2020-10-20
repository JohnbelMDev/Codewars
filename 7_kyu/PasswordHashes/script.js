// requiring the library for crypto
var cryptographic = require('crypto');

function passHash(str) {
//   converting the parameter to be set to a string;
  let letter = str.toString();
//   returning cryptographic of the set file
//   passing the md5 hash
  return cryptographic.createHash('md5').update(letter).digest('hex')
}
