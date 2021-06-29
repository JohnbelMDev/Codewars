//https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript
function Hero (name) {
  // add default values here
  let object = {
    name: name || 'Hero',
    position: '00',
    health:100,
    damage:5,
    experience:0

  }

  return object;
}
