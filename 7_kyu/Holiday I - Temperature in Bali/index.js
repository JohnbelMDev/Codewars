function bareable(heat, humidity) {
  if (heat >= 36 || humidity > 0.5) {
    return false
  } else if (heat > 25 && humidity > 0.4) {
    return false
    console.log("hi")
  } else if (heat <= 25) {
    return false
  } else {
    return true
  }


}


console.log(bareable(32, 0.01));
