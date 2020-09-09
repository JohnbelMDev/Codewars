function weatherInfo (temp) {
  var c = covert(temp);
  if (c <= 0)
    return (c + " is freezing temperature");
  else
    return (c + " is above freezing temperature");
}

function covert (temp) {
  var celsius = (temp - 32) * (5/9);
  return celsius;
}
